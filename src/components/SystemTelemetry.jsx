import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Terminal } from 'lucide-react';

const SystemTelemetry = () => {
  const [metrics, setMetrics] = useState({
    cpu: 12,
    latency: 24,
    uptime: '00:00:00'
  });

  useEffect(() => {
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const diff = Date.now() - startTime;
      const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
      const mins = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
      const secs = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
      
      setMetrics({
        cpu: Math.floor(Math.random() * 5) + 8,
        latency: Math.floor(Math.random() * 10) + 18,
        uptime: `${hours}:${mins}:${secs}`
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1.5 }}
      className="fixed bottom-24 left-6 z-40 hidden 2xl:block pointer-events-none select-none"
    >
      <div className="flex flex-col gap-[6px] font-mono text-[9px] text-white/15 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <Cpu size={10} className="opacity-30" />
          <span>Core: {metrics.cpu}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi size={10} className="opacity-30" />
          <span>Ping: {metrics.latency}ms</span>
        </div>
        <div className="flex items-center gap-2">
          <Terminal size={10} className="opacity-30" />
          <span>Uptime: {metrics.uptime}</span>
        </div>
        <div className="w-16 h-[1px] bg-white/5 my-1" />
        <span className="text-[7px] text-white/10">SYS v9.0.4 • SSL</span>
      </div>
    </motion.div>
  );
};

export default SystemTelemetry;
