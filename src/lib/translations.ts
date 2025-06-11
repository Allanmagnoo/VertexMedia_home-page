
export type Locale = 'en' | 'pt';

// EN specific types for more structured content
export interface ServiceDetailEn {
  icon?: string;
  title: string;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
    listItems?: string[];
  };
  benefit: {
    title: string;
    description: string;
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
  categoryTitle: string; // Could be implicit if we list all cases together
  cases: CaseStudyEn[];
}


// PT types (can be simpler or mirror EN if desired for consistency)
export type DetailCardContentPt = {
  icon?: string;
  title: string;
  description: string; // Can be a general description
  listItems?: string[];
  cta?: string;
  ctaLink?: string;
  imageUrl?: string;
  imageHint?: string;
};

export type CaseStudyPt = {
  title: string;
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
    // PT: Início, Soluções, Portfólio, Contato.
    // EN: Solutions, Work (ou Case Studies), About Us, Book a Call.
    home?: string; // Only for PT
    solutions: string;
    portfolio?: string; // PT: Portfólio
    work?: string; // EN: Work
    aboutUs?: string; // Only for EN
    contact: string; // PT: Contato
    bookCall?: string; // EN: Book a Call
    contactCta: string; // Main button in nav
  };
  hero: {
    mainImageUrl?: string; // Less emphasis on a single image for EN P-S-B
    mainImageHint?: string;
    // EN P-S-B structure
    problemTitle?: string;
    problemDescription?: string;
    solutionTitle?: string;
    solutionDescription?: string;
    benefitTitle?: string;
    benefitDescription?: string;
    // PT structure
    title?: string;
    subtitle?: string;
    description?: string;
    ctaPrimary: string;
    ctaSecondary?: string; // May not be needed for EN's direct "Book a Call" focus
  };
  solutions: {
    mainTitle: string;
    servicesEn?: ServiceDetailEn[]; // Specific for EN structure
    servicesPt?: DetailCardContentPt[]; // Existing structure for PT
    problemStatement?: { // General problem statement (can be used or adapted)
        title: string;
        description: string;
        cta: string;
    };
  };
  caseStudies: {
    mainTitle: string;
    categoriesEn?: CaseStudyCategoryEn[]; // Specific for EN structure
    categoriesPt?: CaseStudyCategoryPt[]; // Existing structure for PT
    portfolioCta: string; // "See More Work" or similar
  };
  about: {
    mainTitle: string;
    description: string; // General intro
    imageUrl?: string;
    imageHint?: string;
    // EN specific: Our Edge
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
    // PT can have key points like before, or a simpler narrative
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
    formSubmit: string; // "Book a Discovery Call" for EN, "Enviar" for PT
    successMessage: string;
    errorMessage: string;
    contactDirectly?: string; // Optional
    phone?: string;
    email?: string;
  };
  footer: {
    navLinks: { // Can be simplified or match main nav
      home?: string;
      solutions: string;
      work?: string;
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
      solutions: 'Soluções',
      portfolio: 'Portfólio',
      contact: 'Contato',
      contactCta: 'Fale Conosco',
    },
    hero: {
      mainImageUrl: "https://placehold.co/600x400/3F51B5/FFFFFF",
      mainImageHint: "equipe vertexmedia colaborando",
      title: 'VertexMedia: Seu <gradient>Braço Audiovisual Estratégico</gradient>',
      subtitle: 'Vídeos de Alta Performance que Elevam sua Marca.',
      description: 'Parceiros de confiança para agências, produtoras e empresas que buscam transformar ideias em vídeos de alto impacto, com criatividade, excelência técnica e foco em resultados.',
      ctaPrimary: 'Descubra Nossas Soluções',
      ctaSecondary: 'Veja Nosso Portfólio',
    },
    solutions: {
      mainTitle: 'Soluções Audiovisuais <gradient>Sob Medida</gradient>',
      servicesPt: [
        {
          icon: 'Sparkles',
          title: 'Criação e Produção de Alto Impacto',
          description: 'Desenvolvemos vídeos institucionais, corporativos, criativos para redes sociais (alto volume e formatos dinâmicos), vídeos personalizados e recorrentes (flights), e desdobramentos para campanhas de performance.',
          listItems: [
            'Vídeos Institucionais e Corporativos',
            'Criativos para Redes Sociais (TikTok, Reels, Shorts)',
            'Vídeos Personalizados e Recorrentes (Flights)',
            'Desdobramentos para Campanhas de Performance',
          ],
          cta: 'Solicitar Proposta',
          ctaLink: '#contact',
        },
        {
          icon: 'Settings2',
          title: 'Pós-Produção Técnica e Criativa',
          description: 'Nossa equipe especializada oferece edição profissional, motion graphics de ponta, correção de cor cinematográfica, tratamento de imagem e finalização otimizada para todas as plataformas.',
          listItems: [
            'Edição Profissional (Entrevistas, VSLs, Documentários)',
            'Motion Graphics Dinâmicos e Animações 2D/3D',
            'Color Grading e Tratamento de Imagem Avançado',
            'Finalização e Otimização Multiplataforma',
          ],
          cta: 'Conheça os Detalhes',
          ctaLink: '#contact',
        },
        {
          icon: 'Users',
          title: 'Parceria Estratégica Audiovisual',
          description: 'Atuamos como uma extensão da sua equipe, oferecendo suporte técnico para produtoras, consultoria em vídeo marketing e um atendimento flexível e personalizado para agências e clientes finais.',
          listItems: [
            'Parceria White-Label para Agências',
            'Suporte Técnico Escalável para Produtoras',
            'Consultoria Estratégica em Vídeo Marketing',
            'Flexibilidade e Atendimento Personalizado',
          ],
          cta: 'Saiba Mais',
          ctaLink: '#about',
        },
      ],
    },
    caseStudies: {
      mainTitle: 'Portfólio: Resultados <gradient>Visíveis</gradient>',
      categoriesPt: [
        {
          categoryTitle: 'Varejo e E-commerce',
          cases: [
            { title: 'Campanha de Lançamento - E-commerce de Moda', description: 'Produção de vídeos curtos e dinâmicos para redes sociais, destacando nova coleção e impulsionando tráfego qualificado.', imageUrl: 'https://placehold.co/600x338/3F51B5/FFFFFF', imageHint: 'varejo moda video', tags: ["E-commerce", "Social Media"] },
            { title: 'Vídeos de Produto - Loja de Eletrônicos', description: 'Criação de vídeos demonstrativos detalhados, melhorando a experiência do cliente e aumentando a taxa de conversão online.', imageUrl: 'https://placehold.co/600x338/FFB300/333333', imageHint: 'eletronicos produto video', tags: ["Produto", "Conversão"] },
          ],
        },
        {
          categoryTitle: 'Institucional e Corporativo',
          cases: [
            { title: 'Vídeo Manifesto - Startup de Tecnologia', description: 'Desenvolvimento de vídeo conceitual para apresentar a missão e valores da empresa, fortalecendo a marca empregadora.', imageUrl: 'https://placehold.co/600x338/3F51B5/EEEEEE', imageHint: 'startup tech video', tags: ["Branding", "Corporativo"] },
          ],
        },
      ],
      portfolioCta: 'Ver Todos os Projetos',
    },
    about: {
      mainTitle: 'Sobre a VertexMedia: Paixão e Técnica <highlight>a Serviço da Sua Marca</highlight>',
      description: 'Somos mais que uma produtora: somos parceiros estratégicos que unem paixão por audiovisual com expertise técnica para entregar soluções que realmente fazem a diferença no mercado brasileiro. Nosso compromisso é com a sua visão e o seu sucesso.',
      imageUrl: 'https://placehold.co/600x400/1F2937/FFFFFF',
      imageHint: 'equipe vertexmedia brasil',
      keyPointsPt: [
        { icon: 'Briefcase', title: 'Expertise Completa', text: 'Da concepção à finalização, cobrimos todas as etapas do seu projeto audiovisual com excelência.' },
        { icon: 'Cpu', title: 'Processos Inteligentes', text: 'Fluxos de trabalho otimizados para entregas ágeis, criativas e com a máxima qualidade.' },
        { icon: 'Waypoints', title: 'Colaboração Transparente', text: 'Trabalhamos lado a lado com você, com comunicação clara e foco nos seus objetivos.' },
      ],
    },
    contact: {
      mainTitle: 'Vamos <highlight>Conversar Sobre Seu Projeto</highlight>?',
      description: 'Entre em contato e descubra como a VertexMedia pode ajudar sua marca a alcançar novos patamares com o poder do audiovisual.',
      formName: 'Nome Completo',
      formEmail: 'E-mail',
      formCompany: 'Empresa (Opcional)',
      formMessage: 'Sua mensagem (descreva seu projeto ou necessidade)',
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
        work: 'Portfólio', // Alias for consistency with EN
        contact: 'Contato',
      },
      socialMedia: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
      rights: '© {year} VertexMedia. Todos os direitos reservados.',
      credits: 'Design & Desenvolvimento por Firebase Studio. Imagens de Placehold.co.',
    },
  },
  en: {
    appName: "VertexMedia",
    nav: {
      solutions: 'Solutions',
      work: 'Work',
      aboutUs: 'About Us',
      bookCall: 'Book a Call', // This will be the CTA in the nav
      contactCta: 'Book a Call', // Main button in nav for consistency
    },
    hero: {
      // P-S-B structure for EN
      problemTitle: "Struggling with video creative that <highlight>fails to convert</highlight> and <highlight>drains your ad spend</highlight>?",
      problemDescription: "You're not alone. Many businesses find it challenging to consistently produce video content that not only looks great but actually drives measurable results like lower CPAs and higher ROAS, especially when trying to scale.",
      solutionTitle: "VertexMedia: Your Dedicated Remote Post-Production Partner for <gradient>Data-Driven Video Assets</gradient>.",
      solutionDescription: "We specialize in creating high-performance video content tailored for performance marketing agencies, SaaS companies, and B2B marketing departments. Our seamless workflow and deep understanding of business metrics mean you get video that works.",
      benefitTitle: "The Bottom Line? Better Videos, <highlight>Better Metrics</highlight>, and a <highlight>Higher ROI</highlight> for Your Marketing Budget.",
      benefitDescription: "Stop guessing and start converting. Partner with VertexMedia to transform your video strategy into a revenue-generating machine.",
      ctaPrimary: 'Book a Discovery Call',
      // ctaSecondary: 'See Our Work', // Removed to focus on single primary CTA
    },
    solutions: {
      mainTitle: 'Video Solutions That <gradient>Drive Business Growth</gradient>',
      servicesEn: [
        {
          icon: 'TrendingUp', // Icon for performance/growth
          title: 'Performance Creative at Scale',
          problem: {
            title: "Problem: Sky-High CPAs & Stagnant ROAS?",
            description: "Your ad campaigns are underperforming. Creative fatigue sets in quickly, and generic videos aren't cutting it. You need a pipeline of fresh, conversion-focused video ads to test and optimize, but your current setup can't keep up.",
          },
          solution: {
            title: "Solution: Data-Driven Video Ad Production.",
            description: "We deliver a high volume of A/B test-ready video creatives, meticulously crafted based on platform best practices and your campaign data. Our process includes rapid iteration on hooks, CTAs, visuals, and messaging to find what truly resonates.",
            listItems: [
              "High-volume video ad variations for social (Meta, TikTok, YouTube)",
              "Direct response & UGC-style ad creation",
              "Motion graphics & animation for engagement",
              "Localization & adaptation for diverse audiences",
            ],
          },
          benefit: {
            title: "Benefit: Lower CPAs, Higher ROAS, and Scalable Campaigns.",
            description: "Consistently feed your ad platforms with optimized video creatives that convert viewers into customers, maximizing your return on ad spend and enabling sustainable campaign growth.",
          },
          cta: 'Boost Your Ad Performance',
          ctaLink: '#contact',
        },
        {
          icon: 'Video', // Icon for storytelling/explainers
          title: 'Brand Storytelling & Explainer Videos',
          problem: {
            title: "Problem: Complex Product & Low Engagement?",
            description: "Your SaaS product is powerful, but users drop off during onboarding. Your B2B solution is industry-leading, but prospects don't grasp its full value quickly. Your company culture is amazing, but you struggle to attract top talent.",
          },
          solution: {
            title: "Solution: Clear, Compelling Video Narratives.",
            description: "We craft engaging brand films that build trust and connection, and crystal-clear explainer videos that simplify complex concepts. Our videos articulate your value proposition effectively, whether for customer education, sales enablement, or employer branding.",
             listItems: [
              "Animated & live-action explainer videos",
              "SaaS product demo & tutorial videos",
              "Corporate brand films & company stories",
              "Testimonial & case study videos",
            ],
          },
          benefit: {
            title: "Benefit: Increased Conversions, Better User Retention, Stronger Brand.",
            description: "Drive higher trial-to-paid conversion rates with effective explainers. Attract and retain top talent with compelling brand stories. Close larger enterprise deals by clearly showcasing your unique value.",
          },
          cta: 'Tell Your Story Effectively',
          ctaLink: '#contact',
        },
        {
          icon: 'Users', // Icon for partnership
          title: 'White-Label Post-Production for Agencies',
          problem: {
            title: "Problem: Post-Production Bottlenecks & Scaling Pains?",
            description: "Your agency is growing, but your in-house video team is stretched thin. You're turning down projects or sacrificing quality to meet deadlines. You need a reliable, scalable post-production solution that understands agency workflows.",
          },
          solution: {
            title: "Solution: Your Trusted, Invisible Post-Production Arm.",
            description: "VertexMedia acts as your dedicated white-label partner. We seamlessly integrate with your team, handling everything from editing and motion graphics to color correction and final delivery, all under your brand. You manage the client, we manage the pixels.",
            listItems: [
              "Full-service video editing & assembly",
              "Advanced motion graphics & VFX",
              "Professional color grading & sound design",
              "Version control & asset management",
            ],
          },
          benefit: {
            title: "Benefit: Scale Your Operations, Maintain Quality, Focus on Growth.",
            description: "Expand your agency's video capabilities without the overhead of hiring. Deliver consistently high-quality work to your clients, on time, every time. Free up your core team to focus on strategy and client relationships.",
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
          // categoryTitle: 'Featured Projects', // Can be a single list for EN
          cases: [
            {
              title: 'SaaS Co. Onboarding Video Series',
              challenge: "A B2B SaaS company experienced a 40% user drop-off within the first week of trial, primarily due to product complexity during onboarding.",
              ourSolution: "We produced a series of 7 short, engaging tutorial videos (average 90 seconds) integrated directly into their platform's onboarding flow, guiding users through key features.",
              result: "+30% user retention after the first week; -25% support tickets related to onboarding; 15% increase in trial-to-paid conversion.",
              imageUrl: 'https://placehold.co/600x338/3F51B5/FFFFFF', imageHint: 'saas onboarding video', tags: ["SaaS", "Explainer Video", "User Retention"]
            },
            {
              title: 'Performance Marketing Agency Ad Creative Overhaul',
              challenge: "A performance marketing agency's client in the D2C space was seeing CPA increase by 15% month-over-month due to creative fatigue on Meta and TikTok.",
              ourSolution: "VertexMedia delivered 20+ unique video ad variations (UGC-style, animated, direct response) within a 2-week sprint for A/B testing, focusing on new hooks and benefit-driven messaging.",
              result: "Average CPA reduced by 18% across campaigns; ROAS increased by 1.2x; Client scaled ad spend by 40% while maintaining profitability.",
              imageUrl: 'https://placehold.co/600x338/FFB300/333333', imageHint: 'ad creative performance', tags: ["Performance Marketing", "A/B Testing", "Social Ads"]
            },
             {
              title: 'Tech Startup Employer Branding Film',
              challenge: "A fast-growing tech startup needed to attract senior engineering talent in a competitive market but struggled to convey its unique culture and mission.",
              ourSolution: "We created a compelling 3-minute brand film showcasing employee stories, the company's innovative work environment, and its impactful vision, used across their careers page and LinkedIn.",
              result: "200% increase in qualified applications for senior roles; Positive feedback on company culture from candidates; Used as a sales tool for B2B enterprise deals.",
              imageUrl: 'https://placehold.co/600x338/3F51B5/EEEEEE', imageHint: 'employer branding film', tags: ["Brand Storytelling", "Recruitment", "Tech"]
            }
          ],
        },
      ],
      portfolioCta: 'Discuss Your Project',
    },
    about: {
      mainTitle: 'Your Strategic Partner for <highlight>Global Video Production</highlight>',
      description: 'VertexMedia isn\'t just another video production house. We are a team of creative strategists and technical wizards dedicated to helping US-based businesses achieve their marketing and communication goals through high-impact video. We understand the speed of business and the need for content that performs.',
      imageUrl: 'https://placehold.co/600x400/1A1A2E/FFFFFF', // Darker background for image to contrast
      imageHint: 'global collaboration video production',
      ourEdge: {
        title: 'Our Edge: <gradient>Seamless Remote Collaboration & Timezone Power</gradient>',
        remoteCollaboration: {
          title: 'Expertise in Remote Workflows',
          description: 'We are built for remote collaboration. Our processes are streamlined using industry-standard tools to ensure smooth communication, efficient feedback loops, and on-time delivery, no matter where you are.',
          tools: ["Frame.io for Reviews", "Slack for Comms", "Asana/Notion for Project Management"],
        },
        timezoneAdvantage: {
          title: 'The "Overnight" Advantage: Your 24/7 Production Cycle',
          description: "Leverage our unique timezone advantage. As your strategic partner based in Brazil, we operate while you sleep. Send us your footage or brief at the end of your US business day (EST/PST), and wake up to a first draft or progress in your inbox. We turn global timezones into your competitive edge, accelerating your production cycle and keeping your projects moving around the clock.",
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
      successMessage: 'Thanks! Your call request is booked. We\'ll be in touch shortly with details.',
      errorMessage: 'Booking failed. Please try again or email us directly.',
      contactDirectly: 'Or email us at:',
      email: 'hello@vertexmedia.io', // US focused email
    },
    footer: {
      navLinks: {
        solutions: 'Solutions',
        work: 'Work', // Matches nav
        // aboutUs: 'About Us', // Optional in footer
        contact: 'Book a Call', // Matches nav
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

// Helper function to render text with <highlight> and <gradient> tags
export const renderHighlightedText = (text: string | undefined, highlightClass?: string, gradientClassParam?: string) => {
  if (!text) return '';

  const highlightPattern = /<highlight>(.*?)<\/highlight>/g;
  const gradientPattern = /<gradient>(.*?)<\/gradient>/g;

  let processedText = text;

  // Default highlight class if not provided, uses alternating primary/accent for visual interest
  const defaultHighlightClass = 'text-primary font-semibold'; // Example: Use primary for all non-specific highlights
  
  processedText = processedText.replace(highlightPattern, (match, p1) => {
    // Simple alternating color logic based on occurrence for variety if no class is specified
    // This logic is very basic; for more complex needs, specific classes per highlight might be better.
    const dynamicHighlightClass = highlightClass || (match.length % 2 === 0 ? 'text-accent font-semibold' : 'text-primary font-semibold');
    return `<span class="${dynamicHighlightClass}">$1</span>`;
  });
  
  // Default gradient class if not provided
  const defaultGradientClass = 'gradient-text'; // Defined in globals.css
  processedText = processedText.replace(gradientPattern, `<span class="${gradientClassParam || defaultGradientClass}">$1</span>`);

  return processedText;
};

    