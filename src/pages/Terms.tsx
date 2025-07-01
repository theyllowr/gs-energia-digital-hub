
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen gs-bg gs-text font-inter">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Button 
          onClick={() => window.history.back()}
          className="mb-8 gs-accent-bg hover:gs-accent-hover text-white"
        >
          <ArrowLeft className="mr-2" size={16} />
          Voltar
        </Button>
        
        <h1 className="text-responsive-4xl font-bold mb-8 gs-accent">
          Termos de Uso
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 opacity-90 text-responsive-base">
          <p className="text-responsive-lg opacity-70">
            Última atualização: Janeiro de 2025
          </p>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e usar este website da GS PARTICIPAÇÕES LTDA, você aceita e concorda em estar vinculado aos termos e condições de uso aqui estabelecidos.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              2. Descrição do Serviço
            </h2>
            <p>
              A GS PARTICIPAÇÕES LTDA é uma holding de instituições não financeiras (CNAE K-6462-0/00) que oferece serviços de consultoria em eficiência energética, incluindo auditoria energética, implantação de energia solar fotovoltaica e otimização via IoT.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              3. Uso Aceitável
            </h2>
            <p>
              Você concorda em usar este website apenas para fins legais e de acordo com estes Termos de Uso. É proibido:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usar o site de forma que possa danificar, desabilitar ou prejudicar o website</li>
              <li>Transmitir material não autorizado, incluindo vírus ou códigos maliciosos</li>
              <li>Tentar obter acesso não autorizado a qualquer parte do website</li>
              <li>Usar o site para spam ou atividades ilegais</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              4. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo deste website, incluindo textos, gráficos, logotipos, imagens e software, é propriedade da GS PARTICIPAÇÕES LTDA e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              5. Limitação de Responsabilidade
            </h2>
            <p>
              A GS PARTICIPAÇÕES LTDA não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar este website.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              6. Precisão das Informações
            </h2>
            <p>
              Embora nos esforcemos para manter as informações neste website atualizadas e precisas, não garantimos a completude, precisão ou atualidade de todas as informações fornecidas.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              7. Links para Terceiros
            </h2>
            <p>
              Este website pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites externos.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              8. Modificações dos Termos
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no website.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              9. Lei Aplicável
            </h2>
            <p>
              Estes Termos de Uso são regidos e interpretados de acordo com as leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes de Serra, Espírito Santo.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              10. Contato
            </h2>
            <p>
              Para questões sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <div className="gs-muted p-4 rounded-lg">
              <p><strong>GS PARTICIPAÇÕES LTDA</strong></p>
              <p>CNPJ: 39.443.872/0001-60</p>
              <p>E-mail: contato@gsconsignados.com.br</p>
              <p>Telefone: (11) 93804-3456</p>
              <p>Endereço: Avenida Eldes Scherrer Souza, 1025 – Parque Residencial Laranjeiras, Serra-ES, CEP 29165-680</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
