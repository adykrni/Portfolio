import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/content";
import { site } from "@/lib/content";

function CardDescription({ description }: { description: string | string[] }) {
  if (Array.isArray(description)) {
    return (
      <p className="text-base font-normal leading-[1.4] tracking-[0.01rem] text-[#373b42]">
        {description[0]}
        <br />
        {description[1]}
      </p>
    );
  }

  return (
    <p className="text-base font-normal leading-[1.4] tracking-[0.01rem] text-[#373b42]">
      {description}
    </p>
  );
}

function PreviewArea({ project }: { project: Project }) {
  if (project.fullBleedPreview) {
    return (
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[9px]">
        {project.cardImage ? (
          <Image
            src={project.cardImage}
            alt=""
            fill
            className="object-cover object-center"
            unoptimized
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm font-normal tracking-[0.01rem] text-muted">
              Image placeholder
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-[9px] bg-white p-5">
      {project.cardImage ? (
        <Image
          src={project.cardImage}
          alt=""
          width={493}
          height={271}
          className="max-h-full max-w-full object-contain object-center"
          unoptimized
        />
      ) : (
        <span className="text-sm font-normal tracking-[0.01rem] text-muted">
          Image placeholder
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="flex h-[400px] w-[533px] shrink-0 flex-col gap-[10px] rounded-[14px] p-[8px]"
      style={{
        backgroundColor: project.cardBg,
        boxShadow: project.cardShadow,
      }}
    >
      <PreviewArea project={project} />

      <div className="flex flex-col gap-[6px] pb-[6px] pl-2 pr-[100px]">
        <p className="text-base font-bold leading-normal tracking-[0.01rem] text-[#1a1b1c]">
          {project.cardTitle}
        </p>
        <CardDescription description={project.cardDescription} />
      </div>
    </Link>
  );
}

export function ProjectCardRow({ projects }: { projects: Project[] }) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-base font-normal leading-[1.4] tracking-[0.01rem] text-[#d5d5d5]">
        {site.selectedWorkLabel}
      </h2>
      <div className="hide-scrollbar -mx-5 overflow-x-auto px-5 py-[6px] sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:-mx-[178px] lg:px-[178px]">
        <div className="flex w-max gap-[20px]">
          {projects.map((project) => (
            <ProjectCard key={project.cardTitle} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
