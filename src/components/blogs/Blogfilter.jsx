const CATEGORIES = [
  "All",
  "Client Work",
  "Behind the Scenes",
  "Studio Notes",
  "Real-Life Stories",
];

export default function BlogFilterBar({ active, onChange, count }) {
  return (
    <div
      className="bg-[#0e0d0c] text-[#f3eee4] px-6 sm:px-8 md:px-12 pb-8 md:pb-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
        .font-mono { font-family: 'Space Mono', monospace; }
        .filter-scroll::-webkit-scrollbar { display: none; }
        .filter-scroll { scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl px-12 mx-auto flex items-center justify-between gap-4 border-t border-[#f3eee4]/10 pt-6">
        <div className="filter-scroll flex gap-2.5 overflow-x-auto sm:flex-wrap">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => onChange(cat)}
                className={`shrink-0 font-heading text-[11px] tracking-[0.08em] uppercase rounded-md px-4 py-2 border transition-colors duration-200 ${
                  isActive
                    ? "bg-[#f2b705] text-[#0e0d0c] border-[#f2b705]"
                    : "bg-transparent text-[#c9c2b3] border-[#f3eee4]/15 hover:border-[#f2b705]/50 hover:text-[#f3eee4]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <span className="hidden sm:block  font-heading text-[11px] tracking-[0.08em] uppercase text-[#6b6459] whitespace-nowrap">
          {count} posts
        </span>
      </div>
    </div>
  );
}