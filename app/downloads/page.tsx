import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PdfCard } from "@/components/PdfCard";
import { pdfResources, upcomingResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "资料下载 | 宝宝成长，妈妈不慌",
  description:
    "下载0-3岁宝宝成长月历、居家练习清单、玩具用品选择表和妈妈低压力陪伴资料。"
};

export default function DownloadsPage() {
  return (
    <main>
      <PageHero
        eyebrow="资料下载"
        title="免费资料下载"
        description="我们会陆续整理 0-3 岁宝宝成长月历、居家练习清单、玩具用品选择表和妈妈低压力陪伴资料，帮助妈妈更轻松地使用这些内容。"
      />

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-sageDark">免费资料区</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
              先从一份简洁资料开始
            </h2>
            <p className="mt-4 text-base leading-8 text-ink/70">
              这些资料会按“能看懂、能打印、能照着做”的方向整理。当前先保留下载结构，后续上传真实 PDF 后可直接替换链接。
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pdfResources.map((resource) => (
              <PdfCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-14 md:py-20">
        <div className="page-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium text-sageDark">后续资料预告</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">
              后面会继续整理这些主题
            </h2>
            <p className="mt-4 text-sm leading-8 text-ink/70">
              我们会优先整理妈妈最容易用起来的清单，不追求复杂，重点是帮助你少焦虑、少乱买。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {upcomingResources.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-oatmeal bg-white px-4 py-3 text-sm leading-7 text-ink/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-6 rounded-lg border border-oatmeal bg-white p-6 md:grid-cols-[1fr_0.9fr] md:p-8">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-mist text-sageDark">
              <Mail size={22} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-ink">
              邮箱领取 / 微信领取
            </h2>
            <p className="mt-4 text-sm leading-8 text-ink/70">
              如果你希望收到后续更新资料，可以留下邮箱或关注我们的账号。当前功能建设中，后续会接入真实领取入口。
            </p>
          </div>
          <form className="grid gap-4" aria-label="资料领取占位表单">
            <input
              className="min-h-12 rounded-lg border border-oatmeal bg-cream px-4 text-sm outline-none focus:border-sageDark"
              placeholder="你的邮箱"
            />
            <input
              className="min-h-12 rounded-lg border border-oatmeal bg-cream px-4 text-sm outline-none focus:border-sageDark"
              placeholder="宝宝当前月龄，例如 20个月"
            />
            <button
              type="button"
              className="min-h-12 rounded-full bg-sageDark px-5 text-sm font-medium text-white transition hover:bg-olive"
            >
              功能建设中
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
