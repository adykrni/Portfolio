import Image from "next/image";

import { ContactLinks } from "@/components/contact-links";
import { HomeLayout, SectionDivider } from "@/components/grid-frame";
import { ProjectItem } from "@/components/project-item";
import { projects, site } from "@/lib/content";

export default function Home() {
  return (
    <HomeLayout>
      <section className="flex flex-col gap-[0.6875rem] pt-20 pb-10 md:pt-[10.75rem]">
        <div className="relative h-[35px] w-[50px] shrink-0 overflow-hidden">
          <Image
            src="/images/profilepic.png"
            alt=""
            width={100}
            height={50}
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>
        <h1 className="font-mono text-[1.125rem] leading-normal tracking-[0.01125rem] text-foreground">
          {site.name}
        </h1>
        <p className="font-mono text-[0.9375rem] leading-[1.4] tracking-[0.009375rem] text-muted">
          {site.bio}
        </p>
        <ContactLinks prefix={site.location} />
      </section>

      <SectionDivider />

      <section className="flex flex-col gap-[1.875rem] pt-[3.4375rem]">
        <div className="flex flex-col gap-[1.875rem]">
          <p className="font-mono text-[0.9375rem] leading-[1.4] tracking-[0.009375rem] text-muted">
            {site.projectsIntro}
          </p>
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>

        <hr className="border-0 border-t border-grid-line" />

        <ContactLinks prefix={site.footer} />
      </section>
    </HomeLayout>
  );
}
