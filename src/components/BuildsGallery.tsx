"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { Sparkles, Pause } from "lucide-react";

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
    <section id="builds" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium mb-12 text-black tracking-tighter ml-4"
        >
          History of Innovation
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="group relative h-[600px] overflow-hidden rounded-[2.5rem] bg-[#f0f4f8] flex flex-col justify-between"
            >
                {/* Content Layer (Top) */}
                <div className="relative z-10 p-8 flex flex-col">
                   <h3 className="text-3xl font-medium text-gray-900 mb-3 tracking-tight leading-tight">
                     {product.title}
                   </h3>
                   <p className="text-gray-600 text-lg leading-snug max-w-[90%]">
                     {product.description}
                   </p>
                </div>

                {/* Image Layer (Bottom/Middle) */}
                <div className="relative w-full h-[350px] mt-auto">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient to blend image with card background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#f0f4f8]/50" />
                </div>
                   
                   {/* Bottom Controls */}
                   <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
                      <div className="flex gap-3">
                          {/* Try Button */}
                          <Link 
                            href={`/products/${product.slug}`}
                            className="flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-gray-800 rounded-full text-sm font-medium transition-colors shadow-lg"
                          >
                             <Sparkles className="w-4 h-4 text-white" fill="currentColor" />
                             <span>Try</span>
                          </Link>
                          
                          {/* Learn More Button */}
                          <Link 
                            href={`/products/${product.slug}`}
                            className="hidden sm:flex px-5 py-2.5 bg-white text-black border border-gray-200 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors shadow-sm"
                          >
                             Learn more
                          </Link>
                      </div>

                      {/* Pause Icon */}
                      <button className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-gray-900 transition-colors">
                          <Pause className="w-4 h-4 fill-gray-900" />
                      </button>
                   </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
