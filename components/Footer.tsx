import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-oatmeal bg-[#F7F0E4]">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-sageDark">宝宝成长，妈妈不慌</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink/70">
            月龄发展是参考，不是考试表。我们希望用妈妈能看懂的话，把科学育儿和蒙氏启蒙变成真实生活里可持续的小行动。
          </p>
          <p className="mt-4 max-w-2xl text-xs leading-6 text-ink/58">
            本站内容用于帮助妈妈理解0-3岁宝宝发展规律和居家陪伴方式，仅作为育儿参考，不替代儿保、医生或专业评估。每个宝宝都有自己的成长节奏，如果妈妈对宝宝动作、语言、互动或其他发展情况明显担心，请及时咨询专业人士。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-ink/72 sm:grid-cols-3">
          <Link href="/growth-calendar" className="hover:text-sageDark">
            成长月历
          </Link>
          <Link href="/home-practice" className="hover:text-sageDark">
            居家练习
          </Link>
          <Link href="/toy-guide" className="hover:text-sageDark">
            玩具怎么选
          </Link>
          <Link href="/home-montessori" className="hover:text-sageDark">
            蒙氏轻理解
          </Link>
          <Link href="/mom-faq" className="hover:text-sageDark">
            妈妈不慌
          </Link>
        </div>
      </div>
    </footer>
  );
}
