"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { 
    id: 1, 
    title: "Quantum Interface", 
    category: "App Tools", 
    description: "Isometric 3D render of a futuristic mobile app interface.",
    image: "/images/tool-1.jpg" // Added image path
  },
  { 
    id: 2, 
    title: "Neural Network", 
    category: "Features", 
    description: "Glowing glass elements floating in a void.",
    image: "/images/tool-2.jpg"
  },
  { 
    id: 3, 
    title: "Data Stream", 
    category: "App Tools", 
    description: "Soft bokeh background with high-contrast data visualization.",
    image: "/images/tool-3.jpg"
  },
  { 
    id: 4, 
    title: "Cyber Security", 
    category: "Features", 
    description: "Secure, encrypted connections visualization.",
    image: "/images/tool-4.jpg"
  },
];

export default function BuildsGallery() {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-20 text-white tracking-tighter"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Builds</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 cursor-pointer"
            >
              {/* Image Placeholder Area */}
              <div className="absolute inset-0 bg-neutral-900 transition-transform duration-700 ease-out group-hover:scale-105">
                 
                 {/* Tool Image */}
                 <Image 
                   src={tool.image} 
                   alt={tool.title} 
                   fill 
                   className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" 
                 />

                 {/* Gradient placeholder for actual image */}
                 <div className={`w-full h-full opacity-40 bg-gradient-to-br ${
                    tool.id % 2 === 0 ? 'from-purple-900/40 to-blue-900/10' : 'from-blue-900/40 to-purple-900/10'
                 }`} />
                 
                 {/* Placeholder Text for User to Insert Image */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-20 Group-hover:opacity-10 transition-opacity">
                    <span className="text-sm font-mono text-gray-500">Insert AI Visual Here</span>
                 </div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  
                  <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex items-center space-x-3 mb-3">
                         <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-white/10 backdrop-blur-md rounded-full text-blue-300 border border-white/5">
                            {tool.category}
                         </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{tool.title}</h3>
                    
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                         <div className="overflow-hidden">
                             <p className="text-gray-300 text-lg leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {tool.description}
                             </p>
                              <div className="pt-6">
                                <span className="inline-flex items-center text-sm font-medium text-white border-b border-blue-500 pb-0.5 hover:text-blue-400 transition-colors">
                                    View Project &rarr;
                                </span>
                              </div>
                         </div>
                    </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
