import { IconExternalLink, IconGithub } from "../icons";

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
          <strong key={i} style={{ fontWeight: 600, color: "#1f2937" }}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

const SectionTitle = ({ children }) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}
  >
    <h2
      style={{
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "#1a56a0",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </h2>
    <div style={{ height: 1.5, flex: 1, background: "#1a56a0" }} />
  </div>
);

const BulletList = ({ items, boldPhrases }) => (
  <ul style={{ display: "flex", flexDirection: "column", gap: 3 }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
        <svg
          viewBox="0 0 6 6"
          style={{ width: 5, height: 5, flexShrink: 0, marginTop: 4 }}
          fill="#1a56a0"
        >
          <circle cx="3" cy="3" r="3" />
        </svg>
        <span style={{ fontSize: 10.5, color: "#4b5563", lineHeight: 1.5 }}>
          <BoldText text={item} boldPhrases={boldPhrases} />
        </span>
      </li>
    ))}
  </ul>
);

/* ── Summary ── */
const SUMMARY_BOLD = [
  "React, TypeScript, and modern frontend architecture.",
  "component-driven development, state management, and data-heavy UI systems,",
  "clean architecture, performance optimization, and user-centric design.",
  "robust, scalable, and maintainable applications.",
];

export const Summary = ({ items }) => (
  <div style={{ marginBottom: 14 }}>
    <SectionTitle>Professional Summary</SectionTitle>
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {items.map((p, i) => (
        <p
          key={i}
          style={{ fontSize: 10.5, color: "#4b5563", lineHeight: 1.55 }}
        >
          <BoldText text={p} boldPhrases={SUMMARY_BOLD} />
        </p>
      ))}
    </div>
  </div>
);

/* ── Skills ── */
export const Skills = ({ groups, sidebar = false }) => {
  if (sidebar) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {groups.map((group) => (
          <div key={group.label}>
            <p
              style={{
                fontSize: 8,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                color: "#93c5fd",
                marginBottom: 4,
              }}
            >
              {group.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 8.5,
                    padding: "1px 6px",
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
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
  return null;
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
  <div style={{ marginBottom: 14 }}>
    <SectionTitle>Professional Experience</SectionTitle>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((exp, i) => (
        <div key={i} style={{ display: "flex", gap: 10 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 4,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1a56a0",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                width: 1.5,
                background: "#e5e7eb",
                flex: 1,
                marginTop: 3,
              }}
            />
          </div>
          <div style={{ flex: 1, paddingBottom: 4 }}>
            <p
              style={{
                fontSize: 11.5,
                fontWeight: 600,
                color: "#1f2937",
                marginBottom: 2,
              }}
            >
              {exp.role}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 4,
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 10, color: "#1a56a0" }}>
                {exp.company} — {exp.location}
              </span>
              <span
                style={{
                  fontSize: 9.5,
                  color: "#9ca3af",
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  padding: "1px 8px",
                  borderRadius: 999,
                }}
              >
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
  <div style={{ marginBottom: 14 }}>
    <SectionTitle>Projects</SectionTitle>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((proj, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            padding: "10px 12px",
            background: "rgba(249,250,251,0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 8,
              marginBottom: 6,
              flexWrap: "wrap",
            }}
          >
            <p style={{ fontSize: 11, fontWeight: 600, color: "#1f2937" }}>
              {proj.name}
            </p>
            <div style={{ display: "flex", gap: 6 }}>
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
    style={{
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontSize: 9.5,
      color: "#1d4ed8",
      border: "1px solid #bfdbfe",
      background: "#eff6ff",
      padding: "2px 8px",
      borderRadius: 999,
      textDecoration: "none",
    }}
  >
    {icon} {label}
  </a>
);

/* ── Education ── */
export const Education = ({ data, sidebar = false }) => {
  if (sidebar) {
    return (
      <div>
        <p
          style={{
            fontSize: 10.5,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            marginBottom: 2,
          }}
        >
          {data.degree}
        </p>
        <p style={{ fontSize: 9.5, color: "#93c5fd" }}>{data.school}</p>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.5)" }}>
          {data.location}
        </p>
      </div>
    );
  }
  return null;
};

/* ── Languages ── */
export const Languages = ({ items, sidebar = false }) => {
  if (sidebar) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((lang) => (
          <div key={lang.name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 3,
              }}
            >
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {lang.name}
              </span>
              <span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.5)" }}>
                {lang.level}
              </span>
            </div>
            <div
              style={{
                height: 4,
                width: "100%",
                background: "rgba(255,255,255,0.15)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${lang.pct}%`,
                  background: "#93c5fd",
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
