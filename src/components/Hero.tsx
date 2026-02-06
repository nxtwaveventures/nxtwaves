"use client";

import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";
import NamasteLogo from "./NamasteLogo";
import { CheckCircle, Shield, Activity, Clock, Sparkles } from "lucide-react"; // Import new icons

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern - subtle to keep it "plain" but not flat */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
         <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Product Badge */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-10 inline-block"
        >
             <span className="px-6 py-2.5 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-md text-base font-semibold tracking-wide text-blue-600 shadow-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Introducing Mili
             </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-slate-900 flex flex-col md:flex-row items-center justify-center gap-6"
        >
           <NamasteLogo className="w-20 h-20 md:w-28 md:h-28 hover:scale-110 transition-transform duration-500" />
           <div className="flex items-center gap-3">
             <span>Meet</span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500">mili</span>
           </div>
        </motion.h1>

        {/* Sub Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl font-light mb-10 text-gray-700"
        >
          <span className="font-normal text-slate-800">World-Class</span> <span className="font-extralight text-gray-500">Primary Care.</span><br />
          <span className="font-semibold text-slate-900 mt-3 block">Free For Patients</span>
        </motion.h2>
        
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
           className="flex flex-col md:flex-row gap-5 justify-center items-center mb-16"
         >
            <MagneticButton className="px-10 py-5 bg-slate-900 text-white hover:bg-black shadow-lg hover:shadow-2xl transition-all text-lg tracking-wide flex items-center gap-3 group">
                <span>Start Chat with Mili</span>
                <NamasteLogo className="w-6 h-6 opacity-80 group-hover:scale-110 transition-transform" /> 
            </MagneticButton>
            <MagneticButton 
                href="https://mili.nxtwaves.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-transparent border border-gray-200 text-gray-600 font-medium text-lg hover:border-gray-400 hover:text-gray-900 transition-all"
            >
                How it Works
            </MagneticButton>
         </motion.div>

        {/* Trust Signals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
           {/* Verified Badge */}
            <div className="flex items-center gap-2 text-gray-600">
                <div className="p-2 bg-emerald-50 rounded-full">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="font-medium">Verified by Specialists</span>
            </div>

            <div className="w-px h-8 bg-gray-200 hidden md:block" />

            {/* Privacy */}
            <div className="flex items-center gap-2 text-gray-600">
                 <div className="p-2 bg-blue-50 rounded-full">
                    <Shield className="w-5 h-5 text-blue-600" />
                 </div>
                <span className="font-medium">Private & Secure</span>
            </div>

             <div className="w-px h-8 bg-gray-200 hidden md:block" />

            {/* Accuracy */}
            <div className="flex items-center gap-2 text-gray-600">
                 <div className="p-2 bg-purple-50 rounded-full">
                    <Activity className="w-5 h-5 text-purple-600" />
                 </div>
                <span className="font-medium">High Accuracy</span>
            </div>
             
             <div className="w-px h-8 bg-gray-200 hidden md:block" />

            {/* 24/7 Support */}
            <div className="flex items-center gap-2 text-gray-600">
                 <div className="p-2 bg-amber-50 rounded-full">
                    <Clock className="w-5 h-5 text-amber-600" />
                 </div>
                <span className="font-medium">24/7 Support</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
