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

        .print-hidden {
          display: none !important;
        }

        #cv-print-root {
          box-shadow: none !important;
          width: 210mm !important;
          height: 297mm !important;
          min-height: 297mm !important;
          margin: 0 !important;
          max-width: none !important;
          display: flex !important;
        }

        #cv-sidebar {
          min-height: 297mm !important;
          height: 297mm !important;
        }

        #cv-main {
          min-height: 297mm !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div
      className="min-h-screen bg-gray-100 py-8 px-4"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Toolbar */}
      <div className="max-w-5xl mx-auto mb-4 flex justify-end print-hidden">
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
        className="mx-auto bg-white shadow-lg flex"
        style={{
          fontFamily: "'Inter', sans-serif",
          width: "210mm",
          minHeight: "297mm",
          alignItems: "stretch",
        }}
      >
        {/* ── LEFT SIDEBAR ── */}
        <div
          id="cv-sidebar"
          style={{ width: "62mm", flexShrink: 0 }}
          className="bg-[#1a3a5c] text-white flex flex-col"
        >
          {/* Photo + Name block */}
          <div
            style={{ padding: "20px 20px 16px" }}
            className="border-b border-white/10"
          >
            <div className="mb-3 flex justify-center">
              <div
                style={{ width: 72, height: 72 }}
                className="rounded-full border-2 border-white/40 overflow-hidden bg-white/10 flex items-center justify-center"
              >
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1
              style={{
                fontSize: 14,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 2,
                lineHeight: 1.3,
              }}
              className="text-white"
            >
              {cvData.name}
            </h1>
            <p
              style={{ fontSize: 9, textAlign: "center", lineHeight: 1.4 }}
              className="text-blue-200"
            >
              {cvData.title}
            </p>
          </div>

          {/* Contact */}
          <div
            style={{ padding: "12px 20px" }}
            className="border-b border-white/10"
          >
            <SidebarSectionTitle>Contact</SidebarSectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <SidebarContactRow icon={<IconLocation />}>
                {cvData.location}
              </SidebarContactRow>
              <SidebarContactRow icon={<IconPhone />}>
                {cvData.phone}
              </SidebarContactRow>
              <SidebarContactRow icon={<IconEmail />}>
                <a
                  href={`mailto:${cvData.email}`}
                  className="hover:text-blue-200"
                >
                  {cvData.email}
                </a>
              </SidebarContactRow>
              <SidebarContactRow icon={<IconLinkedIn />}>
                <a
                  href={cvData.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200"
                >
                  {cvData.linkedin.label}
                </a>
              </SidebarContactRow>
              <SidebarContactRow icon={<IconGithub />}>
                <a
                  href={cvData.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200"
                >
                  {cvData.github.label}
                </a>
              </SidebarContactRow>
            </div>
          </div>

          {/* Skills */}
          <div
            style={{ padding: "12px 20px" }}
            className="border-b border-white/10"
          >
            <SidebarSectionTitle>Technical Skills</SidebarSectionTitle>
            <Skills groups={cvData.skills} sidebar />
          </div>

          {/* Education */}
          <div
            style={{ padding: "12px 20px" }}
            className="border-b border-white/10"
          >
            <SidebarSectionTitle>Education</SidebarSectionTitle>
            <Education data={cvData.education} sidebar />
          </div>

          {/* Languages */}
          <div style={{ padding: "12px 20px" }}>
            <SidebarSectionTitle>Languages</SidebarSectionTitle>
            <Languages items={cvData.languages} sidebar />
          </div>

          {/* Fill remaining sidebar height */}
          <div style={{ flex: 1, minHeight: 0 }} />
        </div>

        {/* ── RIGHT MAIN COLUMN ── */}
        <div
          id="cv-main"
          style={{
            flex: 1,
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Summary items={cvData.summary} />
          <Experience items={cvData.experience} />
          <Projects items={cvData.projects} />
          {/* Spacer to push content to fill full A4 height */}
          <div style={{ flex: 1 }} />
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4 print-hidden">
        Click "Export as PDF" to download
      </p>
    </div>
  );
}

/* ── Sidebar primitives ── */
const SidebarSectionTitle = ({ children }) => (
  <div style={{ marginBottom: 8 }}>
    <h2
      style={{
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "#93c5fd",
        marginBottom: 4,
      }}
    >
      {children}
    </h2>
    <div style={{ height: 1, background: "rgba(255,255,255,0.2)" }} />
  </div>
);

const SidebarContactRow = ({ icon, children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 7,
      fontSize: 9.5,
      color: "rgba(255,255,255,0.8)",
    }}
  >
    <span style={{ color: "#93c5fd", marginTop: 1, flexShrink: 0 }}>
      {icon}
    </span>
    <span style={{ lineHeight: 1.4, wordBreak: "break-all" }}>{children}</span>
  </div>
);
