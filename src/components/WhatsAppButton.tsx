import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string; // Format: country code without '+' or dashes, e.g., '1234567890'
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '1234567890', // Replace with your number
  message = 'Hi! I saw your portfolio and would like to connect.',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className="fixed z-50 transition-all
        /* Small screen: pinned at bottom 0, full width */
        bottom-0 left-0 right-0 w-full
        /* md+ screen: floating at bottom right */
        md:bottom-6 md:right-6 md:left-auto md:w-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center font-medium shadow-2xl transition-all duration-300 bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95
          /* Subtle infinite breathing/pulse scale */
          animate-pulse
          /* Mobile layout */
          w-full py-3.5 rounded-none gap-2
          /* Desktop layout */
          md:w-auto md:px-5 md:py-3 md:rounded-full"
      >
        {/* Radar wave ping effect (desktop) */}
        <span className="hidden md:inline-flex absolute -inset-0.5 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

        <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
        <span className="font-semibold tracking-wide">Chat on WhatsApp</span>
      </a>
    </div>
  );
};