import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/content";

type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  const isInteractive = !project.disabled && project.href;

  const inner = (
    <>
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[0.9375rem] font-medium leading-normal tracking-[0.009375rem] text-foreground whitespace-nowrap">
          {project.title}
        </p>
        <ArrowRight
          className={`size-3.5 shrink-0 ${project.disabled ? "text-grid-line" : "text-foreground"}`}
          strokeWidth={1.75}
          aria-hidden
        />
      </div>
      <p className="max-w-[375px] font-mono text-[0.9375rem] font-normal leading-[1.4] tracking-[0.009375rem] text-muted">
        {project.description}
      </p>
    </>
  );

  if (!isInteractive) {
    return <div className="flex flex-col gap-1.5">{inner}</div>;
  }

  return (
    <Link
      href={project.href!}
      className="group flex flex-col gap-1.5 transition-opacity hover:opacity-80"
    >
      {inner}
    </Link>
  );
}
