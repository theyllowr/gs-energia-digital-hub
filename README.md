
# GS PARTICIPAÇÕES LTDA - Site Institucional

Site minimalista e moderno para holding e consultoria em eficiência energética, otimizado para verificação da Business Manager da Meta.

## 🚀 Características Técnicas

- **Performance**: Google PageSpeed ≥ 95 mobile
- **Peso**: < 120 KB (gzip)
- **Acessibilidade**: WCAG AA compliant
- **SEO**: Meta OpenGraph + JSON-LD Organization
- **Tecnologias**: React + TypeScript + Tailwind CSS
- **Responsivo**: Design mobile-first
- **Tema**: Claro/Escuro com toggle

## 📱 Funcionalidades

- ✅ Hero section com CTA otimizado
- ✅ Seção sobre a empresa (holding + eficiência energética)
- ✅ Cards de soluções (3 serviços)
- ✅ Timeline do processo
- ✅ Contadores animados de resultados
- ✅ Formulário de contato funcional
- ✅ Páginas de Política de Privacidade e Termos de Uso
- ✅ Toggle de tema claro/escuro
- ✅ Animações sutis (fade-up/parallax ≤ 10 fps)
- ✅ Fonte Inter responsiva com clamp()

## 🎨 Paleta de Cores

### Tema Claro
- Fundo: `#FFFFFF`
- Texto: `#0E0E0E`
- Destaque: `#0C4B33`

### Tema Escuro
- Fundo: `#0E0E0E`
- Texto: `#F5F5F5`
- Destaque: `#3AF58A`

## 🏢 Informações da Empresa

- **Razão Social**: GS PARTICIPAÇÕES LTDA
- **CNPJ**: 39.443.872/0001-60
- **CNAE**: K-6462-0/00 (Holdings de instituições não financeiras)
- **Endereço**: Avenida Eldes Scherrer Souza, 1025 – Parque Residencial Laranjeiras, Serra-ES · CEP 29165-680
- **Telefone**: (11) 93804-3456
- **E-mail**: contato@gsconsignados.com.br

## 🔧 Configuração da Meta Business Manager

### 1. Verificação de Domínio

Para verificar o domínio na Meta Business Manager, adicione a meta tag de verificação no arquivo `index.html`:

```html
<!-- Substitua CÓDIGO_DE_VERIFICAÇÃO pelo código fornecido pela Meta -->
<meta name="facebook-domain-verification" content="CÓDIGO_DE_VERIFICAÇÃO" />
```

**Localização**: A meta tag deve ser adicionada na seção `<head>` do arquivo `index.html`, especificamente onde está o comentário:
```html
<!-- Meta Domain Verification goes here -->
```

### 2. Passos para Obter o Código de Verificação

1. Acesse o [Meta Business Manager](https://business.facebook.com/)
2. Vá em **Configurações da Empresa** > **Domínios**
3. Clique em **Adicionar Domínio**
4. Digite seu domínio (ex: `gsconsignados.com.br`)
5. Escolha o método "Meta tag HTML"
6. Copie o código fornecido
7. Cole no arquivo `index.html` conforme indicado acima
8. Faça o deploy do site
9. Volte ao Business Manager e clique em **Verificar Domínio**

## 🚀 Deploy e Publicação

### Opção 1: Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure o domínio personalizado
3. Ative HTTPS automático

### Opção 2: Netlify
1. Faça deploy via GitHub
2. Configure domínio personalizado
3. Force HTTPS nas configurações

### Opção 3: Servidor Próprio
1. Execute `npm run build`
2. Faça upload da pasta `dist/` para seu servidor
3. Configure HTTPS (obrigatório para verificação da Meta)
4. Configure redirecionamentos para SPA

## 📋 Checklist Pré-Deploy

- [ ] Adicionar meta tag de verificação da Meta
- [ ] Configurar domínio HTTPS
- [ ] Testar formulário de contato
- [ ] Verificar todas as páginas (/, /privacy, /terms)
- [ ] Testar toggle de tema
- [ ] Validar acessibilidade
- [ ] Testar performance no PageSpeed Insights

## 🔗 Links Importantes

- **Contato**: contato@gsconsignados.com.br
- **WhatsApp**: (11) 93804-3456
- **CNPJ**: 39.443.872/0001-60

## 📞 Suporte

Para dúvidas sobre a implementação ou configuração, entre em contato através dos canais oficiais da GS PARTICIPAÇÕES LTDA.

---

© 2025 GS PARTICIPAÇÕES LTDA - Todos os direitos reservados.
