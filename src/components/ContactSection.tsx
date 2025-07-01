
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('mailto:contato@gsconsignados.com.br', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <section id="contato" className="py-20 px-4 gs-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-responsive-3xl font-bold text-center mb-16 fade-up">
          Entre em <span className="gs-accent">Contato</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="gs-border focus:ring-2 focus:ring-gs-accent"
                  aria-label="Nome completo"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="gs-border focus:ring-2 focus:ring-gs-accent"
                  aria-label="E-mail"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="gs-border focus:ring-2 focus:ring-gs-accent"
                  aria-label="Telefone"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="gs-border focus:ring-2 focus:ring-gs-accent min-h-[120px]"
                  aria-label="Mensagem"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full gs-accent-bg hover:gs-accent-hover text-white py-3 text-responsive-lg font-semibold transition-all duration-300 focus-visible:focus"
              >
                Enviar Mensagem
                <Mail className="ml-2" size={20} />
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
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
              Falar agora no Whats
              <MessageCircle className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
