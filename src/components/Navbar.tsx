"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NamasteLogo from './NamasteLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 group">
          <NamasteLogo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            NxtWaves
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
           <Link href="#builds" className="text-gray-600 hover:text-blue-600 transition-colors">Technologies</Link>
           <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
           <div className="flex items-center gap-4">
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Link 
                href="https://mili.nxtwaves.in" 
                className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:shadow-lg"
              >
                Sign In
              </Link>
           </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-black"
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-center">
               <Link href="#home" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600 text-lg font-medium">Home</Link>
               <Link href="#builds" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600 text-lg font-medium">Builds</Link>
               <Link href="#features" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600 text-lg font-medium">Features</Link>
               <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600 text-lg font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
