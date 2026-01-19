"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VideoReveal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Transform width from 70% to 100% as the element scrolls into view
  const width = useTransform(scrollYProgress, [0.2, 0.6], ["70%", "100%"]);
  // Transform border radius from rounded to square
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.6], ["24px", "0px"]);

  return (
    <div ref={ref} className="bg-[#050505] py-32 flex justify-center overflow-hidden">
       <motion.div 
         style={{ width, borderRadius }}
         className="h-[60vh] md:h-[80vh] bg-gray-900 relative overflow-hidden shadow-2xl mx-auto"
       >
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-blue-900/20 z-0" />
           
           {/* Abstract visual content */}
           <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[url('https://placehold.co/1920x1080/1a1a1a/FFF?text=Cinematic+Reveal')] bg-cover bg-center opacity-50 mix-blend-overlay" />
           </div>

          <div className="absolute bottom-10 left-10 z-10">
             <h3 className="text-2xl font-bold text-white mb-2">Immersive Tech</h3>
             <p className="text-gray-400">Experience the next generation of digital tools.</p>
          </div>
       </motion.div>
    </div>
  )
}
