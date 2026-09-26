import React from 'react';
import { motion } from 'framer-motion';
import {
  GlobalOutlined,
  CloudServerOutlined,
  DatabaseOutlined,
  CheckCircleFilled,
  SafetyCertificateOutlined,
  ThunderboltFilled,
} from '@ant-design/icons';
import { personalInfo } from '../data/portfolioData';

interface Skill {
  name: string;
  level: number;
}

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend Architecture',
    icon: <GlobalOutlined className="text-xl text-white" />,
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'React.js / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 96 },
      { name: 'Ant Design', level: 92 },
      { name: 'Redux Toolkit / Zustand', level: 88 },
    ],
  },
  {
    title: 'Backend & Microservices',
    icon: <CloudServerOutlined className="text-xl text-white" />,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Node.js & Express.js', level: 90 },
      { name: 'REST & GraphQL APIs', level: 92 },
      { name: 'JWT & OAuth Authentication', level: 94 },
      { name: 'Socket.IO Real-Time', level: 85 },
      { name: 'Stripe & Razorpay Integration', level: 92 },
    ],
  },
  {
    title: 'Databases & DevOps',
    icon: <DatabaseOutlined className="text-xl text-white" />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MongoDB & Mongoose', level: 88 },
      { name: 'PostgreSQL & Prisma', level: 85 },
      { name: 'Redis Caching', level: 80 },
      { name: 'Docker Containerization', level: 78 },
      { name: 'Git & GitHub Actions CI/CD', level: 88 },
    ],
  },
];

const DOMAIN_SPECIALTIES = [
  'E-Commerce & Payment Gateways',
  'Clinical & Doctor Booking Portals',
  'Multi-Tenant Real Estate Marketplaces',
  'Live Crypto WebSocket Dashboards',
  'NPS & Review Feedback Automation',
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
            About the Engineer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Engineering with <span className="gradient-text">Precision & Focus</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3">
            Production tools, enterprise architectures, and real-world system delivery.
          </p>
        </div>

        {/* Narrative Bio Dossier Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="ott-card p-6 sm:p-10 rounded-3xl border border-white/10 bg-[#090d18] mb-12 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Engineering Track Record
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                I am a Full Stack Software Engineer with 2.5 years of experience delivering robust web applications.
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Currently building scalable systems at <strong className="text-white font-semibold">Techsunset</strong>. 
                My technical repertoire covers end-to-end web architecture: high-conversion E-commerce, multi-tenant Real Estate portals, clinical booking systems, real-time Crypto dashboards, and automated review suites.
              </p>

              {/* Shipped Domain Badges */}
              <div className="flex flex-wrap gap-2">
                {DOMAIN_SPECIALTIES.map((domain) => (
                  <span
                    key={domain}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                  >
                    ✓ {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics Pillar */}
            <div className="lg:w-72 shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-3 p-4 rounded-2xl bg-black/40 border border-white/5">
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="text-2xl font-black text-white">2.5+ Yrs</div>
                <div className="text-[11px] font-mono text-indigo-400 uppercase">Industry Exp</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="text-2xl font-black text-white">Techsunset</div>
                <div className="text-[11px] font-mono text-emerald-400 uppercase">Active Role</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Skills Grid with Animated Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0b0e1b] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between w-full h-full group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-7">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${group.color} flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>

                {/* Animated Progress Bars */}
                <div className="space-y-5">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="font-mono text-indigo-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Bar Track */}
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            ease: [0.16, 1, 0.3, 1],
                            delay: groupIdx * 0.15 + skillIdx * 0.08,
                          }}
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-sm shadow-indigo-500/50"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Footer */}
              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <SafetyCertificateOutlined className="text-indigo-400" />
                  Verified Production Skill
                </span>
                <CheckCircleFilled className="text-emerald-400 text-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};