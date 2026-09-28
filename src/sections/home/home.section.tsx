import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip, message } from 'antd';
import {
    ArrowRightOutlined,
    DownloadOutlined,
    CopyOutlined,
    CheckOutlined,
    CodeOutlined,
    WhatsAppOutlined,
} from '@ant-design/icons';
import { homeData } from './home.data';

const darkTooltipStyle = {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '11px',
    fontFamily: 'monospace',
};

export const HomeSection: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const rawPhoneNumber = homeData.whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(
        homeData.whatsappMessage
    )}`;

    useEffect(() => {
        const hasDownloaded = sessionStorage.getItem('resume_auto_downloaded');
        if (!hasDownloaded) {
            const timer = setTimeout(() => {
                const link = document.createElement('a');
                link.href = homeData.resumeUrl;
                link.download = homeData.resumeFileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                sessionStorage.setItem('resume_auto_downloaded', 'true');
                message.info({
                    content: 'Resume download started automatically.',
                    style: { marginTop: '4rem' },
                });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleCopySnippet = () => {
        const code = `// ${homeData.terminal.name} - Full Stack Engineer
const softwareEngineer = {
  name: "${homeData.terminal.name}",
  company: "${homeData.terminal.company}",
  tenure: "${homeData.terminal.tenure}",
  overallExp: "${homeData.terminal.overallExp}",
  skills: ${JSON.stringify(homeData.terminal.skills, null, 2)},
  recentProject: "${homeData.terminal.recentProject}",
  availability: "${homeData.terminal.availability}"
};`;

        navigator.clipboard.writeText(code);
        setCopied(true);
        message.success('Code snippet copied to clipboard!');
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

                    {/* Profile Headshot & Quick Info Strip */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="relative">
                            <img
                                src={homeData.avatar}
                                alt={homeData.engineerName}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-indigo-500/30 p-1 bg-slate-900 shadow-xl shadow-indigo-500/20"
                            />
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#070913] rounded-full" />
                        </div>
                        <div>
                            <div className="text-white font-extrabold text-xl tracking-tight">
                                {homeData.engineerName}
                            </div>
                            <div className="text-indigo-400 font-mono text-xs sm:text-sm">
                                {homeData.title}
                            </div>
                            <div className="text-gray-400 text-xs mt-0.5">
                                {homeData.location}
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Big Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.18] mb-6"
                    >
                        {homeData.headlinePrefix}{' '}
                        <span className="gradient-text">{homeData.headlineGradient}</span>{' '}
                        {homeData.headlineSuffix}
                    </motion.h1>

                    {/* Subtitle / Pitch */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
                    >
                        {homeData.subtitle}
                    </motion.p>

                    {/* Action Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-3.5 mb-10"
                    >
                        {/* Explore Projects Button */}
                        <a
                            href="#portfolio"
                            className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 border border-indigo-500/20 hover:border-indigo-500/50 shadow-sm hover:shadow-indigo-500/10 transition-all flex items-center gap-2 group"
                        >
                            <span>{homeData.exploreBtnText}</span>
                            <ArrowRightOutlined className="text-indigo-400 text-xs group-hover:translate-x-0.5 transition-transform" />
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/50 shadow-sm hover:shadow-emerald-500/10 transition-all flex items-center gap-2 group"
                        >
                            <WhatsAppOutlined className="text-emerald-400 text-sm group-hover:scale-110 transition-transform" />
                            <span>{homeData.contactBtnText}</span>
                        </a>

                        {/* Resume Button */}
                        <a
                            href={homeData.resumeUrl}
                            download={homeData.resumeFileName}
                            className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 border border-purple-500/20 hover:border-purple-500/50 shadow-sm hover:shadow-purple-500/10 transition-all flex items-center gap-2 group"
                        >
                            <DownloadOutlined className="text-purple-400 text-sm group-hover:translate-y-0.5 transition-transform" />
                            <span>{homeData.resumeBtnText}</span>
                        </a>
                    </motion.div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3.5 px-4 rounded-2xl bg-[#0b0e1b]/80 border border-white/5 w-full">
                        {homeData.stats.map((stat) => (
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

                            <Tooltip
                                title={copied ? 'Copied!' : 'Copy profile code'}
                                color="#05070f"
                                overlayInnerStyle={darkTooltipStyle}
                                arrow={{ pointAtCenter: true }}
                            >
                                <button
                                    type="button"
                                    onClick={handleCopySnippet}
                                    className="text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-colors cursor-pointer"
                                >
                                    {copied ? <CheckOutlined className="text-emerald-400" /> : <CopyOutlined />}
                                </button>
                            </Tooltip>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto max-h-115 overflow-y-auto">
                            <div className="text-slate-500">// Engineering Profile Dossier</div>
                            <div>
                                <span className="text-pink-400">const</span>{' '}
                                <span className="text-purple-300">softwareEngineer</span> = &#123;
                            </div>
                            <div className="pl-4">
                                <span className="text-indigo-300">name</span>:{' '}
                                <span className="text-emerald-300">"{homeData.terminal.name}"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-indigo-300">company</span>:{' '}
                                <span className="text-emerald-300">"{homeData.terminal.company}"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-indigo-300">tenure</span>:{' '}
                                <span className="text-amber-300">"{homeData.terminal.tenure}"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-indigo-300">overallExp</span>:{' '}
                                <span className="text-amber-300">"{homeData.terminal.overallExp}"</span>,
                            </div>

                            {/* Skills Array */}
                            <div className="pl-4">
                                <span className="text-indigo-300">skills</span>: [
                                <div className="pl-4 flex flex-wrap gap-x-2 gap-y-1 my-1">
                                    {homeData.terminal.skills.map((skill, index) => (
                                        <span key={skill} className="text-amber-300">
                                            "{skill}"{index < homeData.terminal.skills.length - 1 ? ',' : ''}
                                        </span>
                                    ))}
                                </div>
                                ],
                            </div>

                            <div className="pl-4">
                                <span className="text-indigo-300">recentProject</span>:{' '}
                                <span className="text-pink-400">"{homeData.terminal.recentProject}"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-indigo-300">availability</span>:{' '}
                                <span className="text-emerald-400 font-bold">"{homeData.terminal.availability}"</span>
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

export default HomeSection;