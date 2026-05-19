import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "关于我们 | 宝宝成长，妈妈不慌"
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="关于我们"
        title="我们想做一份妈妈看得懂、用得上的成长月历"
        description="宝宝成长，妈妈不慌，关注0-3岁宝宝的发展规律、家庭陪伴、玩具用品选择和蒙氏理念的生活化落地。"
      />
      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-5 md:grid-cols-3">
          <InfoCard title="我们相信">
            月龄发展是参考，不是考试表。每个孩子都有自己的节奏，妈妈需要的是理解和方法，不是更多焦虑。
          </InfoCard>
          <InfoCard title="我们整理">
            把发展心理、儿童成长规律和蒙氏启蒙理念，翻译成家庭中能做、能坚持、能调整的小建议。
          </InfoCard>
          <InfoCard title="我们避免">
            不制造攀比，不鼓励盲目囤货，不把妈妈变成活动打卡机器。妈妈可持续，比完美安排更重要。
          </InfoCard>
        </div>
        <div className="mt-8 rounded-lg border border-[#D6E1D2] bg-mist p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-[0] text-ink">
            内容边界
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-ink/72">
            本网站提供的是一般性的育儿信息和家庭陪伴建议，不能替代医生、儿童发展评估师、心理咨询师等专业人士的诊断或干预建议。如果你对宝宝发育、健康、喂养、睡眠或情绪有明显担心，请及时寻求线下专业帮助。
          </p>
        </div>
      </section>
    </main>
  );
}
