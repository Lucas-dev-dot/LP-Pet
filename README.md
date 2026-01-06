# 🐾 É o Bicho! - Landing Page

Uma plataforma web moderna e intuitiva para agendamento de serviços veterinários e adoção de animais. O projeto oferece integração com Google Forms para facilitar o gerenciamento de solicitações de forma segura e eficiente.

## 🌟 Características Principais

- 📱 **Design Responsivo** - Adaptado para todos os dispositivos (mobile, tablet, desktop)
- 🔒 **Segurança** - Variáveis de ambiente para proteger dados sensíveis
- 📋 **Múltiplos Serviços** - Consulta, castração, adoção e denúncia de maus tratos
- 🎨 **Interface Moderna** - Design limpo e user-friendly
- 📝 **Integração Google Forms** - Formulários dinâmicos para cada serviço
- ⚡ **Performance Otimizada** - Carregamento rápido e eficiente

## 🚀 Serviços Oferecidos

| Serviço | Descrição | Link |
|---------|-----------|------|
| 🏥 **Consulta Veterinária** | Agende sua consulta com nossos veterinários | [Agendar](./consulta.html) |
| 🔪 **Castração** | Procedimento de castração para seu pet | [Agendar](./castracao.html) |
| 💕 **Adoção de Animais** | Encontre seu novo companheiro | [Agendar](./adocao.html) |
| ⚠️ **Denúncia de Maus Tratos** | Denuncie casos de maus tratos | [Denunciar](./denuncia.html) |

## 📁 Estrutura do Projeto

```
LP-Pet-html/
├── index.html              # Página inicial
├── consulta.html           # Formulário de consulta
├── castracao.html          # Formulário de castração
├── adocao.html             # Formulário de adoção
├── denuncia.html           # Formulário de denúncia
├── style.css               # Estilos globais
├── package.json            # Dependências do projeto
├── .env.example            # Template de variáveis de ambiente
├── .gitignore              # Arquivos ignorados no Git
├── assets/                 # Imagens e recursos
│   ├── logo.png
│   ├── dogs-cats.png
│   ├── consulta-veterinaria.png
│   ├── castracao.png
│   ├── adocao.png
│   ├── maldade.png
│   └── ...
└── README.md               # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Marcação semântica
- **CSS3** - Estilo e layout responsivo
- **JavaScript** - Interatividade (quando necessário)
- **Google Forms** - Gerenciamento de formulários
- **Git/GitHub** - Controle de versão
- **Vercel** - Hosting e deployment

## 🔐 Segurança

Este projeto implementa práticas de segurança robustas:

### Proteção de Dados Sensíveis
- URLs dos formulários armazenadas em variáveis de ambiente
- Arquivo `.env` ignorado pelo Git (nunca é commitado)
- Arquivo `.env.example` fornecido como template
- Credenciais protegidas e não expostas no repositório

### Como Configurar Variáveis de Ambiente

#### Para Desenvolvimento Local:
1. Copie `.env.example` para `.env`
2. Preencha os valores reais
3. As variáveis estarão disponíveis automaticamente

```bash
cp .env.example .env
```

#### Para Produção (Vercel):
1. Acesse o Dashboard do Vercel
2. Vá para **Settings** → **Environment Variables**
3. Adicione as variáveis necessárias:
   - `VITE_FORM_CONSULTA`
   - `VITE_FORM_CASTRACAO`
   - `VITE_FORM_ADOCAO`
   - `VITE_FORM_DENUNCIA`
   - `VITE_INSTAGRAM_URL`
   - `VITE_WHATSAPP_URL`

## 📦 Instalação e Configuração

### Pré-requisitos
- Git instalado
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Passos para Configuração

1. **Clone o repositório:**
```bash
git clone https://github.com/Lucas-dev-dot/LP-Pet.git
cd LP-Pet
```

2. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
# Edite o arquivo .env com suas URLs reais
```

3. **Abra o projeto:**
```bash
# Opção 1: Abra diretamente no navegador
open index.html

# Opção 2: Use um servidor local (recomendado)
python -m http.server 8000
# Acesse http://localhost:8000
```

## 🚀 Deployment

### Deploy no Vercel (Recomendado)

1. **Conecte seu repositório no Vercel:**
   - Vá para [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione seu repositório GitHub

2. **Configure as variáveis de ambiente:**
   - Settings → Environment Variables
   - Adicione todas as variáveis do `.env.example`

3. **Deploy automático:**
   - Qualquer push para `main` faz deploy automático
   - Seu site estará disponível em um URL Vercel

### Domínio Personalizado

Para usar seu domínio personalizado:
1. Configure os registros DNS em seu provedor de domínios
2. Adicione o domínio nos settings do Vercel
3. Verifique o HTTPS automático

## 📱 Responsividade

O projeto foi desenvolvido com **Mobile-First Design**:
- ✅ Totalmente responsivo
- ✅ Otimizado para telas pequenas
- ✅ Menu adaptativo
- ✅ Imagens escaláveis

## 🎯 Como Usar

1. **Acesse a página inicial** em `index.html`
2. **Escolha um serviço** clicando nos cards
3. **Preencha o formulário** com suas informações
4. **Clique em enviar** para completar o agendamento
5. **Use o botão "Voltar"** para retornar à página inicial

## 📝 Formulários

Cada formulário é integrado via Google Forms e pode ser personalizado:
- Adicione/remova campos conforme necessário
- Customize as mensagens de confirmação
- Receba notificações por email automaticamente

## 🔗 Links Úteis

- **Instagram:** [quemamacastraof](https://www.instagram.com/quemamacastraof/)
- **Site no Vercel:** [seu-dominio.vercel.app](https://seu-dominio.vercel.app)

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Lucas Dev**
- GitHub: [@Lucas-dev-dot](https://github.com/Lucas-dev-dot)

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:
1. Abra uma [Issue](https://github.com/Lucas-dev-dot/LP-Pet/issues)
2. Entre em contato via Instagram
3. Envie um email com detalhes do problema

## ✨ Melhorias Futuras

- [ ] Integração com WhatsApp Business API
- [ ] Sistema de pagamento para consultas
- [ ] Painel administrativo para gerenciamento
- [ ] Chat em tempo real com veterinário
- [ ] Histórico de animais adotados
- [ ] Galeria de fotos dos animais
- [ ] Blog com dicas veterinárias

## 🙏 Agradecimentos

Obrigado por usar o É o Bicho! Ajude-nos a espalhar o amor pelos animais! 🐾

---

**Made with ❤️ for animal lovers** 🐕🐈
