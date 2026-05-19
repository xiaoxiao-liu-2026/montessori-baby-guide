import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { faqs } from "@/lib/content";
import { MomCalmNote } from "@/components/MomCalmNote";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "妈妈不慌 | 宝宝成长，妈妈不慌"
};

const calmIdeas = [
  "月龄不是考试表，发展有范围，不是同一天达标。",
  "孩子晚一点不等于失败，持续进步和互动状态同样重要。",
  "不需要每天安排很多活动，真实生活就是练习。",
  "妈妈累的时候可以低配陪伴，一天只做一件小事也算陪伴。",
  "少买一点、慢一点，也没关系，不必被营销节奏带着跑。",
  "如果真的担心，可以咨询儿保医生或专业人士。"
];

export default function MomFaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="妈妈不慌指南"
        title="妈妈不慌：科学育儿不是把妈妈逼崩溃"
        description="科学育儿应该帮妈妈更看懂孩子，而不是让妈妈每天自责、比较、打卡和内耗。这里给你更低压力、更可持续的陪伴思路。"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-8 md:grid-cols-[1fr_0.82fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-[0] text-ink">
              慢一点，也可以是很好的陪伴
            </h2>
            <div className="mt-6 grid gap-3">
              {calmIdeas.map((idea) => (
                <div
                  key={idea}
                  className="flex gap-3 rounded-lg border border-oatmeal bg-white p-4 text-sm leading-7 text-ink/72"
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-sageDark" size={18} />
                  <span>{idea}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={photos.calmPlay}
            alt="妈妈低压力陪伴孩子的居家插图"
            className="mx-auto aspect-[4/3] w-full max-w-md rounded-lg border border-oatmeal object-cover shadow-sm"
          />
        </div>
      </section>
      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <InfoCard key={faq.question} title={faq.question}>
              {faq.answer}
            </InfoCard>
          ))}
        </div>
      </section>
      <section className="bg-[#F7F0E4] py-14">
        <div className="page-shell">
          <MomCalmNote>
            <p>
              科学育儿不是把妈妈逼成完美执行者。能持续、能调整、能看见孩子，也能看见自己的状态，已经是很重要的能力。
            </p>
          </MomCalmNote>
          <div className="mt-6 flex flex-col gap-3 rounded-lg border border-oatmeal bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-7 text-ink/72">
              想从一个具体阶段开始？可以先看19-24个月示例页。
            </p>
            <Link
              href="/growth-calendar/19-24-months"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sageDark px-5 py-2 text-sm font-medium text-white transition hover:bg-sage"
            >
              查看示例
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
