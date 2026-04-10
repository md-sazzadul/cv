import { IconExternalLink, IconGithub } from "../icons";
import { BulletList, SectionTitle } from "./ui";

export const Summary = ({ items }) => (
  <div className="mt-7">
    <SectionTitle>Professional Summary</SectionTitle>
    <div className="space-y-2">
      {items.map((p, i) => (
        <p key={i} className="text-[12.5px] text-gray-600 leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  </div>
);

export const Skills = ({ groups }) => (
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

export const Experience = ({ items }) => (
  <div className="mt-7">
    <SectionTitle>Professional Experience</SectionTitle>
    <div className="space-y-5">
      {items.map((exp, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center pt-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a56a0] shrink-0" />
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
);

export const Projects = ({ items }) => (
  <div className="mt-7">
    <SectionTitle>Projects</SectionTitle>
    <div className="space-y-4">
      {items.map((proj, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl p-4 bg-gray-50/50"
        >
          <div className="flex items-start justify-between gap-3 mb-2.5 flex-wrap">
            <p className="text-[13.5px] font-semibold text-gray-800">
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
          <BulletList items={proj.bullets} />
        </div>
      ))}
    </div>
  </div>
);

const ProjectLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="flex items-center gap-1.5 text-[11.5px] text-blue-700 border border-blue-200 bg-blue-50 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors"
  >
    {icon} {label}
  </a>
);

export const Education = ({ data }) => (
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

export const Languages = ({ items }) => (
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
