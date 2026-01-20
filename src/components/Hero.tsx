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
           className="w-full h-full object-cover opacity-60"
         >
           <source src="/videos/relaxing-waves.mp4" type="video/mp4" />
         </video> 

         {/* Overlay for legibility */}
         <div className="w-full h-full bg-black/30 absolute inset-0" />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Product Badge */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block"
        >
             <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-sm font-medium tracking-wide text-blue-300">
                ✨ Introducing Mili
             </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-white"
        >
           Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">mili</span>
        </motion.h1>

        {/* Sub Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl font-light mb-8 text-gray-200"
        >
          World-Class Primary Care.<br />
          <span className="font-semibold text-white mt-2 block">Free For Patients</span>
        </motion.h2>
        
        {/* Description / Trust Signals */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Mili is your AI doctor. Verified by top specialists. <br className="hidden md:block"/>
          <span className="text-blue-200/90 font-normal">Always private. Always 100% Free.</span>
        </motion.p>
         
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
           className="flex flex-col md:flex-row gap-4 justify-center items-center"
         >
            <MagneticButton className="px-8 py-4 bg-white text-black hover:bg-gray-100">
                Start Chat with Mili
            </MagneticButton>
            <MagneticButton 
                href="https://mili.nxtwaves.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
            >
                How it Works
            </MagneticButton>
         </motion.div>
      </div>
    </section>
  );
}
