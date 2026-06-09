import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loryn AI — Case Study",
  description:
    "Building a design system for Loryn, an AI assistant for 17k+ employees — from primitives to AI-ready specs.",
};

export default function LorynLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
