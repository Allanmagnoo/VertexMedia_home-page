
export type Locale = 'en' | 'pt';

// EN specific types for more structured content
export interface ServiceCardEn {
  icon?: string;
  title: string;
  shortDescription: string;
  keyFeatures: string[];
  cta?: string;
  ctaLink?: string;
}

export interface CaseStudyEn {
  title: string;
  client?: string;
  challenge: string;
  ourSolution: string;
  result: string;
  imageUrl: string;
  imageHint: string;
  tags?: string[];
}

export interface CaseStudyCategoryEn {
  categoryTitle?: string;
  cases: CaseStudyEn[];
}


// PT types
export type DetailCardContentPt = {
  icon?: string;
  title: string;
  description?: string;
  listItems?: string[];
  cta?: string;
  ctaLink?: string;
};

export type CaseStudyPt = {
  title:string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags?: string[];
};

export type CaseStudyCategoryPt = {
  categoryTitle: string;
  cases: CaseStudyPt[];
};


export type Translations = {
  appName: string;
  nav: {
    home?: string;
    solutions: string;
    portfolio?: string;
    work?: string;
    aboutUs?: string;
    contact?: string;
    bookCall?: string;
    contactCta: string;
  };
  hero: {
    mainImageUrl?: string; // PT specific
    mainImageHint?: string; // PT specific
    title?: string; // PT main title
    subtitle?: string; // PT subtitle
    description?: string; // PT description
    clientLogosTitle?: string; // For PT client logos

    mainHeadline?: string; // EN H1
    subHeadline?: string; // EN supporting text/H2

    ctaPrimary: string;
    ctaSecondary?: string;
  };
  solutions: {
    mainTitle: string;
    description?: string; // EN: general intro; PT: not directly used, problemStatement is
    problemStatement?: { // PT specific structure for intro
        title: string;
        description: string;
        cta?: string;
        ctaLink?: string;
    };
    servicesEn?: ServiceCardEn[];
    servicesPt?: DetailCardContentPt[];
  };
  caseStudies: {
    mainTitle: string;
    categoriesEn?: CaseStudyCategoryEn[];
    categoriesPt?: CaseStudyCategoryPt[];
    portfolioCta: string;
  };
  about: {
    mainTitle: string;
    description: string;
    imageUrl?: string; // Made optional
    imageHint?: string; // Made optional
    ourEdge?: {
      title: string;
      remoteCollaboration: {
        title: string;
        description: string;
        tools: string[];
      };
      timezoneAdvantage: {
        title: string;
        description: string;
      };
    };
    keyPointsPt?: Array<{
      icon: string;
      title: string;
      text: string;
    }>;
  };
  contact: {
    mainTitle: string;
    description: string;
    formName: string;
    formEmail: string;
    formCompany?: string;
    formMessage: string;
    formSubmit: string;
    successMessage: string;
    errorMessage: string;
    contactDirectly?: string;
    phone?: string;
    email?: string;
  };
  footer: {
    navLinks: {
      home?: string;
      solutions: string;
      work?: string;
      aboutUs?: string;
      contact: string;
    };
    socialMedia: {
      facebook: string;
      instagram: string;
      linkedin: string;
    };
    rights: string;
    credits: string;
  };
};

