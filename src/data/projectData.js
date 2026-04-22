import { Code, Database, Globe, Layers, Terminal, Server, FileCode } from 'lucide-react';

// 1. Skill Definitions (Official DevIcons)
export const skillData = [
  { name: 'React', aliases: ['reactjs', 'react.js'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', aliases: ['nextjs', 'next'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', aliases: ['ts'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', aliases: ['tailwindcss', 'tailwind-css'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', aliases: ['nodejs', 'node'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'JavaScript', aliases: ['js', 'ecmascript'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', aliases: ['py'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', aliases: [], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', aliases: ['cpp', 'cplusplus'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'MongoDB', aliases: ['mongo'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', aliases: [], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', aliases: ['amazon', 'cloud'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Git', aliases: ['github'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Firebase', aliases: ['google-cloud'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'HTML5', aliases: ['html'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', aliases: ['css'], iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: "Jupyter", aliases: ['notebook', 'ipynb'], iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" }
];

// 2. Real GitHub Projects
export const projectData = [
  {
    id: 1,
    title: "rock-paper-scissors",
    category: "Game",
    description: "Interactive browser-based game with score tracking.",
    tech: ["JavaScript", "HTML"],
    icon: Terminal,
    link: "https://github.com/LAN-SHLOK/rock-paper-scissors"
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    category: "Game",
    description: "Classic strategy game implemented with clean DOM manipulation.",
    tech: ["JavaScript", "HTML"],
    icon: Terminal,
    link: "https://github.com/LAN-SHLOK/Tic-Tac-Toe-"
  },
  {
    id: 3,
    title: "Wagons Motion Deblur",
    category: "Data Science",
    description: "Hackathon project: Advanced algorithm to deblur moving railway wagon images.",
    tech: ["Python", "Jupyter"],
    icon: Database,
    link: "https://github.com/LAN-SHLOK/wagons-motion-deblur-hackathon"
  },
  {
    id: 4,
    title: "Multi-Agent Medibot",
    category: "AI & Healthcare",
    description: "RAG-based medical chatbot using Multi-Agent orchestration.",
    tech: ["Python", "AI/ML"],
    icon: Server,
    link: "https://github.com/LAN-SHLOK/Multi-Agent-RAG-Medibot"
  },
  {
    id: 5,
    title: "Employee Mgmt System",
    category: "Enterprise Software",
    description: "Robust Java application for handling government worker salaries.",
    tech: ["Java"],
    icon: Code,
    link: "https://github.com/LAN-SHLOK/employee-Management-System-JAVA"
  },
  {
    id: 6,
    title: "Document Converter",
    category: "Utility Tool",
    description: "Full-stack tool for converting various document formats.",
    tech: ["Python"],
    icon: Layers,
    link: "https://github.com/LAN-SHLOK/document_converter_full"
  },
  {
    id: 7,
    title: "Doc to Text",
    category: "OCR Utility",
    description: "Efficient extraction of text from document images.",
    tech: ["Python"],
    icon: Layers,
    link: "https://github.com/LAN-SHLOK/doc_to_text"
  },
  {
    id: 8,
    title: "Chatbot App",
    category: "AI Assistant",
    description: "Interactive chatbot application powered by NLP.",
    tech: ["Python"],
    icon: Globe,
    link: "https://github.com/LAN-SHLOK/Chatbot_app"
  },
  {
    id: 9,
    title: "Portfolio V3",
    category: "Web Development",
    description: "This website: React, Tailwind, and 3D Animations.",
    tech: ["React", "Tailwind", "JavaScript"],
    icon: Globe,
    link: "https://github.com/LAN-SHLOK/portfolio"
  }
];

// 3. Contact Info
export const contactData = {
  email: "shlokpatel699@gmail.com",
  phone: "+91 9173903740",
  location: "Ahmedabad, Gujarat"
};

// --- FIX: EXPORT BOTH HELPERS ---
export const getSkillIconUrl = (techName) => {
    if (!techName) return null;
    const skill = skillData.find(s => 
      s.name.toLowerCase() === techName.toLowerCase() || 
      (s.aliases && s.aliases.some(a => a.toLowerCase() === techName.toLowerCase()))
    );
    if (skill) return skill.iconUrl;
    
    // Translation map for GitHub names to DevIcon slugs
    const iconMap = {
      'jupyter notebook': 'jupyter',
      'html': 'html5',
      'css': 'css3',
      'javascript': 'javascript',
      'typescript': 'typescript',
      'shell': 'bash',
      'c++': 'cplusplus',
      'c#': 'csharp'
    };

    const slug = iconMap[techName.toLowerCase()] || techName.toLowerCase().replace(' ', '');
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;
};

export const getSkillIcon = (techName) => {
    return Code;
};