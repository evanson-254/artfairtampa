import { ArrowRight } from "lucide-react";
import EventTicker from "./EventTicker";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#071629]">
      {/* Background Vimeo */}
      <iframe
        src="https://player.vimeo.com/video/1161131988?background=1&autoplay=1&muted=1&loop=1"
        title="Art exhibition hall"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        allow="autoplay; fullscreen; picture-in-picture"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071629]/90 via-[#071629]/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071629] via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pt-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#D4A937]">
              One of Florida's Largest Art Fairs
            </p>

            <h1 className="font-serif text-[58px] leading-[0.95] text-white md:text-[88px]">
              <span className="block italic font-normal">Art Fair</span>
              <span className="block text-[#D4A937]">Tampa</span>
            </h1>

            {/* Event Info */}
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="border-l-2 border-[#C41E3A] pl-4">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A937]">
                  Date
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  October 15–18, 2026
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  VIP Preview · Oct 15
                </p>
              </div>

              <div className="border-l-2 border-[#C41E3A] pl-4">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A937]">
                  Venue
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Tampa Convention Center
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  333 S Franklin St — Free Admission
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to={"/artist-application"}>
                <button className="group flex items-center gap-2 bg-[#C41E3A] px-6 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#A81832]">
                  Apply to Exhibit
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </Link>
              <Link to={"/sponsor-application"}>
                <button className="group flex items-center gap-2 border border-white/30 bg-white/5 px-6 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white hover:text-black">
                  Become a Sponsor
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

          </div>
          <div className="mt-12">
            <EventTicker />
          </div>

        </div>
      </div>

      {/* Location */}
      <div className="absolute right-6 top-24 z-10 hidden md:block">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          Tampa, FL
        </p>
      </div>
    </section>
  );
}