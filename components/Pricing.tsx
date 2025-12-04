import React from 'react';
import { SERVICES } from '../constants';
import FadeInSection from './FadeInSection';

const Pricing: React.FC = () => {
  return (
    <section id="prestations" className="py-24 px-[5%] bg-[#FAF9F6]">
      <div className="text-center mb-16">
        <FadeInSection>
          <h2 className="font-tenor text-4xl text-[#2C2C2C] uppercase tracking-widest">
            Tarifs & Formules
          </h2>
        </FadeInSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <FadeInSection key={service.id} delay={`${index * 150}ms`}>
            <div className="bg-white p-12 rounded-3xl text-center border border-black/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-tenor text-2xl uppercase tracking-wider mb-2">{service.title}</h3>
                <div className="my-6">
                  <span className="font-cormorant text-4xl text-[#5A6C57] font-semibold">{service.price}</span>
                  {service.period && <span className="text-[#999] text-base ml-2">{service.period}</span>}
                </div>
                {service.capacity && (
                  <p className="text-[#666] text-sm font-bold mb-6 uppercase tracking-wider">{service.capacity}</p>
                )}
                <ul className="space-y-3 text-[#555] font-urbanist font-light">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Pricing;