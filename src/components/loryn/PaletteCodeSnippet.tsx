const semanticTokensExcerpt = `# Semantic colour tokens — what components consume

--color-surface-default:    var(--white)
--color-surface-subtle:     var(--neutral-50)
--color-surface-brand:      var(--teal-500)

--color-text-primary:       var(--neutral-900)
--color-text-secondary:     var(--neutral-600)
--color-text-brand:         var(--teal-600)

--color-border-default:     var(--neutral-200)
--color-border-brand-strong: var(--teal-500) /* focus rings */

--color-system-success:     var(--green-600)
--color-system-warning:     var(--orange-500)
--color-system-error:       var(--red-600)
--color-system-info:        var(--teal-500)`;

export function PaletteCodeSnippet() {
  return (
    <pre className="overflow-x-auto rounded-[10px] bg-surface-card p-5 font-mono text-xs leading-[1.6] text-foreground">
      <code>{semanticTokensExcerpt}</code>
    </pre>
  );
}
