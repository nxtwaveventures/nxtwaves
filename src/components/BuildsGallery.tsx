"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  { 
    id: 1, 
    title: "Hotel Drop Bot", 
    category: "Telegram Bot", 
    description: "Telegram bot for tracking hotel prices (Agoda partner).",
    span: "md:col-span-2",
    slug: "hotel-drop-bot"
  },
  { 
    id: 2, 
    title: "mapHire", 
    category: "Platform", 
    description: "Interactive hiring and talent mapping platform.",
    span: "md:col-span-1",
    slug: "maphire"
  },
  { 
    id: 3, 
    title: "etoffe", 
    category: "E-commerce", 
    description: "Digital Saree Catalogue with AI-generated visuals.",
    span: "md:col-span-1",
    slug: "etoffe"
  },
  { 
    id: 5, 
    title: "Untold Chemistry", 
    category: "Interactive Book", 
    description: "An interactive book experience with podcasts and snapshots.",
    span: "md:col-span-2",
    slug: "untold-chemistry"
  },
  { 
    id: 4, 
    title: "Medtech Innovations", 
    category: "Healthcare", 
    description: "Healthcare technology solutions.",
    span: "md:col-span-1",
    slug: "medtech-innovations"
  },
  { 
    id: 6, 
    title: "Shopify Retail App", 
    category: "Retail Tool", 
    description: "Tool for retailers to sell faster and save more.",
    span: "md:col-span-1",
    slug: "shopify-retail-app"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BuildsGallery() {
  return (
    <section id="builds" className="py-32 px-4 md:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-20 text-white tracking-tighter"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Innovations</span>
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 ${product.span} flex flex-col`}
            >
              <Link href={`/products/${product.slug}`} className="block h-full">
                {/* 16:9 Image Placeholder */}
                <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                   <div className="mb-4">
                     <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-white/10 rounded-full text-blue-300 border border-white/5">
                        {product.category}
                     </span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                     {product.title}
                   </h3>
                   <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                     {product.description}
                   </p>
                   
                   <div className="mt-6 flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                      Learn more <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
