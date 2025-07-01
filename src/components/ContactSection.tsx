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

  const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      toast.success('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <section id="contact" className="container mx-auto py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        Entre em <span className="text-[var(--gs-accent)]">Contato</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up">
          <Input
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nome completo"
            required
            aria-label="Nome completo"
          />
          <Input
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="E-mail"
            required
            aria-label="E-mail"
          />
          <Input
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Telefone"
            required
            aria-label="Telefone"
          />
          <Textarea
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            placeholder="Mensagem"
            required
            aria-label="Mensagem"
          />
          <Button type="submit" className="w-full bg-[var(--gs-accent)] text-white py-3 font-semibold">
            Enviar Mensagem <Mail className="ml-2" size={20} />
          </Button>
        </form>

        {/* Informações de contato */}
        <div className="animate-fade-up space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="text-[var(--gs-accent)] mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-2">Endereço</h3>
              <p>Avenida Eldes Scherrer Souza, 1025</p>
              <p>Parque Residencial Laranjeiras</p>
              <p>CEP 29165-680 – Serra-ES</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="text-[var(--gs-accent)] mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p>(11) 93804-3456</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="text-[var(--gs-accent)] mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p>contato@gsconsignados.com.br</p>
            </div>
          </div>
          <Button
            className="bg-[var(--gs-accent)] text-white py-3 px-6 font-semibold"
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
