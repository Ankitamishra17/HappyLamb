import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedPost() {
  return (
    <div
      className="bg-[#0e0d0c] text-[#f3eee4] px-6 sm:px-8 md:px-12 pb-12 md:pb-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340;0,9..144,500&family=Space+Mono&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
      `}</style>

      <a href="#" className="group block max-w-7xl px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center rounded-md overflow-hidden bg-[#1a1715] border border-[#f3eee4]/10">
          {/* image */}
          <div className="relative h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden">
            <img
              src="/anil.png"
              alt="Featured post cover"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 font-heading text-[10px] tracking-[0.1em] uppercase text-[#0e0d0c] bg-[#f2b705] rounded-md px-3 py-1">
              Featured
            </span>
          </div>

          {/* text */}
          <div className="p-6 sm:p-8 md:p-0 md:pr-10">
            <span className="font-heading text-[11px] tracking-[0.1em] uppercase text-[#f2b705]">
              Client Work
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight mt-3 mb-4 group-hover:text-[#f2b705] transition-colors">
              Reviving Mr. India: Building Nostalgia Into a Modern Banking Story
            </h2>
            <p className="text-[#a39c8e] text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              How we brought Anil Kapoor's legendary character back for ICICI Bank — and made
              nostalgia feel like smart banking instead of a gimmick.
            </p>
            <div className="flex items-center gap-3 font-heading text-[11px] tracking-wide uppercase text-[#6b6459] mb-6">
              <span>Dilip Gupta</span>
              <span>·</span>
              <span>Mar 14, 2026</span>
              <span>·</span>
              <span>6 min read</span>
            </div>
            <span className="inline-flex items-center gap-2 font-heading text-[12px] tracking-wide uppercase text-[#f3eee4] border-b border-[#f3eee4]/30 pb-1 group-hover:border-[#f2b705] group-hover:text-[#f2b705] transition-colors">
              Read the story
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}