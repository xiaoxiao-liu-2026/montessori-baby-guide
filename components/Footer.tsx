import Link from "next/link";

const footerLinks = [
  { href: "/growth-calendar", label: "成长月历" },
  { href: "/home-practice", label: "居家练习" },
  { href: "/toy-guide", label: "玩具怎么选" },
  { href: "/home-montessori", label: "蒙氏轻理解" },
  { href: "/mom-faq", label: "妈妈不慌" },
  { href: "/downloads", label: "资料下载" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" }
];

export function Footer() {
  return (
    <footer className="border-t border-oatmeal bg-stone">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.15fr_0.9fr_0.75fr]">
        <div>
          <p className="text-lg font-semibold text-sageDark">宝宝成长，妈妈不慌</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink/70">
            月龄发展是参考，不是考试表。我们希望用妈妈能看懂的话，把科学育儿和蒙氏启蒙变成真实生活里可持续的小行动。
          </p>
          <p className="mt-4 max-w-2xl text-xs leading-6 text-ink/58">
            本站内容用于帮助妈妈理解 0-3 岁宝宝发展规律和居家陪伴方式，仅作为育儿参考，不替代儿保、医生或专业评估。每个宝宝都有自己的成长节奏，如果妈妈对宝宝动作、语言、互动或其他发展情况明显担心，请及时咨询专业人士。
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">快速导航</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-ink/72">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-sageDark">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-sm leading-7 text-ink/68">
          <p className="font-semibold text-ink">联系与版权</p>
          <p className="mt-3">邮箱：hello@example.com</p>
          <p className="mt-3 text-xs text-ink/52">
            © 2026 宝宝成长，妈妈不慌。内容持续整理中。
          </p>
        </div>
      </div>
    </footer>
  );
}
