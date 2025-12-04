import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20 bg-[#5A6C57]">
      
      {/* 
          Image de fond : Forêt tropicale brumeuse (Misty Jungle)
          Source Unsplash stable pour garantir l'affichage sans blocage Hotlink 
      */}
      <img 
        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop"
        alt="Jungle Tropicale"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay sombre léger pour lisibilité du texte */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Contenu */}
      <div className="relative z-10 text-center text-white max-w-[900px] px-6 animate-fade-in-up">
        <h1 className="font-tenor text-5xl md:text-7xl mb-6 leading-[1.1] drop-shadow-xl uppercase tracking-widest">
          Respirer.<br />Ressentir.<br />Vivre.
        </h1>
        <p className="font-cormorant text-2xl md:text-3xl italic tracking-wider drop-shadow-lg font-light">
          L'harmonie du corps et de l'esprit, entre Bali et Paris.
        </p>
      </div>

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Hero;