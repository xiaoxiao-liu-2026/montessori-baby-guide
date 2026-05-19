import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  tone?: "white" | "green" | "apricot";
};

const toneClass = {
  white: "border-oatmeal bg-white",
  green: "border-[#D4E2D5] bg-mist",
  apricot: "border-[#EED1B7] bg-[#FFF4E9]"
};

export function InfoCard({ title, children, tone = "white" }: InfoCardProps) {
  return (
    <article className={`rounded-lg border p-5 shadow-sm ${toneClass[tone]}`}>
      <h3 className="text-lg font-semibold tracking-[0] text-ink">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-ink/72">{children}</div>
    </article>
  );
}
