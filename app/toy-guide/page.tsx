import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { toyPrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "玩具选择指南 | 宝宝成长，妈妈不慌"
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
        eyebrow="玩具选择指南"
        title="少乱买，买真正支持发展的玩具"
        description="玩具不是越多越好，也不是越贵越科学。妈妈可以从宝宝当前能力、重复操作空间、安全材质和收纳难度来判断。"
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
      <section className="bg-[#F7F0E4] py-14">
        <div className="page-shell">
          <InfoCard title="一个很实用的判断">
            如果一个玩具只能按按钮、看灯光、听声音，宝宝真正动手的机会可能不多。更值得留下的玩具，通常能让孩子反复拿、放、倒、堆、配对、分类、推拉、打开和合上。
          </InfoCard>
        </div>
      </section>
    </main>
  );
}
