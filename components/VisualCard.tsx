type VisualCardProps = {
  image: string;
  title: string;
  description?: string;
  stage?: string;
  imageAlt?: string;
};

export function VisualCard({
  image,
  title,
  description,
  stage,
  imageAlt
}: VisualCardProps) {
  const isPhoto =
    image.startsWith("http") || image.endsWith(".png") || image.endsWith(".jpg");

  return (
    <article className="overflow-hidden rounded-lg border border-oatmeal bg-white shadow-sm">
      <div className={isPhoto ? "bg-stone" : "bg-stone p-4"}>
        <img
          src={image}
          alt={imageAlt ?? title}
          className={
            isPhoto
              ? "aspect-[4/3] w-full object-cover"
              : "mx-auto aspect-[4/3] w-full max-w-[260px] object-contain"
          }
        />
      </div>
      <div className="p-5">
        {stage ? (
          <p className="mb-3 inline-flex rounded-full bg-mist px-3 py-1 text-xs font-medium text-sageDark">
            {stage}
          </p>
        ) : null}
        <h3 className="text-lg font-semibold tracking-[0] text-ink">{title}</h3>
        {description ? (
          <p className="mt-3 text-[15px] leading-7 text-ink/74">{description}</p>
        ) : null}
      </div>
    </article>
  );
}
