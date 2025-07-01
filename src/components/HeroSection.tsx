
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center fade-up">
        <h1 className="text-responsive-5xl font-bold mb-6 leading-tight">
          Eficiência energética que impulsiona 
          <span className="gs-accent block mt-2">lucros e sustentabilidade.</span>
        </h1>
        
        <p className="text-responsive-xl mb-8 max-w-3xl mx-auto opacity-90">
          Consultoria de ponta para reduzir custos, cortar emissões e modernizar sua operação.
        </p>
        
        <Button 
          size="lg" 
          className="gs-accent-bg hover:gs-accent-hover text-white text-responsive-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:focus"
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quero meu diagnóstico gratuito
          <Zap className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
