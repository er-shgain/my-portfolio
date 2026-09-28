import React, { useState } from 'react';
import { message, Tooltip } from 'antd';
import {
    MailOutlined,
    PhoneOutlined,
    SendOutlined,
    ThunderboltFilled,
    MessageOutlined,
    SafetyCertificateOutlined,
    CopyOutlined,
    CheckOutlined,
    ExportOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import { contactData } from './contact.data';

const darkTooltipStyle = {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '11px',
    fontFamily: 'monospace',
};

interface FormErrors {
    name?: string;
    phone?: string;
    message?: string;
}

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

    const rawPhoneNumber = contactData.directInfo.phone.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(
        'Hi! I saw your portfolio and would like to connect.'
    )}`;

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        contactData.directInfo.email
    )}&su=${encodeURIComponent('Project Inquiry / Discussion')}`;

    const handleCopy = (text: string, type: 'email' | 'phone', e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopiedField(type);
        message.success(`${type === 'email' ? 'Email' : 'WhatsApp number'} copied to clipboard!`);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Automatically remove field error upon typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        const trimmedName = formData.name.trim();
        const trimmedPhone = formData.phone.trim();
        const trimmedMessage = formData.message.trim();

        // Name validation
        if (!trimmedName) {
            newErrors.name = 'Please enter your name.';
        } else if (trimmedName.length < 2) {
            newErrors.name = 'Name must be at least 2 characters.';
        }

        // Phone validation
        const phoneDigits = trimmedPhone.replace(/\D/g, '');
        if (!trimmedPhone) {
            newErrors.phone = 'Please enter your WhatsApp contact number.';
        } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
            newErrors.phone = 'Enter a valid phone number (8-15 digits).';
        }

        // Message validation
        if (!trimmedMessage) {
            newErrors.message = 'Please provide a project inquiry or message.';
        } else if (trimmedMessage.length < 10) {
            newErrors.message = 'Message must be at least 10 characters long.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${contactData.directInfo.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    whatsapp: formData.phone.trim(),
                    message: formData.message.trim(),
                    _subject: `New Portfolio Inquiry from ${formData.name.trim()}`,
                    _template: 'table',
                    _captcha: 'false',
                }),
            });

            const data = await response.json();

            if (response.ok && data.success !== 'false') {
                message.success({
                    content: contactData.successMessage,
                    style: { marginTop: '4rem' },
                });
                setFormData({
                    name: '',
                    phone: '',
                    message: '',
                });
                setErrors({});
            } else {
                message.error(data.message || 'Submission failed. Please try connecting via WhatsApp or direct email.');
            }
        } catch {
            message.error('Network error during transmission. Please try WhatsApp or email directly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 px-4 sm:px-6 bg-[#070913] relative overflow-hidden border-t border-white/5"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-tr from-indigo-600/10 via-purple-600/10 to-pink-600/5 blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono">
                        {contactData.badge}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
                        {contactData.headingPrefix} <span className="gradient-text">{contactData.headingGradient}</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
                        {contactData.subheading}
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
                                        {contactData.directInfo.availabilityText}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {contactData.directInfo.headline}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {contactData.directInfo.description}
                                </p>

                                <div className="space-y-3.5">
                                    {/* Email Container */}
                                    <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 flex items-center justify-between gap-2 group transition-all">
                                        <div
                                            className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1"
                                        >
                                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                                                <MailOutlined />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-[11px] font-mono uppercase text-gray-500 tracking-wider">
                                                    Direct Email
                                                </div>
                                                <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">
                                                    {contactData.directInfo.email}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 shrink-0">
                                            <Tooltip
                                                title={contactData.tooltips.openEmail}
                                                color="#05070f"
                                                overlayInnerStyle={darkTooltipStyle}
                                                arrow={{ pointAtCenter: true }}
                                            >
                                                <a
                                                    href={gmailComposeUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/10 hover:border-indigo-400 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                                                >
                                                    <ExportOutlined className="text-xs" />
                                                </a>
                                            </Tooltip>

                                            <Tooltip
                                                title={contactData.tooltips.copyEmail}
                                                color="#05070f"
                                                overlayInnerStyle={darkTooltipStyle}
                                                arrow={{ pointAtCenter: true }}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={(e) => handleCopy(contactData.directInfo.email, 'email', e)}
                                                    className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/10 hover:border-indigo-400 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                                                >
                                                    {copiedField === 'email' ? (
                                                        <CheckOutlined className="text-emerald-400 text-xs" />
                                                    ) : (
                                                        <CopyOutlined className="text-xs" />
                                                    )}
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>

                                    {/* WhatsApp Container */}
                                    <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/40 flex items-center justify-between gap-2 group transition-all">
                                        <div
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1"
                                        >
                                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                                                <PhoneOutlined />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-[11px] font-mono uppercase text-gray-500 tracking-wider">
                                                    WhatsApp Chat
                                                </div>
                                                <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors truncate">
                                                    {contactData.directInfo.phone}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 shrink-0">
                                            <Tooltip
                                                title={contactData.tooltips.openWhatsApp}
                                                color="#05070f"
                                                overlayInnerStyle={darkTooltipStyle}
                                                arrow={{ pointAtCenter: true }}
                                            >
                                                <a
                                                    href={whatsappUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/10 hover:border-emerald-400 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                                                >
                                                    <ExportOutlined className="text-xs" />
                                                </a>
                                            </Tooltip>

                                            <Tooltip
                                                title={contactData.tooltips.copyWhatsApp}
                                                color="#05070f"
                                                overlayInnerStyle={darkTooltipStyle}
                                                arrow={{ pointAtCenter: true }}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={(e) => handleCopy(contactData.directInfo.phone, 'phone', e)}
                                                    className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/10 hover:border-emerald-400 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                                                >
                                                    {copiedField === 'phone' ? (
                                                        <CheckOutlined className="text-emerald-400 text-xs" />
                                                    ) : (
                                                        <CopyOutlined className="text-xs" />
                                                    )}
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Guarantee */}
                            <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                                <span className="flex items-center gap-1.5 text-indigo-300">
                                    <ThunderboltFilled className="text-amber-400" />
                                    {contactData.directInfo.responseGuarantee}
                                </span>
                                <span className="flex items-center gap-1">
                                    <SafetyCertificateOutlined className="text-emerald-400" />
                                    {contactData.directInfo.verificationBadge}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Message Form with Inline Errors */}
                    <div className="lg:col-span-7 flex flex-col h-full">
                        <div className="ott-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full border border-white/5 bg-[#090d18]">
                            <div>
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <MessageOutlined className="text-indigo-400" />
                                        <span>{contactData.formTitle}</span>
                                    </h3>
                                    <span className="text-xs font-mono text-gray-400">{contactData.formEncryptionNotice}</span>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    noValidate
                                    autoComplete="off"
                                    data-lpignore="true"
                                    data-form-type="other"
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Name Input */}
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                data-lpignore="true"
                                                data-1p-ignore="true"
                                                placeholder={contactData.placeholders.name}
                                                className={`w-full h-11 px-4 rounded-xl bg-[#0d1222] border text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${errors.name
                                                    ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                                                    : 'border-white/10 focus:border-indigo-500'
                                                    }`}
                                            />
                                            {errors.name && (
                                                <p className="mt-1.5 text-xs text-rose-400 font-mono flex items-center gap-1.5 animate-fadeIn">
                                                    <ExclamationCircleOutlined className="text-[11px]" />
                                                    <span>{errors.name}</span>
                                                </p>
                                            )}
                                        </div>

                                        {/* WhatsApp Phone Input */}
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                                                WhatsApp <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                data-lpignore="true"
                                                data-1p-ignore="true"
                                                placeholder={contactData.placeholders.phone}
                                                className={`w-full h-11 px-4 rounded-xl bg-[#0d1222] border text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${errors.phone
                                                    ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                                                    : 'border-white/10 focus:border-indigo-500'
                                                    }`}
                                            />
                                            {errors.phone && (
                                                <p className="mt-1.5 text-xs text-rose-400 font-mono flex items-center gap-1.5 animate-fadeIn">
                                                    <ExclamationCircleOutlined className="text-[11px]" />
                                                    <span>{errors.phone}</span>
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message Textarea */}
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            data-lpignore="true"
                                            data-1p-ignore="true"
                                            placeholder={contactData.placeholders.message}
                                            className={`w-full p-4 rounded-xl bg-[#0d1222] border text-white placeholder-gray-500 text-sm focus:outline-none transition-colors resize-none ${errors.message
                                                ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                                                : 'border-white/10 focus:border-indigo-500'
                                                }`}
                                        />
                                        {errors.message && (
                                            <p className="mt-1.5 text-xs text-rose-400 font-mono flex items-center gap-1.5 animate-fadeIn">
                                                <ExclamationCircleOutlined className="text-[11px]" />
                                                <span>{errors.message}</span>
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full mt-2 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                                    >
                                        {loading ? (
                                            <span>{contactData.submittingText}</span>
                                        ) : (
                                            <>
                                                <span>{contactData.submitButtonText}</span>
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

export default ContactSection;