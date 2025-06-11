
export type Locale = 'en' | 'pt';

// EN specific types for more structured content
export interface ServiceDetailEn {
  icon?: string;
  title: string;
  problem: {
    title: string;
    description: string;
    icon?: string;
  };
  solution: {
    title: string;
    description: string;
    listItems?: string[];
    icon?: string;
  };
  benefit: {
    title: string;
    description: string;
    icon?: string;
  };
  cta?: string;
  ctaLink?: string;
}

export interface CaseStudyEn {
  title: string;
  client?: string; // Optional client name
  challenge: string;
  ourSolution: string;
  result: string; // Metrics-driven
  imageUrl: string;
  imageHint: string;
  tags?: string[]; // e.g., ["SaaS", "Performance Marketing"]
}

export interface CaseStudyCategoryEn {
  categoryTitle?: string;
  cases: CaseStudyEn[];
}


// PT types (can be simpler or mirror EN if desired for consistency)
export type DetailCardContentPt = {
  icon?: string;
  title: string;
  description?: string;
  listItems?: string[];
  cta?: string;
  ctaLink?: string;
  imageUrl?: string;
  imageHint?: string;
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
    mainImageUrl?: string;
    mainImageHint?: string;
    problemTitle?: string;
    problemDescription?: string;
    solutionTitle?: string;
    solutionDescription?: string;
    benefitTitle?: string;
    benefitDescription?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    ctaPrimary: string;
    ctaSecondary?: string;
  };
  solutions: {
    mainTitle: string;
    description?: string; // For EN main intro
    servicesEn?: ServiceDetailEn[];
    servicesPt?: DetailCardContentPt[];
    problemStatement?: {
        title: string;
        description: string;
        cta: string;
    };
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
    imageUrl?: string;
    imageHint?: string;
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
      work?: string; // or portfolio
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
      contact: 'Contato',
      contactCta: 'Fale Conosco',
    },
    hero: {
      mainImageUrl: "https://placehold.co/500x250.png/1F2937/9CA3AF",
      mainImageHint: "vertexmedia audiovisual estrategico",
      title: 'VertexMedia: Seu <gradient>Braço Audiovisual</gradient> Estratégico',
      subtitle: 'Vídeos de Alta Performance que <gradient>Elevam sua Marca</gradient>.',
      description: 'Parceiros de confiança para agências, produtoras e empresas que buscam transformar <gradient>ideias em vídeos</gradient> de alto impacto, com criatividade, excelência técnica e foco em resultados.',
      ctaPrimary: 'Fale com um Especialista',
      ctaSecondary: 'Nossas Soluções',
    },
    solutions: {
      mainTitle: 'Soluções em Vídeo Sob Medida para Seus <gradient>Objetivos</gradient>',
      problemStatement: {
        title: 'Necessita de um Parceiro Audiovisual que Entenda Seus <highlight class="text-primary">Desafios Criativos e Técnicos</highlight>?',
        description: 'Produzir vídeos de qualidade, em volume e com criatividade, é um desafio. A VertexMedia oferece suporte audiovisual completo, da concepção à entrega.',
        cta: 'Descubra Nossas Capacidades'
      },
      servicesPt: [
        {
          icon: 'Sparkles',
          title: 'Criação e Produção',
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
          title: 'Pós-Produção e Finalização',
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
          title: 'Seu Braço Audiovisual',
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
            { title: 'Campanha de Lançamento - E-commerce Fashion', description: 'Produção de série de vídeos curtos e dinâmicos para redes sociais, destacando nova coleção e impulsionando tráfego para o site.', imageUrl: 'https://placehold.co/600x338.png/111827/60A5FA', imageHint: 'varejo moda video', tags: ["E-commerce", "Social Media"] },
            { title: 'Vídeos de Produto - Loja de Eletrônicos', description: 'Criação de vídeos demonstrativos para os principais produtos, melhorando a experiência do cliente e aumentando a conversão na página de produto.', imageUrl: 'https://placehold.co/600x338.png/111827/60A5FA', imageHint: 'eletronicos produto video', tags: ["Produto", "Conversão"] },
          ],
        },
        {
          categoryTitle: 'Cases Institucionais',
          cases: [
            { title: 'Vídeo Manifesto - Startup de Tecnologia', description: 'Desenvolvimento de vídeo conceitual para apresentar a missão e os valores da empresa, fortalecendo a marca empregadora.', imageUrl: 'https://placehold.co/600x338.png/111827/C084FC', imageHint: 'startup tech video', tags: ["Branding", "Corporativo"] },
          ],
        },
         {
          categoryTitle: 'Cases de Performance',
          cases: [
            { title: 'Criativos para Anúncios - SaaS', description: 'Produção de um grande volume de variações de vídeos curtos para testes A/B em campanhas de Google Ads e Facebook Ads, otimizando o CPA.', imageUrl: 'https://placehold.co/600x338.png/111827/2DD4BF', imageHint: 'saas performance video', tags: ["Performance", "SaaS", "Ads"] },
          ],
        },
        {
          categoryTitle: 'Cases Imobiliários',
          cases: [
            { title: 'Tour Virtual - Lançamento de Condomínio', description: 'Criação de vídeo imersivo apresentando o empreendimento, com tomadas aéreas e destaque para os diferenciais, acelerando as vendas na planta.', imageUrl: 'https://placehold.co/600x338.png/111827/FBBF24', imageHint: 'imobiliario tour video', tags: ["Imobiliário", "Tour Virtual"] },
          ],
        }
      ],
      portfolioCta: 'Ver Portfólio Completo',
    },
    about: { 
      mainTitle: 'VertexMedia: Criatividade e Técnica <highlight class="text-primary">a Serviço da Sua Marca</highlight>',
      description: 'Somos mais que uma produtora: somos parceiros estratégicos que unem paixão por audiovisual com expertise técnica para entregar soluções que realmente fazem a diferença.',
      imageUrl: 'https://placehold.co/600x400.png/111827/9CA3AF',
      imageHint: 'sobre vertexmedia equipe',
      keyPointsPt: [
        { icon: 'Briefcase', title: 'Expertise Completa', text: 'Da concepção à finalização, cobrimos todas as etapas do seu projeto audiovisual.' },
        { icon: 'Cpu', title: 'Processos Inteligentes', text: 'Fluxos de trabalho otimizados para entregas ágeis e com a máxima qualidade.' },
        { icon: 'Waypoints', title: 'Colaboração Transparente', text: 'Trabalhamos lado a lado com você, com comunicação clara e foco nos seus objetivos.' },
      ],
    },
    contact: {
      mainTitle: 'Pronto para Dar o Próximo Passo com a <highlight class="text-secondary">VertexMedia</highlight>?',
      description: 'Vamos transformar suas ideias em vídeos memoráveis. Entre em contato e descubra como podemos colaborar.',
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
      problemTitle: "Struggling with video creative that <highlight>fails to convert</highlight> and <highlight>drains ad spend</highlight>?",
      problemDescription: "Many businesses find it hard to consistently produce video content that drives results like lower CPAs and higher ROAS, especially at scale.",
      solutionTitle: "VertexMedia: Your Remote Post-Production Partner for <gradient>Data-Driven Video Assets</gradient>.",
      solutionDescription: "We create high-performance video content for performance marketing agencies, SaaS companies, and B2B marketers. Our seamless workflow and metric-driven approach mean you get video that works.",
      benefitTitle: "The Bottom Line? Better Videos, <highlight>Better Metrics</highlight>, <highlight>Higher ROI</highlight>.",
      benefitDescription: "Stop guessing, start converting. Partner with VertexMedia to turn your video strategy into a revenue engine.",
      ctaPrimary: 'Book a Discovery Call',
    },
    solutions: {
      mainTitle: 'Video Solutions That <gradient>Drive Business Growth</gradient>',
      description: "Expert video post-production to solve marketing challenges and drive business outcomes. We boost ad performance and clarify complex products.",
      servicesEn: [
        {
          icon: 'TrendingUp',
          title: 'Performance Creative at Scale',
          problem: {
            icon: 'AlertTriangle',
            title: "Problem: Sky-High CPAs & Stagnant ROAS?",
            description: "Underperforming ads? Creative fatigue hindering growth? We provide a pipeline of fresh, conversion-focused video ads for continuous optimization.",
          },
          solution: {
            icon: 'Film',
            title: "Solution: Data-Driven Video Ad Production.",
            description: "High-volume, A/B test-ready video creatives with dynamic motion graphics for all social formats. Rapid iteration on hooks, CTAs, and visuals to maximize resonance.",
            listItems: [
              "Video ad variations for Meta, TikTok, YouTube",
              "Direct response & UGC-style ad creation",
              "Engaging motion graphics & animation",
              "Localization & adaptation for diverse audiences",
            ],
          },
          benefit: {
            icon: 'Lightbulb',
            title: "Benefit: Lower CPAs, Higher ROAS, Scalable Campaigns.",
            description: "Fuel your ad platforms with optimized video creatives that convert, maximizing ROAS and ensuring sustainable campaign growth.",
          },
          cta: 'Boost Your Ad Performance',
          ctaLink: '#contact',
        },
        {
          icon: 'Video',
          title: 'Brand Storytelling & Explainer Videos',
          problem: {
            icon: 'AlertTriangle',
            title: "Problem: Complex Product & Low Engagement?",
            description: "Complex SaaS product causing user drop-off? B2B solution value unclear? Struggling to convey company culture to attract talent?",
          },
          solution: {
            icon: 'Film',
            title: "Solution: Clear, Compelling Video Narratives.",
            description: "Engaging brand films and clear explainer videos that simplify complexity and articulate your value. Features polished editing and professional color correction.",
             listItems: [
              "Animated & live-action explainer videos",
              "SaaS product demo & tutorial videos",
              "Corporate brand films & company stories",
              "Testimonial & case study videos with expert finalization",
            ],
          },
          benefit: {
            icon: 'Lightbulb',
            title: "Benefit: Increased Conversions, Better Retention, Stronger Brand.",
            description: "Boost trial-to-paid conversions, attract top talent, and close more deals by clearly showcasing your value.",
          },
          cta: 'Tell Your Story Effectively',
          ctaLink: '#contact',
        },
        {
          icon: 'Users',
          title: 'White-Label Post-Production for Agencies',
          problem: {
            icon: 'AlertTriangle',
            title: "Problem: Post-Production Bottlenecks?",
            description: "Agency growing but post-production is a bottleneck? Team stretched thin, risking quality or turning down projects?",
          },
          solution: {
            icon: 'Film',
            title: "Solution: Your Trusted, Invisible Post-Production Arm.",
            description: "Your dedicated white-label post-production partner. Seamless integration, handling editing, motion graphics, color, and delivery under your brand.",
            listItems: [
              "Full-service video editing & assembly",
              "Advanced motion graphics, VFX & 2D/3D animation",
              "Professional color grading & sound design",
              "Version control & asset management for social campaigns",
            ],
          },
          benefit: {
            icon: 'Lightbulb',
            title: "Benefit: Scale Operations, Maintain Quality, Focus on Growth.",
            description: "Scale video capabilities without overhead. Deliver high-quality work consistently, freeing your team for strategy and client relations.",
          },
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
              challenge: "Experienced a 40% user drop-off within the first week of trial, primarily due to product complexity during onboarding.",
              ourSolution: "We produced a series of 7 short, engaging tutorial videos (average 90 seconds) integrated directly into their platform's onboarding flow, guiding users through key features with clear visuals and motion graphics.",
              result: "+30% user retention after the first week; -25% support tickets related to onboarding; 15% increase in trial-to-paid conversion.",
              imageUrl: 'https://placehold.co/600x338.png/3F51B5/FFFFFF', imageHint: 'saas onboarding video', tags: ["SaaS", "Explainer Video", "User Retention"]
            },
            {
              title: 'Performance Marketing Agency Ad Creative Overhaul',
              client: 'D2C E-commerce Brand (via Agency)',
              challenge: "Client in the D2C space was seeing CPA increase by 15% month-over-month due to creative fatigue on Meta and TikTok.",
              ourSolution: "VertexMedia delivered 20+ unique video ad variations (UGC-style, animated, direct response) within a 2-week sprint for A/B testing, focusing on new hooks and benefit-driven messaging, optimized for each platform.",
              result: "Average CPA reduced by 18% across campaigns; ROAS increased by 1.2x; Client scaled ad spend by 40% while maintaining profitability.",
              imageUrl: 'https://placehold.co/600x338.png/FFB300/333333', imageHint: 'ad creative performance', tags: ["Performance Marketing", "A/B Testing", "Social Ads"]
            },
             {
              title: 'Tech Startup Employer Branding Film',
              client: 'Fast-Growing Tech Innovator',
              challenge: "Needed to attract senior engineering talent in a competitive market but struggled to convey its unique culture and mission.",
              ourSolution: "We created a compelling 3-minute brand film showcasing employee stories, the company's innovative work environment, and its impactful vision, used across their careers page and LinkedIn. The film featured high-quality cinematography and color correction.",
              result: "200% increase in qualified applications for senior roles; Positive feedback on company culture from candidates; Used as a sales tool for B2B enterprise deals.",
              imageUrl: 'https://placehold.co/600x338.png/1A1A2E/EEEEEE', imageHint: 'employer branding film', tags: ["Brand Storytelling", "Recruitment", "Tech"]
            }
          ],
        },
      ],
      portfolioCta: 'Discuss Your Project',
    },
    about: {
      mainTitle: 'Your Strategic Partner for <highlight class="text-primary">Global Video Production Excellence</highlight>',
      description: 'VertexMedia is your team of creative strategists and technical wizards in motion graphics, color correction, and video finalization. We help US businesses achieve marketing goals with content that performs, understanding the speed and demands of your market.',
      imageUrl: 'https://placehold.co/600x400.png/1A1A2E/FFFFFF',
      imageHint: 'global collaboration video production',
      ourEdge: {
        title: 'Our Edge: <gradient>Seamless Remote Collaboration & Timezone Power</gradient>',
        remoteCollaboration: {
          title: 'Expert Remote Workflows',
          description: 'Built for remote collaboration with streamlined processes (Frame.io, Slack, Asana/Notion) for smooth communication, efficient feedback, and on-time delivery.',
          tools: ["Frame.io Reviews", "Slack Comms", "Asana/Notion PM"],
        },
        timezoneAdvantage: {
          title: 'The "Overnight" Advantage',
          description: "Leverage our Brazilian timezone. Send briefs EOD (US time), wake up to progress. We accelerate your production cycle, keeping projects moving 24/7.",
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
      successMessage: 'Thanks! Your call request is confirmed. We\'ll be in touch shortly with details.',
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

