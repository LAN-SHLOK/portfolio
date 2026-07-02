import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Dock from './components/Dock';
import DigitalPulseLoader from './components/DigitalPulseLoader';
import CursorGlow from './components/CursorGlow';
import SmoothScroll from './components/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';

// Page Transition Wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Slightly longer for premium feel
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#000000] grainy-bg text-white font-inter selection:bg-white/20">
        <CursorGlow />
        <AnimatePresence mode="wait">
          {loading && <DigitalPulseLoader key="loader" />}
        </AnimatePresence>

        {!loading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <main className="container mx-auto px-4 pb-32 overflow-hidden">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                  <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                  <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
                  <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                  <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                  <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
                </Routes>
              </AnimatePresence>
            </main>
            <Dock />
          </motion.div>
        )}
      </div>
    </SmoothScroll>
  );
}

export default App;