type PaletteColor = {
  token: string;
  value: string;
};

type Palette = {
  label: string;
  colors: PaletteColor[];
};

const palettes: Palette[] = [
  {
    label: "Neutral",
    colors: [
      { token: "neutral-50", value: "#FAFAFA" },
      { token: "neutral-100", value: "#F5F5F5" },
      { token: "neutral-200", value: "#E5E5E5" },
      { token: "neutral-300", value: "#D4D4D4" },
      { token: "neutral-400", value: "#A3A3A3" },
      { token: "neutral-500", value: "#737373" },
      { token: "neutral-600", value: "#525252" },
      { token: "neutral-700", value: "#404040" },
      { token: "neutral-800", value: "#262626" },
      { token: "neutral-900", value: "#171717" },
    ],
  },
  {
    label: "Teal-gray",
    colors: [
      { token: "gray-50", value: "#F6FAFA" },
      { token: "gray-100", value: "#EEF5F5" },
      { token: "gray-200", value: "#DCE7E7" },
      { token: "gray-300", value: "#C2D2D2" },
      { token: "gray-400", value: "#9FB4B4" },
      { token: "gray-500", value: "#7C9696" },
      { token: "gray-600", value: "#5F7A7A" },
      { token: "gray-700", value: "#485F5F" },
      { token: "gray-800", value: "#2F4545" },
      { token: "gray-900", value: "#1C2E2E" },
    ],
  },
  {
    label: "Teal",
    colors: [
      { token: "teal-50", value: "#F3FBFA" },
      { token: "teal-100", value: "#E7F5F4" },
      { token: "teal-200", value: "#CFF0EC" },
      { token: "teal-300", value: "#A6E3DC" },
      { token: "teal-400", value: "#6FD1C5" },
      { token: "teal-500", value: "#3DB8AA" },
      { token: "teal-600", value: "#209688" },
      { token: "teal-700", value: "#1B7F72" },
      { token: "teal-800", value: "#16695E" },
      { token: "teal-900", value: "#124F47" },
    ],
  },
];

function PaletteRow({ label, colors }: Palette) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <p className="text-xs font-semibold uppercase leading-[1.4] text-[#9b9c9f]">{label}</p>
      <div className="flex w-full gap-3">
        {colors.map((color) => (
          <div key={color.token} className="flex min-w-0 flex-1 flex-col gap-1">
            <div
              className="h-[65px] w-full rounded-[10px]"
              style={{ backgroundColor: color.value }}
              aria-hidden
            />
            <p className="font-mono text-[10px] leading-[1.4] text-muted">{color.token}</p>
            <p className="font-mono text-[10px] leading-[1.4] text-muted">{color.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ColorPalette() {
  return (
    <div className="flex w-full flex-col gap-10">
      {palettes.map((palette) => (
        <PaletteRow key={palette.label} {...palette} />
      ))}
    </div>
  );
}
