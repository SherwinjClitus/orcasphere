import React from 'react';

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-6 flex items-center justify-between z-50 relative">
      <div className="flex items-center space-x-3">
        <span className="text-lg font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 select-none">
          ORCASPHERE
        </span>
        <span className="text-[10px] font-bold bg-slate-950 text-slate-400 px-2 py-0.5 rounded-md border border-slate-800">
          v2.0 Stable
        </span>
      </div>
      <div className="text-[11px] font-semibold text-slate-400 hidden sm:block tracking-wide">
        Global Marine Eco-Type Mapping Engine
      </div>
    </nav>
  );
}