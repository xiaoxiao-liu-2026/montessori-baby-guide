import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  CalendarDays,
  HandHeart,
  Heart,
  Leaf
} from "lucide-react";
import { photos } from "@/lib/photos";

const painPoints = [
  "不知道宝宝这个阶段真正需要什么",
  "月龄表、早教课、玩具推荐越看越焦虑",
  "想科学育儿，但不想把每天变成打卡任务",
  "听过蒙氏理念，但不知道怎么在家落地",
  "买了很多玩具，孩子却不怎么主动玩",
  "希望在真实生活里找到能坚持的方法"
];

const principles = [
  {
    title: "看懂发展",
    text: "月龄是参考，不是考试表。先理解宝宝可能正在经历什么，再决定怎么支持。"
  },
  {
    title: "回到生活",
    text: "倒水、擦桌、收纳、穿鞋，这些普通小事也能支持孩子发展独立性和秩序感。"
  },
  {
    title: "减少焦虑",
    text: "妈妈能持续、孩子能参与，比一次安排很多活动更重要。"
  }
];

const entrances = [
  {
    title: "成长月历",
    text: "按阶段看宝宝可能的发展重点",
    href: "/growth-calendar",
    icon: CalendarDays
  },
  {
    title: "居家练习",
    text: "在真实生活里做低压力练习",
    href: "/home-practice",
    icon: HandHeart
  },
  {
    title: "玩具怎么选",
    text: "先看发展需求，再决定买什么",
    href: "/toy-guide",
    icon: Blocks
  },
  {
    title: "妈妈不慌",
    text: "给妈妈自己的情绪缓冲和陪伴",
    href: "/mom-faq",
    icon: Heart
  }
];

const exampleTags = ["秩序感", "独立意识", "生活练习", "情绪表达"];

export default function HomePage() {
  return (
    <main className="bg-cream">
      <section className="border-b border-oatmeal/70 bg-cream">
        <div className="page-shell grid gap-12 py-16 md:min-h-[660px] md:grid-cols-[0.88fr_1.12fr] md:items-center md:py-24 lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.08em] text-sageDark">
              0-3岁成长指南 / 低压力陪伴 / 居家蒙氏启发
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[0] text-ink md:text-6xl">
              看懂宝宝成长，
              <br />
              妈妈不必慌张
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-9 text-ink/78 md:text-xl">
              用温柔、清晰、低压力的方式，理解 0-3 岁宝宝的发展规律、居家练习和玩具选择。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/growth-calendar"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-olive"
              >
                查看成长月历
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/home-practice"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white/80 px-6 py-3 text-sm font-medium text-sageDark ring-1 ring-sage/20 transition hover:bg-mist"
              >
                从居家练习开始
              </Link>
            </div>
            <p className="mt-7 max-w-lg text-[15px] leading-7 text-ink/62">
              不制造焦虑，不追求满分育儿。这里更关心妈妈能不能真的用起来。
            </p>
          </div>
          <div>
            <img
              src={photos.hero}
              alt="宝宝在温柔有秩序的家庭环境中进行倒水练习"
              className="aspect-[1024/572] w-full rounded-lg object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-sageDark">妈妈常见困惑</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[0] text-ink md:text-4xl">
              新手妈妈常常不是不努力，而是信息太多
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {painPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-lg bg-white/72 p-5 text-base leading-8 text-ink/76"
              >
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-20 md:py-24">
        <div className="page-shell">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div>
              <p className="text-sm font-medium text-sageDark">核心理念</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[0] text-ink md:text-4xl">
                发展不是考试，陪伴也不需要满分
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-ink/72">
                我们把 0-3 岁的发展规律，整理成妈妈能理解、家里能实践、情绪上也能承受的陪伴方式。
              </p>
            </div>
            <div className="grid gap-4">
              {principles.map((item) => (
                <article key={item.title} className="rounded-lg bg-cream p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mist text-sageDark">
                      <Leaf size={18} />
                    </span>
                    <h3 className="text-xl font-semibold tracking-[0] text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-8 text-ink/74">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-sageDark">从这里开始</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[0] text-ink md:text-4xl">
              从你现在最困惑的地方开始
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {entrances.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-lg bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist text-sageDark">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-[0] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-ink/70">{item.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sageDark">
                    查看
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-stone py-20 md:py-24">
        <div className="page-shell">
          <div className="rounded-lg bg-cream p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-medium text-sageDark">内容示例</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[0] text-ink md:text-4xl">
                  示例：19-24 个月
                </h2>
                <p className="mt-5 text-base leading-8 text-ink/74">
                  这个阶段，宝宝常常更想“自己来”，也更需要稳定流程和真实生活参与。
                </p>
                <p className="mt-3 text-base leading-8 text-ink/70">
                  先从一个阶段开始，看懂孩子为什么总想“自己来”。
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-3">
                  {exampleTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink/74"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/growth-calendar/19-24-months"
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sageDark px-6 py-3 text-sm font-medium text-white transition hover:bg-olive"
                >
                  查看完整示例
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-24">
        <div className="page-shell">
          <div className="flex flex-col gap-5 rounded-lg bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-7">
            <div>
              <h2 className="text-2xl font-semibold tracking-[0] text-ink">
                想先保存一份简表？
              </h2>
              <p className="mt-3 text-base leading-7 text-ink/72">
                可以从 0-3 岁宝宝成长月历简表开始。
              </p>
            </div>
            <Link
              href="/downloads"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sageDark px-5 py-2 text-sm font-medium text-white transition hover:bg-olive"
            >
              查看资料下载
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
