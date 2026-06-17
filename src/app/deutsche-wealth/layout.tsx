import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DWO+ — Case Study",
  description:
    "UI redesign and prototyping for Deutsche Bank's wealth-management dashboard — progressive disclosure validated with 27 users in task-based usability testing.",
};

export default function DeutscheWealthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
