import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`} id="klar-solution-brand-logo">
      <img
        src="/logo.png"
        alt="klarsolution.com Logo"
        className="h-[46px] md:h-[54px] w-auto max-w-[320px] object-contain object-left block"
        referrerPolicy="no-referrer"
        id="klar-logo-image"
      />
    </div>
  );
}



