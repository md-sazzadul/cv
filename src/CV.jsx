import { useRef, useState } from "react";
import CVHeader from "./components/CVHeader";
import {
  Education,
  Experience,
  Languages,
  Projects,
  Skills,
  Summary,
} from "./components/CVSections";
import { cvData } from "./cvData";
import { IconDownload } from "./icons";

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
      <div className="max-w-215 mx-auto mb-4 flex justify-end">
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
        className="max-w-215 mx-auto bg-white shadow-lg"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        <CVHeader
          data={cvData}
          photo={photo}
          onPhotoUpload={handlePhotoUpload}
        />

        <div className="px-10 pb-10">
          <Summary items={cvData.summary} />
          <Skills groups={cvData.skills} />
          <Experience items={cvData.experience} />
          <Projects items={cvData.projects} />

          <div className="mt-7 grid grid-cols-2 gap-8">
            <Education data={cvData.education} />
            <Languages items={cvData.languages} />
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
