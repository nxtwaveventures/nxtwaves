"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-blue-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[20vw] h-[20vw] bg-purple-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Next Wave</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Ready to transform your ideas into reality? Let's build something extraordinary together.
          </motion.p>
        </div>

        <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="John Doe" 
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>
            
            <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
            </div>

            <div className="flex justify-center">
                <MagneticButton className="w-full md:w-auto bg-white text-black hover:bg-gray-200">
                    Send Message
                </MagneticButton>
            </div>
        </motion.form>
      </div>
    </section>
  );
}
