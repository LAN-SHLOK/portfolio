import { Code, Database, Globe, Layers, Terminal, Server, FileCode } from 'lucide-react';

// 1. Skill Definitions (Official DevIcons)
export const skillData = [
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#EA2D2E" },
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "Tailwind", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
  { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#232F3E" },
  { name: "Jupyter", iconUrl: "https://cdn.jsdelivr.gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg", color: "#F37626" }
];

// 2. Real GitHub Projects (All 22 Repositories)
export const projectData = [
  { id: 1, title: "medibot-backend", category: "AI & Healthcare", description: "RAG-based medical chatbot using Multi-Agent orchestration.", tech: ["Python", "React"], icon: Server, link: "https://github.com/LAN-SHLOK/medibot-backend" },
  { id: 2, title: "medibot-frontend", category: "AI & Healthcare", description: "Modern React interface for the MediBot health assistant.", tech: ["React", "JavaScript"], icon: Globe, link: "https://github.com/LAN-SHLOK/medibot-frontend" },
  { id: 3, title: "medibot-scanner", category: "OCR Utility", description: "OCR and image processing module for medical documents.", tech: ["Python"], icon: Layers, link: "https://github.com/LAN-SHLOK/medibot-scanner" },
  { id: 4, title: "NeonPulse", category: "Software", description: "Robust Java application for handling system monitoring.", tech: ["Java"], icon: Code, link: "https://github.com/LAN-SHLOK/Neonpulse" },
  { id: 5, title: "Neonpulse-Installer", category: "Utility Tool", description: "Custom executable installer for the NeonPulse software suite.", tech: ["Java"], icon: Terminal, link: "https://github.com/LAN-SHLOK/Neonpulse-Installer" },
  { id: 6, title: "Wagons Motion Deblur", category: "Data Science", description: "Hackathon project: Algorithm to deblur moving railway wagons.", tech: ["Python", "Jupyter"], icon: Database, link: "https://github.com/LAN-SHLOK/wagons-motion-deblur-hackathon" },
  { id: 7, title: "T4_FSD", category: "Full Stack", description: "Advanced Full Stack Development modules and projects.", tech: ["HTML", "JavaScript"], icon: FileCode, link: "https://github.com/LAN-SHLOK/T4_FSD" },
  { id: 8, title: "T4 Python", category: "Python Engineering", description: "Advanced Python engineering focusing on algorithmic efficiency.", tech: ["Python"], icon: Terminal, link: "https://github.com/LAN-SHLOK/T4-Python" },
  { id: 9, title: "T3_FSD", category: "Web Development", description: "Mid-level FSD projects covering responsive design and APIs.", tech: ["HTML", "JavaScript"], icon: Globe, link: "https://github.com/LAN-SHLOK/T3_FSD" },
  { id: 10, title: "employee-Mgmt-System", category: "Enterprise Software", description: "Robust Java application for handling government worker salaries.", tech: ["Java"], icon: Code, link: "https://github.com/LAN-SHLOK/employee-Management-System_JAVA" },
  { id: 11, title: "T3_Python", category: "Python Engineering", description: "Data structures and foundational machine learning scripts.", tech: ["Python"], icon: Terminal, link: "https://github.com/LAN-SHLOK/T3_Python" },
  { id: 12, title: "document_converter_full", category: "Utility Tool", description: "Full-stack tool for converting various document formats.", tech: ["Python", "JavaScript"], icon: Layers, link: "https://github.com/LAN-SHLOK/document_converter_full" },
  { id: 13, title: "doc_to_text", category: "OCR Utility", description: "Efficient extraction of text from document images.", tech: ["Python"], icon: Layers, link: "https://github.com/LAN-SHLOK/doc_to_text" },
  { id: 14, title: "Chatbot app", category: "AI Assistant", description: "Interactive chatbot application powered by NLP.", tech: ["Python"], icon: Globe, link: "https://github.com/LAN-SHLOK/Chatbot_app" },
  { id: 15, title: "T2_FSD", category: "Web Development", description: "Foundational web development projects and semantic structures.", tech: ["HTML"], icon: FileCode, link: "https://github.com/LAN-SHLOK/T2_FSD" },
  { id: 16, title: "T2_Python", category: "Python Basics", description: "Core Python logic scripts and basic automation tasks.", tech: ["Python"], icon: Terminal, link: "https://github.com/LAN-SHLOK/T2_Python" },
  { id: 17, title: "HTML_Notes1", category: "Documentation", description: "In-depth documentation of modern HTML5 features and tags.", tech: ["HTML"], icon: FileCode, link: "https://github.com/LAN-SHLOK/HTML_Notes1" },
  { id: 18, title: "HTML_Notes", category: "Documentation", description: "Comprehensive notes focusing on accessibility and SEO.", tech: ["HTML"], icon: FileCode, link: "https://github.com/LAN-SHLOK/HTML_Notes" },
  { id: 19, title: "Python_Notes", category: "Documentation", description: "Full repository of Python syntax and library documentation.", tech: ["Python"], icon: FileCode, link: "https://github.com/LAN-SHLOK/Python_Notes" },
  { id: 20, title: "rock-paper-scissors", category: "Game", description: "Interactive browser-based game with score tracking.", tech: ["JavaScript", "HTML"], icon: Terminal, link: "https://github.com/LAN-SHLOK/rock-paper-scissors" },
  { id: 21, title: "Tic-Tac-Toe-", category: "Game", description: "Classic strategy game with clean DOM manipulation.", tech: ["JavaScript", "HTML"], icon: Terminal, link: "https://github.com/LAN-SHLOK/Tic-Tac-Toe-" },
  { id: 22, title: "portfolio", category: "Web Development", description: "This website: React, Tailwind, and 3D Animations.", tech: ["React", "Tailwind", "JavaScript"], icon: Globe, link: "https://github.com/LAN-SHLOK/portfolio" }
];

// 3. Contact Info
export const contactData = {
  email: "shlokpatel699@gmail.com",
  phone: "+91 9173903740",
  location: "Ahmedabad, Gujarat"
};

// --- HELPERS ---
export const getSkillIconUrl = (techName) => {
    const skill = skillData.find(s => s.name === techName);
    return skill ? skill.iconUrl : null;
};

export const getSkillIcon = (techName) => {
    return Code;
};
