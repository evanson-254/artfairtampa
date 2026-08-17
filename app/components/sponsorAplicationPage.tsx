import React, { useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import PartnersSponsors from "./sponsor";

/**
 * Art Fair Tampa — Sponsor Application Page
 * Sections: Hero, Stats, About, Mission, Why Sponsor (navy), Event Audience,
 * Sponsorship Packages (5 tiers), Press/Advertising, Partner logos,
 * Sponsor Application Form.
 * Nav and footer intentionally excluded per spec.
 *
 * Palette:
 *   cream panel   #F5F1E8
 *   navy          #0B1320
 *   red           #C8102E
 *   gold border   #C9A15A (title tier highlight)
 */

const STATS = [
  {
    index: "01",
    figure: "50K+",
    title: "Projected Reach",
    body: "Up to 50,000+ total attendees across four days — 8,000–15,000 visitors per day at Tampa's first major indoor fine art fair.",
  },
  {
    index: "02",
    figure: "13.6M",
    title: "Press Impressions",
    body: "Our initial press release reached 13.6 million total views with Tucker Hall — and nationwide marketing is just getting started.",
  },
  {
    index: "03",
    figure: "300+",
    title: "Artist Booths",
    body: "More than 100,000 square feet of exhibition space featuring leading and emerging fine artists from across the nation and world.",
  },
];

const MISSION = [
  {
    title: "Strategy",
    body: "Create an event that will leave a lasting impression — cementing Tampa Bay's place as a destination for art, design, and creativity.",
  },
  {
    title: "Goals",
    body: "Build an inaugural fine art fair that will be known as one of the nation's and world's leading art events.",
  },
  {
    title: "Community",
    body: "Become an event the community knows as a safe place for expression, creativity, and exploration — diving into the minds of evolutionary fine artists.",
  },
];

const WHY_SPONSOR = [
  {
    title: "Creating a Legacy",
    body: "Art Fair Tampa will have a lasting impact inaugurally on the Tampa Bay community — boosting local business, hospitality, and bringing global attention to the area.",
  },
  {
    title: "Making an Impact",
    body: "With passion and accountability for the art community at the forefront of our mission and values, we are building an inaugural event that will grow to be one of the largest in the United States.",
  },
  {
    title: "Nationwide Network",
    body: "Art Fair Tampa brings the nation's leading and most influential artists to Tampa. Sponsors receive exclusive access to VIP opening night and the awards ceremony, including a live auction of select award-winning art.",
  },
];

const AUDIENCE_LEFT = [
  "Art collectors",
  "Interior designers",
  "Entrepreneurs",
  "Hospitality groups",
  "High-income cultural consumers",
];
const AUDIENCE_RIGHT = ["Investors", "Architects", "Realtors", "Real estate developers"];

const TIERS = [
  {
    name: "Presenting / Title Sponsor",
    price: "$50,000",
    slots: "1 slot",
    limited: true,
    featured: true,
    perks: [
      "Company name before Title on all branding",
      "100 all-access tickets to Opening VIP Night + Awards Ceremony",
      "Premium waterfront booth + lounge space during fair",
      "Company named Best in Show Award",
      "Press release announcing cultural movement partnership",
      "Large brand activations — murals, sculpture, or custom creative experiences",
    ],
  },
  {
    name: "Premier Sponsor",
    price: "$25,000",
    slots: "1 slot",
    limited: true,
    perks: [
      "Company centered on all branding amongst sponsors",
      "50 all-access tickets to Opening VIP Night + Awards Ceremony",
      "Premium waterfront booth space during fair",
      "Company named Artist Award",
      "Press release announcing sponsorship",
      "Brand activations with logo on banners and custom artistic experiences",
    ],
  },
  {
    name: "Residences / Real Estate Sponsor",
    price: "$20,000",
    slots: "1 slot",
    limited: true,
    perks: [
      "Company logo on all branding",
      "40 all-access tickets to Opening VIP Night + Awards Ceremony",
      "Premium waterfront booth space during fair",
      "Company named Artist Award",
      "Press release announcing sponsorship",
      "Brand activations with logo on banners and custom artistic experiences",
    ],
  },
  {
    name: "Dali or Picasso Sponsor",
    price: "$10,000",
    slots: "2 slots",
    perks: [
      "Company logo on all branding",
      "30 all-access tickets to Opening VIP Night + Awards Ceremony",
      "Booth space during fair, strategically placed",
      "Company named Artist Award",
      "Press release announcing sponsorship",
      "Brand activations with logo on banners and custom artistic experiences",
    ],
  },
  {
    name: "Community Sponsor",
    price: "$5,000",
    slots: "10 slots",
    perks: [
      "Company logo on all branding",
      "20 all-access tickets to Opening VIP Night + Awards Ceremony",
      "Small booth space during fair",
      "Company named Artist Award",
      "Press release announcing sponsorship",
      "Brand activations with logo on banners and custom artistic experiences",
    ],
  },
];

const PRESS = [
  { name: "Yahoo Finance", url: "https://finance.yahoo.com/news/international-art-fair-launches-tampa-162000040.html" },
 { name:"The Artisan Magazine", url:"https://theartisanmagazine.com/art-fair-tampa/"},
  {name:"Modern Globe", url: "https://www.modernglobe.com/art-fair-tampa-set-to-make-a-bold-first-impression-on-the-waterfront/"},
  {name:"Travel & Tour World" , url: "https://www.travelandtourworld.com/news/article/united-states-hosts-new-inaugural-art-fair-tampa-in-2026-featuring-global-artists-and-local-talent-in-a-premier-cultural-event/"},
  {name:"That's So Tampa", url:"https://thatssotampa.com/art-fair-tampa-2026/"},
  {name:"PR Newswire", url: "https://www.prnewswire.com/news-releases/new-international-art-fair-launches-in-tampa-fall-2026-302687708.html"},
  {name: "Tampa Downtown", url: "https://www.tampasdowntown.com/events/art-fair-tampa/"},
  {name: "Laker Lutz News", url: "https://lakerlutznews.com/art-fair-tampa-organizers-are-thinking-big/"},
  {name:"NextDen Homes", url:"https://www.nextdenhomes.com/blog/Art-Fair-Tampa-to-debut-with-300--artists-in-major-three-day-event-this-fall",},
  {name: "Entrepreneur of Impact", url: "https://entrepreneurofimpact.org/2026/tyler-sirota"},
];

const PARTNER_LOGOS = ["GETIN", "Visit Tampa Bay", "One of Us", "Creative Loafing"];

const inputClasses =
  "w-full border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-red-400";

function FormField({ label, required, children }: { label: string, required?: boolean, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-widest text-[#0B1320]">
        {label} {required && <span className="text-[#C8102E]">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function SponsorApplicationPage() {
  const [tier, setTier] = useState("");
  const [heardAbout, setHeardAbout] = useState("");
  const [contactTime, setContactTime] = useState("");

  const applicationForm = useRef<HTMLFormElement>(null);
  const packagesSection = useRef<HTMLDivElement>(null);

  const handleFormScroll = () => {
    applicationForm.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handlePackagesScroll = () => {
    packagesSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1320]">
        <img
          src="/tampa-venue.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320] via-[#0B1320]/75 to-[#0B1320]/40" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400/90">
            Sponsorship — October 15–18, 2026
          </p>
          <h1 className="font-serif text-4xl italic leading-tight text-white sm:text-6xl">
            Become
          </h1>
          <h2 className="font-serif text-4xl italic leading-tight text-white/40 sm:text-6xl">
            a Sponsor
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-sm">
            A new international fine art cultural destination for collectors,
            creators, and art enthusiasts of Tampa Bay — at the Tampa
            Convention Center, 333 S Franklin St.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleFormScroll}
              type="button"
              className="flex items-center gap-2 bg-[#C8102E] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#a10d26]"
            >
              Apply to Sponsor
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={handlePackagesScroll}
              className="border border-white/70 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0B1320]"
            >
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
          Why Sponsor Art Fair Tampa?
        </p>

        <p className="max-w-2xl border-t border-neutral-800 pt-6 text-sm leading-relaxed text-neutral-500">
          Art Fair Tampa offers direct access to high-value audiences:
          collectors, interior designers, hospitality buyers, real estate
          developers, and culturally engaged consumers. Sponsorship isn&rsquo;t
          just visibility — it&rsquo;s alignment with a rising cultural movement.
        </p>

        <div className="mt-14 grid grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((s) => (
            <div key={s.index} className="px-0 py-8 sm:px-8 sm:py-0">
              <p className="text-xs text-neutral-300">{s.index}</p>
              <p className="mt-3 font-serif text-3xl italic text-[#C8102E] sm:text-4xl">
                {s.figure}
              </p>
              <h3 className="mt-2 text-base font-bold text-[#0B1320]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT THE FAIR */}
      <section className="bg-[#F5F1E8]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
            About the Fair
          </p>
          <h2 className="mb-8 max-w-2xl font-serif text-2xl italic text-[#0B1320] sm:text-3xl">
            Tampa&rsquo;s First Major Indoor Fine Art Fair
          </h2>
          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-neutral-600">
            <p>
              Art Fair Tampa has selected the Tampa Convention Center as the
              destination to host this international fine art exhibition. We
              have secured over 100,000 square feet of exhibition space to
              build more than 300 fine art booths featuring some of the
              nation and world&rsquo;s leading and emerging fine artists. We have
              partnered with Visit Tampa Bay to help bring the event to
              fruition.
            </p>
            <p>
              Tampa Convention Center capped off an award-winning 2025 by
              being named ConventionSouth&rsquo;s Best of the Best Convention
              Center — the top honor for the Readers&rsquo; Choice winner with the
              highest number of votes. This distinction highlights Tampa as a
              premier destination for meetings, corporate events,
              conventions, and association gatherings.
            </p>
            <p>
              Through TT Art Collective, we have cultivated Tampa&rsquo;s art scene
              over seven years — managing galleries at Epicurean Hotel, Hyde
              House Hyde Park, Hyde House Heights at Armature Works, AC Hotel
              by Marriott, and more. We are the preferred partner with Water
              Street Tampa, One of Us Events, and Armature Works to bring
              displaying artists and live painters to events across the
              region, and a long-standing contributor to Gasparilla Festival
              of the Arts.
            </p>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center gap-6">
          <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
            Our Mission
          </p>
          <div className="h-px w-full bg-neutral-200" />
        </div>
        <div className="grid grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {MISSION.map((m) => (
            <div key={m.title} className="px-0 py-8 sm:px-8 sm:py-0 first:sm:pl-0">
              <h3 className="text-base font-bold text-[#0B1320]">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ART FAIR TAMPA (navy) */}
      <section className="bg-[#0B1320]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400/90">
            Why Art Fair Tampa
          </p>
          <h2 className="mb-12 font-serif text-2xl italic text-white sm:text-3xl">
            Shaping Tampa&rsquo;s Creative Future
          </h2>
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {WHY_SPONSOR.map((w) => (
              <div key={w.title} className="px-0 py-8 sm:px-8 sm:py-0 first:sm:pl-0">
                <h3 className="text-base font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-white/50">
            Becoming a sponsor of Art Fair Tampa functions less like a
            logo-placement exercise and more like a declaration of cultural
            leadership — signaling that your brand is shaping the creative
            identity of a city in the middle of a cultural rise.
          </p>
        </div>
      </section>

      {/* EVENT AUDIENCE */}
      <section className="bg-[#F5F1E8]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
            Event Audience
          </p>
          <h2 className="mb-6 font-serif text-3xl italic text-[#0B1320] sm:text-4xl">
            3 Days, 1 VIP Opening Night
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
            Art Fair Tampa is a new, world-class contemporary art fair
            designed to spotlight emerging and established artists while
            cultivating a vibrant collector ecosystem in the Southeast. Our
            mission is to position Tampa as a cultural hub — a place where
            art, hospitality, and innovation converge.
          </p>
          <p className="mt-6 text-sm font-bold text-[#0B1320]">
            8,000–15,000 attendees per day · up to 50,000+ total
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
            <ul className="space-y-3">
              {AUDIENCE_LEFT.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-neutral-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8102E]" />
                  {a}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {AUDIENCE_RIGHT.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-neutral-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8102E]" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPONSORSHIP PACKAGES */}
      <section ref={packagesSection} className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
          Sponsorship Packages
        </p>
        <h2 className="font-serif text-3xl italic text-[#0B1320] sm:text-4xl">
          Limited Opportunities
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
          Exclusive sponsorship tiers with premium brand exposure, VIP
          access, and custom activations at the Tampa Convention Center.
        </p>

        <div className="mt-10 space-y-6 grid lg:grid-cols-2 lg:gap-x-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={[
                "border p-6 sm:p-8",
                tier.featured
                  ? "border-[#C9A15A] bg-white"
                  : "border-transparent bg-[#F5F1E8]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-[#0B1320]">
                    {tier.name}
                  </h3>
                  <p className="mt-1 font-serif text-2xl italic text-[#C8102E]">
                    {tier.price}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                    {tier.slots}
                  </span>
                  {tier.limited && (
                    <span className="bg-[#EDE3C8] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#8a6d2f]">
                      Limited
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-5 space-y-2">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C8102E]" />
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={handleFormScroll}
                className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C8102E] transition hover:gap-3"
              >
                Apply for This Tier
                <ArrowRight size={13} strokeWidth={2.5} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* IN THE PRESS */}
      <section className="bg-[#F5F1E8]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
            In the Press
          </p>
          <h2 className="mb-4 font-serif text-3xl italic text-[#0B1320] sm:text-4xl">
            Active Advertisements &amp; Marketing
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
            Live digital advertising on Ike Smart Kiosks across Atlanta,
            Miami &amp; Tampa. Radio airing with Beasley Media Group — Wild
            94.1, 99.5 QYK, Q105, Q105 HD2, and Florida Alumni Radio 1010AM.
          </p>

          <div className="mt-8 divide-y divide-neutral-300/70 border-t border-neutral-300/70">
            {PRESS.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="border-b border-neutral-300 pb-4 last:border-b-0 hover:text-red-400">
              <div
                className="flex items-center justify-between py-4 text-sm text-neutral-700 border-b border-neutral-300 hover:text-red-400!"
              >
                <span>{p.name}</span>
                <ExternalLink size={14} className="text-neutral-400" />
              </div>
              </a>
            ))}
          </div>

          {/* Partner logos */}

          <div className="mt-16 text-center">
            <PartnersSponsors/>
          </div>
        </div>
      </section>

      {/* SPONSOR APPLICATION FORM */}
      <section ref={applicationForm} className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
          Application
        </p>
        <h2 className="mb-12 font-serif text-3xl italic text-[#0B1320] sm:text-4xl">
          Sponsor Application Form
        </h2>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <FormField label="Company / Organization Name" required>
            <input type="text" placeholder="Your Company Name" className={inputClasses} />
          </FormField>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Contact Person — First Name" required>
              <input type="text" placeholder="First" className={inputClasses} />
            </FormField>
            <FormField label="Last Name" required>
              <input type="text" placeholder="Last" className={inputClasses} />
            </FormField>
            <FormField label="Email" required>
              <input type="email" placeholder="you@company.com" className={inputClasses} />
            </FormField>
            <FormField label="Phone" required>
              <input type="tel" placeholder="(201) 555-0123" className={inputClasses} />
            </FormField>
          </div>

          <FormField label="Website / URL">
            <input type="url" placeholder="https://yourcompany.com" className={inputClasses} />
          </FormField>

          <FormField label="Sponsorship Tier of Interest" required>
            <select value={tier} onChange={(e) => setTier(e.target.value)} className={inputClasses}>
              <option value="">— Select a tier —</option>
              {TIERS.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name} — {t.price}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Method of payment" required>
            <select  className={inputClasses} >
              <option value="">— Select a payment method —</option>
              <option value="Zelle">Zelle</option>
              <option value="Venmo">Venmo</option>
              <option value="Aple Pay">Aple Pay</option>
              <option value="Cash App">Cash App</option>
              <option value="Chine">Chine</option>
              <option value="Bank to Bank Transfer">Bank to Bank Transfer</option>
            </select>
          </FormField>

          <FormField label="Why Sponsor Art Fair Tampa?">
            <textarea
              rows={4}
              placeholder="Share your goals, any brand activation ideas (murals, sculpture, custom experiences), or audience priorities..."
              className="w-full resize-none border border-neutral-300 bg-transparent p-3 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-[#0B1320]"
            />
          </FormField>

          <FormField label="How Did You Hear About Us?" required>
            <select
              value={heardAbout}
              onChange={(e) => setHeardAbout(e.target.value)}
              className={inputClasses}
            >
              <option value="">— Select —</option>
              <option value="referral">Referral</option>
              <option value="social">Social Media</option>
              <option value="press">Press / News</option>
              <option value="search">Web Search</option>
              <option value="other">Other</option>
            </select>
          </FormField>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0B1320]">
              Best Time to Contact You? <span className="text-[#C8102E]">*</span>
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Morning 9 am – 12 pm",
                "Afternoon 12 pm – 5 pm",
                "Evening 5 pm – 7 pm",
                "Anytime",
              ].map((opt) => (
                <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600">
                  <input
                    type="radio"
                    name="contactTime"
                    value={opt}
                    checked={contactTime === opt}
                    onChange={(e) => setContactTime(e.target.value)}
                    className="h-4 w-4 border-neutral-300 text-[#C8102E] focus:ring-[#C8102E]"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <FormField label="Additional Comments">
            <textarea
              rows={3}
              placeholder="Anything else you'd like us to know..."
              className="w-full resize-none border border-neutral-300 bg-transparent p-3 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-[#0B1320]"
            />
          </FormField>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 bg-[#C8102E] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#a10d26]"
          >
            Submit Application
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </form>
      </section>
    </div>
  );
}