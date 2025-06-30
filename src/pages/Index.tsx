
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Sun, 
  Moon, 
  Zap, 
  Leaf, 
  BarChart3, 
  Phone, 
  Mail, 
  MapPin,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Theme toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  // Form handling
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

  // Animated counters
  const CounterComponent = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            let start = 0;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
            
            return () => clearInterval(timer);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, [end, duration, isVisible]);

    return (
      <span id={`counter-${end}`} className="animate-counter">
        {count.toLocaleString('pt-BR')}{suffix}
      </span>
    );
  };

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen gs-bg gs-text font-inter">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full gs-accent-bg text-white hover:gs-accent-hover transition-all duration-300 focus-visible:focus"
        aria-label={isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero Section */}
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

      {/* About Section */}
      <section className="py-20 px-4 gs-muted">
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-responsive-3xl font-bold text-center mb-12">
            Sobre a <span className="gs-accent">GS PARTICIPAÇÕES</span>
          </h2>
          
          <div className="text-responsive-lg leading-relaxed text-center opacity-90">
            <p>
              A GS PARTICIPAÇÕES LTDA (CNPJ 39.443.872/0001-60) oferece soluções completas em eficiência energética. 
              Unimos análise de dados, engenharia e tecnologia para entregar economia real e diminuir a pegada de carbono 
              de empresas em todo o Brasil. Nossa abordagem une rentabilidade e responsabilidade ambiental, 
              garantindo resultados mensuráveis em curto prazo.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
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

      {/* Process Section */}
      <section className="py-20 px-4 gs-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-responsive-3xl font-bold text-center mb-16 fade-up">
            Nosso <span className="gs-accent">Processo</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Diagnóstico', icon: BarChart3 },
              { step: '2', title: 'Planejamento', icon: TrendingUp },
              { step: '3', title: 'Implantação', icon: Zap },
              { step: '4', title: 'Monitoramento', icon: Clock }
            ].map((item, index) => (
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

      {/* Results Section */}
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

      {/* Contact Section */}
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
                  <p className="opacity-90">Rua Exemplo, 123 – Centro</p>
                  <p className="opacity-90">CEP 89036-239 – Blumenau-SC</p>
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

      {/* Footer */}
      <footer className="py-12 px-4 gs-bg border-t gs-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="opacity-90">© 2025 GS PARTICIPAÇÕES LTDA</p>
              <p className="opacity-90">CNPJ 39.443.872/0001-60</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="/privacy" 
                className="opacity-90 hover:gs-accent transition-colors duration-300 focus-visible:focus"
                aria-label="Política de Privacidade"
              >
                Política de Privacidade
              </a>
              <a 
                href="/terms" 
                className="opacity-90 hover:gs-accent transition-colors duration-300 focus-visible:focus"
                aria-label="Termos de Uso"
              >
                Termos de Uso
              </a>
              <a 
                href="https://wa.me/5511938043456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-90 hover:gs-accent transition-colors duration-300 focus-visible:focus"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
