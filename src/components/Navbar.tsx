import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined, CloseOutlined, CodeOutlined } from '@ant-design/icons';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Experience', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use 10px threshold with a clean boolean check
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[#070913]/90 backdrop-blur-md border-indigo-500/10 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <CodeOutlined className="text-lg" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            {personalInfo.name.split(' ')[0]}<span className="text-indigo-400">.dev</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1 border border-white/10 bg-white/[0.03] px-4 py-1.5 rounded-full">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="md:hidden text-gray-300 hover:text-white text-xl p-1"
          aria-label="Open menu"
        >
          <MenuOutlined />
        </button>
      </div>

      <Drawer
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        closeIcon={<CloseOutlined className="text-white" />}
        styles={{
          body: { backgroundColor: '#070913', padding: '2rem 1.5rem' },
          header: { backgroundColor: '#070913', borderColor: 'rgba(255,255,255,0.06)' },
        }}
      >
        <div className="flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-indigo-400 py-2 border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            className="mt-4 text-center py-3 rounded-lg text-sm font-bold text-white bg-indigo-600"
          >
            Get In Touch
          </a>
        </div>
      </Drawer>
    </header>
  );
};