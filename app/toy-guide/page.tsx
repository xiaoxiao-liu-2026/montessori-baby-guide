import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { recommendedItems, skipItems } from "@/lib/content";
import { MomCalmNote } from "@/components/MomCalmNote";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "玩具怎么选 | 宝宝成长，妈妈不慌"
};

const materialQuestions = [
  {
    title: "孩子能主动操作吗？",
    text: "是孩子在做，还是玩具在表演？"
  },
  {
    title: "能重复使用吗？",
    text: "孩子能不能反复拿、放、倒、舀、分类、打开、合上？"
  },
  {
    title: "符合当前发展需求吗？",
    text: "现在更需要练抓握、行走、语言、分类，还是生活自理？"
  },
  {
    title: "家里有没有可以替代的物品？",
    text: "杯子、勺子、篮子、毛巾、鞋袜，很多都可以成为练习材料。"
  }
];

const developmentNeeds = [
  {
    title: "感官探索",
    text: "布书、摇铃、安全镜子、不同触感材料。重点不是刺激越多越好，而是温和观察和回应。"
  },
  {
    title: "手部操作",
    text: "套杯、投放盒、串珠、简单拼图、舀倒材料。重点是让孩子用手主动尝试。"
  },
  {
    title: "生活练习",
    text: "小水壶、小杯子、小抹布、小篮子、木质托盘。重点是参与真实生活。"
  },
  {
    title: "秩序与认知",
    text: "分类盒、配对卡、颜色形状材料、开合盒子。重点是分类、配对和建立秩序感。"
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
        <div className="page-shell grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div className="rounded-lg bg-white p-5 shadow-sm md:p-6">
            <h2 className="text-2xl font-semibold tracking-[0] text-ink">
              选择材料前，先问4个问题
            </h2>
            <div className="mt-6 grid gap-3">
              {materialQuestions.map((question, index) => (
                <article key={question.title} className="rounded-lg bg-mist/70 p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-sageDark">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-[0] text-ink">
                        {question.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-7 text-ink/72">
                        {question.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {developmentNeeds.map((need) => (
              <InfoCard key={need.title} title={need.title}>
                {need.text}
              </InfoCard>
            ))}
          </div>
          <p className="rounded-lg bg-white p-4 text-[15px] leading-7 text-ink/72 md:col-span-2">
            这里不是按月龄购买清单，而是帮助妈妈根据孩子当前发展需求选择材料。每个孩子节奏不同，可以根据兴趣和能力调整。
          </p>
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
      <section className="bg-stone py-14 md:py-20">
        <div className="page-shell">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="overflow-hidden rounded-lg border border-[#D4E2D5] bg-white shadow-sm">
              <img
                src={photos.toyRecommended}
                alt="更推荐的真实生活材料插图"
                className="aspect-[16/9] w-full bg-mist object-cover"
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
                src={photos.toyNotPriority}
                alt="不急着买的高刺激低参与玩具插图"
                className="aspect-[16/9] w-full bg-[#F7F2EA] object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-medium text-[#9A6844]">
                  不急着买：高刺激、低参与的玩具
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[0] text-ink">
                  不是不能买，而是不要盲买
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink/72">
                  这些玩具往往声音、灯光、按钮很多，但孩子真正主动操作和重复探索的机会不一定多。
                </p>
                <div className="mt-5 space-y-3 text-sm text-ink/74">
                  {skipItems.map((item) => (
                    <div key={item} className="rounded-lg bg-[#F7F2EA] px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-stone py-14">
        <div className="page-shell grid gap-5 md:grid-cols-[1fr_1fr]">
          <InfoCard title="买之前，先问自己3个问题" tone="green">
            <div className="space-y-3 font-medium text-ink/82">
              <p>孩子能主动操作吗？</p>
              <p>能重复使用吗？</p>
              <p>是孩子在做，还是玩具在表演？</p>
            </div>
          </InfoCard>
          <InfoCard title="一个很实用的判断">
            如果一个玩具只能按按钮、看灯光、听声音，宝宝真正动手的机会可能不多。更值得留下的玩具，通常能让孩子反复拿、放、倒、堆、配对、分类、推拉、打开和合上。
          </InfoCard>
          <div className="rounded-lg border border-[#E8D3B7] bg-[#F7F2EA] p-5 text-[15px] leading-7 text-ink/76 md:col-span-2">
            小颗粒、串珠、豆子等材料需要成人全程看护，口欲明显或年龄较小的孩子，请选择更大、更安全的材料。
          </div>
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
