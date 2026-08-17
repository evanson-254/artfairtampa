import { useEffect, useState } from "react";

const targetDate = new Date("2026-10-15T09:00:00").getTime();

export default function CountdownSection() {
  const [time, setTime] = useState(getTime());

  function getTime() {
    const now = Date.now();
    const diff = Math.max(targetDate - now, 0);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "300", suffix: "", label: "CURATED ARTISTS" },
    { value: "100", suffix: "K+", label: "SQ FT" },
    { value: "20", suffix: "K+", label: "VISITORS" },
    { value: "4", suffix: "", label: "DAYS" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#06152B] text-white">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="font-serif text-[240px] italic leading-none text-white/[0.03]">
          2026
        </h1>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#D4A937]">
            VIP Preview — October 15, 2026
          </p>

          <h2 className="mt-4 font-serif text-3xl italic md:text-4xl">
            Countdown to the Fair
          </h2>
        </div>

        {/* Timer */}
        <div className="mt-16 flex items-start justify-center gap-6 md:gap-14">
          {[
            ["DAYS", time.days],
            ["HOURS", time.hours],
            ["MINUTES", time.minutes],
            ["SECONDS", time.seconds],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <div className="font-serif text-5xl italic md:text-6xl">
                {String(value).padStart(2, "0")}
              </div>
              <p className="mt-2 text-[11px] font-semibold tracking-[0.25em] text-white/45">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto grid max-w-7xl md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`py-10 text-center ${
                index !== stats.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <h3 className="font-serif text-5xl italic text-[#D7264E]">
                {item.value}
                {item.suffix}
              </h3>

              <p className="mt-3 text-[11px] font-semibold tracking-[0.28em] text-white/45">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}