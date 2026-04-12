export const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-3">
    <h2 className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#1a56a0] whitespace-nowrap">
      {children}
    </h2>
    <div className="h-[1.5px] w-full bg-[#1a56a0]" />
  </div>
);

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

export const BulletList = ({ items, boldPhrases }) => (
  <ul className="space-y-1.5">
    {items.map((item, i) => (
      <li
        key={i}
        style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
      >
        <svg
          viewBox="0 0 6 6"
          style={{ width: 6, height: 6, flexShrink: 0, marginTop: "5px" }}
          fill="#1a56a0"
        >
          <circle cx="3" cy="3" r="3" />
        </svg>
        <span
          style={{ fontSize: "12.5px", color: "#4b5563", lineHeight: "1.625" }}
        >
          <BoldText text={item} boldPhrases={boldPhrases} />
        </span>
      </li>
    ))}
  </ul>
);
