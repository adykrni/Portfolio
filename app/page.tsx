import { IntroSection } from "@/components/intro-section";
import { InfoLinks } from "@/components/info-links";
import { ProjectTimeline } from "@/components/project-timeline";
import { CalloutSection } from "@/components/callout-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="page-shell">
      <div className="content-panel">
        <main>
          <IntroSection />
          <InfoLinks />
          <ProjectTimeline />
          <CalloutSection />
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
