
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
      mainTitle: "Your Challenges, Our Solutions, Your Growth",
      problemCard: {
        icon: "AlertTriangle",
        title: "Recognizing Your Hurdles",
        desc: "Scaling quality content, managing fluctuating demand, and resource constraints can <highlight>stall your growth</highlight>. We understand the pressure your agency or production house faces.",
      },
      solutionCard: {
        icon: "Zap",
        title: "Our Performance-Driven Partnership",
        desc: "VertexMedia acts as your dedicated audiovisual arm. We combine <highlight>technical expertise</highlight> with creative solutions to seamlessly scale your production and deliver <highlight>impactful content</highlight>.",
      },
      benefitCard: {
        icon: "TrendingUp",
        title: "Unlock Efficiency & Results",
        desc: "Partner with us to <highlight>scale confidently</highlight>, free up your core team, and deliver audiovisual work that <highlight>boosts your bottom line</highlight> and enhances your reputation.",
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
      mainTitle: "Seus Desafios, Nossas Soluções Audiovisuais, Seu Crescimento",
      problemCard: {
        icon: "AlertTriangle",
        title: "Reconhecendo Seus Obstáculos",
        desc: "Escalar conteúdo de qualidade, gerenciar demandas flutuantes e restrições de recursos podem <highlight>frear seu crescimento</highlight>. Entendemos a pressão que sua agência ou produtora enfrenta.",
      },
      solutionCard: {
        icon: "Zap",
        title: "Nossa Parceria Focada em Performance",
        desc: "A VertexMedia atua como seu braço audiovisual dedicado. Combinamos <highlight>expertise técnica</highlight> com soluções criativas para escalar sua produção de forma transparente e entregar <highlight>conteúdo impactante</highlight>.",
      },
      benefitCard: {
        icon: "TrendingUp",
        title: "Desbloqueie Eficiência & Resultados",
        desc: "Faça parceria conosco para <highlight>escalar com confiança</highlight>, liberar sua equipe principal e entregar trabalhos audiovisuais que <highlight>impulsionam seus resultados</highlight> e fortalecem sua reputação.",
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
