import React from 'react';
import { STORIES } from '../constants';
import FadeInSection from './FadeInSection';

interface JournalProps {
  onOpenStory: (img: string) => void;
}

const planning2026 = [
  {
    date: "16 avril 2026",
    title: "Yoga et Nature - Au pied des volcans",
    link: "https://www.instagram.com/p/DWweFaPDC9B/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    date: "23 mai 2026",
    title: "Yoga et Brunch en Lozère - Le Cabanon Lozérien",
    link: "https://www.instagram.com/p/DXFgPJ5DBKK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "31 mai 2026",
    title: "Yoga pour la fête des mères",
  },
  {
    date: "14 juin 2026",
    title: "Yoga et Brunch en Lozère - Le Cabanon Lozérien",
  },
  {
    date: "26 juillet 2026",
    title: "Yoga et Brunch en Lozère - Le Cabanon Lozérien",
  },
  {
    date: "Septembre 2026",
    title: "Événements à venir...",
  }
];

const Journal: React.FC<JournalProps> = ({ onOpenStory }) => {
  return (
    <section id="journal" className="bg-[#FAF9F6] py-24 px-[5%]">
      <FadeInSection>
        <h2 className="font-tenor text-4xl text-[#2C2C2C] uppercase tracking-widest mb-16 text-center">
          Planning & Événements 2026
        </h2>
        
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl border border-[#5A6C57]/10">
          <div className="flex flex-col lg:flex-row">
            {/* Illustration Image */}
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto min-h-[500px]">
              <img 
                src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Retraite de yoga dans la nature - vue lointaine"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#5A6C57]/10" />
            </div>

            {/* Events List */}
            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="text-[#5A6C57] font-semibold text-sm uppercase tracking-widest mb-8 block">À vos agendas</span>
              
              <div className="space-y-8">
                {planning2026.map((event, index) => (
                  <div key={index} className="group border-b border-[#5A6C57]/10 pb-6 last:border-0">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                      <span className="text-[#5A6C57] font-medium min-w-[140px] text-sm">
                        {event.date}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-tenor text-xl text-[#2C2C2C] group-hover:text-[#5A6C57] transition-colors">
                          {event.title}
                        </h4>
                        {event.link && (
                          <a 
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#5A6C57] text-xs uppercase tracking-widest font-bold mt-2 hover:underline gap-1"
                          >
                            Détails sur Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center lg:text-left">
                <p className="font-urbanist text-[#666] text-sm italic mb-4">
                  Pour rester informé de toutes les nouveautés, suivez-moi :
                </p>
                <a 
                  href="https://www.instagram.com/yoga.avec.astrid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#5A6C57] text-[#E8E1DA] rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#4A5D4B] transition-all"
                >
                  Suivre sur Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Journal;