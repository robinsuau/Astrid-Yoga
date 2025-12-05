import React, { useState } from 'react';
import { PRACTICES } from '../constants';
import FadeInSection from './FadeInSection';

interface PracticesProps {
  onBook: () => void;
}

const Practices: React.FC<PracticesProps> = ({ onBook }) => {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  // Helper to check if the device supports hover (typically desktops)
  const isHoverDevice = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover)').matches;
  };

  const handleMouseEnter = (id: string) => {
    if (isHoverDevice()) {
      setFlippedId(id);
    }
  };

  const handleMouseLeave = (id: string) => {
    if (isHoverDevice() && flippedId === id) {
      setFlippedId(null);
    }
  };

  const handleClick = (id: string) => {
    if (!isHoverDevice()) {
      setFlippedId(flippedId === id ? null : id);
    }
  };

  return (
    <section id="pratiques" className="bg-white py-24 px-[5%]">
      <div className="text-center mb-16">
        <FadeInSection>
          <h2 className="font-tenor text-4xl text-[#2C2C2C] uppercase tracking-widest mb-4">
            Les Pratiques
          </h2>
          <p className="font-urbanist text-[#666666]">
            Découvrez nos pratiques
          </p>
        </FadeInSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {PRACTICES.map((practice, index) => (
          <FadeInSection key={practice.id} delay={`${index * 100}ms`}>
            <div 
              className="h-[500px] perspective-1000 cursor-pointer group"
              onClick={() => handleClick(practice.id)}
              onMouseEnter={() => handleMouseEnter(practice.id)}
              onMouseLeave={() => handleMouseLeave(practice.id)}
            >
              <div 
                className={`relative w-full h-full transform-style-preserve-3d shadow-lg rounded-3xl preserve-3d transition-transform duration-[1600ms] ease-out-expo ${
                  flippedId === practice.id ? 'rotate-y-180' : ''
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  // Fallback duration in inline style if tailwind class doesn't pick up immediately
                  transition: 'transform 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden rounded-3xl overflow-hidden bg-gray-200">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-20 z-10">
                    <h3 className="text-white font-tenor text-3xl uppercase tracking-wider drop-shadow-md">
                      {practice.frontTitle}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rounded-3xl overflow-hidden bg-[#5A6C57] text-white rotate-y-180 flex flex-col justify-center items-center p-8 text-center z-10">
                  <h3 className="font-tenor text-3xl mb-4 uppercase tracking-wider">{practice.title}</h3>
                  <p className="font-cormorant text-2xl italic mb-6 opacity-90">{practice.subtitle}</p>
                  <p className="font-urbanist leading-relaxed">{practice.description}</p>
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation(); // Empêche le retournement de la carte sur mobile
                      onBook(); // Ouvre le modal
                    }}
                    className="relative z-50 mt-8 px-8 py-3 bg-white/90 backdrop-blur-sm text-[#2C2C2C] rounded-full uppercase tracking-widest text-sm font-semibold shadow-lg hover:bg-white hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    Réserver
                  </button>
                </div>

              </div>
              
              {/* Optional: Indicator to prompt interaction if not flipped */}
              <div 
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300 ${flippedId === practice.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isHoverDevice()) {
                       handleClick(practice.id); // Flip on mobile
                    } else {
                       onBook(); // Direct book on desktop (rarely hit as card flips on hover)
                    }
                  }}
                  className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/40 text-white rounded-full uppercase tracking-widest text-xs font-semibold"
                >
                  Découvrir
                </button>
              </div>

            </div>
          </FadeInSection>
        ))}
      </div>

      <div className="flex justify-center">
        <FadeInSection delay="300ms">
           <button 
            onClick={onBook}
            className="px-12 py-4 bg-[#5A6C57] text-[#E8E1DA] text-lg font-tenor uppercase tracking-widest rounded-full shadow-xl hover:shadow-2xl hover:bg-[#4A5D4B] hover:-translate-y-1 transition-all duration-300"
          >
            Réserver un cours
          </button>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Practices;