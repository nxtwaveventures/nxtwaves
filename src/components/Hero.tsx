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
           poster="/images/waves-poster.jpg"
           className="w-full h-full object-cover opacity-80"
         >
           <source src="/videos/relaxing-waves.mp4" type="video/mp4" />
         </video> 

         {/* Overlay for legibility */}
         <div className="w-full h-full bg-black/40 absolute inset-0" />
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
