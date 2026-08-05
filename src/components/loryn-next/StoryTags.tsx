export type StoryTab = "agentic" | "design-system";

type StoryTagsProps = {
  active: StoryTab;
  onSelect: (tab: StoryTab) => void;
};

const tabs: { id: StoryTab; label: string }[] = [
  { id: "agentic", label: "Agentic workflows" },
  { id: "design-system", label: "Design system" },
];

export function StoryTags({ active, onSelect }: StoryTagsProps) {
  return (
    <div className="flex items-center gap-2.5">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            aria-pressed={isActive}
            className={`font-radio inline-flex items-center gap-1.5 rounded-full py-1.5 text-sm text-foreground transition-colors ${
              isActive ? "bg-[#f0f0f0] pl-2.5 pr-3" : "bg-white px-2.5 hover:bg-surface-card"
            }`}
          >
            {isActive ? <span className="size-1.5 shrink-0 rounded-full bg-[#e57e2a]" aria-hidden /> : null}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
