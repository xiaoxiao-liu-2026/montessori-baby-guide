import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/growth-calendar", label: "成长月历" },
  { href: "/home-practice", label: "居家练习" },
  { href: "/toy-guide", label: "玩具怎么选" },
  { href: "/home-montessori", label: "蒙氏轻理解" },
  { href: "/mom-faq", label: "妈妈不慌" },
  { href: "/downloads", label: "资料下载" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-oatmeal/80 bg-cream/94 backdrop-blur">
      <div className="page-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-[0] text-sageDark">
          宝宝成长，妈妈不慌
        </Link>
        <nav aria-label="主导航" className="hidden flex-wrap justify-end gap-1 text-sm text-ink/72 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-mist hover:text-sageDark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex min-h-10 cursor-pointer list-none items-center rounded-full border border-oatmeal bg-white px-4 text-sm font-medium text-ink/72">
            菜单
          </summary>
          <nav
            aria-label="移动端主导航"
            className="absolute right-0 top-12 z-40 grid w-44 gap-1 rounded-lg border border-oatmeal bg-white p-2 text-sm text-ink/72 shadow-soft"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 transition hover:bg-mist hover:text-sageDark"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
