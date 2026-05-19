import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "妈妈常见问题 | 宝宝成长，妈妈不慌"
};

export default function MomFaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="妈妈常见问题"
        title="把育儿问题说清楚一点，把妈妈压力放下来一点"
        description="这里收集0-3岁妈妈经常遇到的困惑，用温和、实用、不吓人的方式整理成可参考的回答。"
      />
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
          <InfoCard title="给妈妈的一句提醒" tone="apricot">
            科学育儿不是把妈妈逼成完美执行者。能持续、能调整、能看见孩子，也能看见自己的状态，已经是很重要的能力。
          </InfoCard>
        </div>
      </section>
    </main>
  );
}
