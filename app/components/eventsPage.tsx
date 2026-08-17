import React, { useMemo, useState } from "react";

/**
 * Art Fair Tampa — Events Page
 * Replica of the "Four Days of Art, Workshops & Demonstrations" page.
 * Nav and footer intentionally excluded per spec.
 *
 * Palette:
 *   cream bg   #F5F0E8
 *   navy       #0B1220 / #0D131D
 *   red        #C8102E
 *   amber      #E8B84B
 */

const LEGEND = [
  { label: "Artist Demos", color: "#2FB4A8" },
  { label: "Workshops", color: "#E0A526" },
  { label: "Panel Discussions", color: "#12141C" },
  { label: "Special Events", color: "#D0173A" },
];

const DAYS = [
  { key: "all", label: "All Days", sub: null },
  { key: "day1", label: "Day 1", sub: "Oct 15" },
  { key: "day2", label: "Day 2", sub: "Oct 16" },
  { key: "day3", label: "Day 3", sub: "Oct 17" },
  { key: "day4", label: "Day 4", sub: "Oct 18" },
];

// No event data has been published yet — mirrors the live site's empty state.
const EVENTS:any = [];

export default function EventsPage() {
  const [activeDay, setActiveDay] = useState("all");

  const filteredEvents = useMemo(
    () => EVENTS.filter((e:any) => activeDay === "all" || e.day === activeDay),
    [activeDay]
  );

  return (
    <div className="w-full bg-[#F5F0E8]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0D131D]">
        <img
          src="/Art-Gallery-Discussion.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D131D] via-[#0D131D]/1 to-[#0D131D]/40" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400/90">
            Events
          </p>
          <h1 className="max-w-2xl font-serif text-3xl italic leading-tight text-white sm:text-5xl">
            Four Days of Art,
          </h1>
          <h2 className="max-w-2xl font-serif text-3xl italic leading-tight text-white/40 sm:text-5xl">
            Workshops &amp; Demonstrations
          </h2>
          <div className="mt-6 flex flex-col gap-2 text-xs font-medium text-white/70 sm:flex-row sm:items-center sm:gap-4 sm:text-sm">
            <span>October 15–18, 2026</span>
            <span className="hidden text-white/30 sm:inline">•</span>
            <span>Tampa Convention Center</span>
            <span className="hidden text-white/30 sm:inline">•</span>
            <span>Daily 10:00 AM – 6:00 PM</span>
          </div>
        </div>
      </section>

      {/* LEGEND + DAY TABS + LIST */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        {/* Legend */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {LEGEND.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Day tabs */}
        <div className="mt-6 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          {DAYS.map((day) => {
            const isActive = activeDay === day.key;
            return (
              <button
                key={day.key}
                type="button"
                onClick={() => setActiveDay(day.key)}
                className={[
                  "flex flex-col items-center justify-center rounded-sm px-4 py-3 transition sm:min-w-[92px]",
                  day.key === "all" ? "col-span-3 sm:col-span-1" : "",
                  isActive
                    ? "bg-[#C8102E] text-white"
                    : "bg-white text-neutral-700 hover:bg-neutral-50",
                ].join(" ")}
              >
                <span className="text-xs font-bold uppercase tracking-widest">
                  {day.label}
                </span>
                {day.sub && (
                  <span
                    className={[
                      "mt-0.5 text-[10px] font-medium uppercase tracking-wide",
                      isActive ? "text-white/70" : "text-neutral-400",
                    ].join(" ")}
                  >
                    {day.sub}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-t border-neutral-300/70" />

        {/* Event list / empty state */}
        <div className="flex min-h-[180px] items-center justify-center py-16">
          {filteredEvents.length === 0 ? (
            <p className="text-sm text-neutral-400">
              No events scheduled for this day.
            </p>
          ) : (
            <ul className="w-full space-y-4">
              {filteredEvents.map((event:any) => (
                <li
                  key={event.id}
                  className="rounded-sm bg-white p-4 shadow-sm"
                >
                  {event.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* STAY UPDATED CTA BANNER */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col items-center rounded-sm bg-[#0B1220] px-6 py-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400/90">
            Stay Updated
          </p>
          <h3 className="font-serif text-2xl italic text-white sm:text-3xl">
            Event Changes &amp; New Workshops
          </h3>
          <p className="mt-3 max-w-md text-xs text-white/60 sm:text-sm">
            Get notified if event times change or new sessions are added.
          </p>
          <button
            type="button"
            className="mt-7 border border-white/70 px-7 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0B1220]"
          >
            Stay Informed
          </button>
        </div>
      </section>
    </div>
  );
}