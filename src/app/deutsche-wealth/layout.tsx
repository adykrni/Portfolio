import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deutsche Wealth Online+ — Case Study",
  description:
    "Using progressive disclosure to increase retention 17%, action rates 9%, and reduce support costs ~50% for Deutsche Bank wealth management clients.",
};

export default function DeutscheWealthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
