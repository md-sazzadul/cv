import { useEffect, useRef } from "react";
import profilePhoto from "./assets/profile.png";
import {
  Education,
  Experience,
  Languages,
  Projects,
  Skills,
  Summary,
} from "./components/CVSections";
import { cvData } from "./cvData";
import {
  IconDownload,
  IconEmail,
  IconGithub,
  IconLinkedIn,
  IconLocation,
  IconPhone,
} from "./icons";

export default function CV() {
  const cvRef = useRef(null);

  // Inject Inter font + print styles once
  useEffect(() => {
    if (document.getElementById("cv-print-styles")) return;

    const style = document.createElement("style");
    style.id = "cv-print-styles";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

      @media print {
        @page {
          size: A4 portrait;
          margin: 0;
        }

        html, body {
          margin: 0 !important;
          padding: 0 !important;
          background: white !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        .print\\:hidden {
          display: none !important;
        }

        #cv-print-root {
          box-shadow: none !important;
          width: 210mm !important;
          min-height: 297mm !important;
          margin: 0 !important;
          max-width: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 print:bg-white print:p-0 print:m-0">
      {/* Toolbar */}
      <div className="max-w-225 mx-auto mb-4 flex justify-end print:hidden">
        <button
          onClick={handleExportPDF}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#1a56a0] text-white text-sm font-medium rounded-lg hover:bg-[#154a8a] transition-colors shadow-sm"
        >
          <IconDownload />
          Export as PDF
        </button>
      </div>

      {/* CV Document */}
      <div
        ref={cvRef}
        id="cv-print-root"
        className="max-w-225 mx-auto bg-white shadow-lg flex"
        style={{ fontFamily: "'Inter', sans-serif", minHeight: "1122px" }}
      >
        {/* ── LEFT SIDEBAR ── */}
        <div className="w-67 shrink-0 bg-[#1a3a5c] text-white flex flex-col">
          {/* Photo + Name block */}
          <div className="px-7 pt-9 pb-7 border-b border-white/10">
            <div className="mb-5 flex justify-center">
              <div className="w-24 h-24 rounded-full border-[2.5px] border-white/40 overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-[17px] font-bold text-white leading-tight mb-1 text-center">
              {cvData.name}
            </h1>
            <p className="text-[10.5px] text-blue-200 text-center leading-snug">
              {cvData.title}
            </p>
          </div>

          {/* Contact */}
          <div className="px-7 py-6 border-b border-white/10">
            <SidebarSectionTitle>Contact</SidebarSectionTitle>
            <div className="space-y-2.5">
              <SidebarContactRow icon={<IconLocation />}>
                {cvData.location}
              </SidebarContactRow>
              <SidebarContactRow icon={<IconPhone />}>
                {cvData.phone}
              </SidebarContactRow>
              <SidebarContactRow icon={<IconEmail />}>
                <a
                  href={`mailto:${cvData.email}`}
                  className="hover:text-blue-200 transition-colors"
                >
                  {cvData.email}
                </a>
              </SidebarContactRow>
              <SidebarContactRow icon={<IconLinkedIn />}>
                <a
                  href={cvData.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors"
                >
                  {cvData.linkedin.label}
                </a>
              </SidebarContactRow>
              <SidebarContactRow icon={<IconGithub />}>
                <a
                  href={cvData.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors"
                >
                  {cvData.github.label}
                </a>
              </SidebarContactRow>
            </div>
          </div>

          {/* Skills */}
          <div className="px-7 py-6 border-b border-white/10">
            <SidebarSectionTitle>Technical Skills</SidebarSectionTitle>
            <Skills groups={cvData.skills} sidebar />
          </div>

          {/* Education */}
          <div className="px-7 py-6 border-b border-white/10">
            <SidebarSectionTitle>Education</SidebarSectionTitle>
            <Education data={cvData.education} sidebar />
          </div>

          {/* Languages */}
          <div className="px-7 py-6">
            <SidebarSectionTitle>Languages</SidebarSectionTitle>
            <Languages items={cvData.languages} sidebar />
          </div>
        </div>

        {/* ── RIGHT MAIN COLUMN ── */}
        <div className="flex-1 px-9 py-9">
          <Summary items={cvData.summary} />
          <Experience items={cvData.experience} />
          <Projects items={cvData.projects} />
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4 print:hidden">
        Click "Export as PDF" to download
      </p>
    </div>
  );
}

/* ── Sidebar primitives ── */

const SidebarSectionTitle = ({ children }) => (
  <div className="mb-3">
    <h2 className="text-[9.5px] font-bold tracking-[2px] uppercase text-blue-200 mb-1.5">
      {children}
    </h2>
    <div className="h-px bg-white/20" />
  </div>
);

const SidebarContactRow = ({ icon, children }) => (
  <div className="flex items-start gap-2.5 text-[11px] text-white/80">
    <span className="text-blue-300 mt-0.5 shrink-0">{icon}</span>
    <span className="leading-snug break-all">{children}</span>
  </div>
);
