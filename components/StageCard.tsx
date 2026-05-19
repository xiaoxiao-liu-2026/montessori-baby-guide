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
          className="h-24 w-24 shrink-0 rounded-lg bg-[#E8E2D8] object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-sageDark">{age}</p>
          <h3 className="mt-2 text-lg font-semibold leading-7 tracking-[0] text-ink">
            可能的发展重点：{focus}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-ink/68">{practice}</p>
      {href ? (
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sageDark">
          查看示例内容
          <ArrowRight size={16} />
        </p>
      ) : null}
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
