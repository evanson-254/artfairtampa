import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#06152B] text-white">
      <div className="mx-auto max-w-7xl px-8 py-14">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-[44px] italic leading-none">
              Art Fair Tampa
            </h2>

            <p className="mt-5 max-w-xs text-[14px] leading-7 text-white/65">
              Four days of creativity, community, and art — all under one roof
              at the Tampa Convention Center.
            </p>
          <div className="mt-3 space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 transition-colors duration-200 hover:border-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                className="w-6 h-6 transition-colors duration-200 group-hover:stroke-red-500">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 transition-colors duration-200 hover:border-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                className="w-6 h-6 transition-colors duration-200 group-hover:stroke-red-500">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            </div>


          </div>

          {/* Event Info */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
              Event Info
            </p>

            <div className="space-y-3 text-[14px] text-white/85">
              <p>October 15–18, 2026</p>
              <p>Tampa Convention Center</p>
              <p>333 S Franklin St, Tampa, FL 33602</p>
              <p className="font-medium text-[#D4A937]">Free Admission</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
              Navigate
            </p>

            <nav className="flex flex-col gap-3 text-[14px]">
              <Link to="/artists" className="text-white/80 hover:text-[#D4A937]">
                Artists
              </Link>

              <Link to="/events" className="text-white/80 hover:text-[#D4A937]">
                Events
              </Link>

              <Link to="/artist-application" className="text-white/80 hover:text-[#D4A937]">
                Artist Application
              </Link>

              <Link to="/sponsor-application" className="text-white/80 hover:text-[#D4A937]">
                Become a Sponsor
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-white/35 md:flex-row">
          <p>© 2026 TT Art Collective — All Rights Reserved</p>

          <p className="hover:text-white/60 transition">
            Crafted by DaveBuilds.Tech
          </p>
        </div>
      </div>
    </footer>
  );
}