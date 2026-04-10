export const cvData = {
  name: "Md Sazzadul Islam",
  title: "Frontend Software Engineer (React | TypeScript)",
  location: "Dortmund, Germany",
  phone: "+49 1590 4697130",
  email: "md.sazzadul.islam15@gmail.com",
  linkedin: { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
  github: { label: "GitHub", url: "https://github.com/your-username" },

  summary: [
    "Frontend Engineer with 3+ years of experience building scalable, high-performance web applications using React, TypeScript, and modern frontend architecture.",
    "Specialized in component-driven development, state management, and data-heavy UI systems, with hands-on experience in production environments in Germany.",
    "Strong focus on clean architecture, performance optimization, and user-centric design. Seeking a full-time Frontend Engineer role where I can contribute to building robust, scalable, and maintainable applications.",
  ],

  skills: [
    {
      label: "Frontend",
      items: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    { label: "State & Data", items: ["Redux", "TanStack Query", "REST APIs"] },
    { label: "Tools & Ecosystem", items: ["Git", "Vite", "Figma", "Axios"] },
    {
      label: "Concepts",
      items: [
        "Component Architecture",
        "Performance Optimization",
        "Responsive Design",
        "Clean Code",
        "UI/UX Principles",
      ],
    },
  ],

  experience: [
    {
      role: "Frontend Developer (Student Job)",
      company: "Stein Infrastructure Management GmbH",
      location: "Bochum, Germany",
      date: "Dec 2022 – Present",
      bullets: [
        "Developed and maintained scalable frontend modules using React and TypeScript for infrastructure management systems",
        "Built interactive geospatial visualizations using OpenLayers for real-world data analysis",
        "Integrated and optimized REST API data flows, improving application responsiveness and reliability",
        "Implemented state management solutions (Redux) for complex UI state handling",
        "Designed reusable and maintainable component libraries, reducing development time for new features",
        "Contributed to multi-language (i18n) support, improving accessibility for international users",
        "Collaborated in an Agile team environment with backend engineers and stakeholders",
      ],
    },
  ],

  projects: [
    {
      name: "SaaS Analytics Dashboard",
      github: "#",
      live: "#",
      bullets: [
        "Built a production-grade dashboard with React, TypeScript, and modern architecture",
        "Implemented server-state management using TanStack Query (caching, retries, stale data handling)",
        "Designed advanced data pipelines (filter, sort, search, pagination) using custom hooks",
        "Developed interactive charts and dynamic tables with high-performance rendering",
        "Implemented authentication flow with protected routes and JWT handling",
        "Focused on accessibility, UX polish, and scalable architecture",
      ],
    },
    {
      name: "Kanban Task Management App",
      github: "#",
      live: "#",
      bullets: [
        "Developed a full-featured task management system with drag-and-drop functionality",
        "Built real-time task filtering, priority management, and search highlighting",
        "Implemented global state management using Zustand with persistence",
        "Designed scalable feature-based architecture for maintainability",
        "Integrated authentication and protected routing system",
      ],
    },
  ],

  education: {
    degree: "BSc Computer Science & Engineering",
    school: "BRAC University",
    location: "Bangladesh",
  },

  languages: [
    { name: "English", level: "Professional", pct: 80 },
    { name: "German", level: "Basic (A1, improving)", pct: 15 },
    { name: "Bangla", level: "Native", pct: 100 },
  ],
};
