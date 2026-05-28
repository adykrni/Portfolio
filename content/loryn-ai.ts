export type ImageSection = {
  id: string;
  label: string;
  imageSrc: string;
  width: number;
  height: number;
};

export const lorynAi = {
  title: "Loryn AI",
  subtitle: "A company brain for 20k+ employees.",
  intro: [
    "Loryn is an AI-powered internal assistant built to help employees get instant, accurate answers to everyday workplace queries — without waiting in a helpdesk queue or digging through policy documents.",
    "Loryn understands your company's IT, HR, and Procurement policies and responds in plain English. Whether you need to reset a password, check your leave entitlement, raise a purchase request, or find out who to contact for a policy exception — Loryn knows the answer, cites the source, and tells you what to do next.",
  ],
  galleryHeading: "A sneak peak into Loryn...",
  images: [
    {
      id: "entry",
      label: "Loryn entry screen with greeting and quick actions",
      imageSrc: "/images/loryn-ai/entry-screen.png",
      width: 1024,
      height: 728,
    },
    {
      id: "no-errorcode",
      label: "Troubleshooting flow when no error code is available",
      imageSrc: "/images/loryn-ai/no-errorcode.png",
      width: 1024,
      height: 690,
    },
    {
      id: "live-agent-waiting",
      label: "Live agent handoff with queue status",
      imageSrc: "/images/loryn-ai/live-agent-waiting.png",
      width: 1024,
      height: 696,
    },
    {
      id: "diagnosis",
      label: "Automated diagnosis and remediation flow",
      imageSrc: "/images/loryn-ai/diagnosis.png",
      width: 1024,
      height: 682,
    },
    {
      id: "request-status",
      label: "ServiceNow request status lookup",
      imageSrc: "/images/loryn-ai/request-status.png",
      width: 1024,
      height: 696,
    },
    {
      id: "request-submitted",
      label: "Request submission with contextual side panel",
      imageSrc: "/images/loryn-ai/layout5.png",
      width: 1024,
      height: 728,
    },
    {
      id: "updates",
      label: "Updates and notifications dashboard",
      imageSrc: "/images/loryn-ai/updates.png",
      width: 1024,
      height: 682,
    },
  ] satisfies ImageSection[],
};
