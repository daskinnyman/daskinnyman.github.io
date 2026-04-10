import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 mb-3">
      {children}
    </div>
  );
}
