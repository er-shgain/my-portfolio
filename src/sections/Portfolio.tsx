import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { 
      label: 'ALL', 
      value: 'all', 
      count: projects.length 
    },
    { 
      label: 'FULL-STACK', 
      value: 'fullstack', 
      count: projects.filter((p) => p.category === 'fullstack').length 
    },
    { 
      label: 'FRONTEND', 
      value: 'frontend', 
      count: projects.filter((p) => p.category === 'frontend').length 
    },
  ];

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 bg-[#070913] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              Verified Production Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Filter Pills with Badge Counters */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0b101d] border border-white/10 self-start sm:self-auto">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm shadow-indigo-600/30'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Packed Grid: 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};