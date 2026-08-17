export default function PartnersSponsors() {
  const sponsors = [
    { name: "GETIN", logo: "/getin-logo-1-red.png" , link: "https://getin.com"},
    { name: "Visit Tampa Bay", logo: "/treasure.svg" , link: "https://www.visittampabay.com"},
    { name: "One Of Us", logo: "/one-of-us.webp" , link: "https://www.oneofus.org"},
  ];

  return (
    <section className="bg-[#F3F0E8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mx-auto mb-3 h-px w-14 bg-[#D4A937]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6C7685]">
            Our Partners & Sponsors
          </p>
          <div className="mx-auto mt-3 h-px w-14 bg-[#D4A937]" />
        </div>

        {/* Top Row */}
        <div className="grid border-y border-[#D8D2C6] md:grid-cols-3">
          {sponsors.map((item, i) => (
            <div
              key={item.name}
              className={`flex h-44 items-center justify-center p-8 transition hover:bg-white/40 ${
                i !== sponsors.length - 1 ? "md:border-r md:border-[#D8D2C6]" : ""
              }`}
            >
                <a href={item.link} target="_blank" rel="noreferrer">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-20 w-auto object-contain  transition duration-300 hover:grayscale-0"
              />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center border-b border-[#D8D2C6] py-12">
            <a href="https://www.creativeloafing.com/" target="_blank" rel="noreferrer">
          <img
            src="/creative-loafing.webp"
            alt="Creative Loafing"
            className="h-16 w-auto object-contain  transition hover:grayscale-0"
          />
          </a>
        </div>
      </div>
    </section>
  );
}