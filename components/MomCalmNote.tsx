import type { ReactNode } from "react";

type MomCalmNoteProps = {
  title?: string;
  children?: ReactNode;
};

export function MomCalmNote({
  title = "妈妈别慌",
  children
}: MomCalmNoteProps) {
  return (
    <aside className="rounded-lg border border-[#E3C6A8] bg-[#FFF5E8] p-5 md:p-6">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-apricot/45 text-xl">
          心
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-[0] text-ink">{title}</h2>
          <div className="mt-3 text-sm leading-8 text-ink/74">
            {children ?? (
              <p>
                这个阶段的内容是帮助你理解宝宝可能正在发展什么，不是用来比较孩子。每个宝宝都有自己的节奏，早一点、晚一点并不代表好坏。妈妈能做的，是提供安全、合适、低压力的环境支持。
              </p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
