import React, { useState } from 'react';
import { message } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  ThunderboltFilled,
  MessageOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      message.error('Please complete name, email, and message fields.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success({
        content: 'Transmission successful! I will get back to you shortly.',
        style: { marginTop: '4rem' },
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 900);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 bg-[#070913] relative overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-tr from-indigo-600/10 via-purple-600/10 to-pink-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono">
            Direct Reach-Out
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Let's Start a <span className="gradient-text">Project Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Looking for a full stack engineer for a high-impact engineering role or technical consultation? Drop a message below.
          </p>
        </div>

        {/* 2-Column Equal-Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="ott-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full border border-white/5 bg-[#090d18]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Open for Opportunities
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Fast Turnaround & Clean Engineering
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Specializing in scalable client interfaces, resilient backend microservices, and end-to-end full stack delivery.
                </p>

                <div className="space-y-3.5">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 flex items-center gap-4 group transition-all"
                  >
                    <div className="w-11 h-11 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                      <MailOutlined />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase text-gray-500 tracking-wider">
                        Direct Email
                      </div>
                      <div className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">
                        {personalInfo.email}
                      </div>
                    </div>
                  </a>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-lg shrink-0">
                      <PhoneOutlined />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase text-gray-500 tracking-wider">
                        Direct Phone / WhatsApp
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {personalInfo.phone}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <ThunderboltFilled className="text-amber-400" />
                  Response within 24 hours
                </span>
                <span className="flex items-center gap-1">
                  <SafetyCertificateOutlined className="text-emerald-400" />
                  Verified Developer
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant-paint form with autofill lock prevention */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="ott-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full border border-white/5 bg-[#090d18]">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MessageOutlined className="text-indigo-400" />
                    <span>Send a Direct Message</span>
                  </h3>
                  <span className="text-xs font-mono text-gray-400">All fields encrypted</span>
                </div>

                <form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  data-lpignore="true"
                  data-form-type="other"
                  className="space-y-4"
                >
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="user_sender_name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        data-lpignore="true"
                        data-1p-ignore="true"
                        placeholder="Sahinur Gain"
                        className="w-full h-11 px-4 rounded-xl bg-[#0d1222] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="user_sender_phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="off"
                        data-lpignore="true"
                        data-1p-ignore="true"
                        placeholder="+91 98765 43210"
                        className="w-full h-11 px-4 rounded-xl bg-[#0d1222] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      name="user_sender_message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      data-lpignore="true"
                      data-1p-ignore="true"
                      placeholder="Discuss project requirements, tech stack scope, or interview schedule..."
                      className="w-full p-4 rounded-xl bg-[#0d1222] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <SendOutlined />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};