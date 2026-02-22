import { Code, Database, Globe, Layers, Terminal, Server, FileCode } from 'lucide-react';

// 1. Skill Definitions (Official DevIcons)
export const skillData = [
  { 
    name: "Python", 
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB" 
  },
  { 
    name: "Java", 
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#EA2D2E" 
  },
  { 
    name: "JavaScript", 
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E" 
  },
  { 
    name: "React", 
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB" 
  },
  { 
    name: "HTML", 
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26" 
  },
  { 
    name: "Tailwind", 
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4" 
  },
  { 
    name: "AWS", 
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", 
    color: "#232F3E"
  },
  { 
    name: "Jupyter", 
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    color: "#F37626" 
  }
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
    const skill = skillData.find(s => s.name === techName);
    return skill ? skill.iconUrl : null;
};

export const getSkillIcon = (techName) => {
    return Code;
};