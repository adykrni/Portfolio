import { LoopingBackgroundVideo } from "@/components/home/looping-background-video";

type HomePageShellProps = {
  children: React.ReactNode;
};

export function HomePageShell({ children }: HomePageShellProps) {
  return (
    <div className="relative box-border h-svh overflow-hidden p-[8px]">
      <LoopingBackgroundVideo
        src="/images/ascii-magic-4.mp4"
        className="pointer-events-none absolute inset-0"
      />
      <main className="font-radio relative box-border flex h-full min-h-0 w-full flex-col gap-10 overflow-hidden rounded-[10px] border border-[#3a3a3a] bg-black/70 backdrop-blur-md px-5 py-10 sm:gap-12 sm:px-8 sm:py-12 md:gap-14 md:px-12 md:py-14 lg:px-[178px] lg:py-16">
        {children}
      </main>
    </div>
  );
}
