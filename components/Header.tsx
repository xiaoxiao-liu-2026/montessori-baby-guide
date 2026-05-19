import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/growth-calendar", label: "成长月历" },
  { href: "/home-practice", label: "居家练习" },
  { href: "/toy-guide", label: "玩具怎么选" },
  { href: "/home-montessori", label: "蒙氏轻理解" },
  { href: "/mom-faq", label: "妈妈不慌" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-oatmeal/80 bg-cream/92 backdrop-blur">
      <div className="page-shell flex min-h-16 flex-col justify-center gap-3 py-3 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-lg font-semibold tracking-[0] text-sageDark">
          宝宝成长，妈妈不慌
        </Link>
        <nav aria-label="主导航" className="flex flex-wrap gap-2 text-sm text-ink/72">
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
      </div>
    </header>
  );
}
