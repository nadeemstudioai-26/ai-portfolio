export default function Badge({ children, tone = "default" }) {
  const tones = {
    default:
      "border-ink-border bg-ink-surface text-fg-muted",
    accent: "border-accent/40 bg-accent/10 text-accent-soft",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
