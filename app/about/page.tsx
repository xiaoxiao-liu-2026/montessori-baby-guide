import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "关于我们 | 宝宝成长，妈妈不慌",
  description:
    "了解宝宝成长，妈妈不慌，一个面向0-3岁宝妈的科学育儿成长指南网站。"
};

const beliefs = [
  "月龄是参考，不是考试表",
  "每个宝宝都有自己的成长节奏",
  "真实生活就是很好的练习",
  "蒙氏理念不等于买很多昂贵教具",
  "妈妈可持续，比完美育儿更重要",
  "先看懂孩子，再决定怎么陪、怎么买、怎么教"
];

const notDoing = [
  "不制造育儿焦虑",
  "不把月龄当达标表",
  "不鼓励盲目购买玩具和课程",
  "不替代医生、儿保或专业评估"
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="关于我们"
        title="关于《宝宝成长，妈妈不慌》"
        description="《宝宝成长，妈妈不慌》是一个面向 0-3 岁宝妈的成长指南网站。我们希望用妈妈能听懂的话，整理宝宝不同阶段的发展规律、居家练习、玩具用品选择和低压力陪伴方法。"
      />

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reading text-base text-ink/74">
            <h2 className="text-2xl font-semibold text-ink">
              我们为什么做这个网站
            </h2>
            <p className="mt-5">
              很多新手妈妈不是不愿意学习，而是被太多标准、推荐和焦虑信息推着走。今天看月龄表，明天看早教课，后天又被玩具清单打乱。
            </p>
            <p className="mt-4">
              我们希望把复杂的育儿信息整理得更清楚一点：宝宝可能正在发展什么，妈妈可以在家怎么支持，哪些东西真的有用，哪些可以先不用买。
            </p>
          </div>
          <div className="rounded-lg border border-oatmeal bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">我们相信什么</h2>
            <div className="mt-5 grid gap-3">
              {beliefs.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-ink/72">
                  <CheckCircle2 className="mt-1 shrink-0 text-sageDark" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone py-14 md:py-20">
        <div className="page-shell grid gap-5 md:grid-cols-3">
          <InfoCard title="这个网站能帮你什么" tone="green">
            按 0-3 岁阶段理解宝宝发展规律，找到合适的居家练习和低压力陪伴方式。
          </InfoCard>
          <InfoCard title="我们怎么表达">
            用有经验的妈妈能听懂的语言，温柔、真实、清楚，专业但不压迫。
          </InfoCard>
          <InfoCard title="我们更关心">
            妈妈能不能真的用起来，能不能少买一点、少焦虑一点，也更清楚地陪孩子成长。
          </InfoCard>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium text-sageDark">边界感</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">
              我们不做什么
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {notDoing.map((item) => (
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

      <section className="bg-stone py-14">
        <div className="page-shell rounded-lg border border-oatmeal bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-ink">免责声明</h2>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-ink/70">
            本网站提供的是一般性的育儿信息和家庭陪伴建议，不能替代医生、儿童发展评估师、心理咨询师等专业人士的诊断或干预建议。如果你对宝宝发育、健康、喂养、睡眠或情绪有明显担心，请及时寻求线下专业帮助。
          </p>
        </div>
      </section>
    </main>
  );
}
