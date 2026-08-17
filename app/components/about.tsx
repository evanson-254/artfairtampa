const features = [
  "300+ artists from across the nation",
  "FREE admission for all attendees",
  "Live art demonstrations throughout the day",
  "Meet and connect with the artists",
  "VIP opening night with exclusive preview",
  "Family-friendly activities and workshops",
];

export default function AboutFair() {
  return (
    <section className="bg-[#F3F0E8] py-24 text-[#0B1B33]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#C41E3A]">
          About the Fair
        </p>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <h2 className="font-serif text-3xl leading-[0.95] md:text-4xl">
              <span className="block italic font-normal">Where Art Meets Community</span>
            </h2>

            <div className="mt-10 space-y-6 text-[15px] leading-8 text-[#364152]">
              <p>
                Art Fair Tampa brings together 300+ talented artists from
                across the country for four days of creativity, inspiration, and
                community. Explore stunning works across painting, sculpture,
                photography, mixed media, and more — all under one roof at the
                Tampa Convention Center.
              </p>

              <p>
                Whether you're a seasoned collector or discovering art for the
                first time, you'll find pieces that speak to you. Meet the
                artists, learn about their creative process, and take home
                something truly special.
              </p>

              <p className="font-semibold text-[#0B1B33]">
                Admission is completely FREE. Come hungry for art.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="divide-y divide-[#D8D2C6]">
            {features.map((item, index) => (
              <div key={item} className="flex gap-5 py-5">
                <span className="w-8 flex-shrink-0 font-serif text-xl italic text-[#C41E3A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[15px] leading-7 text-[#364152]">
                  <span className="font-semibold text-[#0B1B33]">
                    {item.split(" ")[0]}
                  </span>{" "}
                  {item.substring(item.indexOf(" ") + 1)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}