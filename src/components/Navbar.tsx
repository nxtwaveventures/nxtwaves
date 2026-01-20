"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/50 backdrop-blur-lg border-b border-white/5">
      <div className="flex items-center justify-between px-6 py-4 md:px-8">
        <div className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          nxtwaves.in
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
           <Link href="#home" className="hover:text-white transition-colors">Home</Link>
           <Link href="#builds" className="hover:text-white transition-colors">Builds</Link>
           <Link href="#features" className="hover:text-white transition-colors">Features</Link>
           <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-center">
               <Link href="#home" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg font-medium">Home</Link>
               <Link href="#builds" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg font-medium">Builds</Link>
               <Link href="#features" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg font-medium">Features</Link>
               <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
