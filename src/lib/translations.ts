
export type Locale = 'en' | 'pt';

export type CardContent = {
  icon: string;
  title: string;
  desc: string;
};

export type ServicesTranslations = {
  mainTitle: string;
  problemCard: CardContent;
  solutionCard: CardContent;
  benefitCard: CardContent;
};

export type Translations = {
  [key: string]: string | { [key:string]: string } | ServicesTranslations;
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
  services: ServicesTranslations;
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
      mainTitle: "Your Audiovisual Challenges, Our Expert Solutions, Your Growth",
      problemCard: {
        icon: "AlertTriangle",
        title: "The Modern Content Bottleneck",
        desc: "Struggling to scale high-quality <highlight>motion graphics</highlight> and <highlight>video post-production</highlight>? Facing tight deadlines, fluctuating demand, and the complexity of optimizing for diverse <highlight>social media formats</highlight>? We get it.",
      },
      solutionCard: {
        icon: "Film",
        title: "Your Dedicated Audiovisual Powerhouse",
        desc: "VertexMedia is your expert partner for all things post-production. We offer <highlight>dynamic motion graphics</highlight>, precise video editing, cinematic <highlight>color correction</highlight>, subtle VFX, and immersive sound design, all tailored for <highlight>maximum impact</highlight> across all platforms.",
      },
      benefitCard: {
        icon: "Lightbulb",
        title: "Unlock Creative Freedom & Scalable Quality",
        desc: "Partner with us to deliver <highlight>polished, performance-ready audiovisuals</highlight> consistently. Free your team to focus on strategy and creativity, while we handle the <highlight>flawless technical execution</highlight> and help you scale confidently.",
      }
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
      mainTitle: "Seus Desafios Audiovisuais, Nossas Soluções Especializadas, Seu Crescimento",
      problemCard: {
        icon: "AlertTriangle",
        title: "O Gargalo do Conteúdo Moderno",
        desc: "Lutando para escalar <highlight>motion graphics</highlight> e <highlight>pós-produção de vídeo</highlight> de alta qualidade? Enfrentando prazos apertados, demanda flutuante e a complexidade de otimizar para diversos <highlight>formatos de mídias sociais</highlight>? Nós entendemos.",
      },
      solutionCard: {
        icon: "Film",
        title: "Sua Potência Audiovisual Dedicada",
        desc: "A VertexMedia é seu parceiro especialista em pós-produção. Oferecemos <highlight>motion graphics dinâmicos</highlight>, edição de vídeo precisa, <highlight>color grading cinematográfico</highlight>, VFX sutis e design de som imersivo, tudo adaptado para <highlight>máximo impacto</highlight> em todas as plataformas.",
      },
      benefitCard: {
        icon: "Lightbulb",
        title: "Desbloqueie Liberdade Criativa & Qualidade Escalável",
        desc: "Faça parceria conosco para entregar <highlight>audiovisuais polidos e prontos para performance</highlight> de forma consistente. Libere sua equipe para focar na estratégia e criatividade, enquanto cuidamos da <highlight>execução técnica impecável</highlight> e ajudamos você a escalar com confiança.",
      }
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
