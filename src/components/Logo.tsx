import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`} id="klar-solution-brand-logo">
      <span className="font-display text-[26px] font-extrabold tracking-tight text-brand-black leading-none uppercase">
        klar
      </span>
      <span className="font-sans text-[21px] font-light tracking-wide text-accent leading-none">
        solution
      </span>
      <span className="w-2.5 h-2.5 rounded-full bg-accent mt-0.5 shrink-0 animate-pulse" />
    </div>
  );
}
