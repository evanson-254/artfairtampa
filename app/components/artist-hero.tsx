import React, { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router";

/**
 * Art Fair Tampa — Artists Page
 * Replica of the "Discover 300+ Talented Artists" page.
 * Nav and footer intentionally excluded per spec.
 */

const MEDIUMS = ["All Artists", "Painting", "Sculpture", "Digital Art", "Mixed Media", "Photography"];
const SORTS = ["Name A-Z", "Name Z-A"];
const ARTISTS = [
  {
    name: "Alejandro Kapetanakis",
    tags: ["Painting"],
    img: "/artist-1.webp",
  },
  {
    name: "Alexandra Zecevic",
    tags: ["Painting"],
    img: "/artist-2.webp",
  },
  {
    name: "Alice Absolutely",
    tags: ["Painting", "Digital Art"],
    img: "/artist-3.webp",
  },
  {
    name: "Anthony (Tony) Adams",
    tags: ["Painting", "Mixed Media"],
    img: "/artist-4.webp",
  },
  {
    name: "Becky Wanamaker",
    tags: ["Mixed Media"],
    img: "/artist-5.webp",
  },
  {
    name: "Brinda Pamulapati",
    tags: ["Painting"],
    img: "/artist-6.webp",
  },
  {
    name: "Cinde Howell",
    tags: ["Painting"],
    img: "/artist-7.webp",
  },
  {
    name: "David McClain",
    tags: ["Painting"],
    img: null,
  },
  {
    name: "Detlef Gotzens",
    tags: ["Painting", "Sculpture"],
    img: "/artist-9.webp",
  },
  {
    name: "Hanna Rachocka",
    tags: ["Painting", "Sculpture"],
    img: "/artist-10.webp",
  },
  {
    name: "Jack Reilly",
    tags: ["Painting"],
    img: "/artist-11.webp",
  },
  {
    name: "Jeffrey Thomson",
    tags: ["Painting", "Sculpture"],
    img: "/artist-12.webp",
  },
  {
    name: "Joseph DiCarlo",
    tags: ["Painting"],
    img: "/artist-13.webp",
  },
  {
    name: "Julia Klimova",
    tags: ["Painting"],
    img: "/artist-14.webp",
  },
  {
    name: "Karol Hilker",
    tags: ["Painting"],
    img: "/artist-15.webp",
  },
  {
    name: "Kate James",
    tags: ["Painting"],
    img: "/artist-16.webp",
  },
  {
    name: "Kostar Kustoms",
    tags: ["Painting", "Digital Art"],
    img: "/artist-17.webp",
  },
  {
    name: "Laura Hughes",
    tags: ["Painting"],
    img: "/artist-18.webp",
  },
  {
    name: "Merideth Carballal",
    tags: ["Painting", "Mixed Media"],
    img: "/artist-19.webp",
  },
  {
    name: "Nelson Perez",
    tags: ["Painting"],
    img: "/artist-20.webp",
  },
  {
    name: "Patricia Kluwe Gobbo",
    tags: ["Painting", "Mixed Media"],
    img: "/artist-21.webp",
  },
  {
    name: "Pratima Aravabhoomi",
    tags: ["Mixed Media"],
    img: "/artist-22.webp",
  },
  {
    name: "Shannon Tierney",
    tags: ["Painting", "Mixed Media"],
    img: "/artist-23.webp",
  },
  {
    name: "stephen champlin",
    tags: ["Painting"],
    img: "/artist-24.webp",
  },
  {
    name: "Tricia Sham",
    tags: ["Painting", "Sculpture"],
    img: "/artist-25.webp",
  },
  {
    name: "Vivian Lee",
    tags: ["Painting"],
    img: "/artist-26.webp",
  },
  {
    name: "Wai Ching Schroeder",
    tags: ["Painting"],
    img: "/artist-27.webp",
  },
];
// const ARTISTS = [
//   { name: "Alejandro Kapetanakis", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=51" },
//   { name: "Alexandra Zecevic", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=47" },
//   { name: "Alice Absolutely", tags: ["Painting", "Digital Art"], img: "https://i.pravatar.cc/500?img=32" },
//   { name: "Anthony (Tony) Adams", tags: ["Painting", "Mixed Media"], img: "https://i.pravatar.cc/500?img=13" },
//   { name: "Becky Wannamaker", tags: ["Mixed Media"], img: "https://i.pravatar.cc/500?img=45" },
//   { name: "Brinda Pamulaparti", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=44" },
//   { name: "Cindie Howell", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=29" },
//   { name: "David McClain", tags: ["Painting"], img: null },
//   { name: "Detlef Golzare", tags: ["Painting", "Sculpture"], img: "https://i.pravatar.cc/500?img=53" },
//   { name: "Hanna Rischock", tags: ["Sculpture"], img: null, qr: true },
//   { name: "Jack Reilly", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=14" },
//   { name: "Jeffrey Thomson", tags: ["Painting", "Sculpture"], img: "https://i.pravatar.cc/500?img=15" },
//   { name: "Joseph DiCarlo", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=52" },
//   { name: "Julia Klimova", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=30" },
//   { name: "Karol Hillier", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=48" },
//   { name: "Kate James", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=31" },
//   { name: "Kostiar Kuzmina", tags: ["Painting", "Digital Art"], img: "https://i.pravatar.cc/500?img=33" },
//   { name: "Laura Hughes", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=35" },
//   { name: "Merideth Corbatal", tags: ["Painting", "Mixed Media"], img: "https://i.pravatar.cc/500?img=36" },
//   { name: "Nelson Perez", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=17" },
//   { name: "Patricia Kluee Galisteo", tags: ["Painting", "Mixed Media"], img: "https://i.pravatar.cc/500?img=38" },
//   { name: "Pratima Aravabhoomi", tags: ["Painting", "Mixed Media"], img: "https://i.pravatar.cc/500?img=39" },
//   { name: "Shannon Tierney", tags: ["Painting", "Mixed Media"], img: "https://i.pravatar.cc/500?img=40" },
//   { name: "Stephen Champlin", tags: ["Painting"], img: null },
//   { name: "Tricia Elsom", tags: ["Painting", "Sculpture"], img: "https://i.pravatar.cc/500?img=41" },
//   { name: "Vivien Lee", tags: ["Painting"], img: null },
//   { name: "Wei Ching Schroeder", tags: ["Painting"], img: "https://i.pravatar.cc/500?img=42" },
// ];

const TAG_STYLES =
  "inline-block border border-rose-400/70 text-rose-500 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 ";

function ArtistCard({ artist }:{artist:any}) {
  return (
    <div className="group cursor-pointer hover:bg-white/10 transition-all duration-300">
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
        {artist.qr ? (
          <div className="flex h-full w-full items-center justify-center bg-white p-8">
            <div
              className="h-full w-full bg-[repeating-linear-gradient(45deg,#111_0,#111_4px,transparent_4px,transparent_8px)]"
              aria-hidden
            />
          </div>
        ) : artist.img ? (
          <img
            src={artist.img}
            alt={artist.name}
            className="h-full w-full object-cover grayscale-0 transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#f2efe8]">
            <span className="font-serif text-4xl italic text-neutral-300">
              {artist.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-3 font-serif font-bold text-[13px] text-[#141a2b]">
        {artist.name}
      </h3>
      <div className="mt-2 flex flex-wrap gap-1.5 py-3">
        {artist.tags.map((t:any) => (
          <span key={t} className={TAG_STYLES}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ArtistsPage() {
  const [query, setQuery] = useState("");
  const [medium, setMedium] = useState("All Artists");
  const [sort, setSort] = useState("Name A-Z");

  const filtered = useMemo(() => {
    let list = ARTISTS.filter((a) =>
      a.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (medium !== "All Artists") {
      list = list.filter((a) => a.tags.includes(medium));
    }
    list = [...list].sort((a, b) =>
      sort === "Name A-Z"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    return list;
  }, [query, medium, sort]);

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0d1220]">
        <img
          src="/Art-Exhibition-Scene.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1220] via-[#0d1220]/1 to-[#0d1220]/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400/90">
            Meet the Artists
          </p>
          <h1 className="max-w-xl font-serif text-4xl italic leading-tight text-white sm:text-5xl">
            Discover 300+
          </h1>
          <h2 className="max-w-xl font-serif text-4xl italic leading-tight text-white/40 sm:text-5xl">
            Talented Artists
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Contemporary artists from across the country showcasing painting,
            sculpture, photography, ceramics, and more.
          </p>
        </div>
      </section>

      {/* SEARCH / FILTER BAR */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-1 flex-col gap-1">
            {/* <label className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              Search by artist name
            </label> */}
            <div className="flex items-stretch border-b border-neutral-300 focus-within:border-neutral-500">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by artist name"
                className="max-w-35! bg-transparent py-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
              />
            </div>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#c22138] px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#a11c30] sm:self-end"
          >
            {/* <Search size={14} strokeWidth={3} /> */}
            Search
          </button>

          <div className="flex items-center gap-1">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              Medium
            </label>
            <select
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              className="border-b border-neutral-300 bg-transparent py-2 text-sm font-medium tesxt-[#c22138] outline-none"
            >
              {MEDIUMS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border-b border-neutral-300 bg-transparent py-2 text-sm font-medium tesxt-amber-600 outline-none"
            >
              {SORTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* ARTIST GRID */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-neutral-400">
            No artists match your search.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-x-1 gap-y-0 sm:grid-cols-3 lg:grid-cols-4 ">
            {filtered.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        )}
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#0d1220]">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400/90">
            For Artists
          </p>
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">
            Want to Showcase Your Art?
          </h2>
          <Link to={"/artist-application"}>
          <button
            type="button"
            className="mt-8 flex items-center gap-2 border border-white/70 px-7 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0d1220]"
          >
            Apply to Exhibit
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}