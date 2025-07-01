// src/components/ContactSection.tsx

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // URL do webhook do n8n, definida em .env como VITE_N8N_WEBHOOK_URL
  const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('Enviando para:', WEBHOOK_URL, formData);

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Status ${response.status}: ${response.statusText}`);
      }

      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Falha ao enviar formulário:', error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <section id="contact" className="container mx-auto py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        Entre em <span className="text-green-500">Contato</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4 fade-up">
          <Input
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nome completo"
            required
            className="gs-border focus:ring-2 focus:ring-gs-accent"
            aria-label="Nome completo"
          />

          <Input
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="E-mail"
            required
            className="gs-border focus:ring-2 focus:ring-gs-accent"
            aria-label="E-mail"
          />

          <Input
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Telefone"
            required
            className="gs-border focus:ring-2 focus:ring-gs-accent"
            aria-label="Telefone"
          />

          <Textarea
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            placeholder="Mensagem"
            required
            className="gs-border focus:ring-2 focus:ring-gs-accent min-h-[120px]"
            aria-label="Mensagem"
          />

          <Button
            type="submit"
            className="w-full gs-accent-bg hover:gs-accent-hover text-white py-3 text-responsive-lg font-semibold transition-all duration-300 focus-visible:focus"
          >
            Enviar Mensagem <Mail className="ml-2" size={20} />
          </Button>
        </form>

        {/* Informações de contato */}
        <div className="fade-up space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="gs-accent mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-responsive-lg mb-2">Endereço</h3>
              <p className="opacity-90">Avenida Eldes Scherrer Souza, 1025</p>
              <p className="opacity-90">Parque Residencial Laranjeiras</p>
              <p className="opacity-90">CEP 29165-680 – Serra-ES</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="gs-accent mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-responsive-lg mb-2">Telefone</h3>
              <p className="opacity-90">(11) 93804-3456</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="gs-accent mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-responsive-lg mb-2">E-mail</h3>
              <p className="opacity-90">contato@gsconsignados.com.br</p>
            </div>
          </div>

          <Button
            className="gs-accent-bg hover:gs-accent-hover text-white py-3 px-6 text-responsive-lg font-semibold transition-all duration-300 focus-visible:focus"
            onClick={() => window.open('https://wa.me/5511938043456', '_blank')}
          >
            Falar agora no Whats <MessageCircle className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
