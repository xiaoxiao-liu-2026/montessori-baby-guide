import type { Metadata } from "next";
import { Mail, MessageCircle, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "联系我们 | 宝宝成长，妈妈不慌",
  description: "联系宝宝成长，妈妈不慌，反馈0-3岁宝宝成长、居家练习和玩具选择相关建议。"
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="联系我们"
        title="联系我们"
        description="如果你对宝宝发展、居家练习、玩具选择或网站内容有建议，欢迎联系我们。"
      />

      <section className="bg-cream py-14 md:py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <article className="rounded-lg border border-oatmeal bg-white p-5 shadow-sm">
              <Mail className="text-sageDark" size={24} />
              <h2 className="mt-4 text-xl font-semibold text-ink">邮箱</h2>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                联系方式建设中
              </p>
            </article>
            <article className="rounded-lg border border-oatmeal bg-white p-5 shadow-sm">
              <MessageCircle className="text-sageDark" size={24} />
              <h2 className="mt-4 text-xl font-semibold text-ink">微信二维码</h2>
              <div className="mt-4 flex aspect-square max-w-[220px] items-center justify-center rounded-lg border border-dashed border-oatmeal bg-stone text-sm text-ink/52">
                微信二维码待添加
              </div>
            </article>
            <article className="rounded-lg border border-oatmeal bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">账号占位</h2>
              <div className="mt-4 grid gap-3 text-sm text-ink/70">
                <p>公众号：待添加</p>
                <p>小红书：待添加</p>
                <p>抖音：待添加</p>
              </div>
            </article>
          </div>

          <form className="rounded-lg border border-oatmeal bg-white p-5 shadow-sm md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-mist text-sageDark">
                <Send size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-ink">用户反馈表单</h2>
                <p className="mt-1 text-sm text-ink/58">功能建设中，当前为静态表单样式。</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-ink/74">
                你的称呼
                <input className="min-h-12 rounded-lg border border-oatmeal bg-cream px-4 font-normal outline-none focus:border-sageDark" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink/74">
                宝宝当前月龄
                <input
                  className="min-h-12 rounded-lg border border-oatmeal bg-cream px-4 font-normal outline-none focus:border-sageDark"
                  placeholder="例如：19个月"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink/74">
                你最困惑的问题
                <textarea
                  className="min-h-32 rounded-lg border border-oatmeal bg-cream px-4 py-3 font-normal leading-7 outline-none focus:border-sageDark"
                  placeholder="可以写宝宝当前阶段、居家练习、玩具选择或妈妈自己的焦虑。"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink/74">
                是否希望收到资料包
                <select className="min-h-12 rounded-lg border border-oatmeal bg-cream px-4 font-normal outline-none focus:border-sageDark">
                  <option>希望收到</option>
                  <option>暂时不用</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink/74">
                联系方式
                <input
                  className="min-h-12 rounded-lg border border-oatmeal bg-cream px-4 font-normal outline-none focus:border-sageDark"
                  placeholder="邮箱 / 微信 / 手机号"
                />
              </label>
              <button
                type="button"
                className="min-h-12 rounded-full bg-sageDark px-5 text-sm font-medium text-white transition hover:bg-olive"
              >
                功能建设中
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
