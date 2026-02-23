import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import { Github, Trophy } from 'lucide-react';

const LiveStats = () => {
  // Stats updated to reflect your 22 current repositories
  const [stats] = useState({
    github: { repos: 22, followers: 3 },
    leetcode: { total: 3, easy: 3, medium: 0, hard: 0 }
  });

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
            <div>
              <div className="text-2xl font-mono text-white">{stats.github.repos}</div>
              <div className="text-xs text-gray-400">Repos</div>
            </div>
            <div>
              <div className="text-2xl font-mono text-white">{stats.github.followers}</div>
              <div className="text-xs text-gray-400">Followers</div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default LiveStats;
