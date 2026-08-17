import { ArrowRight } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#C8102E] py-24 text-white">
      {/* Watermark */}
      <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2">
        <h2 className="font-serif text-[180px] italic leading-none text-white/8">
          Know
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
            Stay Connected
          </p>

          <h2 className="font-serif text-4xl italic leading-[1.05] md:text-5xl">
            America's leading visual artists,
           
            right here in Tampa.
          </h2>

          <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/85">
            Get exclusive updates, early access announcements, and artist
            reveals before anyone else.
          </p>

          {/* Newsletter Form */}
          <form className="mt-10 flex max-w-xl flex-col overflow-hidden border border-white/20 md:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/10 px-5 py-4 text-white placeholder:text-white/55 focus:outline-none"
            />

            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-[#06152B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.25em] transition hover:bg-[#0B2345]"
            >
              Count Me In
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}