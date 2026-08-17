"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import PrimaryButton from "./primaryButton";


export default function AboutSection() {
  return (
    <section className="bg-[#080808] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Images */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/images/about-1.jpg"
            alt=""
            className="h-[520px] w-full rounded-2xl object-cover"
          />

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            src="/images/about-2.jpg"
            alt=""
            className="absolute -bottom-10 -right-6 hidden h-56 w-44 rounded-xl border-4 border-[#080808] object-cover md:block"
          />

          <div className="absolute -left-6 top-8 hidden rounded-xl bg-black/80 p-5 backdrop-blur md:block">
            <p className="text-3xl font-semibold text-amber-400">12+</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-zinc-300">
              Years
            </p>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            eyebrow="About the Fair"
            title="Where contemporary art meets culture."
            subtitle="Art Fair Tampa brings together internationally recognized artists, emerging talent, collectors and creative institutions for an immersive multi-day exhibition."
          />

          <div className="mt-8 space-y-5 text-zinc-400 leading-7">
            <p>
              Experience curated galleries, large-scale installations, live
              performances and intimate conversations with visionary creators.
            </p>

            <p>
              Every exhibition is designed to inspire meaningful connections
              between artists and the community through innovation and culture.
            </p>
          </div>

          <div className="mt-10">
            <PrimaryButton>Discover More</PrimaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}