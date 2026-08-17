import React, { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useFetcher } from "react-router";

/**
 * Art Fair Tampa — Artist Application Page
 * Sections: Hero, Why Choose, Bullet highlights, Gallery image,
 * Process (3-step), Booth Pricing (3 tiers), Artist Application Form.
 * Nav and footer intentionally excluded per spec.
 *
 * Palette:
 *   cream panel  #F1EBE1
 *   navy         #12172A
 *   red          #C8102E
 *   rose accent  #F0B8C4 (roman numerals)
 *   muted label  #9CA3AF
 */

const STATS = [
  {
    index: "01",
    figure: "10,000+",
    title: "Direct Access to Serious Collectors",
    body: "Our attendees specifically travel to Tampa to discover and purchase original art — qualified collectors ready to invest.",
  },
  {
    index: "02",
    figure: "#1",
    title: "America's Best Venue",
    body: "The Tampa Convention Center: ranked #1 in North America. A world-class facility in the heart of downtown.",
  },
  {
    index: "03",
    figure: "300+",
    title: "Network & Grow Your Career",
    body: "Connect with gallery owners, interior designers, corporate art buyers, and fellow artists. Many exhibitors leave with gallery representation.",
  },
];

const HIGHLIGHTS = [
  "Direct sales to qualified collectors",
  "Network with curators and gallery owners",
  "Build your Tampa collector base",
  "All art mediums welcome",
  "Four days of opportunity",
];

const PROCESS = [
  {
    numeral: "I",
    title: "Apply",
    body: "Complete the application with your artist info, portfolio links, and booth preference.",
  },
  {
    numeral: "II",
    title: "Review",
    body: "Our curatorial team reviews submissions within 5–7 business days.",
  },
  {
    numeral: "III",
    title: "Confirm",
    body: "Upon acceptance, secure your booth with payment — and you're in.",
  },
];

const BOOTHS = [
  {
    size: "4' x 10' Booth",
    price: "$1,000",
    features: [
      "Perfect for emerging artists",
      "Focused single-series display",
      "High-traffic gallery floor placement",
    ],
  },
  {
    size: "10' x 10' Booth",
    price: "$2,000",
    features: [
      "Our most popular booth size",
      "Space for multiple mediums or series",
      "Ideal collector conversation layout",
    ],
  },
  {
    size: "20' x 10' Booth",
    price: "$3,000",
    features: [
      "Maximum gallery presence",
      "Ideal for large-scale works",
      "Premium placement & visibility",
    ],
  },
];

const MEDIUMS = [
  "Painting",
  "Sculpture",
  "Photography",
  "Digital Art",
  "Mixed Media",
  "Ceramics",
  "Jewelry",
  "Textiles",
  "Printmaking",
  "Other",
];

