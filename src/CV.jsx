import { useRef, useState } from "react";

const cvData = {
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

// ── Icons ────────────────────────────────────────────────────────────────────

const IconLocation = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPhone = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91A16 16 0 0 0 13.09 15.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
);
const IconEmail = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconLinkedIn = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconGithub = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const IconExternalLink = () => (
  <svg
    className="w-3 h-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconDownload = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconUser = () => (
  <svg
    className="w-10 h-10 text-blue-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// ── Section Title ────────────────────────────────────────────────────────────

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-3">
    <h2 className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#1a56a0] whitespace-nowrap">
      {children}
    </h2>
    <div className="h-[1.5px] w-full bg-[#1a56a0]" />
  </div>
);

// ── Bullet List ──────────────────────────────────────────────────────────────

const BulletList = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((item, i) => (
      <li
        key={i}
        className="flex gap-2.5 items-start text-[12.5px] text-gray-600 leading-relaxed"
      >
        <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#1a56a0] flex-shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

// ── Main CV Component ────────────────────────────────────────────────────────

export default function CV() {
  const cvRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [exporting, setExporting] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhoto(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleExportPDF = async () => {
    setExporting(true);
    try {
      const html2pdf = (
        await import("https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js")
      ).default;
      const element = cvRef.current;
      const opt = {
        margin: 0,
        filename: "Md_Sazzadul_Islam_CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error("PDF export failed:", err);
      alert("PDF export failed. Please try again.");
    }
    setExporting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Export Button */}
      <div className="max-w-[860px] mx-auto mb-4 flex justify-end">
        <button
          onClick={handleExportPDF}
          disabled={exporting}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#1a56a0] text-white text-sm font-medium rounded-lg hover:bg-[#154a8a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
        >
          <IconDownload />
          {exporting ? "Generating PDF…" : "Export as PDF"}
        </button>
      </div>

      {/* CV Document */}
      <div
        ref={cvRef}
        className="max-w-[860px] mx-auto bg-white shadow-lg"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-10 py-9 border-b-2 border-[#1a56a0] gap-6">
          <div className="flex-1">
            <h1 className="text-[28px] font-bold text-[#1a56a0] leading-tight mb-1 tracking-tight">
              {cvData.name}
            </h1>
            <p className="text-[13.5px] text-gray-500 font-medium mb-5 tracking-wide">
              {cvData.title}
            </p>
            <div className="flex flex-col gap-[5px]">
              <div className="flex items-center gap-2 text-[12.5px] text-gray-500">
                <span className="text-[#1a56a0]">
                  <IconLocation />
                </span>
                {cvData.location}
              </div>
              <div className="flex items-center gap-2 text-[12.5px] text-gray-500">
                <span className="text-[#1a56a0]">
                  <IconPhone />
                </span>
                {cvData.phone}
              </div>
              <div className="flex items-center gap-2 text-[12.5px] text-gray-500">
                <span className="text-[#1a56a0]">
                  <IconEmail />
                </span>
                {cvData.email}
              </div>
              <div className="flex items-center gap-5 mt-0.5">
                <a
                  href={cvData.linkedin.url}
                  className="flex items-center gap-1.5 text-[12.5px] text-[#1a56a0] hover:underline"
                >
                  <IconLinkedIn />
                  {cvData.linkedin.label}
                </a>
                <a
                  href={cvData.github.url}
                  className="flex items-center gap-1.5 text-[12.5px] text-[#1a56a0] hover:underline"
                >
                  <IconGithub />
                  {cvData.github.label}
                </a>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <label className="cursor-pointer block">
              <div className="w-[108px] h-[108px] rounded-full border-[2.5px] border-[#1a56a0] overflow-hidden bg-blue-50 flex items-center justify-center hover:opacity-90 transition-opacity">
                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-center">
                    <IconUser />
                    <span className="text-[10px] text-blue-400 leading-tight px-2">
                      Click to upload
                    </span>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </label>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="px-10 pb-10">
          {/* Professional Summary */}
          <div className="mt-7">
            <SectionTitle>Professional Summary</SectionTitle>
            <div className="space-y-2">
              {cvData.summary.map((p, i) => (
                <p
                  key={i}
                  className="text-[12.5px] text-gray-600 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-7">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="space-y-2.5">
              {cvData.skills.map((group) => (
                <div key={group.label} className="flex items-start gap-3">
                  <span className="text-[12px] font-semibold text-gray-700 w-[118px] flex-shrink-0 pt-[3px]">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`text-[11.5px] px-2.5 py-[3px] rounded-full border ${
                          group.label === "Concepts"
                            ? "bg-gray-50 border-gray-300 text-gray-600"
                            : "bg-blue-50 border-blue-200 text-blue-800"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mt-7">
            <SectionTitle>Professional Experience</SectionTitle>
            <div className="space-y-5">
              {cvData.experience.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a56a0] flex-shrink-0" />
                    <div className="w-[1.5px] bg-gray-200 flex-1 mt-1" />
                  </div>
                  <div className="flex-1 pb-1">
                    <p className="text-[14px] font-semibold text-gray-800 mb-0.5">
                      {exp.role}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-1 mb-2.5">
                      <span className="text-[12.5px] text-[#1a56a0]">
                        {exp.company} — {exp.location}
                      </span>
                      <span className="text-[11.5px] text-gray-400 bg-gray-50 border border-gray-200 px-3 py-0.5 rounded-full">
                        {exp.date}
                      </span>
                    </div>
                    <BulletList items={exp.bullets} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mt-7">
            <SectionTitle>Projects</SectionTitle>
            <div className="space-y-4">
              {cvData.projects.map((proj, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-4 bg-gray-50/50"
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5 flex-wrap">
                    <p className="text-[13.5px] font-semibold text-gray-800">
                      {proj.name}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href={proj.github}
                        className="flex items-center gap-1.5 text-[11.5px] text-blue-700 border border-blue-200 bg-blue-50 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        <IconGithub /> GitHub
                      </a>
                      <a
                        href={proj.live}
                        className="flex items-center gap-1.5 text-[11.5px] text-blue-700 border border-blue-200 bg-blue-50 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        <IconExternalLink /> Live
                      </a>
                    </div>
                  </div>
                  <BulletList items={proj.bullets} />
                </div>
              ))}
            </div>
          </div>

          {/* Education + Languages */}
          <div className="mt-7 grid grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <SectionTitle>Education</SectionTitle>
              <div className="flex gap-3">
                <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#1a56a0] flex-shrink-0" />
                <div>
                  <p className="text-[13.5px] font-semibold text-gray-800 mb-0.5">
                    {cvData.education.degree}
                  </p>
                  <p className="text-[12.5px] text-[#1a56a0]">
                    {cvData.education.school}
                  </p>
                  <p className="text-[12px] text-gray-400">
                    {cvData.education.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <SectionTitle>Languages</SectionTitle>
              <div className="space-y-2.5">
                {cvData.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[13px] font-medium text-gray-700">
                        {lang.name}
                      </span>
                      <span className="text-[11.5px] text-gray-400">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-[4px] w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1a56a0] rounded-full"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        Click the photo circle to upload your picture · Click "Export as PDF" to
        download
      </p>
    </div>
  );
}
