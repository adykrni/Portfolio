import localFont from "next/font/local";

const ppRadioGrotesk = localFont({
  src: "../../public/fonts/PPRadioGrotesk-Regular.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-pp-radio-grotesk",
});

/**
 * PP Radio Grotesk Regular for body; Geist Mono via `font-mono` on non-paragraph elements (e.g. spans, headings).
 */
export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${ppRadioGrotesk.className} ${ppRadioGrotesk.variable} min-h-dvh bg-black antialiased text-[#757575]`}
    >
      {children}
    </div>
  );
}
