
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
    appName: "VertexMedia", // Corrected name from referencia
    nav: {
      home: 'Início',
      solutions: 'Nossas Soluções',
      portfolio: 'Cases', // 'Portfólio' from PRD, 'Cases' from referencia
      contact: 'Contato', // 'Contato' from PRD, 'Fale Conosco' from referencia
      contactCta: 'Fale Conosco',
    },
    hero: {
      mainImageUrl: "https://placehold.co/500x250/1F2937/9CA3AF",
      mainImageHint: "vertexmedia audiovisual estrategico",
      title: 'VertexMedia: Seu Braço Audiovisual <gradient>Inovador</gradient>',
      subtitle: 'Vídeos que <gradient>Elevam sua Marca</gradient>.',
      description: 'Suporte audiovisual criativo e técnico para agências, produtores e empresas. Transformamos <gradient>ideias em vídeos</gradient> de alto impacto.',
      ctaPrimary: 'Fale com um Especialista',
      ctaSecondary: 'Nossas Soluções',
    },
    solutions: {
      mainTitle: 'Soluções em Vídeo Sob Medida para Seus <gradient>Objetivos</gradient>',
      problemStatement: { // This block is specific to PT, based on referencia
        title: 'Necessita de um Parceiro Audiovisual que Entenda Seus <highlight class="text-primary">Desafios Criativos e Técnicos</highlight>?', // Using highlight with specific class for blue
        description: 'Produzir vídeos de qualidade, em múltiplos formatos e volumes, mantendo a criatividade e a eficiência, é nosso foco. A VertexMedia está aqui para ser seu suporte audiovisual completo, desde a concepção até a entrega final.',
        cta: 'Descubra Nossas Capacidades'
      },
      servicesPt: [
        {
          icon: 'Sparkles',
          title: 'Criação e Produção', // Simplified from 'Criação e Produção de Alto Impacto' for brevity
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
          title: 'Pós-Produção e Finalização', // Simplified from 'Pós-Produção e Finalização de Excelência'
           listItems: [
            'Edição Profissional (Entrevistas, VSLs)',
            'Correção de Cor e Tratamento de Imagem',
            'Motion Graphics e Animações Criativas',
            'Finalização e Otimização Multiplataforma',
          ],
          cta: 'Ver Detalhes',
          ctaLink: '#contact', // Assuming details lead to contact or a specific service page later
        },
        {
          icon: 'Users2',
          title: 'Seu Braço Audiovisual', // Simplified from 'Seu Braço Audiovisual Estratégico'
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
            { title: 'Campanha de Lançamento - E-commerce Fashion', description: 'Produção de série de vídeos curtos e dinâmicos para redes sociais, destacando nova coleção e impulsionando tráfego para o site.', imageUrl: 'https://placehold.co/600x338/111827/60A5FA', imageHint: 'varejo moda video', tags: ["E-commerce", "Social Media"] },
            { title: 'Vídeos de Produto - Loja de Eletrônicos', description: 'Criação de vídeos demonstrativos para os principais produtos, melhorando a experiência do cliente e aumentando a conversão na página de produto.', imageUrl: 'https://placehold.co/600x338/111827/60A5FA', imageHint: 'eletronicos produto video', tags: ["Produto", "Conversão"] },
          ],
        },
        {
          categoryTitle: 'Cases Institucionais',
          cases: [
            { title: 'Vídeo Manifesto - Startup de Tecnologia', description: 'Desenvolvimento de vídeo conceitual para apresentar a missão e os valores da empresa, fortalecendo a marca empregadora.', imageUrl: 'https://placehold.co/600x338/111827/C084FC', imageHint: 'startup tech video', tags: ["Branding", "Corporativo"] },
          ],
        },
         {
          categoryTitle: 'Cases de Performance',
          cases: [
            { title: 'Criativos para Anúncios - SaaS', description: 'Produção de um grande volume de variações de vídeos curtos para testes A/B em campanhas de Google Ads e Facebook Ads, otimizando o CPA.', imageUrl: 'https://placehold.co/600x338/111827/2DD4BF', imageHint: 'saas performance video', tags: ["Performance", "SaaS", "Ads"] },
          ],
        },
        {
          categoryTitle: 'Cases Imobiliários',
          cases: [
            { title: 'Tour Virtual - Lançamento de Condomínio', description: 'Criação de vídeo imersivo apresentando o empreendimento, com tomadas aéreas e destaque para os diferenciais, acelerando as vendas na planta.', imageUrl: 'https://placehold.co/600x338/111827/FBBF24', imageHint: 'imobiliario tour video', tags: ["Imobiliário", "Tour Virtual"] },
          ],
        }
      ],
      portfolioCta: 'Ver Portfólio Completo',
    },
    about: { // "Sobre Nós" from referencia.html
      mainTitle: 'VertexMedia: Criatividade e Técnica <highlight class="text-primary">a Serviço da Sua Marca</highlight>', // text-blue-400 in ref
      description: 'Somos mais que uma produtora: somos parceiros estratégicos que unem paixão por audiovisual com expertise técnica para entregar soluções que realmente fazem a diferença.', // Simplified from ref
      imageUrl: 'https://placehold.co/600x400/111827/9CA3AF',
      imageHint: 'sobre vertexmedia equipe',
      keyPointsPt: [ // From referencia.html structure
        { icon: 'Briefcase', title: 'Expertise Completa', text: 'Da concepção à finalização, cobrimos todas as etapas do seu projeto audiovisual.' },
        { icon: 'Cpu', title: 'Processos Inteligentes', text: 'Fluxos de trabalho otimizados para entregas ágeis e com a máxima qualidade.' },
        { icon: 'Waypoints', title: 'Colaboração Transparente', text: 'Trabalhamos lado a lado com você, com comunicação clara e foco nos seus objetivos.' },
      ],
    },
    contact: {
      mainTitle: 'Pronto para Dar o Próximo Passo com a <highlight class="text-secondary">VertexMedia</highlight>?', // text-purple-300 (secondary) in ref
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
      email: 'contato@vertexmedia.com.br', // Updated to .com.br for PT
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
      rights: '© {year} VertexMedia. Todos os direitos reservados.', // Updated appName
      credits: 'Design por Firebase Studio. Imagens de Placehold.co.', // Simplified from ref
    },
  },
  en: {
    appName: "VertexMedia",
    nav: {
      // No 'Home' for EN as per brief
      solutions: 'Solutions',
      work: 'Work', // Or 'Case Studies' - 'Work' is shorter
      aboutUs: 'About Us',
      // No 'Contact' text link for EN, direct to 'Book a Call' CTA
      contactCta: 'Book a Call', // Main CTA in header
    },
    hero: {
      // No main image for EN hero based on P-S-B text structure
      problemTitle: "Struggling with video creative that <highlight>fails to convert</highlight> and <highlight>drains your ad spend</highlight>?",
      problemDescription: "You're not alone. Many businesses find it challenging to consistently produce video content that not only looks great but actually drives measurable results like lower CPAs and higher ROAS, especially when trying to scale.",
      solutionTitle: "VertexMedia: Your Dedicated Remote Post-Production Partner for <gradient>Data-Driven Video Assets</gradient>.",
      solutionDescription: "We specialize in creating high-performance video content tailored for performance marketing agencies, SaaS companies, and B2B marketing departments. Our seamless workflow and deep understanding of business metrics mean you get video that works.",
      benefitTitle: "The Bottom Line? Better Videos, <highlight>Better Metrics</highlight>, and a <highlight>Higher ROI</highlight> for Your Marketing Budget.",
      benefitDescription: "Stop guessing and start converting. Partner with VertexMedia to transform your video strategy into a revenue-generating machine.",
      ctaPrimary: 'Book a Discovery Call',
      // No secondary CTA in EN Hero
    },
    solutions: {
      mainTitle: 'Video Solutions That <gradient>Drive Business Growth</gradient>',
      description: "We deliver specialized video post-production services designed to tackle your biggest marketing challenges and achieve tangible business outcomes. From boosting ad performance to clarifying complex products, our expertise is your advantage.",
      servicesEn: [
        {
          icon: 'TrendingUp',
          title: 'Performance Creative at Scale',
          problem: {
            icon: 'AlertTriangle',
            title: "Problem: Sky-High CPAs & Stagnant ROAS?",
            description: "Your ad campaigns are underperforming. Creative fatigue sets in quickly, and generic videos aren't cutting it. You need a pipeline of fresh, conversion-focused video ads to test and optimize, but your current setup can't keep up.",
          },
          solution: {
            icon: 'Film',
            title: "Solution: Data-Driven Video Ad Production.",
            description: "We deliver a high volume of A/B test-ready video creatives, meticulously crafted with dynamic motion graphics and optimized for social formats. Our process includes rapid iteration on hooks, CTAs, visuals, and messaging to find what truly resonates.",
            listItems: [
              "High-volume video ad variations for Meta, TikTok, YouTube",
              "Direct response & UGC-style ad creation",
              "Engaging motion graphics & animation",
              "Localization & adaptation for diverse audiences",
            ],
          },
          benefit: {
            icon: 'Lightbulb',
            title: "Benefit: Lower CPAs, Higher ROAS, and Scalable Campaigns.",
            description: "Consistently feed your ad platforms with optimized video creatives that convert viewers into customers, maximizing your return on ad spend and enabling sustainable campaign growth.",
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
            description: "Your SaaS product is powerful, but users drop off during onboarding. Your B2B solution is industry-leading, but prospects don't grasp its full value quickly. Your company culture is amazing, but you struggle to attract top talent.",
          },
          solution: {
            icon: 'Film',
            title: "Solution: Clear, Compelling Video Narratives.",
            description: "We craft engaging brand films that build trust and connection, and crystal-clear explainer videos that simplify complex concepts with polished editing and professional color correction. Our videos articulate your value proposition effectively.",
             listItems: [
              "Animated & live-action explainer videos",
              "SaaS product demo & tutorial videos",
              "Corporate brand films & company stories",
              "Testimonial & case study videos with expert finalization",
            ],
          },
          benefit: {
            icon: 'Lightbulb',
            title: "Benefit: Increased Conversions, Better User Retention, Stronger Brand.",
            description: "Drive higher trial-to-paid conversion rates with effective explainers. Attract and retain top talent with compelling brand stories. Close larger enterprise deals by clearly showcasing your unique value.",
          },
          cta: 'Tell Your Story Effectively',
          ctaLink: '#contact',
        },
        {
          icon: 'Users',
          title: 'White-Label Post-Production for Agencies',
          problem: {
            icon: 'AlertTriangle',
            title: "Problem: Post-Production Bottlenecks & Scaling Pains?",
            description: "Your agency is growing, but your in-house video team is stretched thin. You're turning down projects or sacrificing quality in motion graphics, color correction, and finalization to meet deadlines.",
          },
          solution: {
            icon: 'Film',
            title: "Solution: Your Trusted, Invisible Post-Production Arm.",
            description: "VertexMedia acts as your dedicated white-label partner. We seamlessly integrate with your team, handling everything from editing and motion graphics to color correction and final delivery, all under your brand. You manage the client, we manage the pixels with expertise in all social formats.",
            listItems: [
              "Full-service video editing & assembly",
              "Advanced motion graphics, VFX & 2D/3D animation",
              "Professional color grading & sound design",
              "Version control & asset management for social media campaigns",
            ],
          },
          benefit: {
            icon: 'Lightbulb',
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
          // categoryTitle: 'Featured Projects', // Not using sub-categories for EN as per brief's examples
          cases: [
            {
              title: 'SaaS Co. Onboarding Video Series',
              client: 'B2B SaaS Platform',
              challenge: "Experienced a 40% user drop-off within the first week of trial, primarily due to product complexity during onboarding.",
              ourSolution: "We produced a series of 7 short, engaging tutorial videos (average 90 seconds) integrated directly into their platform's onboarding flow, guiding users through key features with clear visuals and motion graphics.",
              result: "+30% user retention after the first week; -25% support tickets related to onboarding; 15% increase in trial-to-paid conversion.",
              imageUrl: 'https://placehold.co/600x338/3F51B5/FFFFFF', imageHint: 'saas onboarding video', tags: ["SaaS", "Explainer Video", "User Retention"]
            },
            {
              title: 'Performance Marketing Agency Ad Creative Overhaul',
              client: 'D2C E-commerce Brand (via Agency)',
              challenge: "Client in the D2C space was seeing CPA increase by 15% month-over-month due to creative fatigue on Meta and TikTok.",
              ourSolution: "VertexMedia delivered 20+ unique video ad variations (UGC-style, animated, direct response) within a 2-week sprint for A/B testing, focusing on new hooks and benefit-driven messaging, optimized for each platform.",
              result: "Average CPA reduced by 18% across campaigns; ROAS increased by 1.2x; Client scaled ad spend by 40% while maintaining profitability.",
              imageUrl: 'https://placehold.co/600x338/FFB300/333333', imageHint: 'ad creative performance', tags: ["Performance Marketing", "A/B Testing", "Social Ads"]
            },
             {
              title: 'Tech Startup Employer Branding Film',
              client: 'Fast-Growing Tech Innovator',
              challenge: "Needed to attract senior engineering talent in a competitive market but struggled to convey its unique culture and mission.",
              ourSolution: "We created a compelling 3-minute brand film showcasing employee stories, the company's innovative work environment, and its impactful vision, used across their careers page and LinkedIn. The film featured high-quality cinematography and color correction.",
              result: "200% increase in qualified applications for senior roles; Positive feedback on company culture from candidates; Used as a sales tool for B2B enterprise deals.",
              imageUrl: 'https://placehold.co/600x338/1A1A2E/EEEEEE', imageHint: 'employer branding film', tags: ["Brand Storytelling", "Recruitment", "Tech"]
            }
            // Can add one more EN case study if needed, or keep it at 3 for a clean row.
          ],
        },
      ],
      portfolioCta: 'Discuss Your Project', // CTA more aligned with "Book a Call"
    },
    about: {
      mainTitle: 'Your Strategic Partner for <highlight class="text-primary">Global Video Production Excellence</highlight>', // Using Primary color for highlight
      description: 'VertexMedia isn\'t just another video production house. We are a team of creative strategists and technical wizards in motion graphics, color correction, and video finalization, dedicated to helping US-based businesses achieve their marketing and communication goals. We understand the speed of business and the need for content that performs.',
      imageUrl: 'https://placehold.co/600x400/1A1A2E/FFFFFF', // Darker, tech-focused image
      imageHint: 'global collaboration video production',
      ourEdge: { // "Our Edge" section for EN
        title: 'Our Edge: <gradient>Seamless Remote Collaboration & Timezone Power</gradient>',
        remoteCollaboration: {
          title: 'Expertise in Remote Workflows',
          description: 'We are built for remote collaboration. Our processes are streamlined using industry-standard tools (Frame.io, Slack, Asana/Notion) to ensure smooth communication, efficient feedback loops, and on-time delivery for all your video projects, no matter where you are.',
          tools: ["Frame.io for Reviews", "Slack for Comms", "Asana/Notion for PM"],
        },
        timezoneAdvantage: {
          title: 'The "Overnight" Advantage: Your 24/7 Production Cycle',
          description: "Leverage our unique timezone advantage. As your strategic partner based in Brazil, we operate while you sleep. Send us your footage or brief at the end of your US business day (EST/PST), and wake up to a first draft or significant progress in your inbox. We turn global timezones into your competitive edge, accelerating your production cycle and keeping your projects moving around the clock.",
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
      formSubmit: 'Book Your Free Discovery Call', // CTA from brief
      successMessage: 'Thanks! Your call request is confirmed. We\'ll be in touch shortly with details.',
      errorMessage: 'Booking failed. Please try again or email us directly.',
      contactDirectly: 'Or email us at:', // Simpler for EN
      email: 'hello@vertexmedia.io', // .io more common for tech/US
      // Phone might be less relevant if pushing for calls via form
    },
    footer: {
      navLinks: {
        // No 'Home'
        solutions: 'Solutions',
        work: 'Work',
        aboutUs: 'About Us',
        contact: 'Book a Call', // Consistent with header CTA
      },
      socialMedia: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
      rights: '© {year} VertexMedia. All Rights Reserved.',
      credits: 'Firebase Studio Build. Images via Placehold.co.', // Simplified
    },
  },
};

export const getLang = (locale: Locale): Translations => translations[locale];

// Helper function to render text with <highlight class="..."></highlight> and <gradient></gradient> tags
export const renderHighlightedText = (text: string | undefined, defaultHighlightClass?: string, gradientClassParam?: string) => {
  if (!text) return '';

  // Regex to find <highlight class="custom-class">content</highlight> or <highlight>content</highlight>
  const highlightPattern = /<highlight(?: class="([^"]+)")?>(.*?)<\/highlight>/g;
  const gradientPattern = /<gradient>(.*?)<\/gradient>/g;

  let processedText = text;

  // Process highlights first
  processedText = processedText.replace(highlightPattern, (match, customClass, content) => {
    const highlightClass = customClass || defaultHighlightClass || 'text-primary font-semibold'; // Default if no class in tag and no param
    return `<span class="${highlightClass}">${content}</span>`;
  });

  // Process gradients
  const defaultGradientClass = gradientClassParam || 'gradient-text'; // Use param if provided, else default
  processedText = processedText.replace(gradientPattern, (match, content) => {
    return `<span class="${defaultGradientClass}">${content}</span>`;
  });

  return processedText;
};
