import React from 'react';

export default function InfoSidebar({ selectedOrca }) {
  
  // Guard Clause: If state is empty, show default educational text view
  if (!selectedOrca) {
    return (
      <div className="w-full h-full flex flex-col space-y-6 bg-slate-950/40 border border-slate-800/80 p-6 rounded-2xl overflow-y-auto custom-scrollbar">
        <div className="text-center py-4">
          <div className="text-5xl mb-3">🧠 🐋</div>
          <h3 className="text-xl font-black text-white tracking-tight">Did You Know Orcas Have Culture?</h3>
          <p className="text-xs text-cyan-400 font-semibold tracking-wider uppercase mt-1">One Species. Different Worlds.</p>
        </div>
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/50">
            <strong className="text-white block mb-1">🧬 The Ultimate Paradox:</strong>
            Biologically, every killer whale on earth belongs to the exact same species. They have identical DNA structures. Yet, they live completely segregated lives.
          </p>
          <p className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/50">
            <strong className="text-white block mb-1">🗣️ Separated by Tradition & Language:</strong>
            Orcas are divided by Culture. Pods communicate in completely unique dialects. If a fish-eating pod swims past a mammal-hunting pod, they will actively avoid each other.
          </p>
        </div>
        <div className="text-center pt-2 text-[11px] font-bold text-slate-500 animate-pulse">
          Local Marine Eco-Type Mapping Engine Active
        </div>
      </div>
    );
  }

  // Crash-Proof Parser: Safely checks, breaks, and maps strings without throwing errors
  const renderParsedDescription = (text) => {
    if (!text || typeof text !== 'string') {
      return <p className="leading-relaxed text-slate-300 text-sm">No behavioral profile data recorded for this unit.</p>;
    }

    if (text.includes('THE VIBE:')) {
      const sections = text.split(/(?=THE VIBE:|🧬 THE CULTURAL RIFT:|⚡ THE SUPERPOWER:|🥷 THE SUPERPOWER:|🧊 THE TACTICAL SQUADS:)/g);

      return (
        <div className="space-y-4">
          {sections.map((section, index) => {
            if (!section || !section.trim()) return null;

            const lines = section.split('•');
            const headerText = lines[0].trim();

            return (
              <div key={index} className="bg-slate-950/40 border border-slate-800/40 p-3 rounded-xl space-y-1.5 shadow-sm">
                <p className="text-slate-200 font-bold text-xs tracking-wide">
                  {headerText}
                </p>
                {lines.length > 1 && (
                  <ul className="space-y-1 pl-1">
                    {lines.slice(1).map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="text-xs text-slate-400 leading-relaxed flex items-start">
                        <span className="text-cyan-500 mr-2 select-none">•</span>
                        <span>{bullet.trim()}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    return <p className="leading-relaxed text-slate-300 text-sm">{text}</p>;
  };

  return (
    <div className="w-full h-full flex flex-col space-y-6 bg-slate-900 p-4 rounded-xl animate-fadeIn overflow-y-auto custom-scrollbar max-h-[600px]">
      <div>
        <span className="inline-block text-[10px] font-black tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-1 rounded-full">
          {selectedOrca.subspecies || "Orcinus Orca"}
        </span>
        <h2 className="text-2xl font-black text-white mt-3 tracking-tight leading-tight">
          {selectedOrca.title || "Unknown Eco-Type"}
        </h2>
        <p className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-1">
          <span>📍</span> <span className="truncate">{selectedOrca.habitat || "Global Corridors"}</span>
        </p>
      </div>

      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex-shrink-0">
        <img 
          src={selectedOrca.image || ""} 
          alt={selectedOrca.title || "Orca"} 
          className="w-full h-full object-cover select-none pointer-events-none"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1603566234032-1b6fb95fe9f7?q=80&w=1000&auto=format&fit=crop";
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 bg-slate-950 p-3 rounded-xl border border-slate-800/80 shadow-md flex-shrink-0">
        <div>
          <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block">Dietary Base</span>
          <span className="text-xs font-semibold text-slate-300 block mt-0.5 line-clamp-2">{selectedOrca.diet || "Undocumented"}</span>
        </div>
        <div>
          <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block">Physical Marker</span>
          <span className="text-xs font-semibold text-slate-300 block mt-0.5 line-clamp-2">{selectedOrca.feature || "Standard Profile"}</span>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Lineage Intel & Behavioral Profile
        </h4>
        <div>
          {renderParsedDescription(selectedOrca.desc)}
        </div>
      </div>
    </div>
  );
}