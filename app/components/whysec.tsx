import { useState } from "react";

const stats = [
  {
    number: "300+",
    title: "Curated Artists",
    dot: "#C41E3A",
    description:
      "Discover contemporary artists from across the nation, showcasing diverse styles and mediums selected by our expert curatorial team.",
  },
  {
    number: "#1",
    title: "Ranked Venue in America",
    dot: "#C9A227",
    description:
      "The Tampa Convention Center — consistently ranked America's best — offers world-class facilities in the heart of downtown.",
  },
  {
    number: "20K+",
    title: "Expected Visitors",
    dot: "#0EA5C6",
    description:
      "Connect with serious collectors, gallery owners, and art lovers drawn from across the Southeast United States.",
  },
];

export default function WhyArtFair() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F3F0E8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 flex items-center gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C41E3A]">
            Why Art Fair Tampa
          </p>
          <div className="h-px flex-1 bg-[#D8D2C6]" />
        </div>

        {/* Cards */}
        <div className="grid border-y border-[#D8D2C6] md:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={item.title}
              onMouseEnter={() => setActive(index)}
              className={`cursor-pointer border-[#D8D2C6] p-10 transition-all duration-300 ${
                index !== stats.length - 1 ? "md:border-r" : ""
              } ${
                active === index
                  ? "bg-[#E9E3D7]"
                  : "bg-[#F3F0E8] hover:bg-[#EEE8DC]"
              }`}
            >
              {/* Top row */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.25em] text-[#9CA3AF]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.dot }}
                />
              </div>

              {/* Number */}
              <h2 className="font-serif text-6xl italic leading-none text-[#0B1B33]">
                {item.number}
              </h2>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-[#0B1B33]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-[15px] leading-7 text-[#596579]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}