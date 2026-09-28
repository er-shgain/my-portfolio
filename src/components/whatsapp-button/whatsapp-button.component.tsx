import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappData } from './whatsapp-button.data';

export const WhatsAppButton: React.FC = () => {
  const cleanPhone = whatsappData.phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    whatsappData.defaultMessage
  )}`;

  return (
    <>
      <style>{`
        @keyframes solidBreath {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-solid-breath {
          animation: solidBreath 2.2s ease-in-out infinite;
        }
        .animate-solid-breath:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="fixed z-40 transition-all
          /* Small screen: pinned at bottom 0, full width */
          bottom-0 left-0 right-0 w-full
          /* md+ screen: floating at bottom right */
          md:bottom-6 md:right-6 md:left-auto md:w-auto"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={whatsappData.ariaLabel}
          className="relative flex items-center justify-center font-medium shadow-2xl transition-all duration-300 bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95 animate-solid-breath
            /* Mobile layout */
            w-full py-3.5 rounded-none gap-2
            /* Desktop layout */
            md:w-auto md:px-5 md:py-3 md:rounded-full"
        >
          <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
          <span className="font-semibold tracking-wide">
            {whatsappData.buttonText}
          </span>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;