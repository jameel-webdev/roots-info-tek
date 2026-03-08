'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  const [useImage, setUseImage] = useState(true);

  if (useImage) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src="/logo.png"
          alt="Roots Info Tek Logo"
          fill
          className="object-contain"
          onError={() => setUseImage(false)}
          unoptimized
        />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Roots Info Tek Logo"
    >
      {/* Green circular background - Brand Color */}
      <circle cx="50" cy="50" r="50" fill="#658D37" />
      
      {/* Handwritten "Rit" text in white */}
      <g stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* R: Spine and Bowl */}
        <path d="M32 28 C 32 28, 25 45, 32 70" /> 
        <path d="M32 28 C 32 15, 60 15, 55 42 C 52 55, 35 52, 32 52" />
        
        {/* R: Swoosh Leg (underlining i and t) */}
        <path d="M35 52 C 45 65, 55 78, 90 62" />
        
        {/* i: Stem and Dot */}
        <path d="M62 42 L 62 58" />
        <circle cx="62" cy="32" r="4.5" fill="white" stroke="none" />
        
        {/* t: Stem and Cross */}
        <path d="M78 28 L 78 55 C 78 60, 82 60, 85 55" />
        <path d="M72 38 L 88 35" />
      </g>
    </svg>
  );
}
