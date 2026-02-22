## Shlok Patel | Full Stack Developer & AI Enthusiast

A high-performance, responsive personal portfolio built with React, Tailwind **CSS**, and Framer Motion. This project serves as my digital headquarters, showcasing my work in Web Development and Artificial Intelligence.

🚀 The Mission I am an 18-year-old developer and student at **LJIET**, Ahmedabad. My work focuses on bridging the gap between Conceptual AI and Production Software, specializing in building scalable systems and modern web architectures.

🔭 Current Focus: Enhancing MediBot, a medical AI assistant built with Python and React.

🎓 Education: Pursuing specialized knowledge in Web Development and Data Science (**IIT** Madras BS program).

📍 Location: Ahmedabad, India.

🛠️ Technical Stack Frontend: React.js, Vite, Tailwind **CSS**, Framer Motion

Backend: Python (Flask, FastAPI), Java

AI/ML: MediBot, Vector Databases

Database: **SQL**, Java-based systems (Neon Pulse)

Deployment: **AWS**, Vercel

🧠 Case Study: Solving the *Live Stats* Challenge One of the most technically challenging features of this portfolio is the Live Performance Dashboard, which tracks progress on GitHub and LeetCode. During development, we identified and solved several industry-standard hurdles:


## Challenges Identified

**CORS** & Security: Browser security policies (**CORS**) blocked direct client-side requests to LeetCode's unofficial APIs.

**API** Rate Limiting: High-traffic caused APIs to return **429** Too Many Requests, leading to 0 stats being displayed in the UI.

Server Cold Starts: Free **API** instances on platforms like Render would sleep, causing 30-second delays in data fetching.


## The Engineering Solution

Hardcoded Fallbacks: Implemented a robust state management system. The UI now initializes with confirmed counts (3 Easy Solves, 21 Repos) to ensure an instant, professional load experience.

Clean Console Architecture: Removed failing background fetch logic to eliminate **404**/**429** errors, resulting in a 0-error browser console.

Asset Mapping: Resolved Vercel routing issues to ensure the resume.pdf is served correctly from the absolute root.

📂 Featured Projects MediBot - Medical AI Assistant A health-focused AI assistant designed to provide intuitive medical information through **NLP**.

Tech: Python, Flask, React.js.

## 🔧 Installation & Setup


1. **Clone the Repo:**
   ```bash
   git clone [https://github.com/LAN-SHLOK/portfolio.git](https://github.com/LAN-SHLOK/portfolio.git)
Install Dependencies:
```
Bash
npm install

# Run Development Server:
npm run dev

```
## 🤝 Connect with Me

LinkedIn: https://www.linkedin.com/shlok-patel-dev



Built with React, Tailwind **CSS**, and a focus on clean debugging by Shlok Patel.
