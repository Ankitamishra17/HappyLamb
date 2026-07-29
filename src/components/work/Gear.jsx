import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Camera, Disc, Plane, Sun, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

// Gear Categories and Equipment Lists
const GEAR_CATEGORIES = [
  {
    id: "cameras",
    name: "Cinema Cameras",
    icon: Camera,
    items: [
      { name: "RED V-Raptor 8K VV", spec: "8K 120fps / 17+ Stops DR / REDCODE RAW", status: "In-House" },
      { name: "Sony FX6 Cinema Line", spec: "Full-Frame 4K 120fps / Dual Native ISO", status: "In-House" },
      { name: "Sony FX3 Rigged", spec: "4K 120fps / XLR Audio Top Handle / Compact B-Cam", status: "In-House" },
      { name: "RED Komodo 6K", spec: "Global Shutter / 6K Super35 / Action & Drone Rig", status: "In-House" },
    ],
  },
  {
    id: "lenses",
    name: "Optics & Glass",
    icon: Disc,
    items: [
      { name: "Great Joy 1.8x Anamorphic Set", spec: "35mm, 50mm, 85mm T2.9 / Cinematic Oval Bokeh", status: "In-House" },
      { name: "DZOFilm Vespid Prime Set", spec: "16mm to 125mm T2.1 / Full Frame Coverage", status: "In-House" },
      { name: "Laowa 24mm T14 2X Probe Lens", spec: "Bug-Eye Macro / Built-in LED Ring / Waterproof", status: "In-House" },
      { name: "Sony G-Master Zoom Suite", spec: "16-35mm, 24-70mm, 70-200mm f/2.8 II", status: "In-House" },
    ],
  },
  {
    id: "aerial",
    name: "Aerial & Drones",
    icon: Plane,
    items: [
      { name: "7\" Heavy Lift Cinelifter FPV", spec: "Carries RED Komodo / 100+ mph High-Speed Chase", status: "Licensed Operator" },
      { name: "DJI Inspire 3", spec: "8K RAW Full-Frame / Waypoint Pro / Dual Control", status: "Licensed Operator" },
      { name: "DJI Mavic 3 Pro Cine", spec: "Apple ProRes 422 HQ / Triple Camera Array", status: "In-House" },
    ],
  },
  {
    id: "lighting",
    name: "Lighting & Grip",
    icon: Sun,
    items: [
      { name: "Aputure 1200d Pro Daylight LED", spec: "1200W Bowens Mount / Weatherproof IP65", status: "In-House" },
      { name: "Nanlite Pavotube II 30X (4-Kit)", spec: "RGBWW Pixel Tubes / Wireless DMX Control", status: "In-House" },
      { name: "Tilta Hydra Alien Car Rig", spec: "Suction Mounting / Dual Shock Absorbing Arms", status: "In-House" },
    ],
  },
];

export default function WorkGearDark() {
  const [activeTab, setActiveTab] = useState("cameras");

  const currentCategory = GEAR_CATEGORIES.find((cat) => cat.id === activeTab);

  return (
    <section className="relative w-full bg-[#0f1012] text-white py-24 overflow-hidden border-t border-white/10">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-10 h-96 w-96  bg-amber-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80  bg-amber-600/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-widest text-amber-400"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Technical Infrastructure</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-5xl font-bold font-body tracking-tight"
            >
              In-House <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Cinema Rig</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-body max-w-md text-xs sm:text-sm leading-relaxed"
          >
            We own and maintain top-tier RED and Sony cinema setups, anamorphic glass, and heavy-lift FPV rigs for maximum operational agility on location.
          </motion.p>
        </div>

        {/* Category Selector Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          {GEAR_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2  px-5 py-2.5 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                    : "border border-white/10 bg-[#16171b] text-slate-300 hover:border-amber-400/50 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Equipment Spec Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentCategory?.items.map((item, idx) => (
                <div
                  key={idx}
                  className=" border border-white/10 bg-[#16171b] p-6 sm:p-8 flex flex-col justify-between hover:border-amber-400/40 transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5  bg-amber-400/10 px-3 py-1 text-[10px] font-semibold text-amber-400 border border-amber-400/20 shrink-0">
                        <ShieldCheck className="h-3 w-3" />
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm font-mono text-slate-400">
                      {item.spec}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle className="h-3.5 w-3.5" /> Ready for Production
                    </span>
                    <span className="text-slate-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Spec Sheet <ArrowRight className="h-3 w-3 text-amber-400" />
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Equipment Guarantee Banner */}
        <div className="mt-12  border border-amber-400/20 bg-gradient-to-r from-amber-500/10 via-[#16171b] to-[#16171b] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-body font-bold text-white">Need Custom Rigs or Specialty Lenses?</h4>
            <p className="mt-1 text-xs text-slate-400 max-w-xl">
              We hold preferred rental vendor accounts across Tokyo, London, and Los Angeles for immediate equipment scaling (Arri Alexa 35, Vantage Hawk Anamorphics, Bolt High-Speed Motion Control).
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2  bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-amber-400 transition-colors shrink-0"
          >
            <span>Request Tech Deck</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}