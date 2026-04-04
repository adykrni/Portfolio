import { AutoplayVideo } from "@/components/autoplay-video";
import { FocusModeProvider, FocusToggle } from "@/components/focus-mode";
import { IntroSection } from "@/components/intro-section";
import { InfoLinks } from "@/components/info-links";
import { ProjectTimeline } from "@/components/project-timeline";
import { CalloutSection } from "@/components/callout-section";
import { SiteFooter } from "@/components/site-footer";

const VIDEO_SRC = `/video/${encodeURIComponent("introvid-mobile.mp4")}`;

export default function Home() {
  return (
    <FocusModeProvider>
      <div className="relative min-h-dvh w-full max-w-full bg-black px-4 py-5 md:mx-auto md:max-w-[700px] md:rounded-[10px] md:px-[60px] md:py-6">
        <div className="focus-toggle-sticky">
          <FocusToggle />
        </div>
        <AutoplayVideo
          src={VIDEO_SRC}
          className="mb-6 w-full max-h-[40vh] rounded-[10px] object-cover mix-blend-screen saturate-2 md:mb-8 md:max-h-[min(50vh,28rem)]"
        />
        <main>
          <IntroSection />
          <InfoLinks />
          <ProjectTimeline />
          <CalloutSection />
        </main>
        <SiteFooter />
      </div>
    </FocusModeProvider>
  );
}
