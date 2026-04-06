import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & resume — placeholder",
  description: "Resume and work history (placeholder content).",
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-dvh w-full max-w-full bg-black px-8 py-8 text-[var(--text)] md:mx-auto md:max-w-[700px] md:rounded-[10px] md:px-[60px] md:py-6">
      {children}
    </div>
  );
}
