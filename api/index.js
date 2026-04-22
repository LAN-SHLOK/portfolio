import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import axios from 'axios';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import NodeCache from 'node-cache';

dotenv.config();

const app = express();
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

// Security Headers
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiting
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' }
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 contact form submissions per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many messages sent. Please wait an hour.' }
});

app.use('/api/', generalLimiter);
app.use('/api/contact', contactLimiter);

// GITHUB STATS ENDPOINT
app.get('/api/github', async (req, res) => {
  const cacheKey = 'github_stats';
  const cachedData = cache.get(cacheKey);
  if (cachedData) return res.json({ success: true, data: cachedData });

  try {
    const username = 'LAN-SHLOK';
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const { public_repos, followers, following, public_gists } = response.data;
    
    const stats = {
      repos: public_repos,
      followers,
      following,
      gists: public_gists
    };

    cache.set(cacheKey, stats);
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch GitHub stats' });
  }
});

// LEETCODE STATS ENDPOINT
app.get('/api/leetcode', async (req, res) => {
  const cacheKey = 'leetcode_stats';
  const cachedData = cache.get(cacheKey);
  if (cachedData) return res.json({ success: true, data: cachedData });

  try {
    const username = 'lan-shlok';
    const query = `
      query userProblemsSolved($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const response = await axios.post('https://leetcode.com/graphql', {
      query,
      variables: { username }
    });

    const solvedStats = response.data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
    
    const stats = {
      total: solvedStats.find(s => s.difficulty === 'All').count,
      easy: solvedStats.find(s => s.difficulty === 'Easy').count,
      medium: solvedStats.find(s => s.difficulty === 'Medium').count,
      hard: solvedStats.find(s => s.difficulty === 'Hard').count
    };

    cache.set(cacheKey, stats);
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch LeetCode stats' });
  }
});

// GITHUB REPOS ENDPOINT
app.get('/api/repos', async (req, res) => {
  const cacheKey = 'github_repos';
  const cachedData = cache.get(cacheKey);
  if (cachedData) return res.json({ success: true, data: cachedData });

  try {
    const username = 'LAN-SHLOK';
    const token = process.env.GITHUB_TOKEN;
    const isValidToken = token && !token.includes('optional-github-token');
    const headers = isValidToken ? { 'Authorization': `token ${token}` } : {};

    const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, { headers });

    const repos = await Promise.all(reposResponse.data.map(async (repo) => {
      let readmeSnippet = repo.description || 'No description provided.';
      let languages = [];
      
      try {
        // 1. Fetch README content
        const readmeResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/readme`, { headers });
        const decodedReadme = Buffer.from(readmeResponse.data.content, 'base64').toString('utf8');
        // Clean Markdown: Remove images, links, HTML tags, and special characters
        readmeSnippet = decodedReadme
          .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
          .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove link syntax but keep text
          .replace(/<.*?>/g, '') // Remove HTML tags
          .replace(/[#*`_]/g, '') // Remove formatting chars
          .trim()
          .slice(0, 160) + '...';
      } catch (e) {}

      try {
        // 2. Fetch All Languages
        const langResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/languages`, { headers });
        languages = Object.keys(langResponse.data);
      } catch (e) {}

      return {
        id: repo.id,
        title: repo.name,
        description: readmeSnippet,
        tech: languages,
        topics: repo.topics || [],
        link: repo.html_url,
        stars: repo.stargazers_count,
      };
    }));

    cache.set(cacheKey, repos);
    res.json({ success: true, data: repos });
  } catch (error) {
    console.error('GitHub Repos API Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch repositories' });
  }
});

// CONTACT FORM ENDPOINT
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

export default app;
