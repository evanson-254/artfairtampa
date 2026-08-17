export default function EventTicker() {
  const text =
    "TAMPA • OCTOBER 15–18, 2026 • TAMPA CONVENTION CENTER • ART FAIR TAMPA • ";

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#071629] py-2">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="mx-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}