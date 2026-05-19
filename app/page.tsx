import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { audiences, columns, stages } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <main>
      <section className="soft-band border-b border-oatmeal">
        <div className="page-shell min-h-[620px] py-16 md:py-24">
          <div className="max-w-3xl">
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
              <Link
                href="/growth-calendar"
                key={stage.age}
                className="rounded-lg border border-oatmeal bg-white p-5 transition hover:border-sage/50 hover:shadow-soft"
              >
                <p className="text-sm font-semibold text-sageDark">{stage.age}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-[0] text-ink">
                  {stage.focus}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{stage.practice}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <SectionHeader
              eyebrow="低压力陪伴"
              title="育儿不是把妈妈变成老师"
              description="0-3岁的成长，很多时候发生在吃饭、洗手、穿衣、收拾玩具、被回应、被等待的日常里。这个网站希望帮你少一点焦虑，少一点乱买，多一点看懂孩子的笃定。"
            />
            <Link
              href="/growth-calendar"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white transition hover:bg-sage"
            >
              进入成长月历
              <ArrowRight size={18} />
            </Link>
          </div>
          <img
            src="/images/home-routine.svg"
            alt="妈妈陪宝宝进行日常生活练习的温柔插画"
            className="mx-auto w-full max-w-sm"
          />
        </div>
      </section>
    </main>
  );
}
