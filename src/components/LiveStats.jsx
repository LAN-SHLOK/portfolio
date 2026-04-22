import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { Github, Trophy, Star, GitCommit, Target, Code } from 'lucide-react';

const LiveStats = () => {
  const githubUsername = "LAN-SHLOK";
  const leetcodeUsername = "lan-shlok";

  const [stats, setStats] = useState({
    github: { repos: 0, followers: 0, loading: true },
    leetcode: { total: 0, easy: 0, medium: 0, hard: 0, loading: true }
  });

  useEffect(() => {
    // Fetch GitHub Stats through Backend
    fetch('/api/github')
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          setStats(prev => ({ 
            ...prev, 
            github: { 
              repos: result.data.repos, 
              followers: result.data.followers, 
              loading: false 
            } 
          }));
        }
      })
      .catch(err => console.error('GitHub fetch error:', err));

    // Fetch LeetCode Stats through Backend
    fetch('/api/leetcode')
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const { total, easy, medium, hard } = result.data;
          setStats(prev => ({ 
            ...prev, 
            leetcode: { total, easy, medium, hard, loading: false } 
          }));
        }
      })
      .catch(err => console.error('LeetCode fetch error:', err));
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest">Live Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SpotlightCard className="p-6 border-l-2 border-orange-500">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3"><Trophy className="text-orange-500" size={20} /><h3 className="font-bold">LeetCode</h3></div>
            <span className="text-xs text-green-400">● Live</span>
          </div>
          <div className="mb-4">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total Solved</div>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold font-mono text-white leading-none">
                {stats.leetcode.loading ? "---" : stats.leetcode.total}
              </div>
              <div className="text-xs text-gray-500 mb-1 font-mono">/ 3300+</div>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] uppercase font-bold text-green-400"><span>Easy</span><span>{stats.leetcode.easy}</span></div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: stats.leetcode.loading ? 0 : `${(stats.leetcode.easy / 800) * 100}%` }} className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] uppercase font-bold text-yellow-400"><span>Medium</span><span>{stats.leetcode.medium}</span></div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: stats.leetcode.loading ? 0 : `${(stats.leetcode.medium / 1600) * 100}%` }} className="h-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] uppercase font-bold text-red-400"><span>Hard</span><span>{stats.leetcode.hard}</span></div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: stats.leetcode.loading ? 0 : `${(stats.leetcode.hard / 700) * 100}%` }} className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-6 border-l-2 border-purple-500 flex flex-col justify-between">
           <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3"><Github className="text-purple-500" size={20} /><h3 className="font-bold">GitHub Archive</h3></div>
            <span className="text-xs text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="text-[10px] text-gray-500 uppercase font-bold mb-1 group-hover:text-purple-400 transition-colors">Repositories</div>
              <div className="text-3xl font-bold font-mono text-white group-hover:scale-110 origin-left transition-transform">
                {stats.github.loading ? "---" : stats.github.repos}
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="text-[10px] text-gray-500 uppercase font-bold mb-1 group-hover:text-purple-400 transition-colors">Followers</div>
              <div className="text-3xl font-bold font-mono text-white group-hover:scale-110 origin-left transition-transform">
                {stats.github.loading ? "---" : stats.github.followers}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="text-[10px] text-gray-500 font-mono">Status: Synced</div>
            <div className="flex -space-x-2">
              {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-zinc-800 border border-black" />)}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default LiveStats;