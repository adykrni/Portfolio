import localFont from "next/font/local";

const ppRadioGrotesk = localFont({
  src: "../../public/fonts/PPRadioGrotesk-Regular.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-pp-radio-grotesk",
});

/**
 * Case study: light page (white bg), PP Radio Grotesk body; Geist Mono via `font-mono` where used.
 */
export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${ppRadioGrotesk.className} ${ppRadioGrotesk.variable} min-h-dvh bg-white antialiased text-neutral-600`}
    >
      {children}
    </div>
  );
}
