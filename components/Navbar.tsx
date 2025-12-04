import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Philosophie', href: '#philosophie' },
    { name: 'Pratiques', href: '#pratiques' },
    { name: 'Prestations', href: '#prestations' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full px-[5%] py-5 flex justify-between items-center z-[1000] bg-[rgba(250,249,246,0.95)] backdrop-blur-md border-b border-black/5 transition-all duration-300">
      <div className="font-cormorant text-3xl font-semibold text-[#5A6C57] tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
        Yoga Astrid
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
            className="text-[#2C2C2C] text-sm tracking-widest uppercase relative group font-urbanist"
          >
            {link.name}
            <span className="absolute bottom-[-5px] left-0 w-0 h-[1px] bg-[#5A6C57] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden text-[#2C2C2C] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#FAF9F6] border-b border-black/5 flex flex-col items-center py-8 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
              className="text-[#2C2C2C] text-lg tracking-widest uppercase py-4 font-urbanist"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;