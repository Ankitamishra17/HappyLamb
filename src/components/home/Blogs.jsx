

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
          className="group relative w-full  aspect-[16/9]  overflow-hidden border"
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
