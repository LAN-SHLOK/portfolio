import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import SpotlightCard from '../components/SpotlightCard';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { contactData } from '../data/projectData';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Transmission sent:", formState);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black perspective-[2000px] overflow-x-hidden pt-32 pb-40">
      
      {/* 1. HERO HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6 relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400">Talk</span>
        </h2>
        
        <div className="text-cyan-400/80 text-sm md:text-base font-mono uppercase tracking-[0.2em] h-6">
          <Typewriter
            options={{
              strings: [
                '// Open Communication Channel', 
                '// Waiting for Input...', 
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 20,
            }}
          />
        </div>
      </motion.div>

      {/* 2. MAIN GRID LAYOUT */}
      <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN: CONTACT INFO CARDS */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Email Card */}
          <SpotlightCard className="p-8 bg-zinc-900/40 border border-white/5 hover:border-cyan-400/50 group cursor-pointer transition-all">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email Protocol</h3>
                <p className="text-gray-400 font-mono text-sm tracking-wide group-hover:text-cyan-400 transition-colors">
                  {contactData.email || "shlokpatel699@gmail.com"}
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Phone Card */}
          <SpotlightCard className="p-8 bg-zinc-900/40 border border-white/5 hover:border-blue-500/50 group cursor-pointer transition-all">
            <div className="flex items-center gap-6">
               <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Voice Link</h3>
                <p className="text-gray-400 font-mono text-sm tracking-wide group-hover:text-blue-400 transition-colors">
                  {contactData.phone || "+91 9173903740"}
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Location Card */}
          <SpotlightCard className="p-8 bg-zinc-900/40 border border-white/5 hover:border-teal-500/50 group cursor-pointer transition-all">
             <div className="flex items-center gap-6">
               <div className="p-4 rounded-2xl bg-teal-500/10 text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Base of Operations</h3>
                <p className="text-gray-400 font-mono text-sm tracking-wide group-hover:text-teal-400 transition-colors">
                  {contactData.location || "Ahmedabad, Gujarat"}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* RIGHT COLUMN: THE FORM CONSOLE */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 blur-xl -z-10 rounded-3xl" />
          
          <SpotlightCard className="p-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl h-full">
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
               <MessageSquare className="text-cyan-400" /> 
               Initialize Transmission
             </h3>

             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Identify Yourself</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Return Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Data Packet</label>
                  <textarea 
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
                >
                  Send Transmission <Send size={18} />
                </motion.button>
             </form>
          </SpotlightCard>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;