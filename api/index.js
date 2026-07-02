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
app.set('trust proxy', 1);
const cache = new NodeCache({ stdTTL: 3600 });

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10kb' }));

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

    const repos = reposResponse.data.map(repo => {
      let description = repo.description || 'No description provided.';
      let languages = repo.language ? [repo.language] : [];

      return {
        id: repo.id,
        title: repo.name,
        description: description,
        tech: languages,
        topics: repo.topics || [],
        link: repo.html_url,
        stars: repo.stargazers_count,
      };
    });

    cache.set(cacheKey, repos);
    res.json({ success: true, data: repos });
  } catch (error) {
    console.error('GitHub Repos API Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch repositories' });
  }
});

app.post('/api/contact', async (req, res) => {
  let { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  const escapeHTML = (str) => {
    return String(str).replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  };

  name = escapeHTML(name.trim());
  email = escapeHTML(email.trim());
  message = escapeHTML(message.trim());

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('EMAIL_USER or EMAIL_PASS environment variables are missing.');
    return res.status(500).json({ success: false, message: 'Server configuration error. Contact form is temporarily disabled.' });
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
    console.error('Nodemailer Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Local API Server running on port ${PORT}`);
  });
}

export default app;
