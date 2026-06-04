import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FilterTabs from './components/FilterTabs';
import MapPortal from './components/MapPortal';
import InfoSidebar from './components/InfoSidebar';
import { groupOverviews } from './data/orcaRegistry';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedOrca, setSelectedOrca] = useState(null);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId || 'all');
    
    if (!filterId || filterId === 'all') {
      setSelectedOrca(null);
    } else {
      // Safe Extract Guard: If the key doesn't exist, fall back to null instead of breaking
      const overviewData = groupOverviews && groupOverviews[filterId];
      setSelectedOrca(overviewData || null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <FilterTabs activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 w-full h-full flex flex-col">
          <MapPortal 
            activeFilter={activeFilter} 
            onSelectOrca={(orcaData) => setSelectedOrca(orcaData || null)} 
          />
        </div>
        <div className="w-full h-full lg:max-h-[600px]">
          <InfoSidebar selectedOrca={selectedOrca} />
        </div>
      </main>
    </div>
  );
}