export const translations: Record<Locale, Translations> = {
  pt: {
    appName: "VertexMedia",
    nav: {
      home: 'Início',
      solutions: 'Nossas Soluções',
      portfolio: 'Cases',
      contactCta: 'Fale Conosco',
    },
    hero: {
      mainImageUrl: "https://placehold.co/500x250.png/1F2937/E5E7EB",
      mainImageHint: "vertexmedia audiovisual estrategico",
      title: 'VertexMedia: Seu <gradient>Braço Audiovisual</gradient> Estratégico',
      subtitle: 'Vídeos de Alta Performance que <gradient>Elevam sua Marca</gradient>.',
      description: 'Parceiros de confiança para agências, produtoras e empresas que buscam transformar <gradient>ideias em vídeos</gradient> de alto impacto, com criatividade, excelência técnica e foco em resultados.',
      ctaPrimary: 'Fale com um Especialista',
      ctaSecondary: 'Nossas Soluções',
      clientLogosTitle: "Confiado por:"
    },
    solutions: {
      mainTitle: 'Soluções em Vídeo Sob Medida para Seus <gradient>Objetivos</gradient>',
      problemStatement: {
        title: 'Necessita de um Parceiro Audiovisual que Entenda Seus <highlight class="text-primary">Desafios Criativos e Técnicos</highlight>?',
        description: 'Produzir vídeos de qualidade, em volume e com criatividade, é um desafio. A VertexMedia oferece suporte audiovisual completo, da concepção à entrega, garantindo que suas campanhas atinjam o máximo potencial.',
        cta: 'Descubra Nossas Capacidades',
        ctaLink: '#contact'
      },
      servicesPt: [
        {
          icon: 'Sparkles',
          title: 'Criação e Produção Completa',
          description: "Da ideia inicial à entrega final, cuidamos de todo o processo criativo e técnico para vídeos que comunicam sua mensagem com clareza e impacto.",
          listItems: [
            'Vídeos Institucionais e Corporativos',
            'Criativos para Redes Sociais (alto volume)',
            'Vídeos Personalizados e Recorrentes (Flights)',
            'Desdobramentos para Campanhas de Performance',
          ],
          cta: 'Solicitar Proposta',
          ctaLink: '#contact',
        },
        {
          icon: 'Settings2',
          title: 'Pós-Produção e Finalização de Elite',
          description: "Elevamos a qualidade do seu material bruto com edição profissional, motion graphics dinâmicos e tratamento de imagem que impressiona.",
           listItems: [
            'Edição Profissional (Entrevistas, VSLs)',
            'Correção de Cor e Tratamento de Imagem',
            'Motion Graphics e Animações Criativas',
            'Finalização e Otimização Multiplataforma',
          ],
          cta: 'Ver Detalhes',
          ctaLink: '#contact',
        },
        {
          icon: 'Users2',
          title: 'Seu Braço Audiovisual Estratégico',
          description: "Atuamos como uma extensão da sua equipe, oferecendo suporte especializado e consultoria para otimizar seus resultados com vídeo.",
          listItems: [
            'Parceria Estratégica com Agências',
            'Suporte Técnico para Produtores',
            'Consultoria em Vídeo Marketing',
            'Flexibilidade e Atendimento Personalizado',
          ],
          cta: 'Para Quem Servimos',
          ctaLink: '#about',
        },
      ],
    },
    caseStudies: {
      mainTitle: 'Nossos Cases em Destaque: <gradient>Resultados Visíveis</gradient>',
      categoriesPt: [
        {
          categoryTitle: 'Cases de Varejo',
          cases: [
            { title: 'Campanha de Lançamento - E-commerce Fashion', description: 'Série de vídeos curtos para redes sociais, destacando nova coleção e impulsionando tráfego.', imageUrl: 'https://placehold.co/600x338.png/111827/60A5FA', imageHint: 'varejo moda video', tags: ["E-commerce", "Social Media"] },
            { title: 'Vídeos de Produto - Loja de Eletrônicos', description: 'Vídeos demonstrativos para produtos, melhorando experiência do cliente e conversão.', imageUrl: 'https://placehold.co/600x338.png/111827/60A5FA', imageHint: 'eletronicos produto video', tags: ["Produto", "Conversão"] },
          ],
        },
        {
          categoryTitle: 'Cases Institucionais',
          cases: [
            { title: 'Vídeo Manifesto - Startup de Tecnologia', description: 'Vídeo conceitual para apresentar missão e valores da empresa, fortalecendo marca empregadora.', imageUrl: 'https://placehold.co/600x338.png/111827/C084FC', imageHint: 'startup tech video', tags: ["Branding", "Corporativo"] },
          ],
        },
         {
          categoryTitle: 'Cases de Performance',
          cases: [
            { title: 'Criativos para Anúncios - SaaS', description: 'Grande volume de variações de vídeos curtos para testes A/B em campanhas de Ads, otimizando CPA.', imageUrl: 'https://placehold.co/600x338.png/111827/2DD4BF', imageHint: 'saas performance video', tags: ["Performance", "SaaS", "Ads"] },
          ],
        },
        {
          categoryTitle: 'Cases Imobiliários',
          cases: [
            { title: 'Tour Virtual - Lançamento de Condomínio', description: 'Vídeo imersivo do empreendimento, com tomadas aéreas, acelerando vendas na planta.', imageUrl: 'https://placehold.co/600x338.png/111827/FBBF24', imageHint: 'imobiliario tour video', tags: ["Imobiliário", "Tour Virtual"] },
          ],
        }
      ],
      portfolioCta: 'Ver Portfólio Completo',
    },
    about: {
      mainTitle: 'VertexMedia: Criatividade e Técnica <highlight class="text-primary">a Serviço da Sua Marca</highlight>',
      description: 'Somos mais que uma produtora: somos parceiros estratégicos que unem paixão por audiovisual com expertise técnica para entregar soluções que realmente fazem a diferença. Nossa equipe dedicada está pronta para transformar suas ideias em realidade visual.',
      keyPointsPt: [
        { icon: 'Briefcase', title: 'Expertise Completa', text: 'Da concepção à finalização, cobrimos todas as etapas do seu projeto audiovisual com excelência.' },
        { icon: 'Cpu', title: 'Processos Inteligentes', text: 'Fluxos de trabalho otimizados para entregas ágeis, com foco na máxima qualidade e eficiência.' },
        { icon: 'Waypoints', title: 'Colaboração Transparente', text: 'Trabalhamos lado a lado com você, com comunicação clara e foco total nos seus objetivos de negócio.' },
      ],
    },
    contact: {
      mainTitle: 'Pronto para Dar o Próximo Passo com a <highlight class="text-secondary">VertexMedia</highlight>?',
      description: 'Vamos transformar suas ideias em vídeos memoráveis. Entre em contato e descubra como podemos colaborar para impulsionar seus resultados.',
      formName: 'Nome Completo',
      formEmail: 'E-mail',
      formCompany: 'Empresa (Opcional)',
      formMessage: 'Como podemos ajudar?',
      formSubmit: 'Enviar Mensagem',
      successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      errorMessage: 'Falha ao enviar mensagem. Tente novamente ou contate-nos diretamente.',
      contactDirectly: 'Ou entre em contato por:',
      phone: '(XX) XXXXX-XXXX',
      email: 'contato@vertexmedia.com.br',
    },
    footer: {
      navLinks: {
        home: 'Início',
        solutions: 'Soluções',
        work: 'Cases',
        contact: 'Contato',
      },
      socialMedia: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
      rights: '© {year} VertexMedia. Todos os direitos reservados.',
      credits: 'Firebase Studio Build. Imagens via Placehold.co.',
    },
  },
  en: {
    appName: "VertexMedia",
    nav: {
      solutions: 'Solutions',
      work: 'Work',
      aboutUs: 'About Us',
      contactCta: 'Book a Call',
    },
    hero: {
      mainHeadline: "High-Performance Video That Drives <gradient>Revenue & Results</gradient>.",
      subHeadline: "VertexMedia: Expert remote post-production for marketing agencies, SaaS, and B2B. We deliver video that <highlight>converts</highlight>.",
      ctaPrimary: 'Book a Discovery Call',
    },
    solutions: {
      mainTitle: 'Video Solutions That <gradient>Drive Business Growth</gradient>',
      description: "Tired of video that doesn't perform? We deliver specialized video post-production services designed to tackle your biggest marketing challenges and achieve tangible business outcomes. From boosting ad performance to clarifying complex products, our expertise is your advantage.",
      servicesEn: [
        {
          icon: 'TrendingUp',
          title: 'Performance Creative at Scale',
          shortDescription: "Skyrocket campaign results with a continuous flow of conversion-focused video ads, built for A/B testing and peak performance.",
          keyFeatures: [
            "High-volume video ad variations (Meta, TikTok, YouTube)",
            "Direct response & UGC-style ad creation",
            "Engaging motion graphics & animation",
            "Localization & adaptation for diverse audiences",
          ],
          cta: 'Boost Your Ad Performance',
          ctaLink: '#contact',
        },
        {
          icon: 'Video',
          title: 'Brand Storytelling & Explainers',
          shortDescription: "Simplify complex ideas and build strong brand connections with clear, compelling video narratives that engage and convert.",
          keyFeatures: [
            "Animated & live-action explainer videos",
            "SaaS product demo & tutorial videos",
            "Corporate brand films & company stories",
            "Testimonial & case study videos (expert finalization)",
          ],
          cta: 'Tell Your Story Effectively',
          ctaLink: '#contact',
        },
        {
          icon: 'Users',
          title: 'White-Label for Agencies',
          shortDescription: "Expand your agency's video capabilities seamlessly. We act as your invisible, expert post-production team, delivering quality under your brand.",
          keyFeatures: [
            "Full-service video editing & assembly",
            "Advanced motion graphics, VFX & 2D/3D animation",
            "Professional color grading & sound design",
            "Version control & asset management for social campaigns",
          ],
          cta: 'Scale Your Agency with Us',
          ctaLink: '#contact',
        },
      ],
    },
    caseStudies: {
      mainTitle: 'Our Work: Driving <gradient>Measurable Results</gradient>',
      categoriesEn: [
        {
          cases: [
            {
              title: 'SaaS Co. Onboarding Video Series',
              client: 'B2B SaaS Platform',
              challenge: "High user drop-off (40%) in 1st week due to product complexity.",
              ourSolution: "7 short, engaging tutorial videos integrated into onboarding, guiding users through key features.",
              result: "+30% user retention (Wk1); -25% support tickets; +15% trial-to-paid conversion.",
              imageUrl: 'https://placehold.co/600x338.png/3F51B5/FFFFFF', imageHint: 'saas onboarding video', tags: ["SaaS", "Explainer Video", "User Retention"]
            },
            {
              title: 'D2C Ad Creative Overhaul',
              client: 'E-commerce Brand (via Agency)',
              challenge: "Client's CPA increased 15% MoM due to creative fatigue.",
              ourSolution: "20+ unique video ad variations (UGC, animated, direct response) in 2 weeks for A/B testing.",
              result: "Average CPA -18%; ROAS +1.2x; Ad spend scaled by 40% profitably.",
              imageUrl: 'https://placehold.co/600x338.png/FFB300/333333', imageHint: 'ad creative performance', tags: ["Performance Marketing", "A/B Testing", "Social Ads"]
            },
             {
              title: 'Tech Startup Employer Branding Film',
              client: 'Fast-Growing Tech Innovator',
              challenge: "Needed to attract senior engineering talent in a competitive market.",
              ourSolution: "Compelling 3-min brand film showcasing employee stories, innovation, and vision.",
              result: "+200% qualified sr. applications; Positive feedback on culture; Used as sales tool.",
              imageUrl: 'https://placehold.co/600x338.png/1A1A2E/EEEEEE', imageHint: 'employer branding film', tags: ["Brand Storytelling", "Recruitment", "Tech"]
            }
          ],
        },
      ],
      portfolioCta: 'Discuss Your Project',
    },
    about: {
      mainTitle: 'Your Strategic Partner for <highlight class="text-primary">Global Video Production Excellence</highlight>',
      description: 'VertexMedia: Your agile team of creative strategists and technical wizards in motion graphics, color, and video finalization. We empower US businesses with high-performing video content.',
      ourEdge: {
        title: 'Our Edge: <gradient>Seamless Remote Collaboration & Timezone Power</gradient>',
        remoteCollaboration: {
          title: 'Expert Remote Workflows',
          description: 'Flawless remote collaboration. Streamlined processes (Frame.io, Slack, Asana) ensure smooth communication, efficient feedback, and punctual delivery.',
          tools: ["Frame.io Reviews", "Slack Comms", "Asana/Notion PM"],
        },
        timezoneAdvantage: {
          title: 'The "Overnight" Advantage',
          description: "Leverage our Brazilian timezone. Send briefs EOD (US), wake up to progress or completed drafts. We accelerate your production, keeping projects moving while you sleep.",
        },
      },
    },
    contact: {
      mainTitle: 'Ready to <gradient>Elevate Your Video Strategy</gradient>?',
      description: 'Let\'s discuss how VertexMedia can become your trusted partner for video content that drives revenue and results. Schedule a free, no-obligation discovery call today.',
      formName: 'Full Name',
      formEmail: 'Work Email',
      formCompany: 'Company Name (Optional)',
      formMessage: 'Tell us about your video needs or project goals',
      formSubmit: 'Book Your Free Discovery Call',
      successMessage: 'Thanks! Your call request is confirmed. We\'ll be in touch shortly.',
      errorMessage: 'Booking failed. Please try again or email us directly.',
      contactDirectly: 'Or email us at:',
      email: 'hello@vertexmedia.io',
    },
    footer: {
      navLinks: {
        solutions: 'Solutions',
        work: 'Work',
        aboutUs: 'About Us',
        contact: 'Book a Call',
      },
      socialMedia: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
      rights: '© {year} VertexMedia. All Rights Reserved.',
      credits: 'Firebase Studio Build. Images via Placehold.co.',
    },
  },
};

export const getLang = (locale: Locale): Translations => translations[locale];

export const renderHighlightedText = (text: string | undefined, defaultHighlightClass?: string, gradientClassParam?: string) => {
  if (!text) return '';

  const highlightPattern = /<highlight(?: class="([^"]+)")?>(.*?)<\/highlight>/g;
  const gradientPattern = /<gradient>(.*?)<\/gradient>/g;

  let processedText = text;

  processedText = processedText.replace(highlightPattern, (match, customClass, content) => {
    const highlightClass = customClass || defaultHighlightClass || 'text-primary font-semibold';
    return `<span class="${highlightClass}">${content}</span>`;
  });

  const defaultGradientClass = gradientClassParam || 'gradient-text';
  processedText = processedText.replace(gradientPattern, (match, content) => {
    return `<span class="${defaultGradientClass}">${content}</span>`;
  });

  return processedText;
};
