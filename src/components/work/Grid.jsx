import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * Studio brand palette — light-section variant
 * Primary        #FB5406  — orange accent
 * Hover          #FF6B1A  — bright orange
 * Page bg        #F4F3F1 — matches Testimonials/Showreel/WorkImpact
 * Card bg        #FFFFFF
 * Border         #E4E2DF — light hairline, not the dark-theme's #2A2A2A
 * Heading/ink    #1A1A1A — charcoal (white heading text needs a dark bg to read)
 * Body text      #4A4A4A
 * Muted text     #8D8D8D
 *
 * Heading font: Bebas Neue · Body font: Poppins
 */

const YoutubeIcon = (
  <svg
    className="h-3.5 w-3.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.5"
      y="6"
      width="19"
      height="12"
      rx="3.5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
  </svg>
);

// Categories mirror how the dossier itself groups the work
const CATEGORIES = [
  "All Projects",
  "Brand Films",
  "Real-Life Stories",
  "Short Films",
];

// Real projects, pulled from the Happy Lamb Production company dossier.
// ORDER: Tata Hitachi -> Hailstone -> JCB (client's own field work) -> other
// non-celebrity brand films -> celebrity-led brand films (Anil Kapoor,
// Madhuri Dixit, Konkona Sen Sharma) shown last, per client's request.
// NOTE: Several titles below are PLACEHOLDERS ("— Project N") where only a
// video link + client name was given, no episode/project name. Swap in the
// real titles whenever you have them — video IDs are correct.
const ALL_PROJECTS = [
  // --- Tata Hitachi (shown first) ---
  {
    id: 101,
    title: "Tata Hitachi — Project 1",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/qcxQbzOzR70/hqdefault.jpg",
    videoUrl: "https://youtu.be/qcxQbzOzR70",
    tags: ["Construction Equipment", "Field Story"],
  },
  {
    id: 102,
    title: "Tata Hitachi — Project 2",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/mdtj7MOb_8U/hqdefault.jpg",
    videoUrl: "https://youtu.be/mdtj7MOb_8U",
    tags: ["Construction Equipment", "Field Story"],
  },
  {
    id: 103,
    title: "Tata Hitachi — Project 3",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/-ZBTxUT_zAg/hqdefault.jpg",
    videoUrl: "https://youtu.be/-ZBTxUT_zAg",
    tags: ["Construction Equipment", "Field Story"],
  },
  {
    id: 104,
    title: "Tata Hitachi — Project 4",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/lySOjprzueE/hqdefault.jpg",
    videoUrl: "https://youtu.be/lySOjprzueE",
    tags: ["Construction Equipment", "Field Story"],
  },
  {
    id: 105,
    title: "Tata Hitachi — Project 5",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/39Cka5MciW8/hqdefault.jpg",
    videoUrl: "https://youtu.be/39Cka5MciW8",
    tags: ["Construction Equipment", "Field Story"],
  },
  {
    id: 106,
    title: "Tata Hitachi — Project 6",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/VuiOXiYmGqs/hqdefault.jpg",
    videoUrl: "https://youtu.be/VuiOXiYmGqs",
    tags: ["Construction Equipment", "Field Story"],
  },
  {
    id: 107,
    title: "Tata Hitachi — Project 7",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/JGhwVETg3tM/hqdefault.jpg",
    videoUrl: "https://youtu.be/JGhwVETg3tM",
    tags: ["Construction Equipment", "Field Story"],
  },
  {
    id: 108,
    title: "Tata Hitachi — Project 8",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/BjVIJHfOvEI/hqdefault.jpg",
    videoUrl: "https://youtu.be/BjVIJHfOvEI",
    tags: ["Construction Equipment", "Field Story"],
  },
  {
    id: 109,
    title: "Tata Hitachi — Project 9",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/BW1l76qxZ4g/hqdefault.jpg",
    videoUrl: "https://youtu.be/BW1l76qxZ4g",
    tags: ["Construction Equipment", "Field Story"],
  },

  // --- Hailstone (shown right after Tata Hitachi) ---
  {
    id: 110,
    title: "Hailstone — Project 1",
    category: "Brand Films",
    client: "Hailstone",
    thumbnail: "https://img.youtube.com/vi/7vaqp1j8Y9o/hqdefault.jpg",
    videoUrl: "https://youtu.be/7vaqp1j8Y9o",
    tags: ["Brand Film"],
  },
  {
    id: 111,
    title: "Hailstone — Project 2",
    category: "Brand Films",
    client: "Hailstone",
    thumbnail: "https://img.youtube.com/vi/gcoH5oAJRWQ/hqdefault.jpg",
    videoUrl: "https://youtu.be/gcoH5oAJRWQ",
    tags: ["Brand Film"],
  },
  {
    id: 112,
    title: "Hailstone — Project 3",
    category: "Brand Films",
    client: "Hailstone",
    thumbnail: "https://img.youtube.com/vi/92FGxg063KY/hqdefault.jpg",
    videoUrl: "https://youtu.be/92FGxg063KY",
    tags: ["Brand Film"],
  },
  {
    id: 113,
    title: "Hailstone — Project 4",
    category: "Brand Films",
    client: "Hailstone",
    thumbnail: "https://img.youtube.com/vi/IM0o43ah_ss/hqdefault.jpg",
    videoUrl: "https://youtu.be/IM0o43ah_ss",
    tags: ["Brand Film"],
  },
  {
    id: 114,
    title: "Hailstone — Project 5",
    category: "Brand Films",
    client: "Hailstone",
    thumbnail: "https://img.youtube.com/vi/ozq9eaAEggo/hqdefault.jpg",
    videoUrl: "https://youtu.be/ozq9eaAEggo",
    tags: ["Brand Film"],
  },
  {
    id: 115,
    title: "Hailstone — Project 6",
    category: "Brand Films",
    client: "Hailstone",
    thumbnail: "https://img.youtube.com/vi/HTwu58E4v4E/hqdefault.jpg",
    videoUrl: "https://youtu.be/HTwu58E4v4E",
    tags: ["Brand Film"],
  },

  // --- JCB (shown after Hailstone) ---
  {
    id: 9,
    title: "The Excavator Village Story",
    category: "Brand Films",
    client: "JCB India",
    thumbnail: "/jcb1.png",
    tags: ["Charholi Village", "Unbreakable Trust"],
  },
  {
    id: 10,
    title: "Customer Success Story — R.V. Balaji",
    category: "Brand Films",
    client: "JCB India",
    thumbnail: "/jcb2.png",
    tags: ["Tamil Nadu", "Entrepreneur Journey"],
  },

  // --- Unlabeled work (client name pending — placeholders below) ---
  {
    id: 201,
    title: "Project — Untitled 1",
    category: "Brand Films",
    client: "Client TBD",
    thumbnail: "https://img.youtube.com/vi/e_2cBYTz_eA/hqdefault.jpg",
    videoUrl: "https://youtu.be/e_2cBYTz_eA",
    tags: ["Brand Film"],
  },
  {
    id: 202,
    title: "Project — Untitled 2",
    category: "Brand Films",
    client: "Client TBD",
    thumbnail: "https://img.youtube.com/vi/JTT5I84Sz4k/hqdefault.jpg",
    videoUrl: "https://youtu.be/JTT5I84Sz4k",
    tags: ["Brand Film"],
  },
  {
    id: 203,
    title: "Project — Untitled 3",
    category: "Brand Films",
    client: "Client TBD",
    thumbnail: "https://img.youtube.com/vi/YvFeBXJHurs/hqdefault.jpg",
    videoUrl: "https://youtu.be/YvFeBXJHurs",
    tags: ["Brand Film"],
  },
  {
    id: 204,
    title: "Project — Untitled 4",
    category: "Brand Films",
    client: "Client TBD",
    thumbnail: "https://img.youtube.com/vi/F88t_5zZwqQ/hqdefault.jpg",
    videoUrl: "https://youtu.be/F88t_5zZwqQ",
    tags: ["Brand Film"],
  },
  {
    id: 205,
    title: "Project — Untitled 5",
    category: "Brand Films",
    client: "Client TBD",
    thumbnail: "https://img.youtube.com/vi/W7nM5gkYR3Y/hqdefault.jpg",
    videoUrl: "https://youtu.be/W7nM5gkYR3Y",
    tags: ["Brand Film"],
  },
  {
    id: 206,
    title: "Project — Untitled 6",
    category: "Brand Films",
    client: "Client TBD",
    thumbnail: "https://img.youtube.com/vi/NCUWjcMNe_E/hqdefault.jpg",
    videoUrl: "https://youtu.be/NCUWjcMNe_E",
    tags: ["Brand Film"],
  },
  {
    id: 207,
    title: "Project — Untitled 7",
    category: "Brand Films",
    client: "Client TBD",
    thumbnail: "https://img.youtube.com/vi/r3-lsRlqrEA/hqdefault.jpg",
    videoUrl: "https://youtu.be/r3-lsRlqrEA",
    tags: ["Brand Film"],
  },

  // --- Other non-celebrity brand work ---
  {
    id: 6,
    title: "Invincible Indians — Medicine Baba",
    category: "Real-Life Stories",
    client: "Bajaj V",
    thumbnail: "/bjaj1.png",
    tags: ["NCR", "Healthcare Access"],
  },
  {
    id: 7,
    title: "Invincible Indians — Aagun Pakhi",
    category: "Real-Life Stories",
    client: "Bajaj V",
    thumbnail: "/bjaj2.png",
    tags: ["Kolkata", "Firefighting"],
  },

  {
    id: 16,
    title: "Short Film —अपार चुनौती (Opportunity)",
    category: "Short Films",
    client: "Happy Lamb Production",
    thumbnail: "https://img.youtube.com/vi/QWArY2S1cEI/hqdefault.jpg",
    videoUrl: "https://youtu.be/QWArY2S1cEI",
    tags: ["Fiction", "Hindi Short Film"],
  },
  {
    id: 11,
    title: "Iss Diwali, Kuch Naya!",
    category: "Brand Films",
    client: "Upstox",
    thumbnail: "/diwali.png",
    tags: ["Festive Campaign", "Muhurat Trading"],
  },
  {
    id: 12,
    title: "Budget 2024 ft. Monika Halan",
    category: "Brand Films",
    client: "Upstox",
    thumbnail: "/upstock.jpeg",
    tags: ["Union Budget", "Financial Foresight"],
  },

  // --- Celebrity-led brand films (shown last) ---
  {
    id: 1,
    title: "Mr. India Revival ft. Anil Kapoor",
    category: "Brand Films",
    client: "ICICI Bank",
    thumbnail: "/anil.png",
    tags: ["Celebrity Led", "Banking", "Nostalgia"],
  },
  {
    id: 2,
    title: "#FundYourOwnWorth ft. Konkona Sen Sharma",
    category: "Brand Films",
    client: "ICICI Bank",
    thumbnail: "/knoon.png",
    tags: ["Women Empowerment", "Banking"],
  },
  {
    id: 3,
    title: "Campus Power: The Student Journey",
    category: "Brand Films",
    client: "ICICI Bank",
    thumbnail: "/icici.png",
    tags: ["Education Loans", "Overseas Banking"],
  },

  {
    id: 19,
    title: "Godrej — Project 3",
    category: "Brand Films",
    client: "Godrej",
    thumbnail: "https://img.youtube.com/vi/GOac1jhklg8/hqdefault.jpg",
    videoUrl: "https://youtube.com/watch?v=GOac1jhklg8",
    tags: ["Security"],
  },
  {
    id: 20,
    title: "Godrej — Project 4",
    category: "Brand Films",
    client: "Godrej",
    thumbnail: "https://img.youtube.com/vi/GAhMLaLdSiY/hqdefault.jpg",
    videoUrl: "https://youtube.com/watch?v=GAhMLaLdSiY",
    tags: ["Security"],
  },
];

