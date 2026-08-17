type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-zinc-400 leading-7">{subtitle}</p>
      )}
    </div>
  );
}