import React, { useState } from 'react';

const squads = [
  {
    name: "RECON SQUAD",
    description: "24/7 Market Reconnaissance & Competitor Sweeps.",
    tools: ["Exa.ai", "Firecrawl", "Forensic Scrapling"],
    color: "#D4AF37"
  },
  {
    name: "CONTENT FACTORY",
    description: "Zero-Slop Automated Asset Generation.",
    tools: ["Stitch", "Nano Banana", "Humanizer"],
    color: "#1a1a1a"
  },
  {
    name: "LEAD STRIKE",
    description: "Precision Acquisition & Funnel Extraction.",
    tools: ["SGP Protocol", "Bayesian Scaling", "ROI Sentinel"],
    color: "#D4AF37"
  }
];

export const OnyxHiveExplorer: React.FC = () => {
  const [activeSquad, setActiveSquad] = useState(squads[0]);

  return (
    <div className="bg-black text-white p-12 border-t border-gray-900 font-['Inter']">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-8 tracking-tighter text-[#D4AF37] uppercase text-center">
          THE ONYX HIVE (MAS)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            {squads.map((squad) => (
              <div 
                key={squad.name}
                onMouseEnter={() => setActiveSquad(squad)}
                className={`cursor-pointer p-6 border-l-4 transition-all ${
                  activeSquad.name === squad.name 
                  ? 'border-[#D4AF37] bg-[#1a1a1a]' 
                  : 'border-gray-800 hover:border-gray-600'
                }`}
              >
                <h3 className="text-xl font-bold tracking-widest">{squad.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{squad.description}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-square bg-[#050505] border border-gray-900 rounded-lg p-8 flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)',
              backgroundSize: '24px 24px'
            }}></div>
            
            <div className="z-10 text-center">
               <h4 className="text-5xl font-black text-[#D4AF37] mb-6 tracking-tight">
                 {activeSquad.name.split(' ')[0]}
               </h4>
               <div className="flex flex-wrap justify-center gap-2">
                 {activeSquad.tools.map(tool => (
                   <span key={tool} className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase">
                     {tool}
                   </span>
                 ))}
               </div>
               <div className="mt-12 font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em]">
                 Status: Active // Strike Ready
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
