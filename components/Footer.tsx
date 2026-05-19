import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-oatmeal bg-[#F7F0E4]">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-sageDark">宝宝成长，妈妈不慌</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink/70">
            月龄发展是参考，不是考试表。我们希望用妈妈能看懂的话，把科学育儿和蒙氏启蒙变成真实生活里可持续的小行动。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-ink/72 sm:grid-cols-3">
          <Link href="/growth-calendar" className="hover:text-sageDark">
            月龄发展指南
          </Link>
          <Link href="/toy-guide" className="hover:text-sageDark">
            玩具选择指南
          </Link>
          <Link href="/home-montessori" className="hover:text-sageDark">
            家庭蒙氏环境
          </Link>
          <Link href="/mom-faq" className="hover:text-sageDark">
            妈妈常见问题
          </Link>
          <Link href="/about" className="hover:text-sageDark">
            关于我们
          </Link>
        </div>
      </div>
    </footer>
  );
}
