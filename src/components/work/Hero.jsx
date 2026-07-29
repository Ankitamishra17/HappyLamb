// import { motion, useReducedMotion } from "framer-motion";
// import { Play, Filter } from "lucide-react";
// import { Link } from "react-router-dom";

// /**
//  * Studio brand palette
//  * Primary      #FB5406  — orange
//  * Secondary    #1A1A1A  — charcoal
//  * Background   #090909  — rich black
//  * Surface/Card #141414  — dark gray
//  * Border       #2A2A2A  — gray
//  * Heading      #FFFFFF  — white
//  * Body text    #C9C9C9  — light gray
//  * Muted text   #8D8D8D  — gray
//  * Hover        #FF6B1A  — bright orange
//  *
//  * Heading font: Bebas Neue · Body font: Poppins
//  */

// // High-impact cinema camera background
// const BG_IMAGE = "15.png";

// export default function WorkHero() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#090909] text-[#C9C9C9]">
//       {/* Background Image Layer with Vignette Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={BG_IMAGE}
//           alt="Studio film set background"
//           className="h-full w-full scale-105 object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/95 via-[#090909]/70 to-[#090909]/25" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 sm:px-8">
//         {/* Hero Main Grid */}
//         <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
//           {/* Left Column — Headline & Narrative */}
//           <div className="space-y-6 lg:col-span-7 -mt-24">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//               className="font-heading uppercase leading-[0.9] tracking-wide text-white"
//               style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
//             >
//               Selected works &
//               <br />
//               <span className="text-[#FB5406]">cinematic stories</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.25 }}
//               className="max-w-2xl font-body text-base leading-8 text-[#C9C9C9] sm:text-base"
//             >
//               Explore our complete collection of commercial ad films, high-speed
//               automotive spots, music videos, and travel documentaries filmed
//               across 15+ countries.
//             </motion.p>

//             {/* Quick Action Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.35 }}
//               className="flex flex-wrap items-center gap-4 pt-4"
//             >
//               <Link
//                 to="/team"
//                 className="inline-flex items-center gap-2 bg-[#FB5406] px-7 py-3.5 font-['Poppins'] text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#FF6B1A]"
//               >
//                 <span>Our Team</span>
//               </Link>

//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#141414] px-7 py-3.5 font-['Poppins'] text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#FB5406] hover:bg-[#1A1A1A]"
//               >
//                 <span>Contact</span>
//               </Link>
//             </motion.div>

//           </div>
//         </div>
//       </div>

//       <div className="relative z-10">

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Clapperboard,
} from "lucide-react";

const PRIMARY = "#FB5406";
const SECONDARY = "#1A1A1A";
const BACKGROUND = "#090909";
const SURFACE = "#141414";
const BORDER = "#2A2A2A";
const HEADING = "#FFFFFF";
const BODY = "#C9C9C9";
const MUTED = "#8D8D8D";
const HOVER = "#FF6B1A";

// Cinema studio background image from Unsplash
const BG_IMAGE = "15.png";

export default function ContactHero() {
  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 lg:px-24 py-20 text-white"
      style={{ backgroundColor: BACKGROUND }}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Film set camera background"
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,9,9,.95) 15%, rgba(9,9,9,.75) 45%, rgba(9,9,9,.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-12">
        {/* Left Column — Text Manifesto */}
        <div className="lg:col-span-7 space-y-6 -mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading  uppercase leading-[0.98] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
          >
            Selected works &
            <br />
            <span style={{ color: PRIMARY }}> cinematic stories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-lg text-base font-body leading-8"
            style={{ color: BODY }}
          >
            Explore our complete collection of commercial ad films, high-speed
             automotive spots, music videos, and travel documentaries filmed
             across 15+ countries.
          </motion.p>

            {/* Quick Action Buttons */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                to="/team"
                className="inline-flex items-center gap-2 bg-[#FB5406] px-7 py-3.5 font-['Poppins'] text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#FF6B1A]"
              >
                <span>Our Team</span>
               </Link>

               <Link
                 to="/contact"
                 className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#141414] px-7 py-3.5 font-['Poppins'] text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#FB5406] hover:bg-[#1A1A1A]"
               >
                 <span>Contact</span>
               </Link>
             </motion.div>

           </div>
         </div>
   
       

    </section>
  );
}
