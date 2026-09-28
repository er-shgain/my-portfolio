import React from 'react';
import { motion } from 'framer-motion';
import { LockOutlined, ArrowRightOutlined } from '@ant-design/icons';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  item: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="p-4 sm:p-5 rounded-2xl bg-[#090d18] border border-white/5 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-indigo-500/10"
    >
      <div>
        {/* Top Header: 16:9 Thumbnail + Details */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-3.5">
          <div className="w-full sm:w-40 aspect-video rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-white/10 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {item.featured && (
              <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[9px] font-mono text-amber-300 border border-amber-500/30 font-semibold">
                Featured
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
                {item.title}
              </h3>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5 shrink-0">
                {item.category}
              </span>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono">
        {/* Replaced GitHub button with Private Repository indicator */}
        <span
          className="text-slate-500 flex items-center gap-1.5 cursor-default select-none"
          title="Proprietary code - source is private"
        >
          <LockOutlined className="text-xs text-amber-400/80" /> Private Source
        </span>

        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 transition-colors"
          >
            Live Demo <ArrowRightOutlined className="text-[10px]" />
          </a>
        )}
      </div>
    </motion.div>
  );
};