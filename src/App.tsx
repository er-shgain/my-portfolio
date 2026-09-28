import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { Navbar } from './components/navbar/navbar.component';
import { Footer } from './components/footer/footer.component';
import { HomeSection } from './sections/home/home.section';
import { AboutSection } from './sections/about/about.section';
import { PortfolioSection } from './sections/Portfolio';
import { ResumeSection } from './sections/Resume';
import { ContactSection } from './sections/contact/contact.section';
import { WhatsAppButton } from './components/whatsapp-button/whatsapp-button.component';

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
      <WhatsAppButton/>
      </div>
    </ConfigProvider>
  );
};

export default App;