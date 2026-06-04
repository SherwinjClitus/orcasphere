import React from 'react';

export default function FilterTabs({ activeFilter, onFilterChange }) {
  // Config block perfectly aligned with our registry groups
  const tabs = [
    { id: 'all', label: '🌐 All Global Types' },
    { id: 'common', label: '🐋 Common Standard' },
    { id: 'resident', label: '🐟 North Pacific Residents' },
    { id: 'biggs', label: '🥩 Bigg\'s Transients' },
    { id: 'antarctic', label: '❄️ Antarctic Lineages' },
  ];

  return (
    <div className="w-full flex flex-wrap gap-2 py-3 px-6 bg-slate-900/40 border-b border-slate-800/60 overflow-x-auto scrollbar-none">
      {tabs.map((tab) => {
        const isActive = activeFilter === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              if (typeof onFilterChange === 'function') {
                onFilterChange(tab.id);
              }
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border transition-all duration-200 whitespace-nowrap outline-none cursor-pointer ${
              isActive
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/10'
                : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}