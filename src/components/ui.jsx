export const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-3">
    <h2 className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#1a56a0] whitespace-nowrap">
      {children}
    </h2>
    <div className="h-[1.5px] w-full bg-[#1a56a0]" />
  </div>
);

export const BulletList = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((item, i) => (
      <li
        key={i}
        className="flex gap-2.5 items-start text-[12.5px] text-gray-600 leading-relaxed"
      >
        <span className="mt-1.75 w-1.25 h-1.25 rounded-full bg-[#1a56a0] shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);
