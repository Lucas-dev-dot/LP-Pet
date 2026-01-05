// Script para carregar configurações dinâmicas nas páginas
// Este arquivo injeta as URLs dos formulários de forma segura

(function() {
  // Configurações padrão (fallback se variáveis de ambiente não estiverem disponíveis)
  const defaultConfig = {
    consulta: 'https://docs.google.com/forms/d/e/1FAIpQLSeYlNGnoM0Fb_GURElJowd20YM8BeuQBYNDyTqEHD1TyQIv2Q/viewform?embedded=true',
    castracao: 'https://docs.google.com/forms/d/e/1FAIpQLSfbSaLkEblH40zEvQO14esadOxfue4Hz2CKNsy4pmVfD7MVOw/viewform?embedded=true',
    adocao: 'https://docs.google.com/forms/d/e/1FAIpQLScn49pgtfL9opANS2r2euOiIKotjieT4mPxE032XTzFIJSx6Q/viewform?embedded=true',
    denuncia: 'https://docs.google.com/forms/d/e/1FAIpQLSdt2MS_8BH73JCURGrIt23nv31n_Ov79T3uayvQ4LxPS4YReQ/viewform?embedded=true',
    instagram: 'https://www.instagram.com/quemamacastraof/',
    whatsapp: ''
  };

  // Função para obter o tipo de página baseado no nome do arquivo
  function getPageType() {
    const pathname = window.location.pathname;
    if (pathname.includes('consulta')) return 'consulta';
    if (pathname.includes('castracao')) return 'castracao';
    if (pathname.includes('adocao')) return 'adocao';
    if (pathname.includes('denuncia')) return 'denuncia';
    return null;
  }

  // Função para substituir URLs dos iframes
  function loadFormUrl() {
    const pageType = getPageType();
    if (!pageType) return;

    const formUrl = defaultConfig[pageType];
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
      if (iframe.src && iframe.src.includes('docs.google.com/forms')) {
        iframe.src = formUrl;
      }
    });
  }

  // Carrega as URLs quando o DOM está pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFormUrl);
  } else {
    loadFormUrl();
  }

  // Expõe a configuração globalmente para uso em scripts inline
  window.appConfig = defaultConfig;
})();
