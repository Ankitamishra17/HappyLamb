// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Clock,
//   Tag,
//   Sparkles,
//   BookOpen,
//   Send,
// } from "lucide-react";

// // Blog Post Data
// const BLOG_POSTS = [
//   {
//     id: 1,
//     title: "Mastering DaVinci Resolve: Color Grading 10-Bit LOG Footage",
//     excerpt:
//       "A complete guide to transforming flat LOG video profiles into cinematic, film-like looks using node trees and LUTs.",
//     category: "Tutorials",
//     readTime: "6 min read",
//     image:
//       "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
//     slug: "mastering-davinci-resolve-color-grading",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Top 5 Camera Rigs for High-Speed Commercial Shoots in 2026",
//     excerpt:
//       "Comparing cinema camera setups, wireless video transmitters, and FPV drone pairings for fast-paced commercial sets.",
//     category: "Gear Review",
//     readTime: "4 min read",
//     image:
//       "https://i.pinimg.com/1200x/2a/7b/b4/2a7bb4336df2eca8439b231a620e4bcf.jpg",
//     slug: "top-5-camera-rigs-commercial-shoots",
//     featured: false,
//   },
//   {
//     id: 3,
//     title: "The Art of Pacing: How Sound Design Drives Film Narrative",
//     excerpt:
//       "Why foley effects, ambient soundscapes, and subtle bass drops impact the emotional tone of a video more than visuals.",
//     category: "Filmmaking",
//     readTime: "8 min read",
//     image:
//       "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
//     slug: "art-of-pacing-sound-design",
//     featured: false,
//   },
//   {
//     id: 3,
//     title: "How Motion Graphics Elevate Modern Brand Storytelling",
//     excerpt:
//       "Discover how seamless motion design, animated typography, and visual effects help brands create engaging digital experiences.",
//     category: "Design",
//     readTime: "5 min read",
//     image:
//       "https://i.pinimg.com/736x/70/75/db/7075dba3796c57367858d32188aa99ff.jpg",
//     slug: "motion-graphics-brand-storytelling",
//     featured: false,
//   },
// ];

// export default function BlogSection() {
//   const [featuredPost, ...secondaryPosts] = BLOG_POSTS;
//   const [email, setEmail] = useState("");

//   return (
//     <section className="relative w-full bg-white text-slate-900 py-24 overflow-hidden border-t border-slate-200/80">
//       <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center gap-2 rounded-md border border-[#FFC72C]/60 bg-[amber-50] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFC72C]"
//             >
//               <Sparkles className="h-3.5 w-3.5 text-[#FFC72C]" />
//               <span>Insights & Tutorials</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="mt-4 text-3xl sm:text-5xl font-semibold font-heading uppercase tracking-tight text-slate-900"
//             >
//               Latest from the <span className="text-[#FFC72C]">Journal</span>
//             </motion.h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <Link
//               to="/blogs"
//               className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#FFC72C] hover:border-[#FFC72C] hover:shadow-md transition-all duration-300"
//             >
//               <span>View All Articles</span>
//               <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
//             </Link>
//           </motion.div>
//         </div>

//         {/* Blog Grid Layout */}
//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* Main Featured Article (Spans 7 cols) */}
//           <motion.article
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-7 group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FFC72C]/80 transition-all duration-500"
//           >
//             <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
//               <img
//                 src={featuredPost.image}
//                 alt={featuredPost.title}
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

//               {/* Category Badge */}
//               <div className="absolute top-4 left-4 flex items-center gap-2">
//                 <span className="inline-flex items-center gap-1.5 rounded-md border border-white/40 bg-white/80 px-3.5 py-1 text-xs font-bold text-slate-800 backdrop-blur-md shadow-sm">
//                   <Tag className="h-3 w-3 text-[#FFC72C]" />
//                   {featuredPost.category}
//                 </span>
//               </div>
//             </div>

//             <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
//               <div>
//                 <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
//                   {/* <span>{featuredPost.date}</span> */}
//                   <span className="text-slate-300">•</span>
//                   <span className="flex items-center gap-1 text-slate-500">
//                     <Clock className="h-3.5 w-3.5 text-[#FFC72C]" />
//                     {featuredPost.readTime}
//                   </span>
//                 </div>

//                 <h3 className="mt-3 text-2xl sm:text-3xl font-body font-bold text-slate-900 group-hover:text-[#FFC72C] transition-colors leading-snug">
//                   <Link to="/blogs">
//                     {featuredPost.title}
//                   </Link>
//                 </h3>

//                 <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
//                   {featuredPost.excerpt}
//                 </p>
//               </div>

//               <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
//                 <Link
//                   to="/blogs"
//                   className="inline-flex items-center gap-2 text-xs font-bold text-[#FFC72C] hover:text-[#FFC72C]transition-colors"
//                 >
//                   <span>Read Full Article</span>
//                   <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           </motion.article>

//           {/* Secondary Articles Column (Spans 5 cols) */}
//           <div className="lg:col-span-5 flex flex-col gap-6">
//             {secondaryPosts.map((post, idx) => (
//               <motion.article
//                 key={post.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//                 className="group relative rounded-3xl border border-slate-200/80 bg-white p-5 flex flex-col sm:flex-row gap-5 shadow-sm hover:shadow-lg hover:border-[#FFC72C] transition-all duration-300"
//               >
//                 <div className="relative aspect-video sm:w-2/5 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between flex-1">
//                   <div>
//                     <div className="flex items-center gap-2 text-xs text-[#FFC72C] font-semibold">
//                       <span>{post.category}</span>
//                       <span className="text-slate-300">•</span>
//                       <span className="text-slate-500 font-normal">
//                         {post.readTime}
//                       </span>
//                     </div>

