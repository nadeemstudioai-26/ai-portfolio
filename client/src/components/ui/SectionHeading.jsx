/**
 * Section header styled like a commented section marker in source code,
 * e.g. `// 02 — Skills`. Keeps the "numbering" grounded in something an
 * AI engineer would actually recognize, instead of a decorative 01/02/03.
 */
export default function SectionHeading({
  index,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} gap-3 mb-12`}>
      <span className="font-mono text-sm text-accent">
        {"// "}
        {index} — {title}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-fg text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-fg-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
