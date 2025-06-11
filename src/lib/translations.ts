export type Locale = 'en' | 'pt';

export type Translations = {
  [key: string]: string | { [key:string]: string };
  nav: {
    home: string;
    services: string;
    cases: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    service1Title: string;
    service1Desc: string;
    service2Title: string;
    service2Desc: string;
    service3Title: string;
    service3Desc: string;
  };
  caseStudies: {
    title: string;
    viewCase: string;
    case1Title: string;
    case1Client: string;
    case1Desc: string;
    case2Title: string;
    case2Client: string;
    case2Desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    formMessage: string;
    formSubmit: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    rights: string;
  }
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      cases: 'Case Studies',
      contact: 'Contact',
    },
    hero: {
      title: 'Elevate Your Content. Drive Performance.',
      subtitle: 'VertexMedia crafts compelling audiovisual experiences for agencies and production companies that demand results.',
      cta: 'Discover Our Work',
    },
    services: {
      title: 'Our Services',
      service1Title: 'Performance Content Creation',
      service1Desc: 'Engaging video and graphics optimized for conversion and audience engagement.',
      service2Title: 'Agency & Production Support',
      service2Desc: 'Seamless audiovisual production partnership to scale your creative output.',
      service3Title: 'Audiovisual Strategy',
      service3Desc: 'Data-driven insights to maximize the impact of your media spend.',
    },
    caseStudies: {
      title: 'Success Stories',
      viewCase: 'View Case Study',
      case1Title: 'Global Brand Campaign',
      case1Client: 'Client: Major Tech Corp',
      case1Desc: 'Increased engagement by 300% with a viral video series.',
      case2Title: 'Startup Launch Video',
      case2Client: 'Client: Innovative SaaS Co.',
      case2Desc: 'Achieved 50% higher MQLs through targeted ad creatives.',
    },
    contact: {
      title: "Let's Create Together",
      subtitle: 'Reach out to discuss your next project or learn more about our services.',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formCompany: 'Company (Optional)',
      formMessage: 'Your Message',
      formSubmit: 'Send Request',
      successMessage: 'Thank you! Your message has been sent.',
      errorMessage: 'Something went wrong. Please try again.',
    },
    footer: {
      rights: '© {year} VertexMedia. All rights reserved.'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      cases: 'Estudos de Caso',
      contact: 'Contato',
    },
    hero: {
      title: 'Eleve Seu Conteúdo. Impulsione Performance.',
      subtitle: 'A VertexMedia cria experiências audiovisuais impactantes para agências e produtoras que exigem resultados.',
      cta: 'Descubra Nosso Trabalho',
    },
    services: {
      title: 'Nossos Serviços',
      service1Title: 'Criação de Conteúdo de Performance',
      service1Desc: 'Vídeos e gráficos envolventes otimizados para conversão e engajamento do público.',
      service2Title: 'Suporte para Agências e Produtoras',
      service2Desc: 'Parceria de produção audiovisual transparente para escalar sua produção criativa.',
      service3Title: 'Estratégia Audiovisual',
      service3Desc: 'Insights baseados em dados para maximizar o impacto do seu investimento em mídia.',
    },
    caseStudies: {
      title: 'Histórias de Sucesso',
      viewCase: 'Ver Estudo de Caso',
      case1Title: 'Campanha de Marca Global',
      case1Client: 'Cliente: Grande Corp de Tecnologia',
      case1Desc: 'Aumento de 300% no engajamento com uma série de vídeos virais.',
      case2Title: 'Vídeo de Lançamento de Startup',
      case2Client: 'Cliente: Inovadora SaaS Co.',
      case2Desc: '50% mais MQLs alcançados através de criativos de anúncio direcionados.',
    },
    contact: {
      title: 'Vamos Criar Juntos',
      subtitle: 'Entre em contato para discutir seu próximo projeto ou saber mais sobre nossos serviços.',
      formName: 'Seu Nome',
      formEmail: 'Seu Email',
      formCompany: 'Empresa (Opcional)',
      formMessage: 'Sua Mensagem',
      formSubmit: 'Enviar Solicitação',
      successMessage: 'Obrigado! Sua mensagem foi enviada.',
      errorMessage: 'Algo deu errado. Por favor, tente novamente.',
    },
    footer: {
      rights: '© {year} VertexMedia. Todos os direitos reservados.'
    }
  },
};

export const getLang = (locale: Locale) => translations[locale];
