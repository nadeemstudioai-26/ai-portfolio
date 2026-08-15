const variants = {
  primary:
    "bg-accent text-ink hover:bg-accent-soft border border-accent",
  secondary:
    "bg-transparent text-fg border border-ink-border hover:border-fg-faint hover:bg-ink-surface",
  ghost:
    "bg-transparent text-fg-muted hover:text-fg border border-transparent",
};

/**
 * Renders an <a> when `href` is provided, otherwise a <button>.
 * Keeps one visual language for every call-to-action on the page.
 */
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  icon: Icon,
  className = "",
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-medium text-sm transition-colors duration-150 ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
        {Icon && <Icon size={16} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
}
