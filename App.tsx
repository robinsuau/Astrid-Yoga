import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Practices from './components/Practices';
import Pricing from './components/Pricing';
import Journal from './components/Journal';
import Footer from './components/Footer';
import { BookingModal, StoryModal } from './components/Modals';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen text-[#2C2C2C] font-urbanist selection:bg-[#D6C6B6] selection:text-[#5A6C57]">
      
      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <Practices onBook={() => setIsBookingOpen(true)} />
        <Pricing />
        <Journal onOpenStory={(img) => setActiveStory(img)} />
      </main>
      
      <Footer />
      
      {/* Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <StoryModal imageSrc={activeStory} onClose={() => setActiveStory(null)} />
      
      {/* Global CSS for one-off animations used in modals */}
      <style>{`
        .animate-slide-up {
          animation: slideUp 0.4s ease-out;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;