import React, { useState } from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  CodeOutlined,
  ArrowUpOutlined,
  CopyOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubOutlined />,
  linkedin: <LinkedinOutlined />,
  twitter: <TwitterOutlined />,
};

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070f] border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 font-mono text-slate-400">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Main Row: Brand, Nav & Direct Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Active Status */}
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <CodeOutlined className="text-sm" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name.split(' ')[0]}<span className="text-indigo-400">.dev</span>
              </span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Clean Anchor Menu */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials & Quick Email */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500/30 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
              title="Copy Email"
            >
              <span>{personalInfo.email}</span>
              {copied ? (
                <CheckOutlined className="text-emerald-400 text-[10px]" />
              ) : (
                <CopyOutlined className="text-slate-500 text-[10px]" />
              )}
            </button>

            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500/30 text-slate-400 hover:text-indigo-300 flex items-center justify-center text-sm transition-all"
                aria-label={item.name}
              >
                {iconMap[item.icon] || <CodeOutlined />}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-400 text-slate-400 hover:text-white flex items-center justify-center text-xs transition-all cursor-pointer"
              title="Back to top"
            >
              <ArrowUpOutlined />
            </button>
          </div>

        </div>

        {/* Bottom Strip: Copyright & System Specs */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>React • TypeScript • Tailwind</span>
            <span>•</span>
            <span className="text-emerald-400/80">● 200 OK</span>
          </div>
        </div>

      </div>
    </footer>
  );
};