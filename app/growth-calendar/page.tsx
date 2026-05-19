import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { stages } from "@/lib/content";

export const metadata: Metadata = {
  title: "月龄发展指南 | 宝宝成长，妈妈不慌"
};

export default function GrowthCalendarPage() {
  return (
    <main>
      <PageHero
        eyebrow="月龄发展指南"
        title="看懂0-3岁宝宝每个阶段正在练习什么"
        description="月龄发展不是考试表，而是一张帮助妈妈理解宝宝的地图。你可以按宝宝当前阶段查看重点，再选择家里容易做到的小练习。"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <InfoCard key={stage.age} title={stage.age}>
              <p className="font-medium text-ink">{stage.focus}</p>
              <p className="mt-3">{stage.practice}</p>
            </InfoCard>
          ))}
        </div>
      </section>
      <section className="bg-[#F7F0E4] py-14">
        <div className="page-shell grid gap-5 md:grid-cols-3">
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
      </section>
    </main>
  );
}