const CARDS_PER_PAGE = 6;

export default function WorkGridLight() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "All Projects" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / CARDS_PER_PAGE),
  );

  // Keep currentPage valid whenever filters/search change the result count
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE,
  );

  const goToPage = (page) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(clamped);
    document
      .getElementById("featured-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openReel = (project) => {
    if (project.videoUrl) {
      window.open(project.videoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      
      className="relative w-full overflow-hidden border-t border-b border-[#E4E2DF] bg-[#F4F3F1] py-24 text-[#4A4A4A]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="pointer-events-none absolute top-1/4 right-0 h-96 w-96  bg-[#FB5406]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Controls Bar */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E4E2DF] pb-8 lg:flex-row lg:items-center">
          <div className="flex lg:flex-wrap items-center gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 whitespace-nowrap  px-5 py-2.5 font-['Poppins'] text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#FB5406] text-white shadow-md"
                      : "border border-[#E4E2DF] bg-white text-[#4A4A4A] hover:border-[#FB5406] hover:text-[#1A1A1A]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8D8D8D]" />
            <input
              type="text"
              placeholder="Search by title, client, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full  border border-[#E4E2DF] bg-white py-2.5 pl-10 pr-4 font-['Poppins'] text-xs font-medium text-[#1A1A1A] placeholder-[#8D8D8D] shadow-sm transition-colors duration-300 focus:border-[#FB5406] focus:outline-none"
            />
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between overflow-hidden  border border-[#E4E2DF] bg-white shadow-sm transition-all duration-300 hover:border-[#FB5406] hover:shadow-xl hover:shadow-black/10"
              >
                {/* Media Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                    <span className=" bg-black/70 px-3 py-1 font-['Poppins'] text-[11px] font-semibold text-white backdrop-blur-md">
                      {project.client}
                    </span>
                    <span className="flex items-center gap-1  bg-black/70 px-2.5 py-1 font-['Poppins'] text-[11px] font-semibold text-[#FB5406] backdrop-blur-md">
                      {YoutubeIcon}
                      <span>YouTube</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openReel(project)}
                    aria-label={`Play ${project.title}`}
                    className={`absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100 ${
                      project.videoUrl ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex h-12 w-12 items-center justify-center  bg-[#FB5406] shadow-lg"
                    >
                      <Play className="h-5 w-5 translate-x-0.5 fill-white text-white" />
                    </motion.div>
                  </button>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between font-['Poppins'] text-[11px] font-bold uppercase tracking-wider text-[#FB5406]">
                      <span>{project.category}</span>
                    </div>

                    <h3 className="mt-2 font-['Bebas_Neue'] text-xl tracking-tight text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#FB5406]">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className=" bg-[#F4F3F1] px-2.5 py-1 font-['Poppins'] text-[10px] font-semibold text-[#4A4A4A]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E4E2DF] pt-4 font-['Poppins'] text-xs font-semibold text-[#8D8D8D]">
                    <span>For: {project.client}</span>
                    <button
                      type="button"
                      onClick={() => openReel(project)}
                      className="inline-flex items-center gap-1 text-[#1A1A1A] transition-colors duration-300 hover:text-[#FB5406]"
                    >
                      Watch Reel <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-16  border border-[#E4E2DF] bg-white py-12 text-center shadow-sm">
            <p className="font-['Bebas_Neue'] text-xl tracking-tight text-[#1A1A1A]">
              No projects found matching your search.
            </p>
            <p className="mt-1 font-['Poppins'] text-xs text-[#8D8D8D]">
              Try clearing your filters or search keywords.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All Projects");
                setSearchQuery("");
              }}
              className="mt-4  bg-[#FB5406] px-6 py-2 font-['Poppins'] text-xs font-bold text-white transition-colors duration-300 hover:bg-[#FF6B1A]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredProjects.length > 0 && totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center  border border-[#E4E2DF] bg-white text-[#1A1A1A] transition-colors duration-300 hover:border-[#FB5406] hover:text-[#FB5406] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#E4E2DF] disabled:hover:text-[#1A1A1A]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`flex h-10 w-10 items-center justify-center  font-['Poppins'] text-xs font-bold transition-all duration-300 ${
                  page === currentPage
                    ? "bg-[#FB5406] text-white shadow-md"
                    : "border border-[#E4E2DF] bg-white text-[#4A4A4A] hover:border-[#FB5406] hover:text-[#1A1A1A]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center  border border-[#E4E2DF] bg-white text-[#1A1A1A] transition-colors duration-300 hover:border-[#FB5406] hover:text-[#FB5406] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#E4E2DF] disabled:hover:text-[#1A1A1A]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
