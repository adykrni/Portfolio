import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch — Aditya Kulkarni",
  description:
    "Designing future-proof, scalable design systems for the next era of AI products.",
};

export default function PitchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-dvh w-full max-w-full bg-black px-8 py-10 text-[#e6e6e6] md:mx-auto md:max-w-[min(90rem,calc(100%-2rem))] md:rounded-[10px] md:px-14 md:py-12">
      {children}
    </div>
  );
}
