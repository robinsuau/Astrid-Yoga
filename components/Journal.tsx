import React from 'react';
import { STORIES } from '../constants';
import FadeInSection from './FadeInSection';

interface JournalProps {
  onOpenStory: (img: string) => void;
}

const Journal: React.FC<JournalProps> = ({ onOpenStory }) => {
  return (
    <section id="journal" className="bg-[#E8E1DA] pb-20">
      
      {/* Stories Scroll */}
      <div className="flex gap-6 overflow-x-auto px-[5%] py-12 scrollbar-hide">
        {STORIES.map((story) => (
          <div 
            key={story.id} 
            className="flex-shrink-0 w-[85px] h-[85px] rounded-full border-2 border-[#5A6C57] p-[3px] cursor-pointer transition-transform hover:scale-110 hover:border-white"
            onClick={() => onOpenStory(story.fullImage)}
          >
            <img 
              src={story.thumbnail} 
              alt="Story" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Week Hero */}
      <FadeInSection className="px-[5%]">
        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-lg group">
          <img 
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
            alt="Retraite"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white">
            <h3 className="font-tenor text-3xl md:text-4xl mb-4 uppercase tracking-wider">Cette Semaine</h3>
            <p className="font-urbanist text-lg md:text-xl font-light max-w-2xl">
              Retraite silencieuse dans le Luberon : Retour en images sur ce moment suspendu.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Journal;