const designSystemExcerpt = `# Design System — Source of Truth

> This file is the authoritative reference for all design decisions.
> When building components, always reference this file. Use Shadcn UI as the base component library, but override all tokens (colours, spacing, radius, etc.) with the values defined here.

---

## Architecture

- **Base layer**: Shadcn UI components (via \`shadcn-ui\` CLI)
- **Styling engine**: Tailwind CSS v3
- **Token strategy**: CSS custom properties in \`globals.css\`, extended in \`tailwind.config.ts\`
- **Colour mode**: Light mode primary (extend to dark using the same token names)

---

## 1. Colour System

### 1.1 Core Palette

These are the raw colour values. Never use these directly in components — always use Semantic tokens (Section 1.2).

#### Base
\`\`\`
black:       #000000
white:       #FFFFFF
transparent: transparent
\`\`\`

#### Neutral (near-black/white greys)
\`\`\`
neutral-25:  #FBFBFB
neutral-50:  #FAFAFA
neutral-100: #F5F5F5
neutral-200: #E5E5E5
neutral-300: #D4D4D4
neutral-400: #A3A3A3
neutral-500: #737373
neutral-600: #525252
neutral-700: #404040
neutral-800: #262626
neutral-900: #171717
neutral-950: #0A0A0A
\`\`\`

#### Gray (warm blue-grey tones)
\`\`\`
gray-50:  #F6FAFA
gray-100: #EEF5F5
gray-200: #DCE7E7
gray-300: #C2D2D2
gray-400: #9FB4B4
gray-500: #7C9696
gray-600: #5F7A7A
gray-700: #485F5F
gray-800: #2F4545
gray-900: #1C2E2E
\`\`\`

#### Teal (primary brand colour)
\`\`\`
teal-50:  #F3FBFA
teal-100: #E7F5F4
teal-200: #CFF0EC
teal-300: #A6E3DC
teal-400: #6FD1C5
teal-500: #3DB8AA
teal-600: #209688
teal-700: #1B7F72
teal-800: #16695E
teal-900: #124F47
\`\`\`

> **Note**: Green, orange, and red palettes exist in the system (2 values each). Add their hex values here once exported from Figma.

---

### 1.2 Semantic Colour Tokens

Map core palette values to roles. These are what components consume. Override Shadcn's CSS variables with these in \`globals.css\`.

#### Surface colours
\`\`\`
--color-surface-default:    var(--white)          /* Page background */
--color-surface-subtle:     var(--neutral-50)     /* Subtle card/panel backgrounds */
--color-surface-raised:     var(--neutral-100)    /* Raised surfaces, hover states */
--color-surface-overlay:    var(--neutral-200)    /* Modals, popovers */
--color-surface-inverted:   var(--neutral-950)    /* Dark surfaces, tooltips */
--color-surface-brand:      var(--teal-500)       /* Primary brand background */
--color-surface-brand-subtle: var(--teal-50)      /* Light brand tint */
--color-surface-brand-muted:  var(--teal-100)     /* Muted brand tint */
\`\`\`

#### Text colours
\`\`\`
--color-text-primary:       var(--neutral-900)    /* Main body text */
--color-text-secondary:     var(--neutral-600)    /* Secondary/supporting text */
--color-text-tertiary:      var(--neutral-400)    /* Placeholders, disabled */
--color-text-inverted:      var(--white)          /* Text on dark surfaces */
--color-text-brand:         var(--teal-600)       /* Brand-coloured text */
--color-text-brand-strong:  var(--teal-800)       /* Strong brand text, headings */
\`\`\`

#### Border colours
\`\`\`
--color-border-default:     var(--neutral-200)    /* Default borders */
--color-border-strong:      var(--neutral-300)    /* Stronger borders, inputs */
--color-border-subtle:      var(--neutral-100)    /* Subtle dividers */
--color-border-brand:       var(--teal-300)       /* Brand-accented borders */
--color-border-brand-strong: var(--teal-500)      /* Focus rings, active borders */
\`\`\`

#### Icon colours
\`\`\`
--color-icon-default:       var(--neutral-600)
--color-icon-subtle:        var(--neutral-400)
--color-icon-brand:         var(--teal-500)
--color-icon-inverted:      var(--white)
\`\`\`

#### System / Status colours
\`\`\`
--color-system-success:     /* Map to green values once available */
--color-system-warning:     /* Map to orange values once available */
--color-system-error:       /* Map to red values once available */
--color-system-info:        var(--teal-500)
\`\`\`

---`;

export function PaletteCodeSnippet() {
  return (
    <pre className="h-[400px] overflow-auto rounded-[10px] bg-surface-card p-5 font-mono text-xs leading-[1.6] text-foreground">
      <code>{designSystemExcerpt}</code>
    </pre>
  );
}
