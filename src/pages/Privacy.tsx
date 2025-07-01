
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
          Política de Privacidade
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 opacity-90 text-responsive-base">
          <p className="text-responsive-lg opacity-70">
            Última atualização: Janeiro de 2025
          </p>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              1. Informações que Coletamos
            </h2>
            <p>
              A GS PARTICIPAÇÕES LTDA coleta informações fornecidas voluntariamente pelos usuários através de nossos formulários de contato, incluindo nome, e-mail, telefone e mensagens.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              2. Como Utilizamos suas Informações
            </h2>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder às suas solicitações de contato</li>
              <li>Fornecer informações sobre nossos serviços</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Cumprir obrigações legais e regulamentares</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              3. Proteção de Dados
            </h2>
            <p>
              Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              4. Compartilhamento de Informações
            </h2>
            <p>
              Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem seu consentimento, exceto conforme descrito nesta política ou quando exigido por lei.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              5. Seus Direitos
            </h2>
            <p>
              Você tem o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              6. Cookies
            </h2>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e para salvar suas preferências de tema (claro/escuro). Não utilizamos cookies de rastreamento ou publicidade.
            </p>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              7. Contato
            </h2>
            <p>
              Para questões sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <div className="gs-muted p-4 rounded-lg">
              <p><strong>GS PARTICIPAÇÕES LTDA</strong></p>
              <p>CNPJ: 39.443.872/0001-60</p>
              <p>E-mail: contato@gsparticipacoes.site</p>
              <p>Telefone: (11) 93804-3456</p>
              <p>Endereço: Avenida Eldes Scherrer Souza, 1025 – Parque Residencial Laranjeiras, Serra-ES, CEP 29165-680</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-responsive-2xl font-semibold mb-4 gs-text">
              8. Alterações desta Política
            </h2>
            <p>
              Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre nossas práticas de privacidade.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
