import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#5A6C57]">
      
      {/* 
          Image de fond : Forêt tropicale brumeuse et douce (Misty Forest)
          J'utilise une image Unsplash haute qualité qui ressemble à la jungle demandée
          pour garantir qu'elle s'affiche correctement sans erreur de lien.
      */}
      <img 
        src="https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2070&auto=format&fit=crop"
        alt="Jungle Calm"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      {/* Overlay très léger pour garder la luminosité mais lire le texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      
      {/* Contenu */}
      <div className="relative z-10 text-center text-white max-w-[900px] px-6 animate-fade-in-up mt-20">
        <h1 className="font-tenor text-5xl md:text-7xl mb-8 leading-[1.2] drop-shadow-md uppercase tracking-[0.15em] opacity-95">
          Respirer.<br />Ressentir.<br />Vivre.
        </h1>
        <div className="w-16 h-[1px] bg-white/60 mx-auto mb-8"></div>
        <p className="font-italiana text-2xl md:text-3xl tracking-wide drop-shadow-sm font-light text-[#E8E1DA] leading-relaxed">
          "La vie ce n'est pas attendre que les orages passent.<br/>C'est apprendre à danser sous la pluie."
          <span className="block mt-4 text-lg opacity-80">— Anonyme</span>
        </p>
      </div>

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Hero;