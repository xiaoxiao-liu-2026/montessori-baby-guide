type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium text-sageDark">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-[0] text-ink md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink/72">{description}</p>
      ) : null}
    </div>
  );
}
