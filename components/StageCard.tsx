import Link from "next/link";
import { ArrowRight } from "lucide-react";

type StageCardProps = {
  age: string;
  focus: string;
  practice: string;
  image: string;
  href?: string;
};

export function StageCard({ age, focus, practice, image, href }: StageCardProps) {
  const body = (
    <>
      <div className="flex gap-4">
        <img
          src={image}
          alt={`${age}可能的发展场景`}
          className="aspect-[4/3] w-32 shrink-0 rounded-lg bg-stone object-cover sm:w-36"
        />
        <div>
          <p className="text-sm font-semibold text-sageDark">{age}</p>
          <h3 className="mt-2 text-lg font-semibold leading-7 tracking-[0] text-ink">
            可能的发展重点：{focus}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-7 text-ink/72">{practice}</p>
      <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sageDark">
        {href ? (
          <>
            查看详细指南
            <ArrowRight size={16} />
          </>
        ) : (
          "查看支持方向"
        )}
      </p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="rounded-lg border border-oatmeal bg-white p-4 transition hover:-translate-y-0.5 hover:border-sage/50 hover:shadow-soft"
      >
        {body}
      </Link>
    );
  }

  return (
    <article className="rounded-lg border border-oatmeal bg-white p-4 shadow-sm">
      {body}
    </article>
  );
}
