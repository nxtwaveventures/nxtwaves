"use client";

import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10" />
         
         {/* Video Background */}
         <video 
           autoPlay 
           loop 
           muted 
           playsInline 
           className="w-full h-full object-cover opacity-60"
         >
           <source src="/videos/hero-background.mp4" type="video/mp4" />
         </video> 

         {/* Placeholder for video: iridescent dark blue and violet waves */}
         <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#1a0b2e_0%,_#050505_100%)] opacity-80" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#1e1b4b_50%,#000000_100%)] opacity-30 blur-3xl animate-slow-spin" />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 text-white"
        >
          The Next Wave of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">Innovation</span>
        </motion.h1>
         
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
         >
            <MagneticButton className="bg-white text-black hover:bg-gray-100">
                Explore Our Tools
            </MagneticButton>
         </motion.div>
      </div>
    </section>
  );
}
