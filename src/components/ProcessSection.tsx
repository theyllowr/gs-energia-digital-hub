
import React from 'react';
import { BarChart3, TrendingUp, Zap, Clock } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    { step: '1', title: 'Diagnóstico', icon: BarChart3 },
    { step: '2', title: 'Planejamento', icon: TrendingUp },
    { step: '3', title: 'Implantação', icon: Zap },
    { step: '4', title: 'Monitoramento', icon: Clock }
  ];

  return (
    <section className="py-20 px-4 gs-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-responsive-3xl font-bold text-center mb-16 fade-up">
          Nosso <span className="gs-accent">Processo</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div key={index} className="text-center fade-up">
              <div className="gs-accent-bg rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-white" size={32} />
              </div>
              <div className="gs-accent text-responsive-2xl font-bold mb-2">{item.step}</div>
              <h3 className="text-responsive-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
