"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function MagneticButton({ children, className = "", ...props }: Props) {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Adjust the multiplier for strength of the magnetic effect
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const Component = props.href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: x * 0.3, y: y * 0.3 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-colors duration-200 border border-transparent rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-100 mix-blend-multiply" />
    </Component>
  );
}
