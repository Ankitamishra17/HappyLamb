import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, Maximize2, X, Layers, Users } from "lucide-react";

/**
 * Studio brand palette
 * Primary      #FB5406  — orange
 * Secondary    #1A1A1A  — charcoal
 * Background   #090909  — rich black
 * Surface/Card #141414  — dark gray
 * Border       #2A2A2A  — gray
 * Heading      #FFFFFF  — white
 * Body text    #C9C9C9  — light gray
 * Muted text   #8D8D8D  — gray
 * Hover        #FF6B1A  — bright orange
 *
 * Heading font: Bebas Neue · Body font: Poppins
 */

// Behind The Scenes — grounded in real Happy Lamb Production shoots
// and locations named in the company dossier. No fabricated camera/lens specs.
const BTS_GALLERY = [
  {
    id: 1,
    title: "The Excavator Village Story",
    location: "Charholi Village, Maharashtra",
    category: "On Location",
    client: "JCB India",
    img: "/jcb1.png",
    desc: "Documenting JCB's decades-long relationship with the village, built around real machine operators and their daily work.",
  },
  {
    id: 2,
    title: "Success Story — R.V. Balaji",
    location: "Tamil Nadu",
    category: "On Location",
    client: "JCB India",
    img: "/jcb2.png",
    desc: "Following a Tamil entrepreneur's journey, shot on his own land to keep the story authentic to the region and its work culture.",
  },
  {
    id: 3,
    title: "Invincible Indians — Aagun Pakhi",
    location: "Kolkata, West Bengal",
    category: "Real-Life Story",
    client: "Bajaj V",
    img: "/bjaj1.png",
    desc: "Shot with Bipin Ganatra, a 40-year veteran firefighter, capturing his everyday route through the city he serves.",
  },
  {
    id: 4,
    title: "अपार चुनौती — Production Still",
    location: "Mumbai, Maharashtra",
    category: "Short Film",
    client: "Happy Lamb Production",
    img: "/apar1.jpeg",
    desc: "A heartfelt fiction short on loss, hope, and opportunity — written & directed by Sarvashreshth Ray, produced by Dilip Gupta.",
    team: [
      { role: "Director", name: "Sarvashreshth Ray" },
      { role: "Producer", name: "Dilip Gupta" },
      { role: "Cinematographer", name: "Jitendra Merai" },
      { role: "Editor", name: "Manish Shah" },
    ],
  },
];

export default function WorkBTS() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="relative w-full overflow-hidden border-t border-[#2A2A2A] bg-[#090909] py-24 text-[#C9C9C9]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96  bg-[#FB5406]/10 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80  bg-[#FB5406]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header Block */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#2A2A2A] pb-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 font-['Poppins'] text-xs font-semibold uppercase tracking-widest text-[#FB5406]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Production Reality</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-['Bebas_Neue'] text-3xl uppercase tracking-tight text-white sm:text-5xl"
            >
              Behind The{" "}
              <span className="bg-gradient-to-r from-[#FB5406] via-[#FF6B1A] to-[#FB5406] bg-clip-text text-transparent">
                Scenes
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md font-['Poppins'] text-xs font-light leading-relaxed text-[#8D8D8D] sm:text-sm"
          >
            A look at where our stories are actually shot — real villages, real
            cities, and the people at the heart of each production.
          </motion.p>
        </div>

        {/* BTS Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BTS_GALLERY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex cursor-pointer flex-col justify-between overflow-hidden  border border-[#2A2A2A] bg-[#141414] transition-all duration-300 hover:border-[#FB5406]"
              onClick={() => setSelectedImg(item)}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/30" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className=" border border-[#2A2A2A] bg-[#090909]/70 px-2.5 py-1 font-['Poppins'] text-[10px] font-bold text-[#FB5406] backdrop-blur-md">
                    {item.category}
                  </span>
                  <button
                    aria-label="Expand"
                    className="flex h-7 w-7 items-center justify-center  bg-[#090909]/70 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 font-['Poppins'] text-[11px] font-medium text-[#C9C9C9]">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#FB5406]" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-['Bebas_Neue'] text-lg tracking-tight text-white transition-colors duration-300 group-hover:text-[#FB5406]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-['Poppins'] text-xs leading-relaxed text-[#8D8D8D] line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#2A2A2A] pt-3 font-['Poppins'] text-[10px] font-medium text-[#8D8D8D]">
                  <span>For: {item.client}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
              onClick={() => setSelectedImg(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl overflow-hidden  border border-[#2A2A2A] bg-[#141414] p-6 text-white shadow-2xl sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center  bg-[#1A1A1A] text-white transition-colors duration-300 hover:bg-[#2A2A2A]"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                  <div className="relative aspect-[4/5] w-full overflow-hidden  bg-[#090909] sm:aspect-square">
                    <img
                      src={selectedImg.img}
                      alt={selectedImg.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5  border border-[#FB5406]/20 bg-[#FB5406]/10 px-3 py-1 font-['Poppins'] text-xs font-bold text-[#FB5406]">
                        <Layers className="h-3.5 w-3.5" />
                        <span>{selectedImg.category}</span>
                      </div>

                      <h3 className="mt-4 font-['Bebas_Neue'] text-2xl tracking-tight text-white">
                        {selectedImg.title}
                      </h3>

                      <p className="mt-1 flex items-center gap-1 font-['Poppins'] text-xs font-semibold text-[#8D8D8D]">
                        <MapPin className="h-3.5 w-3.5 text-[#FB5406]" />
                        {selectedImg.location}
                      </p>

                      <p className="mt-4 font-['Poppins'] text-xs leading-relaxed text-[#C9C9C9] sm:text-sm">
                        {selectedImg.desc}
                      </p>
                    </div>

                    {/* Crew credits — shown only where the dossier verifies them */}
                    {selectedImg.team ? (
                      <div className="mt-6 space-y-2 border-t border-[#2A2A2A] pt-6">
                        <div className="mb-2 flex items-center gap-1.5 font-['Poppins'] text-[10px] uppercase tracking-widest text-[#8D8D8D]">
                          <Users className="h-3.5 w-3.5" />
                          <span>Credits</span>
                        </div>
                        {selectedImg.team.map((member, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between font-['Poppins'] text-xs"
                          >
                            <span className="uppercase text-[#8D8D8D]">
                              {member.role}
                            </span>
                            <span className="font-bold text-[#FB5406]">
                              {member.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-6 border-t border-[#2A2A2A] pt-6">
                        <div className="flex items-center justify-between font-['Poppins'] text-xs">
                          <span className="uppercase text-[#8D8D8D]">
                            Client
                          </span>
                          <span className="font-bold text-[#FB5406]">
                            {selectedImg.client}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
