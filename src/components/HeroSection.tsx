// src/components/HeroSection.tsx

import React from 'react';
import { Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="py-20 text-[var(--gs-text)]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="clamp(3rem,8vw,6rem) font-bold mb-4 leading-tight">
          Eficiência energética que impulsiona{' '}
          <span className="text-[var(--gs-accent)]">
            lucros e sustentabilidade.
          </span>
        </h1>
        <p className="clamp(1rem,2.5vw,1.25rem) max-w-2xl mx-auto mb-8 opacity-90">
          Consultoria de ponta para reduzir custos, cortar emissões e modernizar sua operação.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-[var(--gs-accent)] hover:bg-[var(--gs-accent-hover)] text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Quero meu diagnóstico gratuito <Zap className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
