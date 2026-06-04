import React from 'react';
import { markerConfig, orcaRegistry } from '../data/orcaRegistry';
import worldMapImg from '../assets/world-map.png'; 

export default function MapPortal({ onSelectOrca, activeFilter }) { 
  // FIXED BALANCED PROJECTION MAPPING
  const convertCoords = (coords) => {
    if (!coords) return { x: '50%', top: '50%' };

    const lat = Array.isArray(coords) ? coords[0] : (coords.lat || 0);
    let lon = Array.isArray(coords) ? coords[1] : (coords.lon || coords.lng || 0);
    
    // Step 1: Base linear conversion from coordinate degrees to layout grid percentage (0 to 100)
    const x = ((lon + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    
    // Step 2: Scale horizontally into the flat projection window (left 73.5% of canvas)
    // Shift slightly right (+0.5) to lock perfectly against coastal shapes
    const calibratedX = (x * 0.735) + 0.5;

    // Step 3: Scale vertically down into the layout boundaries (stretching it by 0.75, pad down by 11.5)
    const calibratedY = (y * 0.75) + 11.5;

    return { x: `${calibratedX}%`, top: `${calibratedY}%` };
  };

return (
    <div className="w-full h-full relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl min-h-[460px] flex items-center justify-center p-2 select-none">
      
      {/* MAP VIEWER PORTAL IMAGE FRAME */}
      <div 
        className="relative w-full aspect-[2/1] max-w-4xl bg-cover bg-center rounded-xl overflow-hidden border border-slate-900 shadow-2xl"
        style={{
          backgroundImage: `url(${worldMapImg})`,
          backgroundColor: '#0c101d'
        }}
      >
        {/* Sleek color filter overlay */}
        <div className="absolute inset-0 bg-slate-950/70 pointer-events-none z-0 backdrop-blur-[0.5px] mix-blend-multiply" />

        {/* Dynamic Interactive Tracking Nodes Overlay */}
        {Array.isArray(markerConfig) && markerConfig.map((marker) => {
          if (!marker || !marker.key) return null;

          const orcaDetails = orcaRegistry[marker.key];

          // Strict group filter matching checks
          if (!orcaDetails || (activeFilter !== 'all' && activeFilter !== orcaDetails.group)) {
            return null;
          }

          const positionStyles = convertCoords(marker.coords);

          return (
            <div
              key={marker.key}
              // STACK LIFTING OVERRIDE: Hovering forces node to top plane stack immediately
              className="absolute group z-10 -translate-x-1/2 -translate-y-1/2 hover:z-50 transition-all duration-700 ease-out"
              style={{ left: positionStyles.x, top: positionStyles.top }}
            >
              {/* Shaded territory radius boundary ring */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-dashed opacity-30 transition-transform duration-200 group-hover:scale-110 pointer-events-none"
                style={{ borderColor: marker.color || '#38bdf8' }}
              />

              {/* Core Active Click Anchor Point Node Button */}
              <button
                type="button"
                onClick={() => {
                  if (typeof onSelectOrca === 'function') {
                    onSelectOrca(orcaDetails);
                  }
                }}
                className="relative w-4 h-4 rounded-full border-2 border-white shadow-xl transition-all duration-200 hover:scale-150 cursor-pointer outline-none block z-20"
                style={{ 
                  backgroundColor: marker.color || '#38bdf8', 
                  boxShadow: `0 0 14px ${marker.color || '#38bdf8'}` 
                }}
              />

              {/* Floating Text Tooltip Layout Card */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-950/95 text-slate-100 border border-slate-800 rounded px-2 py-1 text-[10px] font-sans font-bold whitespace-nowrap shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 backdrop-blur z-50">
                {orcaDetails.title || 'Unknown Pod'}
                <span className="block text-[8px] text-slate-400 font-normal mt-0.5 text-center">Click to view culture</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}