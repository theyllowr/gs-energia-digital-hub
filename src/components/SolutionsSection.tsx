
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Sun, Shield } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-responsive-3xl font-bold text-center mb-16 fade-up">
          Nossas <span className="gs-accent">Soluções</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="fade-up gs-border border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="gs-accent-bg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="text-white" size={28} />
              </div>
              <h3 className="text-responsive-xl font-semibold mb-4">
                Auditoria Energética Avançada
              </h3>
              <p className="opacity-90">
                Analisamos instalações, detectamos desperdícios e entregamos um plano tático de ação.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-up gs-border border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="gs-accent-bg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Sun className="text-white" size={28} />
              </div>
              <h3 className="text-responsive-xl font-semibold mb-4">
                Implantação de Energia Solar Fotovoltaica
              </h3>
              <p className="opacity-90">
                Projetamos e instalamos sistemas sob medida, com retorno financeiro acelerado.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-up gs-border border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="gs-accent-bg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-responsive-xl font-semibold mb-4">
                Otimização Contínua via IoT
              </h3>
              <p className="opacity-90">
                Sensores inteligentes monitoram consumo 24/7, gerando insights em tempo real.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
