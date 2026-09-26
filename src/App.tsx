import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './sections/Home';
import { AboutSection } from './sections/About';
import { PortfolioSection } from './sections/Portfolio';
import { ResumeSection } from './sections/Resume';
import { ContactSection } from './sections/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#6366f1',
          colorBgBase: '#070913',
          fontFamily: "mono",
          borderRadius: 12,
        },
      }}
    >
      <div className="min-h-screen bg-[#070913] text-slate-100 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main>
          <HomeSection />
          <PortfolioSection />
          <AboutSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
        {/* Floating / Sticky WhatsApp Button */}
      <WhatsAppButton phoneNumber="9073015730" />
      </div>
    </ConfigProvider>
  );
};

export default App;