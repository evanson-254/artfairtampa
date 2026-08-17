import { motion } from "framer-motion";

const gallery = [
  {
    title: "Studio Sale",
    image: "/expirience-1.webp",
    span: "row-span-2",
  },
  {
    title: "Opening Night",
    image: "/expirience-2.webp",
    span: "",
  },
  {
    title: "Collector Conversation",
    image: "/expirience-3.webp",
    span: "",
  },
  {
    title: "Exhibition Hall",
    image: "/expirience-4.webp",
    span: "col-span-2",
  },
];

export default function ExperienceGallery() {
  return (
    <section className="bg-[#071629] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A937]">
            The Experience
          </p>

          <p className="hidden font-serif text italic text-white/40 md:block">
            Tampa's most vibrant celebration of art
          </p>
        </div>

        {/* Gallery */}
        <div className="grid auto-rows-[190px] grid-cols-1 gap-3 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className={`group relative overflow-hidden ${
                item.span === "row-span-2"
                  ? "md:row-span-2"
                  : item.span === "col-span-2"
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <motion.img
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 },
                }}
                transition={{ duration: 0.5 }}
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              {/* Gray Overlay */}
              <motion.div
                variants={{
                  rest: { opacity: 0.15 },
                  hover: { opacity: 0.45 },
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[#0B1628]"
              />

              {/* Yellow Label */}
              <motion.div
                variants={{
                  rest: { y: 10, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-5 left-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A937]">
                  {item.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}