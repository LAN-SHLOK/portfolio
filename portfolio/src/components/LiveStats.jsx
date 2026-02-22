import React, { useState, useEffect } from 'react';
import SpotlightCard from './SpotlightCard';
import { Github, Trophy } from 'lucide-react';

const LiveStats = () => {
  const githubUsername = "LAN-SHLOK";
  const leetcodeUsername = "lan-shlok";

  // Hardcoded your actual stats as the default state
  const [stats, setStats] = useState({
    github: { repos: 21, followers: 3, loading: false },
    leetcode: { total: 3, easy: 3, medium: 0, hard: 0, loading: false }
  });

  useEffect(() => {
    // 1. Fetch GitHub Stats
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({ 
          ...prev, 
          github: { repos: data.public_repos || 21, followers: data.followers || 3, loading: false } 
        }));
      })
      .catch(() => console.warn("Using fallback GitHub data."));

    // 2. Fetch LeetCode Stats
    const fetchLeetCode = async () => {
      try {
        const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${leetcodeUsername}`);
        const data = await res.json();

        if (data && !data.errors) {
          setStats(prev => ({ 
            ...prev, 
            leetcode: { 
              total: data.totalSolved || 3, 
              easy: data.easySolved || 3, 
              medium: data.mediumSolved || 0, 
              hard: data.hardSolved || 0, 
              loading: false 
            } 
          }));
        }
      } catch (err) {
        console.warn("Using fallback LeetCode data.");
      }
    };

    fetchLeetCode();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest">Live Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <SpotlightCard className="p-6 border-l-2 border-orange-500">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Trophy className="text-orange-500" size={20} />
              <h3 className="font-bold text-white">LeetCode</h3>
            </div>
            <span className="text-xs text-green-400">● Live</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-white/5 rounded">
                <div className="text-xs text-gray-400">Easy</div>
                <div className="text-lg font-mono text-green-400">{stats.leetcode.easy}</div>
            </div>
            <div className="p-2 bg-white/5 rounded">
                <div className="text-xs text-gray-400">Med</div>
                <div className="text-lg font-mono text-yellow-400">{stats.leetcode.medium}</div>
            </div>
            <div className="p-2 bg-white/5 rounded">
                <div className="text-xs text-gray-400">Hard</div>
                <div className="text-lg font-mono text-red-400">{stats.leetcode.hard}</div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-6 border-l-2 border-purple-500">
           <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Github className="text-purple-500" size={20} />
              <h3 className="font-bold text-white">GitHub</h3>
            </div>
            <span className="text-xs text-green-400">● Live</span>
          </div>
          <div className="flex justify-around text-center">
            <div><div className="text-2xl font-mono text-white">{stats.github.repos}</div><div className="text-xs text-gray-400">Repos</div></div>
            <div><div className="text-2xl font-mono text-white">{stats.github.followers}</div><div className="text-xs text-gray-400">Followers</div></div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default LiveStats;
