export default function VIPOpeningNight() {
  const perks = [
    "Private artist meet-and-greets",
    "Complimentary wine & hors d'oeuvres",
    "First access to purchase artwork",
    "Live music & special performances",
  ];

  return (
    <section className="bg-[#F3F0E8] py-20">
      <div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-2">
        {/* Left Panel */}
        <div className="bg-[#F3F0E8] p-10 lg:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C41E3A]">
            VIP Opening Night
          </p>

          <h2 className="mt-3 font-serif text-3xl italic leading-tight text-[#06152B] md:text-4xl">
            October 15, 2026
          </h2>

          <p className="mt-8 max-w-lg text-[12px] leading-7 text-[#5D6675]">
            Be among the first to preview the collection, meet the artists,
            and acquire works before the doors open to the public.
          </p>

          <ul className="mt-10 space-y-5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                <span className="text-[15px] text-[#253245]">{perk}</span>
              </li>
            ))}
          </ul>

          {/* Presented By */}
          <div className="mt-12 rounded-sm flex flex-1 justify-center items-center border border-[#D8D2C6] bg-white p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9A227]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C41E3A]">
                Presented By
              </p>
            </div>
              <div className="h-10 w-0.5 bg-gray-200" />

            <div className="flex-1 flex text-center items-center justify-center">
              <img
                src="/one-of-us.webp"
                alt="GETIN"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-[#06152B] p-10 text-white lg:p-12">
          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#D4A937]">
            Request VIP Access
          </p>

          <h3 className="mt-5 text leading-8 text-white/90">
            Space is limited. Join the list to receive your exclusive VIP
            invitation.
          </h3>

          <form className="mt-12 space-y-8">
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border-b border-white/20 bg-transparent pb-3 text-white placeholder:text-white/40 focus:border-[#D4A937] focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border-b border-white/20 bg-transparent pb-3 text-white placeholder:text-white/40 focus:border-[#D4A937] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A227] py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#06152B] transition hover:bg-[#D8B84A]"
            >
              Stay Informed
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}