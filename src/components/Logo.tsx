import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = "", iconOnly = false, lightText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} id="klar-solution-brand-logo">
      {/* 3D Planet Orbit SVG Icon matching user's image */}
      <svg viewBox="0 0 100 100" className="w-[36px] h-[36px] shrink-0" id="klar-logo-vector">
        <defs>
          <radialGradient id="sphereShine" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#2c3e35" />
            <stop offset="35%" stopColor="#121a16" />
            <stop offset="100%" stopColor="#050807" />
          </radialGradient>
          
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="45%" stopColor="#1D9E75" />
            <stop offset="100%" stopColor="#0A5B42" />
          </linearGradient>
        </defs>

        <g transform="rotate(-28 50 50)">
          {/* Back half of the orbital ring */}
          <path 
            d="M 12 50 A 38 16 0 0 1 88 50" 
            fill="none" 
            stroke="url(#ringGrad)" 
            strokeWidth="7.5" 
            strokeLinecap="round" 
          />
          
          {/* Base shadow/glow behind the sphere */}
          <circle cx="50" cy="50" r="23" fill="#0A0F0D" />
          
          {/* Dynamic gloss sphere */}
          <circle cx="50" cy="50" r="22" fill="url(#sphereShine)" />
          
          {/* Front half of the orbital ring */}
          <path 
            d="M 12 50 A 38 16 0 0 0 88 50" 
            fill="none" 
            stroke="url(#ringGrad)" 
            strokeWidth="7.5" 
            strokeLinecap="round" 
          />
        </g>
      </svg>

      {/* Brand Name Text matching user's image: klarsolution.com in lowercase */}
      {!iconOnly && (
        <span className={`font-sans text-[20px] font-medium tracking-tight transition-colors ${lightText ? 'text-[#e5e7eb]' : 'text-[#1c1d1a]'}`}>
          klarsolution<span className="text-[#1D9E75]">.com</span>
        </span>
      )}
    </div>
  );
}

