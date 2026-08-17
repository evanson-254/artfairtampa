"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const exhibitions = [
  {
    title: "Contemporary Visions",
    year: "2026",
    image: "/images/gallery-1.jpg",
    description:
      "Exploring emerging voices shaping the future of contemporary art.",
  },
  {
    title: "Beyond The Canvas",
    year: "2026",
    image: "/images/gallery-2.jpg",
    description:
      "Immersive installations combining technology, sculpture and sound.",
  },
  {
    title: "Global Perspectives",
    year: "2026",
    image: "/images/gallery-3.jpg",
    description:
      "A curated collection from internationally acclaimed artists.",
  },
];
export default function FeaturedGallery() {
  return (
    <section className="bg-[#080808] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Featured Exhibitions"
          title="A curated experience of contemporary creativity."
          subtitle="Discover remarkable exhibitions showcasing innovation, culture and artistic excellence."
        />

        <div className="mt-20 space-y-24">
          {exhibitions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                  {item.year}
                </p>

                <h3 className="mt-4 text-4xl font-light text-white md:text-6xl">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-lg leading-8 text-zinc-400">
                  {item.description}
                </p>

                <button className="mt-8 border-b border-amber-400 pb-1 text-sm uppercase tracking-[0.2em] text-amber-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}