
import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
