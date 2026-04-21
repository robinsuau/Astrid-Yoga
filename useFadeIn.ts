import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#5A6C57] text-[#E8E1DA] py-20 px-[5%] text-center">
      <div className="font-italiana text-5xl mb-6 text-white/90">Yoga avec Astrid</div>
      <p className="font-urbanist font-light tracking-wider mb-10 italic opacity-80 text-lg">
        Inspirer le mouvement, expirer la paix.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
        <a href="https://www.instagram.com/yoga.avec.astrid/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
          <div className="p-2 border border-white/20 rounded-full group-hover:bg-white/10 transition-all">
            <Instagram size={20} />
          </div>
          <span className="font-urbanist text-xs uppercase tracking-widest">@yoga.avec.astrid</span>
        </a>
        <a href="mailto:astrid.rousselon.yoga@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors group">
          <div className="p-2 border border-white/20 rounded-full group-hover:bg-white/10 transition-all">
            <Mail size={20} />
          </div>
          <span className="font-urbanist text-xs uppercase tracking-widest">astrid.rousselon.yoga@gmail.com</span>
        </a>
      </div>
      
      <div className="w-full h-[1px] bg-white/10 mb-8 max-w-md mx-auto"></div>

      <p className="text-[10px] opacity-40 font-urbanist uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} Yoga avec Astrid. Clermont-Ferrand.
      </p>
    </footer>
  );
};

export default Footer;