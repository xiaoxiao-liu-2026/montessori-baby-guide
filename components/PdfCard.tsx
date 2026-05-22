"use client";

import { Download, FileText } from "lucide-react";
import type { PdfResource } from "@/lib/resources";

type PdfCardProps = {
  resource: PdfResource;
  compact?: boolean;
};

export function PdfCard({ resource, compact = false }: PdfCardProps) {
  function handleDownload() {
    if (!resource.href) {
      window.alert("资料整理中，即将开放下载。");
      return;
    }

    window.location.href = resource.href;
  }

  return (
    <article className="flex h-full flex-col rounded-lg border border-oatmeal bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-mist text-sageDark">
          <FileText size={22} />
        </div>
        <div>
          <p className="text-xs font-medium text-sageDark">
            {resource.type} · {resource.status}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">
            {resource.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-7 text-ink/74">
        {resource.description}
      </p>
      {!compact ? (
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/56">
          <span className="rounded-full bg-stone px-3 py-1">
            文件大小：{resource.size}
          </span>
          <span className="rounded-full bg-stone px-3 py-1">
            更新时间：{resource.updated}
          </span>
        </div>
      ) : null}
      <button
        type="button"
        onClick={handleDownload}
        className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sageDark px-5 py-2 text-sm font-medium text-white transition hover:bg-olive"
      >
        下载 PDF
        <Download size={16} />
      </button>
    </article>
  );
}
