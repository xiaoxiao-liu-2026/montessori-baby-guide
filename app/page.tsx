import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  audiences,
  columns,
  homePracticeCards,
  practicalCare,
  stages
} from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";
import { StageCard } from "@/components/StageCard";
import { VisualCard } from "@/components/VisualCard";

export default function HomePage() {
  return (
    <main>
      <section className="soft-band border-b border-oatmeal">
        <div className="page-shell grid min-h-[620px] gap-10 py-12 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-20">
          <div>
            <p className="text-sm font-medium text-sageDark">
              0-3岁科学育儿与蒙氏启蒙指南
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[0] text-ink md:text-6xl">
              宝宝成长，
              <br />
              妈妈不慌
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ink/74">
              按0-3岁宝宝发展阶段，整理成长规律、居家练习、玩具用品选择和低压力陪伴方法，帮妈妈看懂孩子每个阶段真正需要什么。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/growth-calendar"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-sage"
              >
                查看0-3岁成长月历
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#stages"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-sage/35 bg-white/80 px-6 py-3 text-sm font-medium text-sageDark transition hover:bg-mist"
              >
                从宝宝当前阶段开始
              </Link>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ink/60">
              月龄是参考，不是考试表。这里关心宝宝的发展，也关心妈妈能不能轻松一点。
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/hero-home-life.svg"
              alt="妈妈和宝宝在家中自然互动的温柔场景"
              className="w-full rounded-[18px] border border-oatmeal bg-white shadow-soft"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/70 bg-white/86 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-sageDark">真实生活也能是练习</p>
              <p className="mt-1 text-sm leading-6 text-ink/70">
                倒水、擦桌、收纳、穿鞋，普通家庭每天都能自然发生。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="适合谁"
            title="如果你也有这些困惑，这里会适合你"
            description="这里不会告诉你必须做到什么，而是帮你看懂：这个阶段的宝宝可能正在练习什么，家里可以怎么自然支持他。"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-lg border border-oatmeal bg-white p-4 text-sm leading-7 text-ink/74"
              >
                <CheckCircle2 className="mt-1 shrink-0 text-sageDark" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F0E4] py-12">
        <div className="page-shell">
          <div className="rounded-lg border border-[#D6E1D2] bg-mist p-6 md:p-8">
            <p className="text-sm font-medium text-sageDark">核心声明</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0] text-ink">
              月龄不是考试表，发展是参考线
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-ink/72">
              每个宝宝都有自己的发展节奏。这里整理的月龄内容，是为了帮助妈妈理解宝宝可能出现的发展变化，而不是用来比较、打分或制造焦虑。如果你对宝宝的运动、语言、喂养、睡眠或情绪状态有明显担心，请及时咨询儿保医生或专业人士。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="核心栏目"
            title="妈妈最常用的5个入口"
            description="从月龄、玩具、家庭环境到妈妈自己的困惑，把育儿知识拆成更容易查找的小块。"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {columns.map((column) => {
              const Icon = column.icon;
              return (
                <Link
                  href={column.href}
                  key={column.title}
                  className="rounded-lg border border-oatmeal bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sage/50 hover:shadow-soft"
                >
                  <Icon className="text-sageDark" size={24} />
                  <h3 className="mt-4 text-lg font-semibold tracking-[0] text-ink">
                    {column.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70">
                    {column.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="stages" className="bg-[#F7F0E4] py-14 md:py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="0-3岁阶段导航"
            title="按宝宝当前阶段开始"
            description="不用从头学，也不用一次看完。找到宝宝现在的大致月龄，先看这一段就好。"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage) => (
              <StageCard
                key={stage.age}
                age={stage.age}
                focus={stage.focus}
                practice={stage.practice}
                image={stage.image}
                href={stage.href ?? "/growth-calendar"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="居家练习"
            title="普通家庭也能做，不需要昂贵教具"
            description="练习不一定要像课程。很多支持宝宝发展的机会，就藏在家里的水杯、抹布、篮子、鞋袜和水果里。"
          />
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

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <SectionHeader
              eyebrow="低压力陪伴"
              title="我们更关心：妈妈能不能真的用起来"
              description="这个网站不是告诉妈妈每天必须安排多少活动，也不是推荐妈妈买一堆昂贵教具。我们更关注真实生活里可持续、能坚持、能让妈妈少一点焦虑的方法。"
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {practicalCare.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-oatmeal bg-white p-4 text-sm leading-7 text-ink/72"
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-sageDark" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/growth-calendar"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white transition hover:bg-sage"
            >
              进入成长月历
              <ArrowRight size={18} />
            </Link>
          </div>
          <img
            src="/images/mom-calm.svg"
            alt="妈妈低压力陪伴宝宝的温柔插画"
            className="mx-auto w-full max-w-sm"
          />
        </div>
      </section>
    </main>
  );
}
