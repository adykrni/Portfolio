type PaletteColor = {
  step: string;
  value: string;
};

type Palette = {
  label: string;
  colors: PaletteColor[];
};

const palettes: Palette[] = [
  {
    label: "Teal — Primary brand",
    colors: [
      { step: "50", value: "#F3FBFA" },
      { step: "100", value: "#E7F5F4" },
      { step: "200", value: "#CFF0EC" },
      { step: "300", value: "#A6E3DC" },
      { step: "400", value: "#6FD1C5" },
      { step: "500", value: "#3DB8AA" },
      { step: "600", value: "#209688" },
      { step: "700", value: "#1B7F72" },
      { step: "800", value: "#16695E" },
      { step: "900", value: "#124F47" },
    ],
  },
  {
    label: "Neutral — UI greys",
    colors: [
      { step: "50", value: "#FAFAFA" },
      { step: "100", value: "#F5F5F5" },
      { step: "200", value: "#E5E5E5" },
      { step: "300", value: "#D4D4D4" },
      { step: "400", value: "#A3A3A3" },
      { step: "500", value: "#737373" },
      { step: "600", value: "#525252" },
      { step: "700", value: "#404040" },
      { step: "800", value: "#262626" },
      { step: "900", value: "#171717" },
      { step: "950", value: "#0A0A0A" },
    ],
  },
];

function PaletteRow({ label, colors }: Palette) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted">{label}</p>
      <div className="flex gap-2">
        {colors.map((color) => (
          <div key={color.step} className="flex min-w-0 flex-1 flex-col items-center gap-2">
            <div
              className="h-12 w-full rounded-lg"
              style={{ backgroundColor: color.value }}
              aria-hidden
            />
            <span className="text-[11px] font-normal leading-none text-muted">{color.step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ColorPalette() {
  return (
    <div className="flex flex-col gap-10">
      {palettes.map((palette) => (
        <PaletteRow key={palette.label} {...palette} />
      ))}
    </div>
  );
}
