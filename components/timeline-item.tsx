import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function TimelineItem({ children }: Props) {
  return <li className="timeline__item">{children}</li>;
}
