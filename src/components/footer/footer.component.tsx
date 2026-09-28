import React from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  CodeOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons';
import { footerData } from './footer.data';

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubOutlined />,
  linkedin: <LinkedinOutlined />,
  twitter: <TwitterOutlined />,
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const firstName = footerData.developerName.split(' ')[0];

  return (
    <footer
      className="bg-[#05070f] border-t border-white/5 pt-12 px-4 sm:px-6 lg:px-8 font-mono text-slate-400
        /* Default bottom padding: 3rem (48px) */
        pb-12
        /* Screen < 770px: +20px padding bottom (68px / 4.25rem) to clear mobile floating elements */
        max-[770px]:pb-18.25"
    >
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
                {firstName}
                <span className="text-indigo-400">{footerData.domainSuffix}</span>
              </span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{footerData.availabilityText}</span>
            </div>
          </div>

          {/* Clean Anchor Menu */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs">
            {footerData.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Scroll-to-Top Action */}
          <div className="flex items-center gap-2">
            {footerData.socialLinks.map((item) => (
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
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-400 text-slate-400 hover:text-white flex items-center justify-center text-xs transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUpOutlined />
            </button>
          </div>

        </div>

        {/* Bottom Strip: Copyright & System Specs */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {footerData.developerName}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>{footerData.techStackNotice}</span>
            <span>•</span>
            <span className="text-emerald-400/80">● 200 OK</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;