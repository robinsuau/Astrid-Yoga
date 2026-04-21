import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const FadeInSection: React.FC<Props> = ({ children, className = '', delay = '0s' }) => {
  const { domRef, isVisible } = useFadeIn();

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;