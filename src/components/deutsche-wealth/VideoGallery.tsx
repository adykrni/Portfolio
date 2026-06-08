"use client";

import { AssetAllocationsEmbed } from "@/components/deutsche-wealth/AssetAllocationsEmbed";
import { GoalMonitoringEmbed } from "@/components/deutsche-wealth/GoalMonitoringEmbed";
import { WealthOverviewEmbed } from "@/components/deutsche-wealth/WealthOverviewEmbed";

export function VideoGallery() {
  return (
    <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#cdd9e3]">
      <div className="flex w-max gap-6">
        <div className="relative h-[435px] w-[675px] shrink-0 overflow-hidden rounded-[10px] border border-[#dee3ec] bg-[#ffffff]">
          <WealthOverviewEmbed />
        </div>

        <div className="relative h-[435px] w-[675px] shrink-0 overflow-hidden rounded-[10px] border border-[#dee3ec] bg-[#ffffff]">
          <AssetAllocationsEmbed />
        </div>

        <div className="relative h-[435px] w-[675px] shrink-0 overflow-hidden rounded-[10px] border border-[#dee3ec] bg-[#ffffff]">
          <GoalMonitoringEmbed />
        </div>
      </div>
    </div>
  );
}
