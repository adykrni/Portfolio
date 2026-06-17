import { HomeHeader } from "@/components/home/home-header";
import { HomePageShell } from "@/components/home/home-page-shell";
import { ProjectCardRow } from "@/components/home/project-card";
import { projects, site } from "@/lib/content";

export default function Home() {
  return (
    <HomePageShell>
      <HomeHeader />
      <ProjectCardRow projects={projects} />
      <footer className="mt-auto pt-2 text-center">
        <p className="text-[10px] font-normal leading-[1.4] tracking-[0.00625rem] text-copyright uppercase">
          {site.copyright}
        </p>
      </footer>
    </HomePageShell>
  );
}
