import React from 'react';
import { motion } from 'framer-motion';
import {
  DownloadOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  CheckCircleFilled,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  CheckOutlined,
  ArrowRightOutlined,
  IdcardOutlined,
  CloudServerOutlined,
} from '@ant-design/icons';
import { experiences, educations, personalInfo } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 w-full bg-[#070913] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/5">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              Verified Career Record
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Career & <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              2.5+ years of full-stack delivery at Techsunset and accredited technical training from WAP Institute.
            </p>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download="Sahinur_Ali_Gain_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate-900 border border-indigo-500/30 hover:border-indigo-500 hover:bg-slate-850 shadow-lg shadow-indigo-500/10 transition-all self-start sm:self-auto shrink-0 transform hover:-translate-y-0.5"
          >
            <DownloadOutlined className="text-indigo-400 text-sm" />
            <span>Download CV (PDF)</span>
          </a>
        </div>

        {/* 2-Column Balanced Dual-Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Work Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-6">
              <ApartmentOutlined className="text-indigo-400 text-base" />
              <span>Industry Experience ({experiences.length})</span>
            </div>

            <div className="relative border-l-2 border-indigo-500/20 ml-3 sm:ml-5 pl-6 sm:pl-8 flex-1 flex flex-col space-y-6">
              {experiences.map((exp, idx) => {
                const isActive = exp.period.toLowerCase().includes('present');

                return (
                  <motion.div
                    key={`${exp.company}-${idx}`}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    className="relative group flex-1 flex flex-col"
                  >
                    {/* Glowing Marker */}
                    <span
                      className={`absolute -left-7.75 sm:-left-9.75 top-2 w-4 h-4 rounded-full border-2 ${
                        isActive
                          ? 'border-indigo-400 bg-indigo-600 shadow-lg shadow-indigo-500/60'
                          : 'border-slate-700 bg-slate-900'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                      )}
                    </span>

                    {/* Work Card */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0e1b] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex-1 flex flex-col justify-between">
                      <div>
                        {/* Company, Status & Period */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-400 transition-colors">
                              {exp.company}
                            </h3>
                            {isActive && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Current / Recent Role
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-500/20 px-3 py-1 rounded-lg">
                            <CalendarOutlined />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        {/* Role, Location & EMP ID */}
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono mb-4 text-slate-400">
                          <span className="text-indigo-400 font-semibold">{exp.role}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-300">
                            <EnvironmentOutlined className="text-slate-500" />
                            Bengaluru, Electronic City (Remote)
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <IdcardOutlined className="text-indigo-400" />
                            EMP: TS0542
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                          {exp.description}
                        </p>

                        {/* Core Deliverables Badge Strip */}
                        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2 mb-5 text-xs text-slate-300">
                          <div className="flex items-center gap-2 text-indigo-300 font-mono font-semibold text-[11px] uppercase tracking-wider">
                            <CloudServerOutlined className="text-indigo-400" /> Key Engineering Deliverables
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircleFilled className="text-emerald-400 text-xs mt-0.5 shrink-0" />
                            <span>Contributed to ProFlowers (proflowers.com) admin portal UI & backend REST APIs.</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircleFilled className="text-emerald-400 text-xs mt-0.5 shrink-0" />
                            <span>Deployed & managed AWS cloud services including EC2, S3, and Lambda.</span>
                          </div>
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {exp.skillsUsed.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-lg bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Technical Certification & Education (5 cols) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-6">
              <SafetyCertificateOutlined className="text-purple-400 text-base" />
              <span>Certified Technical Training</span>
            </div>

            <div className="relative border-l-2 border-purple-500/20 ml-3 sm:ml-5 pl-6 sm:pl-8 flex-1 flex flex-col space-y-6">
              {educations.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative group flex-1 flex flex-col"
                >
                  {/* Purple Marker */}
                  <span className="absolute -left-7.75 sm:-left-9.75 top-2 w-4 h-4 rounded-full border-2 border-purple-500 bg-purple-950" />

                  {/* Education / Certificate Card */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0e1b] border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="inline-block text-xs font-mono text-purple-300 font-semibold px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-500/30">
                          {edu.period}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 border border-emerald-500/20 bg-emerald-950/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <CheckOutlined className="text-[10px]" /> Grade A Passed
                        </span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                        {edu.degree}
                      </h4>
                      
                      <div className="text-xs sm:text-sm font-mono text-indigo-400 mb-4 flex items-center gap-2">
                        <span>{edu.institution}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-xs">ISO 9001:2015</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                        {edu.description}
                      </p>

                      {/* Certification Verification Credentials */}
                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5 font-mono text-xs mb-4">
                        <div className="flex justify-between items-center text-slate-400">
                          <span>Certificate Reg ID:</span>
                          <span className="text-indigo-300 font-bold">E9PMR6J5N</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400">
                          <span>Training Duration:</span>
                          <span className="text-slate-200">24-07-2021 to 13-11-2023</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400">
                          <span>Educational Progression:</span>
                          <span className="text-emerald-400">Completed 12th (2021) → WAP Software Eng. (2023)</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 text-xs font-mono text-slate-400 flex items-center justify-between">
                      <a
                        href="https://wapinstitute.com/certified"
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors"
                      >
                        Verify Credential <ArrowRightOutlined className="text-[10px]" />
                      </a>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircleFilled className="text-xs" /> Authenticated
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};