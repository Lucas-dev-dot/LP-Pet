// Configurações da Aplicação
// Este arquivo centraliza todas as URLs e configurações sensíveis

const config = {
  forms: {
    consulta: import.meta.env.VITE_FORM_CONSULTA || 'https://docs.google.com/forms/d/e/1FAIpQLSeYlNGnoM0Fb_GURElJowd20YM8BeuQBYNDyTqEHD1TyQIv2Q/viewform?embedded=true',
    castracao: import.meta.env.VITE_FORM_CASTRACAO || 'https://docs.google.com/forms/d/e/1FAIpQLSfbSaLkEblH40zEvQO14esadOxfue4Hz2CKNsy4pmVfD7MVOw/viewform?embedded=true',
    adocao: import.meta.env.VITE_FORM_ADOCAO || 'https://docs.google.com/forms/d/e/1FAIpQLScn49pgtfL9opANS2r2euOiIKotjieT4mPxE032XTzFIJSx6Q/viewform?embedded=true',
    denuncia: import.meta.env.VITE_FORM_DENUNCIA || 'https://docs.google.com/forms/d/e/1FAIpQLSdt2MS_8BH73JCURGrIt23nv31n_Ov79T3uayvQ4LxPS4YReQ/viewform?embedded=true'
  },
  social: {
    instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/quemamacastraof/',
    whatsapp: import.meta.env.VITE_WHATSAPP_URL || ''
  }
};

export default config;