//                     <h4 className="mt-2 text-base font-bold text-slate-900 group-hover:text-[#FFC72C] transition-colors leading-snug">
//                       <Link to="/blogs">{post.title}</Link>
//                     </h4>
//                   </div>

//                   <Link
//                     to="/blogs"
//                     className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 group-hover:text-[#FFC72C]transition-colors"
//                   >
//                     <span>Read Article</span>
//                     <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                   </Link>
//                 </div>
//               </motion.article>
//             ))}

//             {/* Newsletter Mini Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="rounded-3xl border border-[#FFC72C] bg-gradient-to-br from-[#FFC72C]/30 via-orange-50/50 to-white p-6 shadow-sm"
//             >
//               <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFC72C]">
//                 <BookOpen className="h-4 w-4 text-[#FFC72C]" />
//                 <span>Stay Updated</span>
//               </div>
//               <p className="mt-2 text-xs text-slate-600 leading-relaxed">
//                 Get monthly color presets, workflow tips, and gear guides
//                 straight to your inbox.
//               </p>

//               <form
//                 onSubmit={(e) => e.preventDefault()}
//                 className="mt-4 flex items-center gap-2"
//               >
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#FFC72C] focus:outline-none focus:ring-1 focus:ring-[#FFC72C] shadow-inner"
//                 />
//                 <button
//                   type="submit"
//                   className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-[#FFC72C] transition-colors flex items-center gap-1.5 shadow-sm"
//                 >
//                   <span>Join</span>
//                   <Send className="h-3 w-3" />
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ArrowUpRight,
} from "lucide-react";

export default function ShowreelVideo({
  videoSrc = "/videos/showreel.mp4",
  posterSrc = "/apar.jpeg",
  title = "Our ",
  titleAccent = "Short Film.",
  description = "A cinematic look at what we do best — real stories, shot and cut with care. Press play to watch the full piece.",
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  function handleFullscreen() {
    videoRef.current?.requestFullscreen?.();
  }

  return (
    <section
      id="showreel"
      className="w-full"
      style={{ backgroundColor: "#F4F3F1" }}
    >
      <div className="max-w-7xl mx-auto px-12 py-16 md:py-24">
        {/* Heading row — copy on the left, "Our Work" CTA on the right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p
              className="text-xs md:text-sm font-semibold tracking-[0.25em] mb-4"
              style={{ color: "#FB5406", fontFamily: "Poppins, sans-serif" }}
            >
              SHOWREEL
            </p>

            <h2
              className="uppercase text-[32px] sm:text-[42px] md:text-[48px] tracking-wide leading-[0.95] mb-5"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                color: "#1A1A1A",
              }}
            >
              {title} <span style={{ color: "#FB5406" }}>{titleAccent}</span>
            </h2>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="block h-[3px] mb-6"
              style={{ backgroundColor: "#FB5406" }}
            />

            <p
              className="text-sm md:text-base leading-relaxed max-w-lg"
              style={{ color: "#4A4A4A", fontFamily: "Poppins, sans-serif" }}
            >
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="shrink-0"
          >
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
              style={{
                border: "1px solid rgba(251,84,6,0.4)",
                color: "#1A1A1A",
                backgroundColor: "transparent",
                fontFamily: "Poppins, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FB5406";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "#FB5406";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1A1A1A";
                e.currentTarget.style.borderColor = "rgba(251,84,6,0.4)";
              }}
            >
              <span>Our Work</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Video player */}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative w-full aspect-[16/7] rounded-sm overflow-hidden border"
          style={{ borderColor: "#E4E2DF" }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            playsInline
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Dim overlay + center play button — fades out once playing */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(9,9,9,0.15) 0%, rgba(9,9,9,0.55) 100%)",
                }}
              >
                <motion.button
                  type="button"
                  onClick={togglePlay}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Play showreel"
                  className="relative w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FB5406" }}
                >
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ border: "2px solid #FB5406" }}
                    animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  />
                  <Play
                    size={16}
                    fill="#FFFFFF"
                    color="#FFFFFF"
                    className="translate-x-0.5"
                  />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom control bar — visible once playing / on hover */}
          <div
            className={`absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 transition-opacity duration-300 ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(0deg, rgba(9,9,9,0.85) 0%, transparent 100%)",
            }}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="w-10 h-10  flex items-center justify-center border"
                style={{
                  borderColor: "#2A2A2A",
                  backgroundColor: "rgba(9,9,9,0.6)",
                }}
              >
                {isPlaying ? (
                  <Pause size={15} color="#FFFFFF" />
                ) : (
                  <Play size={15} color="#FFFFFF" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="w-10 h-10  flex items-center justify-center border"
                style={{
                  borderColor: "#2A2A2A",
                  backgroundColor: "rgba(9,9,9,0.6)",
                }}
              >
                {isMuted ? (
                  <VolumeX size={15} color="#FFFFFF" />
                ) : (
                  <Volume2 size={15} color="#FFFFFF" />
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Fullscreen"
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderColor: "#2A2A2A",
                backgroundColor: "rgba(9,9,9,0.6)",
              }}
            >
              <Maximize size={15} color="#FFFFFF" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
