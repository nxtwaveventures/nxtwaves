"use client";

import { motion } from "framer-motion";

export default function NamasteLogo({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      {...props}
    >
      <defs>
        <linearGradient id="namasteGradient" x1="0" y1="0" x2="100%" y2="0">
           <stop offset="0%" stopColor="#60A5FA" />
           <stop offset="50%" stopColor="#C084FC" />
           <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>

      {/* Stylized Namaste Hands - Minimal Line Art */}
      <path 
        d="M25 80 C20 70, 30 50, 48 20 C49 18, 51 18, 52 20 C70 50, 80 70, 75 80"
        stroke="url(#namasteGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-90"
      />
      
      {/* Thumb and palm details */}
      <path 
        d="M48 20 L48 55 C48 60, 40 65, 35 60"
        stroke="url(#namasteGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
       <path 
        d="M52 20 L52 55 C52 60, 60 65, 65 60"
        stroke="url(#namasteGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Bottom connection */}
      <path 
        d="M35 60 C40 75, 60 75, 65 60"
        stroke="url(#namasteGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />

    </motion.svg>
  );
}
