type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-oatmeal bg-cream">
      <div className="page-shell py-14 md:py-20">
        <p className="text-sm font-medium text-sageDark">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[0] text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-9 text-ink/72 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
