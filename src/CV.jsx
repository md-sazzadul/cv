import { useRef, useState } from "react";
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
  const [exporting, setExporting] = useState(false);

  const handleExportPDF = async () => {
    setExporting(true);
    try {
      const html2pdf = (
        await import("https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js")
      ).default;
      await html2pdf()
        .set({
          margin: 0,
          filename: "Md_Sazzadul_Islam_CV.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, letterRendering: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(cvRef.current)
        .save();
    } catch (err) {
      console.error("PDF export failed:", err);
      alert("PDF export failed. Please try again.");
    }
    setExporting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Toolbar */}
      <div className="max-w-225 mx-auto mb-4 flex justify-end">
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
        className="max-w-225 mx-auto bg-white shadow-lg flex"
        style={{ fontFamily: "'Georgia', serif", minHeight: "1122px" }}
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

      <p className="text-center text-xs text-gray-400 mt-4">
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
