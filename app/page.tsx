import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  audiences,
  columns,
  homePracticeCards,
  practicalCare,
  recommendedItems,
  skipItems,
  stages
} from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";
import { StageCard } from "@/components/StageCard";
import { VisualCard } from "@/components/VisualCard";
import { MomCalmNote } from "@/components/MomCalmNote";
import { photos } from "@/lib/photos";

export default function HomePage() {
  return (
    <main>
      <section className="soft-band border-b border-oatmeal">
        <div className="page-shell grid gap-10 py-10 md:min-h-[640px] md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-18 lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.08em] text-sageDark">
              0-3岁成长指南 / 居家蒙氏 / 低压力陪伴
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[0] text-ink md:text-6xl lg:text-7xl">
              宝宝成长，
              <br />
              妈妈不慌
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-9 text-ink/78 md:text-xl">
              看懂 0-3 岁宝宝每个阶段真正需要什么。
              <br className="hidden sm:block" />
              从发展规律、居家练习到玩具选择，帮妈妈少焦虑一点。
            </p>
            <p className="mt-6 border-l-4 border-[#9A7A55] pl-4 text-base font-medium leading-8 text-ink/82">
              先看懂孩子，再决定怎么陪、怎么买、怎么教。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/growth-calendar"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-sage"
              >
                查看 0-3 岁成长月历
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
              src={photos.hero}
              alt="孩子在厨房参与洗水果，妈妈在旁边陪伴的真实家庭场景"
              className="aspect-[4/5] w-full rounded-[20px] border border-[#D8D0C4] object-cover shadow-soft md:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute -bottom-5 left-5 max-w-[86%] rounded-md border border-[#D8D0C4] bg-[#F7F4EE]/95 px-5 py-4 shadow-soft backdrop-blur">
              <p className="text-sm font-semibold text-sageDark">
                真实生活里的练习
              </p>
              <p className="mt-1 text-sm leading-6 text-ink/72">
                洗水果、倒水、收纳、擦桌，孩子是在日常里长出能力。
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
            description="新手妈妈常常不是不努力，而是信息太多、标准太多、推荐太多。这里帮你把复杂问题先理清楚。"
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
              每个宝宝都有自己的成长节奏。这里整理的月龄发展内容，是帮助妈妈理解宝宝可能正在经历什么，而不是用来比较、催促或判断孩子“落后”。如果妈妈明显担心宝宝的动作、语言、互动等发展，可以及时咨询儿保医生或专业人士。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="栏目入口"
            title="你可以从这里开始"
            description="从月龄、居家练习、玩具选择、蒙氏理念到妈妈自己的焦虑，把育儿知识拆成能马上使用的小入口。"
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
            eyebrow="成长月历"
            title="0-3岁成长月历"
            description="按阶段看懂宝宝可能的发展重点，不是用来打分，而是帮助妈妈更清楚地支持孩子。"
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

      <section className="bg-[#F7F0E4] py-14 md:py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="玩具用品"
            title="玩具用品怎么选：先看懂孩子，再决定买什么"
            description="不是商家说适合就适合，也不是别人家孩子买了就一定要买。真正适合宝宝的，是能支持他当前发展需求、能让他主动操作、可以重复使用、不会让妈妈更焦虑的材料。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="overflow-hidden rounded-lg border border-[#D4E2D5] bg-white shadow-sm">
              <img
                src="/images/toy-recommend.svg"
                alt="更推荐的生活练习材料"
                className="w-full bg-mist p-5"
              />
              <div className="p-6">
                <p className="text-sm font-medium text-sageDark">更推荐</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-ink/74">
                  {recommendedItems.map((item) => (
                    <span key={item} className="rounded-lg bg-mist px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg border border-[#EED1B7] bg-white shadow-sm">
              <img
                src="/images/toy-skip.svg"
                alt="不急着买的复杂玩具"
                className="w-full bg-[#FFF5E8] p-5"
              />
              <div className="p-6">
                <p className="text-sm font-medium text-[#9A6844]">不急着买</p>
                <div className="mt-4 space-y-3 text-sm text-ink/74">
                  {skipItems.map((item) => (
                    <div key={item} className="rounded-lg bg-[#FFF5E8] px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
          <Link
            href="/toy-guide"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white transition hover:bg-sage"
          >
            查看玩具怎么选
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell">
          <MomCalmNote title="妈妈别慌：科学育儿不是把妈妈逼崩溃">
            <p>
              不需要每天安排很多活动，也不需要买一堆昂贵教具。真实生活里的倒水、擦桌子、收纳、洗水果、穿鞋，都是孩子发展动手能力、独立性和秩序感的机会。妈妈累的时候，一天只做一件小事也可以。
            </p>
          </MomCalmNote>
        </div>
      </section>

      <section className="bg-[#F7F0E4] py-14 md:py-20">
        <div className="page-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-medium text-sageDark">示例内容</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0] text-ink md:text-3xl">
              先看一个阶段示例：19-24个月
            </h2>
            <p className="mt-4 text-base leading-8 text-ink/72">
              这个阶段，很多宝宝会更想“自己来”，也更容易因为流程被打乱、东西不在原位、想做但做不好而情绪爆发。
            </p>
            <Link
              href="/growth-calendar/19-24-months"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white transition hover:bg-sage"
            >
              查看19-24个月指南
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["可能的发展", "秩序感、独立意识、生活练习、情绪表达"],
              ["常见行为", "想自己倒水、穿鞋、拿东西；喜欢重复；东西放错地方会生气"],
              ["可以支持", "倒水、擦桌子、收纳、穿脱鞋袜、洗水果"],
              ["妈妈别慌", "这不是孩子事多，很多时候是发展正在发生"]
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-oatmeal bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold tracking-[0] text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{text}</p>
              </article>
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
            src={photos.calmPlay}
            alt="孩子在有秩序的家庭环境中安静探索"
            className="mx-auto aspect-[4/3] w-full max-w-sm rounded-lg border border-oatmeal object-cover shadow-sm"
          />
        </div>
      </section>
    </main>
  );
}
