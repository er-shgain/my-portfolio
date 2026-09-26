import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightOutlined,
  DownloadOutlined,
  MailOutlined,
  CopyOutlined,
  CheckOutlined,
  CodeOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubOutlined />,
  linkedin: <LinkedinOutlined />,
  twitter: <TwitterOutlined />,
};

export const HomeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(
      `// Sahinur Gain - Full Stack Engineer\nconst engineer = {\n  name: "${personalInfo.name}",\n  role: "${personalInfo.title}",\n  company: "Techsunset (EMP: TS0542)",\n  experience: "2.5+ Years",\n  availability: "Immediate Joiner"\n};`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-tech-grid overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Dossier, Headlines & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Full Stack Engineer • Techsunset (Bengaluru / Remote)
            </span>

            <span className="px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
              Immediate Joiner
            </span>
          </motion.div>

          {/* Profile Headshot & Quick Info Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="relative">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-indigo-500/30 p-1 bg-slate-900 shadow-xl shadow-indigo-500/20"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#070913] rounded-full" />
            </div>
            <div>
              <div className="text-white font-extrabold text-xl tracking-tight">
                {personalInfo.name}
              </div>
              <div className="text-indigo-400 font-mono text-xs sm:text-sm">
                {personalInfo.title}
              </div>
              <div className="text-gray-400 text-xs mt-0.5">
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6"
          >
            Building Robust Products With{' '}
            <span className="gradient-text">Clean Code</span> & Modern Architecture.
          </motion.h1>

          {/* Subtitle / Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 mb-10"
          >
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRightOutlined />
            </a>

            <a
              href="#contact"
              className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <MailOutlined className="text-indigo-400" />
              <span>Contact Me</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Sahinur_Ali_Gain_Resume.pdf"
              className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 border border-indigo-500/20 hover:border-indigo-500/40 transition-all flex items-center gap-2"
            >
              <DownloadOutlined className="text-purple-400" />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3.5 px-4 rounded-2xl bg-[#0b0e1b]/80 border border-white/5 w-full">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="border-r border-white/5 last:border-none pr-2">
                <div className="text-lg sm:text-xl font-black text-white">{stat.value}</div>
                <div className="text-[11px] text-indigo-400 font-mono tracking-tight uppercase font-semibold mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive macOS Syntax Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl overflow-hidden border border-indigo-500/30 bg-[#0a0d1a] shadow-2xl shadow-indigo-600/15">
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-[#0e1224] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <CodeOutlined className="text-indigo-400" />
                developer.profile.ts
              </span>
              <button
                onClick={handleCopySnippet}
                className="text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-colors"
                title="Copy code"
              >
                {copied ? <CheckOutlined className="text-emerald-400" /> : <CopyOutlined />}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
              <div className="text-slate-500">// Engineering Profile Dossier</div>
              <div>
                <span className="text-pink-400">const</span>{' '}
                <span className="text-purple-300">softwareEngineer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-indigo-300">name</span>:{' '}
                <span className="text-emerald-300">"{personalInfo.name}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300">company</span>:{' '}
                <span className="text-emerald-300">"Techsunset (EMP: TS0542)"</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300">tenure</span>:{' '}
                <span className="text-amber-300">"08 April 2024 – Present"</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300">overallExp</span>:{' '}
                <span className="text-amber-300">"2.5+ Years"</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300">coreStack</span>: [
                <span className="text-amber-300">"React"</span>,{' '}
                <span className="text-amber-300">"Next.js"</span>,{' '}
                <span className="text-amber-300">"Node.js"</span>,{' '}
                <span className="text-amber-300">"MongoDB"</span>],
              </div>
              <div className="pl-4">
                <span className="text-indigo-300">cloudServices</span>: [
                <span className="text-teal-300">"AWS EC2"</span>,{' '}
                <span className="text-teal-300">"AWS S3"</span>,{' '}
                <span className="text-teal-300">"Lambda"</span>],
              </div>
              <div className="pl-4">
                <span className="text-indigo-300">recentProject</span>:{' '}
                <span className="text-pink-400">"proflowers.com (Admin UI & APIs)"</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300">availability</span>:{' '}
                <span className="text-emerald-400 font-bold">"Immediate Joiner"</span>
              </div>
              <div>&#125;;</div>

              <div className="mt-4 pt-3 border-t border-white/5 text-slate-400 flex items-center justify-between text-[11px]">
                <span className="text-indigo-400">$ node deploy_system.js --verified</span>
                <span className="text-emerald-400 font-semibold">● 200 OK</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};