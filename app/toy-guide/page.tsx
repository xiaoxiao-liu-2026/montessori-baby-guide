import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { recommendedItems, skipItems, toyPrinciples } from "@/lib/content";
import { MomCalmNote } from "@/components/MomCalmNote";

export const metadata: Metadata = {
  title: "玩具怎么选 | 宝宝成长，妈妈不慌"
};

const toyStages = [
  {
    title: "0-6个月",
    text: "黑白卡、软布书、摇铃、镜子、不同触感的安全织物。重点不是刺激越多越好，而是温和观察和稳定回应。"
  },
  {
    title: "7-12个月",
    text: "球、套杯、敲敲打打的物品、可放入取出的盒子。重点支持爬行、抓握、因果关系和空间探索。"
  },
  {
    title: "13-24个月",
    text: "积木、嵌板、舀倒工具、小扫把、收纳篮。重点是手部操作、模仿流程和初步生活参与。"
  },
  {
    title: "25-36个月",
    text: "分类配对、串珠、拼图、绘画材料、真实儿童餐具。重点是精细动作、语言表达、规则理解和自我照顾。"
  }
];

export default function ToyGuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="玩具怎么选"
        title="玩具用品怎么选：先看懂孩子，再决定买什么"
        description="玩具不是越多越好，也不是越贵越科学。先看宝宝当前发展需求，再判断材料是否能让孩子主动操作、重复使用和真实参与。"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-[0] text-ink">
              选择玩具的4个原则
            </h2>
            <div className="mt-6 space-y-4">
              {toyPrinciples.map((principle) => (
                <div key={principle} className="flex gap-3 text-sm leading-7 text-ink/74">
                  <CheckCircle2 className="mt-1 shrink-0 text-sageDark" size={18} />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {toyStages.map((stage) => (
              <InfoCard key={stage.title} title={stage.title}>
                {stage.text}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream pb-14 md:pb-20">
        <div className="page-shell grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="这个阶段宝宝正在发展什么？" tone="green">
            先看孩子当下更常出现的是抓握、爬行、模仿、分类、语言，还是自理兴趣。
          </InfoCard>
          <InfoCard title="这个能力需要什么材料支持？">
            选择能让孩子拿、放、倒、堆、配对、分类、打开、合上的材料。
          </InfoCard>
          <InfoCard title="家里有什么可以替代？" tone="apricot">
            杯子、勺子、袜子、篮子、毛巾、空盒子，都可以变成低成本练习材料。
          </InfoCard>
          <InfoCard title="哪些东西不急着买？">
            孩子只能被动观看、声光很多、步骤复杂、需要妈妈全程操作的产品，可以先缓一缓。
          </InfoCard>
        </div>
      </section>
      <section className="bg-[#F7F0E4] py-14 md:py-20">
        <div className="page-shell">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="overflow-hidden rounded-lg border border-[#D4E2D5] bg-white shadow-sm">
              <img
                src="/images/toy-recommend.svg"
                alt="更推荐的真实生活材料插图"
                className="w-full bg-mist p-5"
              />
              <div className="p-6">
                <p className="text-sm font-medium text-sageDark">更推荐</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[0] text-ink">
                  能让孩子主动动手的材料
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-ink/74">
                  {recommendedItems.map((item) => (
                    <div key={item} className="rounded-lg bg-mist px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg border border-[#EED1B7] bg-white shadow-sm">
              <img
                src="/images/toy-skip.svg"
                alt="不急着买的复杂声光电玩具插图"
                className="w-full bg-[#FFF5E8] p-5"
              />
              <div className="p-6">
                <p className="text-sm font-medium text-[#9A6844]">不急着买</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[0] text-ink">
                  看起来热闹但孩子参与少的产品
                </h2>
                <div className="mt-5 space-y-3 text-sm text-ink/74">
                  {skipItems.map((item) => (
                    <div key={item} className="rounded-lg bg-[#FFF5E8] px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F0E4] py-14">
        <div className="page-shell grid gap-5 md:grid-cols-[1fr_1fr]">
          <InfoCard title="买之前问自己3个问题" tone="green">
            <div className="space-y-3">
              <p>孩子能主动操作吗？</p>
              <p>能重复使用吗？</p>
              <p>是孩子在做，还是玩具在表演？</p>
            </div>
          </InfoCard>
          <InfoCard title="一个很实用的判断">
            如果一个玩具只能按按钮、看灯光、听声音，宝宝真正动手的机会可能不多。更值得留下的玩具，通常能让孩子反复拿、放、倒、堆、配对、分类、推拉、打开和合上。
          </InfoCard>
        </div>
      </section>
      <section className="bg-cream py-12">
        <div className="page-shell">
          <MomCalmNote>
            <p>
              少买一点，不代表亏待孩子。对0-3岁宝宝来说，真实生活里的杯子、篮子、毛巾、勺子和鞋袜，常常比复杂玩具更能支持动手能力和独立性。
            </p>
          </MomCalmNote>
        </div>
      </section>
    </main>
  );
}
