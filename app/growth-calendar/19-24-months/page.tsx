import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { MomCalmNote } from "@/components/MomCalmNote";
import {
  month19to24Activities,
  recommendedItems,
  skipItems
} from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "19-24个月发展指南 | 宝宝成长，妈妈不慌",
  description:
    "19-24个月宝宝秩序感、独立意识、情绪表达和生活练习的科学育儿与蒙氏启蒙参考。"
};

const developments = [
  "秩序感明显增强，喜欢固定流程和熟悉位置",
  "独立意识增强，常常想自己拿、自己倒、自己穿",
  "情绪表达快于语言，容易着急、哭闹、发脾气",
  "喜欢模仿大人做真实家务",
  "大运动和精细动作都在快速发展"
];

const behaviors = [
  "东西放错地方会生气",
  "喜欢重复同一件事",
  "想自己倒水、穿鞋、拿东西",
  "不让做会哭闹",
  "喜欢搬、推、爬、跑",
  "喜欢参与洗菜、擦桌子、收纳、丢垃圾"
];

const calmNotes = [
  "孩子“不听话”很多时候是在发展独立意识。",
  "情绪爆发不等于脾气坏，可能是表达能力还跟不上。",
  "活动不需要每天很多，真实生活参与已经很有价值。",
  "秩序感变强不代表孩子难带，而是孩子正在建立内在秩序。",
  "妈妈累的时候，一天只做一个小练习也可以。"
];

export default function Month19To24Page() {
  return (
    <main>
      <PageHero
        eyebrow="19-24个月示例内容"
        title="19-24个月：秩序感、独立意识和生活练习开始变得明显"
        description="很多宝宝会更想自己来，更喜欢模仿大人，也可能因为流程被打乱、东西不在原位、想做但做不好而情绪爆发。"
      />

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-8 md:grid-cols-[1fr_0.86fr] md:items-center">
          <div className="reading text-base text-ink/74">
            <p>
              19-24个月左右，这不是孩子变得“事多”或“不听话”，很多时候是秩序感、独立意识、语言表达和动作能力正在发展。
            </p>
            <p className="mt-4">
              每个宝宝节奏不同，下面内容是参考，不是达标表。你可以从一两个容易做的小练习开始，不需要每天安排很多活动。
            </p>
          </div>
          <img
            src={photos.pouring}
            alt="19-24个月孩子参与真实生活练习的家庭照片"
            className="mx-auto aspect-[4/3] w-full max-w-sm rounded-lg border border-oatmeal bg-white object-cover shadow-sm"
          />
        </div>
      </section>

      <section className="bg-stone py-14 md:py-20">
        <div className="page-shell grid gap-5 md:grid-cols-2">
          <InfoCard title="这个阶段可能在发展什么" tone="green">
            <div className="space-y-3">
              {developments.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="常见行为" tone="apricot">
            <div className="space-y-3">
              {behaviors.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </InfoCard>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-sageDark">居家可以怎么支持</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0] text-ink md:text-3xl">
              从真实生活里选几个小练习就够了
            </h2>
            <p className="mt-4 text-base leading-8 text-ink/72">
              不需要把家变成教室，也不需要每天打卡。孩子能参与、能重复、能慢慢自己做，就是很好的支持。
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {month19to24Activities.map((activity) => (
              <article
                key={activity.title}
                className="overflow-hidden rounded-lg border border-oatmeal bg-white shadow-sm"
              >
                <img
                  src={activity.image}
                  alt={`${activity.title}练习插图`}
                  className={
                    activity.image.endsWith(".svg")
                      ? "w-full bg-stone p-5"
                      : "aspect-[4/3] w-full object-cover"
                  }
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold tracking-[0] text-ink">
                    {activity.title}
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-ink/72">
                    <p>
                      <span className="font-semibold text-ink">准备：</span>
                      {activity.prepare}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">作用：</span>
                      {activity.benefit}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">妈妈提醒：</span>
                      {activity.reminder}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-14 md:py-20">
        <div className="page-shell grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-[#D4E2D5] bg-white p-6">
            <p className="text-sm font-medium text-sageDark">建议准备</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[0] text-ink">
              支持生活练习和手部工作的材料
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-ink/74">
              {recommendedItems.map((item) => (
                <div key={item} className="rounded-lg bg-mist px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-lg border border-[#EED1B7] bg-white p-6">
            <p className="text-sm font-medium text-[#9A6844]">不急着买</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[0] text-ink">
              复杂但孩子主动参与少的玩具
            </h2>
            <div className="mt-5 space-y-3 text-sm text-ink/74">
              {skipItems.map((item) => (
                <div key={item} className="rounded-lg bg-[#F7F2EA] px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="page-shell">
          <MomCalmNote>
            <div className="space-y-3">
              {calmNotes.map((item) => (
                <p key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-sageDark" size={18} />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </MomCalmNote>
          <div className="mt-6 rounded-lg border border-oatmeal bg-white p-5 text-sm leading-8 text-ink/72">
            <h2 className="text-xl font-semibold tracking-[0] text-ink">
              专业边界提醒
            </h2>
            <p className="mt-3">
              如果妈妈明显担心宝宝动作、语言、互动等发展，或者孩子出现明显退步，建议咨询儿保医生或专业人士。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/growth-calendar"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-sage/35 bg-white px-5 py-2 text-sm font-medium text-sageDark transition hover:bg-mist"
            >
              返回月龄导航
            </Link>
            <Link
              href="/toy-guide"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sageDark px-5 py-2 text-sm font-medium text-white transition hover:bg-olive"
            >
              查看玩具用品怎么选
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
