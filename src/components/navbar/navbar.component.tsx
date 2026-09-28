import React, { useState, useEffect } from 'react';
import { MenuOutlined, CloseOutlined, CodeOutlined } from '@ant-design/icons';
import { navbarData } from './navbar.data';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navbarData.navItems.map((item) =>
      item.href.replace('#', '')
    );

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const rawPhoneNumber = navbarData.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(
    navbarData.whatsappMessage
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 font-sans ${
        scrolled
          ? 'bg-[#070913]/90 backdrop-blur-md border-indigo-500/10 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <CodeOutlined className="text-lg" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            {navbarData.brandName}
            <span className="text-indigo-400">{navbarData.brandDomain}</span>
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-1 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navbarData.navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-indigo-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
          >
            {navbarData.hireButtonText}
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-300 hover:text-white text-xl p-1 cursor-pointer"
          aria-label="Open menu"
        >
          <MenuOutlined />
        </button>
      </div>

      {/* Mobile Drawer (Native Tailwind Overlay to ensure 100% font & color parity) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-64 bg-[#070913] border-l border-white/10 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out font-sans ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header with Close Button */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
              <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-lg p-1 cursor-pointer"
                aria-label="Close menu"
              >
                <CloseOutlined />
              </button>
            </div>

            {/* Menu Items: EXACT same typography, uppercase, text-xs, font-semibold, and color values */}
            <nav className="flex flex-col space-y-1">
              {navbarData.navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-xs font-semibold tracking-wide uppercase transition-colors duration-200 ${
                      isActive
                        ? 'text-indigo-400 bg-white/5'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Mobile Footer CTA */}
          <div className="pt-6 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25 transition-all active:scale-95"
            >
              {navbarData.hireButtonText}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;