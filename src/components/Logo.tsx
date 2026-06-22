import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = "", iconOnly = false, lightText = false }: LogoProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={`flex items-center select-none ${className}`} id="klar-solution-brand-logo">
      {!hasError ? (
        <img
          src="/logo.png"
          alt="klarsolution.com Logo"
          className="h-[36px] w-auto max-w-[210px] object-contain object-left block"
          referrerPolicy="no-referrer"
          id="klar-logo-image"
          onError={() => setHasError(true)}
        />
      ) : (
        /* Original vector styling fallback if logo.png is not found or has not been uploaded to the workspace yet */
        <div className="flex items-center gap-2.5 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-[36px] h-[36px] shrink-0" id="klar-logo-vector">
            <defs>
              <radialGradient id="sphereShine" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#555d59" />
                <stop offset="45%" stopColor="#171a18" />
                <stop offset="100%" stopColor="#080908" />
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
      )}
    </div>
  );
}


