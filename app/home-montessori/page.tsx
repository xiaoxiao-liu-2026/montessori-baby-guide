import type { Metadata } from "next";
import { Home, Leaf, Library, Repeat } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { montessoriHomeTips } from "@/lib/content";

export const metadata: Metadata = {
  title: "家庭蒙氏环境 | 宝宝成长，妈妈不慌"
};

const areas = [
  {
    title: "入口区",
    icon: Home,
    text: "准备低矮挂钩、小鞋凳和固定鞋位，让孩子慢慢参与脱鞋、放包、挂衣服。"
  },
  {
    title: "玩具区",
    icon: Library,
    text: "用开放架或收纳篮，少量摆放，固定位置。孩子更容易看见选择，也更容易收回去。"
  },
  {
    title: "生活练习区",
    icon: Repeat,
    text: "小毛巾、小水壶、儿童餐具、擦桌工具，都可以帮助孩子参与真实生活。"
  },
  {
    title: "安静角",
    icon: Leaf,
    text: "放几本书、软垫和安静材料，给孩子一个可以慢下来、自己待一会儿的地方。"
  }
];

export default function HomeMontessoriPage() {
  return (
    <main>
      <PageHero
        eyebrow="家庭蒙氏环境"
        title="不用把家变成教室，也能支持孩子独立成长"
        description="家庭蒙氏的重点不是昂贵教具，而是让孩子在真实生活中练习动手、选择、收纳、等待和自我照顾。"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.title} className="rounded-lg border border-oatmeal bg-white p-5">
                <Icon className="text-sageDark" size={24} />
                <h2 className="mt-4 text-lg font-semibold tracking-[0] text-ink">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink/70">{area.text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-[#F7F0E4] py-14">
        <div className="page-shell">
          <h2 className="text-2xl font-semibold tracking-[0] text-ink">
            家里可以先做的4个小调整
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {montessoriHomeTips.map((tip) => (
              <InfoCard key={tip} title={tip.split("：")[0]} tone="green">
                {tip.split("：")[1]}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
