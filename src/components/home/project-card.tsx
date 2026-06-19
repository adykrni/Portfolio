import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/content";
import { site, sortProjectsForMobile } from "@/lib/content";

function CardDescription({
  description,
  mobile = false,
}: {
  description: string | string[];
  mobile?: boolean;
}) {
  const className = mobile
    ? "text-sm font-normal leading-[1.4] tracking-[0.00875rem] text-[#373b42] md:text-base md:tracking-[0.01rem]"
    : "text-base font-normal leading-[1.4] tracking-[0.01rem] text-[#373b42]";

  if (Array.isArray(description)) {
    return (
      <p className={className}>
        {description[0]}
        <br />
        {description[1]}
      </p>
    );
  }

  return <p className={className}>{description}</p>;
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

function ProjectCard({
  project,
  mobile = false,
}: {
  project: Project;
  mobile?: boolean;
}) {
  const isLoryn = project.href === "/loryn";
  const cardBg = mobile ? (project.cardBgMobile ?? project.cardBg) : project.cardBg;

  return (
    <Link
      href={project.href}
      className={`flex h-[400px] shrink-0 flex-col gap-[10px] rounded-[14px] ${
        mobile
          ? isLoryn
            ? "w-full p-[6px]"
            : "w-full p-2"
          : "w-[533px] p-2"
      }`}
      style={{
        backgroundColor: cardBg,
        boxShadow: project.cardShadow,
      }}
    >
      <PreviewArea project={project} />

      <div
        className={
          mobile && isLoryn
            ? "flex flex-col gap-[6px] pb-[6px] pl-2.5 pr-3.5"
            : "flex flex-col gap-[6px] pb-[6px] pl-2 pr-[100px]"
        }
      >
        <p
          className={
            mobile && isLoryn
              ? "text-sm font-bold leading-normal tracking-[0.00875rem] text-[#1a1b1c] md:text-base md:tracking-[0.01rem]"
              : "text-base font-bold leading-normal tracking-[0.01rem] text-[#1a1b1c]"
          }
        >
          {project.cardTitle}
        </p>
        <CardDescription description={project.cardDescription} mobile={mobile && isLoryn} />
      </div>
    </Link>
  );
}

function MobileProjectStack({ projects }: { projects: Project[] }) {
  const orderedProjects = sortProjectsForMobile(projects);

  return (
    <div className="flex flex-col gap-5 md:hidden">
      <h2 className="text-sm font-normal leading-[1.4] tracking-[0.00875rem] text-[#dadada]">
        {site.selectedWorkLabel}
      </h2>
      <div className="flex flex-col gap-5">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.cardTitle} project={project} mobile />
        ))}
      </div>
    </div>
  );
}

function DesktopProjectRow({ projects }: { projects: Project[] }) {
  return (
    <section className="hidden flex-col gap-5 md:flex">
      <h2 className="text-base font-normal leading-[1.4] tracking-[0.01rem] text-[#d5d5d5]">
        {site.selectedWorkLabel}
      </h2>
      <div className="hide-scrollbar -mx-12 overflow-x-auto px-12 py-[6px] lg:-mx-[178px] lg:px-[178px]">
        <div className="flex w-max gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.cardTitle} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCardRow({ projects }: { projects: Project[] }) {
  return (
    <>
      <MobileProjectStack projects={projects} />
      <DesktopProjectRow projects={projects} />
    </>
  );
}
