import React from 'react';

const IntroMat: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-[#4A5D4B] z-[9999] flex justify-center items-center text-white animate-unroll-mat"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="opacity-0 translate-y-4 animate-fade-in-logo font-tenor text-4xl tracking-widest uppercase">
        Yoga Astrid
      </div>
    </div>
  );
};

export default IntroMat;