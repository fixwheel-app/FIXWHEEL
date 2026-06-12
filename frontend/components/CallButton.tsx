"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const CallButton = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/route-analysis')) return null;

  return (
    <div className="fixed bottom-24 right-6 z-[9999] flex flex-col items-end group">
      {/* Tooltip */}
      <div className="absolute -top-12 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-gray-800 text-sm py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap pointer-events-none font-medium">
        Call us
        {/* Tooltip Triangle */}
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white transform rotate-45"></div>
      </div>
      
      <a 
        href="tel:+918745945682" 
        className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-accent text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none"
        aria-label="Call us now"
      >
        {/* Glowing Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping opacity-75 pointer-events-none"></span>

        {/* Phone SVG Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 md:w-6 h-6 animate-pulse"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>

        {/* Top-Right Active Status Dot */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent border border-white"></span>
        </span>
      </a>
    </div>
  );
};

export default CallButton;
