export default function SectionTitle({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-violet-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
      {text && <p className="mt-4 max-w-2xl leading-7 text-zinc-400">{text}</p>}
    </div>
  );
}
