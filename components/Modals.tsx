import React from 'react';
import { X } from 'lucide-react';
import { CALENDAR } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-3xl p-8 w-full max-w-[500px] max-h-[90vh] overflow-y-auto relative animate-slide-up scrollbar-hide" 
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-[#5A6C57] transition-colors z-10">
          <X size={24} />
        </button>
        
        <h2 className="text-center font-tenor text-2xl text-[#5A6C57] mb-2 uppercase tracking-wide">Planning de la Semaine</h2>
        <p className="text-center text-[#666] font-urbanist text-sm mb-8">Réservez votre tapis en un clic.</p>
        
        <div className="space-y-4">
          {CALENDAR.map((slot) => (
            <div key={slot.id} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0">
              <div>
                <div className="font-bold text-[#5A6C57] font-urbanist">{slot.day} {slot.time}</div>
                <div className="text-sm text-gray-600 font-urbanist">{slot.activity}</div>
              </div>
              <button className="bg-[#D6C6B6] hover:bg-[#5A6C57] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors">
                Réserver
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface StoryModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-white hover:text-[#D6C6B6] transition-colors">
          <X size={32} />
        </button>
        <img 
          src={imageSrc} 
          alt="Story Full" 
          className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain animate-scale-up"
        />
      </div>
    </div>
  );
};