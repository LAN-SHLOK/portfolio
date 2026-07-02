import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillData, getSkillIconUrl } from '../data/projectData';
import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';
import Tilt from 'react-parallax-tilt';
import { ArrowUpRight, FilterX } from 'lucide-react';

const SkillsRotator = React.lazy(() => import('../components/SkillsRotator'));

const Skills = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

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
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  // Extract all unique primary languages directly from repos
  const dynamicTech = [...new Set(repos.flatMap(repo => repo.tech))].filter(Boolean);
  
  // Find all skills from our predefined list that match repo languages OR topics
  const matchedSkillData = skillData.filter(skillObj => {
    const searchTerms = [skillObj.name.toLowerCase(), ...(skillObj.aliases || []).map(a => a.toLowerCase())];
    return repos.some(project => 
      [...project.tech, ...project.topics].some(t => {
        const item = t.toLowerCase();
        return searchTerms.some(term => item === term || item.includes(term) || term.includes(item));
      })
    );
  }).map(s => s.name);

  // Combine them and ensure uniqueness
  const allTech = [...new Set([...dynamicTech, ...matchedSkillData])];

  const filteredProjects = selectedSkill 
    ? repos.filter(project => {
        const skillObj = skillData.find(s => s.name === selectedSkill);
        
        // If skill is in skillData, search by aliases
        if (skillObj) {
          const searchTerms = [skillObj.name.toLowerCase(), ...(skillObj.aliases || []).map(a => a.toLowerCase())];
          return [...project.tech, ...project.topics].some(t => {
            const item = t.toLowerCase();
            return searchTerms.some(term => item === term || item.includes(term) || term.includes(item));
          });
        }
        
        // If skill is a dynamic tech (like Rust), exact match against tech/topics
        return [...project.tech, ...project.topics].some(t => t.toLowerCase() === selectedSkill.toLowerCase());
      }) 
    : repos;

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-20 text-center relative z-10">
          <Reveal width="100%">
            <h2 className="text-sm font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Structural Skill Matrix</h2>
          </Reveal>
          <div className="mb-8 flex justify-center w-full">
            <TextReveal className="text-3xl sm:text-4xl md:text-8xl font-black tracking-tighter text-white uppercase justify-center break-words">
              Technical Orbit
            </TextReveal>
          </div>
          <Reveal delay={0.5} width="100%">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Explore my technological stack through the interactive 3D matrix. 
              Select a node to filter related engineering projects.
            </p>
          </Reveal>
        </header>

        {/* Orbit Section */}
        <div className="h-[300px] md:h-[600px] mb-10 md:mb-20 relative flex items-center justify-center">
           <React.Suspense fallback={<div className="text-white/20 animate-pulse">Initializing Orbit...</div>}>
              <SkillsRotator onSkillSelect={setSelectedSkill} selectedSkill={selectedSkill} allTech={allTech} />
           </React.Suspense>
           
           {/* Hint */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/20 text-[10px] font-mono tracking-widest flex items-center gap-4 animate-pulse">
              <span>▼ Initialize Scroll ▼</span>
           </div>
        </div>

        {/* Filtered Grid Section */}
        <div className="relative pt-20 border-t border-white/5">
           <div className="flex items-center justify-between mb-12">
              <Reveal width="100%">
                <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-4">
                  {selectedSkill ? `Projects matching ${selectedSkill}` : 'All Synchronized Repositories'}
                  <span className="text-sm font-mono text-white/30">[{filteredProjects.length}]</span>
                </h3>
              </Reveal>

              {selectedSkill && (
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-gray-400 transition-colors"
                >
                  <FilterX size={14} /> Clear Filter
                </button>
              )}
           </div>

           {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass-card p-8 rounded-3xl h-64 animate-pulse bg-white/5 border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 mb-6"></div>
                    <div className="h-6 bg-white/10 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6"></div>
                  </div>
                ))}
             </div>
           ) : error ? (
             <div className="flex flex-col items-center justify-center py-10 text-center">
                <p className="text-red-400 font-mono mb-4">Error fetching repositories.</p>
                <button 
                  onClick={fetchRepos}
                  className="px-6 py-2 border border-red-500/30 bg-red-500/10 text-red-500 font-bold rounded-xl hover:bg-red-500/20 transition-colors"
                >
                  Retry Connection
                </button>
             </div>
           ) : filteredProjects.length === 0 ? (
             <div className="text-center py-20 text-gray-500 font-mono">No matching projects found.</div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
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
                             className="group glass-card p-8 rounded-3xl h-full flex flex-col hover:border-cyan-500/30 transition-all duration-500"
                          >
                             <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                                  <img src={getSkillIconUrl(project.tech[0])} alt="icon" className="w-6 h-6 object-contain" />
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white hover:text-black transition-all neu-button">
                                  <ArrowUpRight size={18} />
                                </a>
                             </div>

                             <h4 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors line-clamp-1 uppercase">{project.title}</h4>
                             <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-2">{project.description || "No description provided."}</p>
                             
                             <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                {project.tech.slice(0,3).map(t => (
                                  <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-cyan-950/30 border border-cyan-500/20 rounded-lg text-cyan-400">
                                    {t}
                                  </span>
                                ))}
                             </div>
                          </motion.div>
                        </Tilt>
                      </Reveal>
                    ))}
                </AnimatePresence>
             </div>
           )}
        </div>
      </div>
      <div className="h-24 md:hidden" />
    </div>
  );
};

export default Skills;