import { ArrowUpRight } from "lucide-react";

export default function VenueSection() {
  const stats = [
    {
      title: "Location",
      lines: ["333 S Franklin St.", "Tampa, FL 33602"],
    },
    {
      title: "Dates",
      lines: ["October 15–18, 2026", "VIP Preview: Oct. 15"],
    },
    {
      title: "By The Numbers",
      lines: [
        "300 Curated Artists",
        "100,000+ Sq ft of art",
        "20,000+ Expected Visitors",
        "4 Days of Creativity",
      ],
    },
    {
      title: "Why This Venue?",
      lines: [
        "Rated #1 convention center in North America.",
        "World-class facilities, prime downtown location,",
        "unmatched accessibility.",
      ],
    },
  ];

  return (
    <section className="bg-[#F3F0E8] py-16">
      <div className="mx-auto max-w-7xl px-8">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C41E3A]">
              The Venue
            </p>

            <h2 className="mt-2 font-serif text-[40px] italic leading-none text-[#06152B]">
              Tampa Convention Center
            </h2>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              America's #1 Ranked Venue
            </p>
          </div>
          <a href="https://maps.app.goo.gl/1a9jCkb26q1w4cRm7" target="_blank" rel="noreferrer">
            <button className="mt-8  items-center gap-2 border-b border-[#06152B] pb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#06152B] md:flex">
              Directions
              <ArrowUpRight size={13} />
            </button>
          </a>
        </div>

        {/* Panorama Image */}
        <div className="overflow-hidden rounded-sm">
          <img
            src="/tampa-venue.webp"
            alt="Tampa Convention Center"
            className="h-[340px] w-full object-cover"
          />
        </div>

        {/* Info Grid */}
        <div className="mt-10 grid border-t border-[#D8D2C6] md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.title}
              className={`pt-8 ${index !== stats.length - 1
                  ? "md:border-r md:border-[#D8D2C6]"
                  : ""
                } px-6`}
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C41E3A]">
                {item.title}
              </p>

              <div className="space-y-2">
                {item.lines.map((line) => (
                  <p
                    key={line}
                    className="text-[14px] leading-6 text-[#314155]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Directions */}
        <div className="mt-8 hidden">
          <button className="flex items-center gap-2 border-b border-[#06152B] pb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#06152B]">
            Directions
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}