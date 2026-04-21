import React from 'react';
import FadeInSection from './FadeInSection';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophie" className="py-32 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <FadeInSection>
          <img
            src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Astrid Yoga - Mon Parcours"
            className="w-full h-[400px] md:h-[600px] object-cover rounded-3xl rounded-tl-[120px] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
        </FadeInSection>
        
        <FadeInSection delay="200ms">
          <h2 className="font-tenor text-4xl md:text-5xl text-[#5A6C57] mb-8 uppercase tracking-widest">
            Mon Parcours
          </h2>
          <p className="font-cormorant text-2xl text-[#5A6C57] italic mb-6">
            "Le yoga n'est pas une performance, c'est un retour à soi."
          </p>
          <div className="font-urbanist text-[#2C2C2C] text-lg leading-relaxed space-y-4 font-light text-justify">
            <p>
              Juriste de formation, j’ai choisi de me consacrer à ma passion et enseigner le yoga que je pratique depuis près de 10 ans. 
            </p>
            <p>
              Consciente des enjeux stressants de notre société actuelle, je vous propose d’être à l’écoute de votre corps et calmer votre mental par la respiration, le mouvement et la méditation.
            </p>
            <p>
              Formée en yoga Vinyasa et Ashtanga, je donne des cours dynamiques, accessibles à tous, dans la douceur et la bienveillance.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Philosophy;