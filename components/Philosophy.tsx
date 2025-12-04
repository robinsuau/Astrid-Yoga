import React from 'react';
import FadeInSection from './FadeInSection';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophie" className="py-32 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <FadeInSection>
          <img
            src="https://images.pexels.com/photos/8534279/pexels-photo-8534279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Méditation Nature"
            className="w-full h-[400px] md:h-[600px] object-cover rounded-[20px] rounded-tl-[200px] shadow-xl"
          />
        </FadeInSection>
        
        <FadeInSection delay="200ms">
          <h2 className="font-tenor text-4xl md:text-5xl text-[#5A6C57] mb-8 uppercase tracking-widest">
            Mon Parcours
          </h2>
          <p className="font-cormorant text-2xl text-[#5A6C57] italic mb-6">
            "Le yoga n'est pas une performance, c'est un retour à soi."
          </p>
          <div className="font-urbanist text-[#2C2C2C] text-lg leading-relaxed space-y-4 font-light">
            <p>
              Mon chemin sur le tapis a débuté il y a <strong>plus de 10 ans</strong>. Une quête personnelle qui s'est transformée en vocation lors de ma formation immersive à <strong>Bali</strong>, berceau spirituel où j'ai puisé les enseignements traditionnels.
            </p>
            <p>
              Dans un monde où tout s'accélère, je vous invite à appuyer sur pause. À travers le mouvement conscient, nous apprenons à guérir nos maux invisibles, à écouter les murmures de notre corps et à cultiver une paix intérieure inébranlable.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Philosophy;