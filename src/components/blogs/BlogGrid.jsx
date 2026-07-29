export const POSTS = [
  {
    title: "Shooting on Location: JCB Village Stories",
    category: "Behind the Scenes",
    author: "Prince Mishra",
    date: "Mar 8, 2026",
    read: "4 min read",
    img: "/jcb1.png",
  },
  {
    title: "How We Cast Real Stories for Bajaj V",
    category: "Studio Notes",
    author: "Sarvesh",
    date: "Feb 27, 2026",
    read: "5 min read",
    img: "/bjaj1.png",
  },
  {
    title: "Godrej Home Lockers: Directing Madhuri Dixit",
    category: "Client Work",
    author: "Kapil Rawat",
    date: "Feb 19, 2026",
    read: "7 min read",
    img: "/godrej.png",
  },
  {
    title: "Medicine Baba: Finding Omkarnath Sharma",
    category: "Real-Life Stories",
    author: "Ratnesh Yadav",
    date: "Feb 10, 2026",
    read: "6 min read",
    img: "/bjaj2.png",
  },
  {
    title: "Inside the Upstox Diwali Shoot",
    category: "Client Work",
    author: "Dilip Gupta",
    date: "Jan 30, 2026",
    read: "3 min read",
    img: "/upstock.jpeg",
  },
  {
    title: "Editing Rhythm: Cutting Bipin Ganatra's Story",
    category: "Studio Notes",
    author: "Memon Shadap Razzak",
    date: "Jan 21, 2026",
    read: "5 min read",
    img: "https://i.pinimg.com/1200x/95/a1/85/95a18530daa78b61f1d64cecdc857742.jpg",
  },
];

export default function BlogGrid({ active = "All" }) {
  const posts =
    active === "All" ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <div
      className="bg-[#0e0d0c] text-[#f3eee4] px-6 sm:px-8 md:px-12 pb-16 md:pb-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500&family=Space+Mono&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
      `}</style>

      {posts.length > 0 ? (
        <div className="max-w-7xl px-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {posts.map((post) => (
            <a key={post.title} href="#" className="group block">
              <div className="rounded-md overflow-hidden mb-4">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-[190px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <span className="font-heading text-[10px] tracking-[0.1em] uppercase text-[#f2b705]">
                {post.category}
              </span>

              <h3 className="font-display font-medium text-xl leading-snug tracking-tight mt-2 mb-3 group-hover:text-[#f2b705] transition-colors">
                {post.title}
              </h3>

              <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide uppercase text-[#6b6459]">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.read}</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="max-w-7xl mx-auto font-mono text-sm text-[#6b6459]">
          No posts in this category yet.
        </p>
      )}
    </div>
  );
}