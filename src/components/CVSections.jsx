import { IconExternalLink, IconGithub } from "../icons";
import { BulletList, SectionTitle } from "./ui";

/* ── helpers ── */

function BoldText({ text, boldPhrases }) {
  if (!boldPhrases || boldPhrases.length === 0) return <>{text}</>;

  const escaped = boldPhrases.map((p) =>
    p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        boldPhrases.includes(part) ? (
          <strong key={i} className="font-semibold text-gray-800">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/* ── Summary ── */

const SUMMARY_BOLD = [
  "React, TypeScript, and modern frontend architecture.",
  "component-driven development, state management, and data-heavy UI systems,",
  "clean architecture, performance optimization, and user-centric design.",
  "robust, scalable, and maintainable applications.",
];

export const Summary = ({ items }) => (
  <div className="mb-7">
    <SectionTitle>Professional Summary</SectionTitle>
    <div className="space-y-2">
      {items.map((p, i) => (
        <p key={i} className="text-[12.5px] text-gray-600 leading-relaxed">
          <BoldText text={p} boldPhrases={SUMMARY_BOLD} />
        </p>
      ))}
    </div>
  </div>
);

/* ── Skills — dual-mode ── */
export const Skills = ({ groups, sidebar = false }) => {
  if (sidebar) {
    return (
      <div className="space-y-3.5">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-[9.5px] font-semibold uppercase tracking-wider text-blue-300 mb-1.5">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/85 border border-white/15"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-7">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="space-y-2.5">
        {groups.map((group) => (
          <div key={group.label} className="flex items-start gap-3">
            <span className="text-[12px] font-semibold text-gray-700 w-29.5 shrink-0 pt-0.75">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`text-[11.5px] px-2.5 py-0.75 rounded-full border ${
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
  );
};

/* ── Experience ── */

const EXPERIENCE_BOLD = [
  "scalable frontend modules",
  "interactive geospatial visualizations",
  "REST API data flows",
  "state management solutions (Redux)",
  "component libraries",
  "multi-language (i18n) support",
  "Agile team environment",
];

export const Experience = ({ items }) => (
  <div className="mb-7">
    <SectionTitle>Professional Experience</SectionTitle>
    <div className="space-y-5">
      {items.map((exp, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center pt-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a56a0] shrink-0" />
            <div className="w-[1.5px] bg-gray-200 flex-1 mt-1" />
          </div>
          <div className="flex-1 pb-1">
            <p className="text-[13.5px] font-semibold text-gray-800 mb-0.5">
              {exp.role}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-1 mb-2.5">
              <span className="text-[12px] text-[#1a56a0]">
                {exp.company} — {exp.location}
              </span>
              <span className="text-[11px] text-gray-400 bg-gray-50 border border-gray-200 px-3 py-0.5 rounded-full">
                {exp.date}
              </span>
            </div>
            <BulletList items={exp.bullets} boldPhrases={EXPERIENCE_BOLD} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Projects ── */

const PROJECT_BOLD = [
  "production-grade dashboard",
  "server-state management using TanStack Query (caching, retries, stale data handling)",
  "advanced data pipelines (filter, sort, search, pagination)",
  "interactive charts and dynamic tables",
  "authentication flow with protected routes and JWT handling",
  "accessibility, UX polish, and scalable architecture",
  "full-featured task management system",
  "real-time task filtering, priority management, and search highlighting",
  "global state management using Zustand with persistence",
  "feature-based architecture for maintainability",
  "authentication and protected routing system",
];

export const Projects = ({ items }) => (
  <div className="mb-7">
    <SectionTitle>Projects</SectionTitle>
    <div className="space-y-4">
      {items.map((proj, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl p-4 bg-gray-50/50"
        >
          <div className="flex items-start justify-between gap-3 mb-2.5 flex-wrap">
            <p className="text-[13px] font-semibold text-gray-800">
              {proj.name}
            </p>
            <div className="flex gap-2">
              <ProjectLink
                href={proj.github}
                icon={<IconGithub />}
                label="GitHub"
              />
              <ProjectLink
                href={proj.live}
                icon={<IconExternalLink />}
                label="Live"
              />
            </div>
          </div>
          <BulletList items={proj.bullets} boldPhrases={PROJECT_BOLD} />
        </div>
      ))}
    </div>
  </div>
);

const ProjectLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 text-[11px] text-blue-700 border border-blue-200 bg-blue-50 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors"
  >
    {icon} {label}
  </a>
);

/* ── Education — dual-mode ── */
export const Education = ({ data, sidebar = false }) => {
  if (sidebar) {
    return (
      <div>
        <p className="text-[12px] font-semibold text-white/90 mb-0.5">
          {data.degree}
        </p>
        <p className="text-[11px] text-blue-200">{data.school}</p>
        <p className="text-[10.5px] text-white/50">{data.location}</p>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle>Education</SectionTitle>
      <div className="flex gap-3">
        <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#1a56a0] shrink-0" />
        <div>
          <p className="text-[13.5px] font-semibold text-gray-800 mb-0.5">
            {data.degree}
          </p>
          <p className="text-[12.5px] text-[#1a56a0]">{data.school}</p>
          <p className="text-[12px] text-gray-400">{data.location}</p>
        </div>
      </div>
    </div>
  );
};

/* ── Languages — dual-mode ── */
export const Languages = ({ items, sidebar = false }) => {
  if (sidebar) {
    return (
      <div className="space-y-3">
        {items.map((lang) => (
          <div key={lang.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] font-medium text-white/90">
                {lang.name}
              </span>
              <span className="text-[10px] text-white/50">{lang.level}</span>
            </div>
            <div className="h-1 w-full bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-300 rounded-full"
                style={{ width: `${lang.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <SectionTitle>Languages</SectionTitle>
      <div className="space-y-2.5">
        {items.map((lang) => (
          <div key={lang.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[13px] font-medium text-gray-700">
                {lang.name}
              </span>
              <span className="text-[11.5px] text-gray-400">{lang.level}</span>
            </div>
            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1a56a0] rounded-full"
                style={{ width: `${lang.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
