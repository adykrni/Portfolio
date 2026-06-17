const buttonTokenExcerpt = `// ─── Component Tokens ──────────────────────────────────────────
// All visual values for Button live here.
// To restyle any variant, change values in this object only.
// All values must come from the primitive palette in globals.css.

const t = {
  // Shared
  focus:    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2",
  disabled: "disabled:pointer-events-none",
  base:     "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 cursor-pointer",

  // Variants
  default: {
    bg:           "bg-teal-600",
    bgHover:      "hover:bg-teal-700",
    bgSelected:   "data-[selected=true]:bg-teal-600",
    bgDisabled:   "disabled:bg-neutral-100",
    text:         "text-gray-50",
    textSelected: "data-[selected=true]:text-white",
    textDisabled: "disabled:text-neutral-400",
  },
  secondary: {
    bg:           "bg-teal-100",
    bgHover:      "hover:bg-gray-100",
    bgSelected:   "data-[selected=true]:bg-teal-600",
    bgDisabled:   "disabled:bg-neutral-100",
    text:         "text-neutral-900",
    textSelected: "data-[selected=true]:text-white",
    textDisabled: "disabled:text-neutral-400",
  },
}

// ─── Variants ──────────────────────────────────────────────────

const buttonVariants = cva(
  [t.base, t.focus, t.disabled].join(" "),
  {
    variants: {
      variant: {
        default: [
          t.default.bg,
          t.default.bgHover,
          t.default.bgSelected,
          t.default.bgDisabled,
          t.default.text,
          t.default.textSelected,
          t.default.textDisabled,
        ].join(" "),

        secondary: [
          t.secondary.bg,
          t.secondary.bgHover,
          t.secondary.bgSelected,
          t.secondary.bgDisabled,
          t.secondary.text,
          t.secondary.textSelected,
          t.secondary.textDisabled,
        ].join(" "),`;

export function ButtonCodeSnippet() {
  return (
    <pre className="h-[380px] overflow-auto rounded-[10px] bg-surface-card p-5 font-mono text-xs leading-[1.6] text-foreground">
      <code>{buttonTokenExcerpt}</code>
    </pre>
  );
}
