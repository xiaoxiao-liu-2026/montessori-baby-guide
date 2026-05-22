import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { stages } from "@/lib/content";
import { MomCalmNote } from "@/components/MomCalmNote";
import { StageCard } from "@/components/StageCard";

export const metadata: Metadata = {
  title: "月龄发展指南 | 宝宝成长，妈妈不慌"
};

export default function GrowthCalendarPage() {
  return (
    <main>
      <PageHero
        eyebrow="按阶段看发展"
        title="看懂0-3岁宝宝每个阶段正在练习什么"
        description="选择宝宝当前阶段，先看这个时期可能的发展重点，再看适合在家做的生活练习和陪伴方式。这里不是达标表，而是一张帮助妈妈理解孩子的参考地图。"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell">
          <MomCalmNote>
            <p>
              这个阶段的内容是帮助你理解宝宝可能正在发展什么，不是用来比较孩子。每个宝宝都有自己的节奏，早一点、晚一点并不代表好坏。妈妈能做的，是提供安全、合适、低压力的环境支持。本站内容仅作为育儿参考，不能替代儿保、医生或专业评估。
            </p>
          </MomCalmNote>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <InfoCard title="怎么看发展" tone="green">
              先看宝宝是否有持续进步，再看是否愿意互动和探索。不要只盯着某一个动作有没有准时出现。
            </InfoCard>
            <InfoCard title="怎么做练习" tone="apricot">
              把练习放进日常，趴玩、递物、收纳、洗手、穿脱鞋袜，都可以是宝宝的发展机会。
            </InfoCard>
            <InfoCard title="什么时候求助" tone="white">
              如果出现明显倒退、长期没有回应、喂养睡眠严重困难，或者妈妈强烈担心，请咨询儿保医生。
            </InfoCard>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage) => (
              <StageCard
                key={stage.age}
                age={stage.age}
                focus={stage.focus}
                practice={stage.practice}
                image={stage.image}
                href={stage.href}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream py-12">
        <div className="page-shell flex flex-col gap-4 rounded-lg border border-oatmeal bg-white p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-sageDark">示例内容</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[0] text-ink">
              先看看19-24个月怎么写
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              这一页包含发展重点、常见行为、居家活动、玩具建议和妈妈提示。
            </p>
          </div>
          <Link
            href="/growth-calendar/19-24-months"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white transition hover:bg-olive"
          >
            查看19-24个月
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
