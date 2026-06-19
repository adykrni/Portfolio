import { LoopingBackgroundVideo } from "@/components/home/looping-background-video";

type HomePageShellProps = {
  children: React.ReactNode;
};

export function HomePageShell({ children }: HomePageShellProps) {
  return (
    <div className="relative h-svh overflow-hidden">
      <LoopingBackgroundVideo
        src="/images/ascii-magic-4.mp4"
        className="pointer-events-none fixed inset-0 h-svh w-full md:absolute md:h-full"
      />
      <div className="relative z-10 box-border h-svh p-[10px] md:p-[8px]">
        <main className="font-radio relative box-border flex h-full min-h-0 w-full flex-col gap-8 overflow-y-auto rounded-[10px] border border-[#383838] bg-[rgba(20,19,19,0.8)] px-5 pb-10 pt-[63px] backdrop-blur-md md:gap-10 md:overflow-hidden md:border-[#3a3a3a] md:bg-black/70 md:px-8 md:py-12 md:pt-12 lg:gap-14 lg:px-[178px] lg:py-16">
          {children}
        </main>
      </div>
    </div>
  );
}
