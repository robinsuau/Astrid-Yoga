import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#5A6C57] text-[#E8E1DA] py-16 px-[5%] text-center">
      <div className="font-cormorant text-4xl font-semibold mb-4">Yoga Astrid</div>
      <p className="font-urbanist font-light tracking-wider mb-8 italic opacity-80">
        Inspirer le mouvement, expirer la paix.
      </p>
      
      <div className="flex justify-center gap-8 mb-12">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
          <Instagram size={20} />
          <span className="font-urbanist text-sm uppercase tracking-widest">@yogaastrid</span>
        </a>
        <a href="mailto:contact@yogaastrid.com" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail size={20} />
          <span className="font-urbanist text-sm uppercase tracking-widest">contact@yogaastrid.com</span>
        </a>
      </div>
      
      <p className="text-xs opacity-50 font-urbanist uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Yoga Astrid. Design inspired by serenity.
      </p>
    </footer>
  );
};

export default Footer;