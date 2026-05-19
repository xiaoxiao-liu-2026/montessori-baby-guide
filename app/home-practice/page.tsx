import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { VisualCard } from "@/components/VisualCard";
import { MomCalmNote } from "@/components/MomCalmNote";
import { homePracticeCards } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "居家练习 | 宝宝成长，妈妈不慌",
  description:
    "用家里常见物品支持0-3岁宝宝动手、语言、感官、动作和生活自理发展的居家蒙氏练习。"
};

const principles = [
  "普通家庭也能做，不需要昂贵教具。",
  "先看孩子当下能力，再选择一两个容易开始的小练习。",
  "重点不是做得标准，而是让孩子参与、重复、慢慢自己来。",
  "妈妈累的时候，低配陪伴也算陪伴。"
];

export default function HomePracticePage() {
  return (
    <main>
      <PageHero
        eyebrow="居家练习"
        title="真实生活里的小动作，就是0-3岁的好练习"
        description="倒水、擦桌、收纳、洗水果、穿鞋、翻书、分类配对，这些普通家庭每天会发生的小事，都能支持宝宝发展动手能力、独立性和秩序感。"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <img
            src={photos.hero}
            alt="宝宝参与倒水、擦桌和收纳的居家练习场景"
            className="aspect-[4/3] w-full rounded-lg border border-oatmeal bg-white object-cover shadow-sm"
          />
          <div>
            <h2 className="text-2xl font-semibold tracking-[0] text-ink">
              练习不用多，能持续最重要
            </h2>
            <div className="mt-6 space-y-3">
              {principles.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-oatmeal bg-white p-4 text-sm leading-7 text-ink/72"
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-sageDark" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F0E4] py-14 md:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-sageDark">练习入口</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0] text-ink md:text-3xl">
              从家里已经有的物品开始
            </h2>
            <p className="mt-4 text-base leading-8 text-ink/72">
              每个练习都尽量低成本、低压力、容易重复。妈妈可以按宝宝状态选一个，不需要一次做完。
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homePracticeCards.map((practice) => (
              <VisualCard
                key={practice.title}
                image={practice.image}
                title={practice.title}
                description={practice.text}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream py-14">
        <div className="page-shell">
          <MomCalmNote>
            <p>
              居家练习不是打卡任务。孩子今天愿意擦一下桌子、倒一次水、收一个玩具，都是在真实生活里积累能力。妈妈不用把每一天都安排满。
            </p>
          </MomCalmNote>
          <Link
            href="/growth-calendar/19-24-months"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white transition hover:bg-sage"
          >
            看19-24个月练习示例
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
