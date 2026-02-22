import React, { useState, useEffect } from 'react';
import SpotlightCard from './SpotlightCard';
import { Github, Trophy } from 'lucide-react';

const LiveStats = () => {
  const githubUsername = "LAN-SHLOK";
  
  // NOTE: Make sure "lan-shlok" is your EXACT Leetcode ID (it is case-sensitive sometimes)
  const leetcodeUsername = "lan-shlok";

  const [stats, setStats] = useState({
    github: { repos: 0, followers: 0, loading: true },
    leetcode: { total: 0, easy: 0, medium: 0, hard: 0, loading: true }
  });

  useEffect(() => {
    // 1. Fetch GitHub Stats with Error Handling
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then(res => {
        if (!res.ok) throw new Error("GitHub Rate Limit Hit");
        return res.json();
      })
      .then(data => {
        setStats(prev => ({ 
          ...prev, 
          github: { repos: data.public_repos || 0, followers: data.followers || 0, loading: false } 
        }));
      })
      .catch(err => {
        console.warn(err.message);
        // Fallback to 0 so the UI doesn't break
        setStats(prev => ({ ...prev, github: { repos: 0, followers: 0, loading: false } }));
      });

    // 2. Fetch LeetCode Stats with Error Handling
    fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`)
      .then(res => {
        if (!res.ok) throw new Error("LeetCode API Offline");
        return res.json();
      })
      .then(data => {
        if (data.status === 'success') {
          setStats(prev => ({ 
            ...prev, 
            leetcode: { 
              total: data.totalSolved || 0, 
              easy: data.easySolved || 0, 
              medium: data.mediumSolved || 0, 
              hard: data.hardSolved || 0, 
              loading: false 
            } 
          }));
        } else {
          throw new Error("LeetCode User Not Found");
        }
      })
      .catch(err => {
        console.warn(err.message);
        // Fallback to 0 so the UI doesn't get stuck
        setStats(prev => ({ 
          ...prev, 
          leetcode: { total: 0, easy: 0, medium: 0, hard: 0, loading: false } 
        }));
      });
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest">Live Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LeetCode Card */}
        <SpotlightCard className="p-6 border-l-2 border-orange-500">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Trophy className="text-orange-500" size={20} />
              <h3 className="font-bold text-white">LeetCode</h3>
            </div>
            <span className="text-xs text-green-400">● Live</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-white/5 rounded"><div className="text-xs text-gray-400">Easy</div><div className="text-lg font-mono text-green-400">{stats.leetcode.loading ? "-" : stats.leetcode.easy}</div></div>
            <div className="p-2 bg-white/5 rounded"><div className="text-xs text-gray-400">Med</div><div className="text-lg font-mono text-yellow-400">{stats.leetcode.loading ? "-" : stats.leetcode.medium}</div></div>
            <div className="p-2 bg-white/5 rounded"><div className="text-xs text-gray-400">Hard</div><div className="text-lg font-mono text-red-400">{stats.leetcode.loading ? "-" : stats.leetcode.hard}</div></div>
          </div>
        </SpotlightCard>

        {/* GitHub Card */}
        <SpotlightCard className="p-6 border-l-2 border-purple-500">
           <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Github className="text-purple-500" size={20} />
              <h3 className="font-bold text-white">GitHub</h3>
            </div>
            <span className="text-xs text-green-400">● Live</span>
          </div>
          <div className="flex justify-around text-center">
            <div><div className="text-2xl font-mono text-white">{stats.github.loading ? "-" : stats.github.repos}</div><div className="text-xs text-gray-400">Repos</div></div>
            <div><div className="text-2xl font-mono text-white">{stats.github.loading ? "-" : stats.github.followers}</div><div className="text-xs text-gray-400">Followers</div></div>
          </div>
        </SpotlightCard>

      </div>
    </div>
  );
};

export default LiveStats;
