import { ArrowLeft, Share2,  Link2 } from "lucide-react";

const RELATED = [
  { title: "Behind the Mr. India Revival", category: "Client Work", img: "/icici.png" },
  { title: "Shooting on Location: JCB Village Stories", category: "Behind the Scenes", img: "/jcb1.png" },
  { title: "How We Cast Real Stories for Bajaj V", category: "Studio Notes", img: "/bjaj1.png" },
];

export default function BlogArticle() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340;0,9..144,500;0,9..144,600;1,9..144,400&family=Space+Mono&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .prose-body p { margin-bottom: 1.5em; line-height: 1.8; }
        .prose-body h2 { font-family: 'Fraunces', serif; font-weight: 500; margin-top: 2em; margin-bottom: 0.6em; }
      `}</style>

      {/* ===== Reading section — white/cream ===== */}
      <div className="bg-[#faf7f0] max-w-7xl mx-auto text-[#1a1815] px-4 sm:px-6 md:px-12 pt-8 md:pt-14 pb-16">

        {/* back link */}
        <div className="max-w-3xl mx-auto mb-8">
          <a href="#" className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-[#8a8074] hover:text-[#1a1815] transition-colors">
            <ArrowLeft size={14} /> Back to blog
          </a>
        </div>

        {/* header */}
        <header className="max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-[#0e0d0c] bg-[#f2b705] rounded-md px-3 py-1 mb-5">
            Client Work
          </span>
          <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
            Reviving Mr. India: Building Nostalgia Into a Modern Banking Story
          </h1>
          <div className="flex items-center gap-3 text-sm text-[#5c5648]">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#2c1810] to-[#5a3520] flex items-center justify-center shrink-0">
              <span className="font-display text-xs text-[#f3eee4]">DG</span>
            </div>
            <span className="font-medium text-[#1a1815]">Dilip Gupta</span>
            <span className="text-[#c9c2b3]">·</span>
            <span>Mar 14, 2026</span>
            <span className="text-[#c9c2b3]">·</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* cover image */}
        <figure className="max-w-4xl mx-auto mb-3">
          <img
            src="https://picsum.photos/seed/hl-cover/1200/700"
            alt="On-set still from the ICICI Bank shoot"
            className="w-full h-[220px] sm:h-[360px] md:h-[460px] object-cover rounded-md"
          />
        </figure>
        <p className="max-w-4xl mx-auto font-mono text-[11px] uppercase tracking-wide text-[#8a8074] mb-12 md:mb-16">
          On set during the ICICI Bank Mr. India shoot, Mumbai
        </p>

        {/* body */}
        <article className="prose-body max-w-2xl mx-auto text-[#2b2620] text-base sm:text-lg">
          <p>
            Some characters never really leave the culture — they just wait for the right
            moment to come back. That was the bet behind bringing Anil Kapoor's Mr. India
            persona into a modern banking campaign for ICICI Bank, and it's the kind of bet
            that only pays off if every department — writing, casting, production design —
            agrees on exactly how far to lean into nostalgia versus how far to modernize it.
          </p>

          <h2 className="text-2xl sm:text-3xl">Finding the tone</h2>
          <p>
            The brief asked for something that felt nostalgic without feeling dated — banking
            that's smart, not sentimental. We spent the first two weeks purely on tone: watching
            old references, testing lines, figuring out how much of the original character's
            voice could carry a financial-services message without tipping into pastiche.
          </p>

          <blockquote className="border-l-4 border-[#f2b705] pl-5 sm:pl-6 my-10">
            <p className="font-display italic text-xl sm:text-2xl leading-snug text-[#1a1815] mb-0">
              "The moment the line landed in rehearsal, the whole room knew — this wasn't a
              throwback, it was a comeback."
            </p>
          </blockquote>

          <p>
            Once the tone was locked, production moved fast. A five-day shoot across two Mumbai
            locations, built around a single home set that had to read as warm and lived-in on
            camera — not like a bank ad shot on a soundstage.
          </p>

          <figure className="my-10">
            <img
              src="https://picsum.photos/seed/hl-inline1/900/520"
              alt="Lighting setup on the home set"
              className="w-full h-[200px] sm:h-[320px] object-cover rounded-md"
            />
            <figcaption className="font-mono text-[11px] font-heading uppercase tracking-wide text-[#8a8074] mt-3">
              Lighting setup for the living-room sequence
            </figcaption>
          </figure>

          <h2 className="text-2xl sm:text-3xl">What made it work</h2>
          <p className="font-body">
            Nostalgia is easy to get wrong — either too reverent to say anything new, or too
            winking to feel sincere. The version that worked treated the character as a real
            person who'd simply grown up alongside the audience, which is what let the banking
            message sit naturally inside the story instead of on top of it.
          </p>
        </article>

        {/* tags + share */}
        <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-between gap-4 mt-12 pt-6 border-t border-[#e6e0d2]">
          <div className="flex flex-wrap gap-2">
            {["ICICI Bank", "Film", "Client Work"].map((tag) => (
              <span key={tag} className="font-mono text-[11px] uppercase tracking-wide text-[#5c5648] bg-[#f0ebe0] rounded-md px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            {/* <button aria-label="Share on Twitter" className="w-9 h-9 rounded-md border border-[#e6e0d2] flex items-center justify-center hover:border-[#1a1815] transition-colors">
              <Twitter size={14} />
            </button> */}
            {/* <button aria-label="Share on LinkedIn" className="w-9 h-9 rounded-md border border-[#e6e0d2] flex items-center justify-center hover:border-[#1a1815] transition-colors">
              <Linkedin size={14} />
            </button> */}
            <button aria-label="Copy link" className="w-9 h-9 rounded-md border border-[#e6e0d2] flex items-center justify-center hover:border-[#1a1815] transition-colors">
              <Link2 size={14} />
            </button>
          </div>
        </div>

        {/* author card */}
        <div className="max-w-2xl mx-auto mt-10 bg-[#f0ebe0] rounded-md p-5 sm:p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-md bg-gradient-to-br from-[#2c1810] to-[#5a3520] flex items-center justify-center shrink-0">
            <span className="font-display text-lg text-[#f3eee4]">DG</span>
          </div>
          <div>
            <div className="font-display font-medium text-lg text-[#1a1815]">Dilip Gupta</div>
            <p className="text-sm text-[#5c5648] mt-0.5">
              Founder & Creative Director at Happy Lamb Production, building visual stories
              for brands across film and digital.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Related posts — dark, signals "back to the blog" ===== */}
      <div className="bg-[#0e0d0c] text-[#f3eee4] px-6 sm:px-8 md:px-12 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#f2b705] mb-8">
            More from the studio
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RELATED.map((post) => (
              <a key={post.title} href="#" className="group block">
                <div className="rounded-md overflow-hidden mb-3">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-[160px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#f2b705]">
                  {post.category}
                </span>
                <h3 className="font-display font-medium text-lg leading-snug mt-1 group-hover:text-[#f2b705] transition-colors">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <div className="bg-[#0e0d0c] text-[#6b6459] px-6 sm:px-8 md:px-12 py-8 border-t border-[#f3eee4]/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[11px] uppercase tracking-wide">
          <span>© 2026 Happy Lamb Production</span>
          <span>Mumbai, India</span>
        </div>
      </div>
    </div>
  );
}