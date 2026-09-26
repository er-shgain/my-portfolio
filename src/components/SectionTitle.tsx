import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};