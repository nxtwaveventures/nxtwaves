"use client";

export default function MiliLogo({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 180 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="miliGradient" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>
      
      {/* m */}
      <path d="M15 50V20C15 15 20 15 20 20V50" stroke="url(#miliGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 20C20 15 32 15 32 20V50" stroke="url(#miliGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 20C32 15 44 15 44 20V50" stroke="url(#miliGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* i */}
      <path d="M65 50V22" stroke="url(#miliGradient)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="65" cy="12" r="5" fill="url(#miliGradient)" />
      
      {/* l */}
      <path d="M90 50V10" stroke="url(#miliGradient)" strokeWidth="8" strokeLinecap="round" />
      
      {/* i */}
      <path d="M115 50V22" stroke="url(#miliGradient)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="115" cy="12" r="5" fill="url(#miliGradient)" />
      
      {/* Sparkle Accent */}
      <path 
        d="M150 15L154 5L158 15L168 19L158 23L154 33L150 23L140 19L150 15Z" 
        fill="url(#miliGradient)" 
        opacity="0.8"
      >
        <animate attributeName="opacity" values="0.8;1;0.8" duration="2s" repeatCount="indefinite" />
        <animate attributeName="transform" values="scale(1);scale(1.1);scale(1)" duration="2s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
