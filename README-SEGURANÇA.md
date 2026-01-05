# 🔒 Guia de Segurança - LP-Pet

## Proteção de Dados Sensíveis

Este projeto contém URLs de formulários Google Forms e outras informações que devem ser protegidas.

### Arquivos de Configuração

#### `.env` (NÃO FAZER COMMIT)
Este arquivo contém todas as variáveis de ambiente sensíveis e **NUNCA** deve ser commitado ao GitHub.

#### `.env.example` (PODE FAZER COMMIT)
Este arquivo serve como template e mostra quais variáveis são necessárias sem expor os valores reais.

#### `.gitignore`
Já está configurado para ignorar `.env` e outros arquivos sensíveis automaticamente.

### Como Usar

#### Para Desenvolvimento Local:
1. Copie `.env.example` para `.env`
2. Preencha os valores reais em `.env`
3. As variáveis estarão disponíveis na aplicação

#### Para Produção (Vercel):
1. Vá para o Dashboard do Vercel
2. Acesse a aba "Settings" do seu projeto
3. Clique em "Environment Variables"
4. Adicione cada variável do `.env`:
   - `VITE_FORM_CONSULTA`
   - `VITE_FORM_CASTRACAO`
   - `VITE_FORM_ADOCAO`
   - `VITE_FORM_DENUNCIA`
   - `VITE_INSTAGRAM_URL`
   - `VITE_WHATSAPP_URL`

### Arquivos Protegidos por .gitignore

```
.env                    # Arquivo de configuração (NÃO COMMITAR)
.env.local              # Configurações locais (NÃO COMMITAR)
.vercel/                # Diretório do Vercel (NÃO COMMITAR)
node_modules/           # Dependências npm (NÃO COMMITAR)
credentials.json        # Credenciais (NÃO COMMITAR)
```

### Checklist de Segurança

- ✅ URLs dos formulários protegidas em `.env`
- ✅ `.gitignore` configurado para proteger dados sensíveis
- ✅ `load-config.js` injeta URLs dinamicamente
- ✅ Arquivo de exemplo `.env.example` para referência
- ✅ Credenciais nunca aparecem no código fonte
- ✅ GitHub não contém informações sensíveis

### Variáveis Disponíveis

```javascript
// No arquivo load-config.js, a config está disponível em window.appConfig

window.appConfig = {
  consulta: 'URL_DO_FORMULARIO_CONSULTA',
  castracao: 'URL_DO_FORMULARIO_CASTRACAO',
  adocao: 'URL_DO_FORMULARIO_ADOCAO',
  denuncia: 'URL_DO_FORMULARIO_DENUNCIA',
  instagram: 'URL_INSTAGRAM',
  whatsapp: 'URL_WHATSAPP'
}
```

### Verificar se Dados Sensíveis Vazaram

Você pode verificar se suas informações foram expostas acidentalmente no GitHub usando:

```bash
# Procura por patterns sensíveis no histórico do Git
git log -S "seu_numero_ou_id" --all

# Remove da história do Git (se necessário)
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch seu_arquivo'
```

---

**Lembre-se:** Nunca faça commit de `.env` ou arquivos com credenciais!