const PaymentMethods:string[] = [  
  "Zelle",
  "Venmo",
  "Aple Pay",
  "Cash App",
  "Chine",
  "Bank to Bank Transfer",
]
function FormField({ label, required, children }:{label:string, required?:boolean, children:React.ReactNode}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-widest text-[#12172A]">
        {label} {required && <span className="text-[#C8102E]">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-red-400";

export default function ArtistApplicationPage() {
  const fetcher = useFetcher();
  const [selectedMediums, setSelectedMediums] = useState<string[]>([]);
  const [bio, setBio] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [boothSize, setBoothSize] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [heardAbout, setHeardAbout] = useState("");

  const applicationForm = useRef<HTMLFormElement>(null);

  const toggleMedium = (m:string) => {
    setSelectedMediums((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };
  const handleScrollIntoView = () => {
    applicationForm.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget, e.target);
    fetcher.submit(e.currentTarget);
    // console.log(res);
  };

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#12172A]">
        <img
          src="/Art-Exhibition-Booth-1.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12172A] via-[#12172A]/1 to-[#12172A]/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400/90">
            The Region&rsquo;s Largest Art Fair
          </p>
          <h1 className="font-serif text-4xl italic leading-tight text-white sm:text-6xl">
            Showcase
          </h1>
          <h2 className="font-serif text-4xl italic leading-tight text-white/40 sm:text-6xl">
            Your Art
          </h2>
          <button
            onClick={handleScrollIntoView}
            type="button"
            className="mt-8 flex items-center gap-2 bg-[#C8102E] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#a10d26]"
          >
            Apply for a Booth
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center gap-6">
          <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
            Why Choose Art Fair Tampa
          </p>
          <div className="h-px w-full bg-neutral-200" />
        </div>

        <div className="divide-x divide-neutral-200 grid md:grid-cols-3  ">
          {STATS.map((stat) => (
            <div
              key={stat.index}
              className="grid grid-cols-1 gap-2 py-10 sms:grid-cols-[80px_1fr] sms:gap-6 hover:bg-neutral-200 transition-all duration-300 p-4"
            >
              <span className="text-xs text-neutral-300">{stat.index}</span>
              <div>
                <p className="font-serif text-3xl italic text-[#C8102E] sm:text-4xl">
                  {stat.figure}
                </p>
                <h3 className="mt-2 text-base font-bold text-[#12172A]">
                  {stat.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500">
                  {stat.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight bullets */}
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8102E]" />
              <span className="text-sm text-neutral-600">{h}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY IMAGE */}
      <section className="w-full">
        <img
          src="/Art-Gallery-Discussion.png"
          alt="Artists and collectors browsing gallery booths"
          className="h-[280px] w-full object-cover sm:h-[420px]"
        />
      </section>

      {/* PROCESS */}
      <section className="bg-[#F1EBE1]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
            The Process
          </p>
          <h2 className="mb-12 font-serif text-3xl italic text-[#12172A] sm:text-4xl">
            How to Become an Exhibitor
          </h2>

          <div className="grid grid-cols-1 divide-y divide-neutral-300 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {PROCESS.map((step) => (
              <div key={step.numeral} className="px-0 py-8 sm:px-8 sm:py-0">
                <p className="font-serif text-3xl italic text-[#F0B8C4]">
                  {step.numeral}
                </p>
                <h3 className="mt-4 text-base font-bold text-[#12172A]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOTH PRICING */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
          For Artists
        </p>
        <h2 className="font-serif text-3xl italic text-[#12172A] sm:text-4xl">
          Booth Pricing
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
          Choose the booth size that fits your practice. All booths include
          12-foot professional display walls and prime placement at Tampa
          Convention Center.
        </p>

        <div className="mt-12 divide-x divide-neutral-200  grid md:grid-cols-3 ">
          {BOOTHS.map((booth) => (
            <div key={booth.size} className="grid grid-cols-1 gsap-6 py-10 ssm:grid-cols-[120px_1fr_260px] ssm:items-start p-5 space-y-4 hover:bg-neutral-200 transition-all duration-300">
              <div className="h-10 w-16 rounded-sm border-2 border-dashed border-[#C8102E]/60" />

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  {booth.size}
                </p>
                <p className="mt-1 font-serif text-3xl italic text-[#12172A]">
                  {booth.price}
                </p>
                <ul className="mt-4 space-y-2">
                  {booth.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check size={14} className="mt-0.5 shrink-0 text-[#C8102E]" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={handleScrollIntoView}
                className="h-fit bg-[#C8102E] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#a10d26] sm:mt-1"
              >
                Get Booth
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs italic text-neutral-400">
          *10% transaction fee applies to all bookings
        </p>
      </section>

      {/* APPLICATION FORM */}
      <section className="mx-auto max-w-4xl px-6 pb-20" ref={applicationForm}>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
          Application
        </p>
        <h2 className="mb-12 font-serif text-3xl italic text-[#12172A] sm:text-4xl">
          Artist Application Form
        </h2>

        <fetcher.Form className="space-y-12" method="post" encType="multipart/form-data" onSubmit={(e) =>handleSubmit(e)}>
          {/* 01 Contact */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl italic text-neutral-300">
              01 — Contact
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField label="First Name" required>
                <input name="first" type="text" placeholder="First" className={inputClasses} required />
              </FormField>
              <FormField label="Last Name" required>
                <input name="last" type="text" placeholder="Last" className={inputClasses} required/>
              </FormField>
              <FormField label="Email" required>
                <input name="email" type="email" placeholder="you@example.com" className={inputClasses} required/>
              </FormField>
              <FormField label="Phone" required>
                <input name="phone" type="tel" placeholder="(555) 000-0000" className={inputClasses} required />
              </FormField>
            </div>
          </div>

          {/* 02 Medium */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl italic text-neutral-300">
              02 — Medium
            </h3>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#12172A]">
              Art Medium <span className="text-[#C8102E]">*</span> — select all that apply
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {MEDIUMS.map((m) => (
                <label key={m} className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600">
                  <input
                    type="checkbox"
                    name="medium"
                    value={m}
                    checked={selectedMediums.includes(m as unknown as any)}
                    onChange={() => toggleMedium(m)}
                    className="h-4 w-4 rounded-sm border-neutral-300 text-[#C8102E] focus:ring-[#C8102E]"
                  />
                  {m}
                </label>
              ))}
            </div>
          </div>

          {/* 03 Bio */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl italic text-neutral-300">
              03 — Bio
            </h3>
            <FormField label="Artist Bio — max 500 characters" required>
              <textarea
                rows={4}
                maxLength={500}
                value={bio}
                name="bio"
                required
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about yourself and your practice..."
                className="w-full resize-none border border-neutral-300 bg-transparent p-3 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-[#12172A]"
              />
              <span className="self-end text-[11px] text-neutral-400">
                {bio.length} / 500
              </span>
            </FormField>
          </div>

          {/* 04 Portfolio */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl italic text-neutral-300">
              04 — Portfolio
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField label="Portfolio Website">
                <input name="portfolio" type="url" placeholder="https://" className={inputClasses} />
              </FormField>
              <FormField label="Instagram Handle">
                <input name="instagram" type="text" placeholder="@yourusername" className={inputClasses} />
              </FormField>
              <FormField label="Facebook Page URL">
                <input name="facebook" type="url" placeholder="https://facebook.com/..." className={inputClasses} />
              </FormField>
              <FormField label="Artist Photo / Headshot" >
                <div className="flex items-center gap-3 pt-1">
                  <label className="cursor-pointer border border-[#C8102E] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#C8102E] transition hover:bg-[#C8102E] hover:text-white">
                    {/* Choose File */}
                    <input type="file" className="" name="headshot" accept="image/*"/>
                  </label>
                  <span className="text-xs text-neutral-400 hidden">
                    {/* {applicationForm.current?.getInputs("headshot").value?.length > 0 ? "File selected" : ""} */}
                    No file chosen</span>
                </div>
              </FormField>
            </div>
          </div>

          {/* 05 Booth */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl italic text-neutral-300">
              05 — Booth
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Preferred Booth Size" required>
              <select
                value={boothSize}
                onChange={(e) => setBoothSize(e.target.value)}
                className={inputClasses}
                name="booth"
                required
              >
                <option value="">— Select —</option>
                {BOOTHS.map((b) => (
                  <option key={b.size} value={b.size}>
                    {b.size} — {b.price}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField label="Preferred Payment Method" required>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className={inputClasses}
                name="payment"
                required
              >
                <option value="">— Select —</option>
                {PaymentMethods.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </FormField>
            </div>
          </div>

          {/* 06 Referral */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl italic text-neutral-300">
              06 — Referral
            </h3>
            <FormField label="Did Someone Refer You?">
              <input type="text" placeholder="Referrer's name" className={inputClasses} 
              name="referrer"
              />
            </FormField>
            <FormField label="How Did You Hear About Us?">
              <select
                value={heardAbout}
                name="heard"
                onChange={(e) => setHeardAbout(e.target.value)}
                className={inputClasses}
              >
                <option value="">— Select —</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend or Colleague</option>
                <option value="search">Web Search</option>
                <option value="past-exhibitor">Past Exhibitor</option>
                <option value="other">Other</option>
              </select>
            </FormField>
            <FormField label="Special Requirements">
              <textarea
                name="requirements"
                rows={3}
                placeholder="e.g. Electricity needed, corner booth preference"
                className="w-full resize-none border border-neutral-300 bg-transparent p-3 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-[#12172A]"
              />
            </FormField>
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600">
            <input
              type="checkbox"
              name="subscribe"
              checked={subscribe}
              onChange={(e) => setSubscribe(e.target.checked)}
              className="h-4 w-4 rounded-sm border-neutral-300 text-[#C8102E] focus:ring-[#C8102E]"
            />
            Subscribe me to Art Fair Tampa newsletter updates
          </label>

          <button
            type="submit"

            disabled={fetcher.state !== "idle"}
            className="flex w-full items-center justify-center gap-2 bg-[#C8102E] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#a10d26]"
          >
            {fetcher.state != "idle" ? "Submitting..." : "Submit Application"}
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </fetcher.Form>
      </section>
    </div>
  );
}