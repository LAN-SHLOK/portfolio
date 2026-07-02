import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSkillIconUrl } from '../data/projectData';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRepos = () => {
    setLoading(true);
    setError(false);
    fetch('/api/repos')
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          setRepos(result.data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching repos:', err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <header className="mb-20 text-center relative z-10">
          <Reveal width="100%">
            <h2 className="text-sm font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">System Archive</h2>
          </Reveal>
          <div className="mb-8 flex justify-center w-full">
            <TextReveal className="text-3xl sm:text-4xl md:text-8xl font-black tracking-tighter text-white uppercase text-center justify-center break-words">
              Selected Projects
            </TextReveal>
          </div>
          <Reveal delay={0.5} width="100%">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              A curated collection of digital products, AI experiments, and system architectures 
              synchronized live from GitHub.
            </p>
          </Reveal>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card p-8 rounded-3xl h-64 animate-pulse bg-white/5 border border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 mb-8"></div>
                <div className="h-6 bg-white/10 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-500 mb-6">
              <FolderGit2 size={48} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Connection Lost</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Failed to synchronize data from the GitHub API. The servers might be down or rate-limited.
            </p>
            <button 
              onClick={fetchRepos}
              className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors"
            >
              Retry Connection
            </button>
          </div>
        ) : repos.length === 0 ? (
          <div className="text-center py-20 text-gray-500 font-mono">No projects found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <AnimatePresence mode="popLayout">
              {repos.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.1} fullHeight={true} width="100%">
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    transitionSpeed={2000}
                    scale={1.01}
                    className="h-full"
                  >
                    <motion.div 
                      layout
                      className="group glass-card p-8 rounded-3xl h-full flex flex-col hover:border-cyan-500/30 transition-all duration-500 overflow-hidden relative"
                    >
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-8">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                            {project.tech[0] ? (
                              <img 
                                src={getSkillIconUrl(project.tech[0])} 
                                alt="tech" 
                                className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                                onError={(e) => { e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }}
                              />
                            ) : <FolderGit2 className="text-white w-7 h-7" />}
                          </div>
                          <div className="flex gap-3">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all">
                              <Github size={20} />
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white hover:text-black transition-all neu-button">
                              <ArrowUpRight size={20} />
                            </a>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors tracking-tight line-clamp-1 uppercase">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                          {project.description || "No description provided for this repository."}
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-950/30 border border-cyan-500/20 rounded-lg text-cyan-400">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Tilt>
                </Reveal>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
      <div className="h-24 md:hidden" />
    </div>
  );
};

export default Projects;