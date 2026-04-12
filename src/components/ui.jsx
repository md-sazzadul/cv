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
        className="flex gap-2.5 items-start text-[12.5px] text-gray-600 leading-relaxed"
      >
        <span className="mt-1.75 w-1.25 h-1.25 rounded-full bg-[#1a56a0] shrink-0" />
        <BoldText text={item} boldPhrases={boldPhrases} />
      </li>
    ))}
  </ul>
);
