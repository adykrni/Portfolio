import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KLM Holidays — Case Study",
  description:
    "A design system built in the middle of a live product. Migrating a UI library to Figma, then designing a custom component that shipped A/B tests across the BeNeLux market.",
};

export default function KlmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
