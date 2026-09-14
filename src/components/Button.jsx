const VARIANTS = {
  primary:
    "bg-fuchsia text-cream hover:bg-fuchsia-deep border border-fuchsia hover:border-fuchsia-deep",
  outline:
    "bg-transparent text-ink border border-ink/30 hover:border-fuchsia hover:text-fuchsia",
  outlineLight:
    "bg-transparent text-cream border border-cream/50 hover:border-cream hover:bg-cream/10",
  ghost: "bg-transparent text-fuchsia hover:text-fuchsia-deep underline underline-offset-4",
};

/**
 * Botón de marca. `as="a"` para enlaces (ej. WhatsApp), por defecto <button>.
 */
export default function Button({
  children,
  variant = "primary",
  as = "button",
  className = "",
  ...props
}) {
  const Tag = as;
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] uppercase tracking-[0.14em] font-semibold rounded-full transition-all duration-300 ease-out";

  return (
    <Tag className={`${base} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
