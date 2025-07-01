
import React from 'react';
import CounterComponent from './CounterComponent';

const ResultsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-responsive-3xl font-bold text-center mb-16 fade-up">
          Nossos <span className="gs-accent">Resultados</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="fade-up">
            <div className="text-responsive-4xl font-bold gs-accent mb-2">
              +<CounterComponent end={25} /> GWh
            </div>
            <p className="text-responsive-lg opacity-90">economizados</p>
          </div>
          
          <div className="fade-up">
            <div className="text-responsive-4xl font-bold gs-accent mb-2">
              –<CounterComponent end={18} /> kt CO₂
            </div>
            <p className="text-responsive-lg opacity-90">evitados</p>
          </div>
          
          <div className="fade-up">
            <div className="text-responsive-4xl font-bold gs-accent mb-2">
              <CounterComponent end={98} />%
            </div>
            <p className="text-responsive-lg opacity-90">satisfação de clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
