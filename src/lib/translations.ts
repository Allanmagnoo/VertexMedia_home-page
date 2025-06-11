
export type Locale = 'en' | 'pt';

// Generic type for card-like content in services, for-whom, etc.
export type DetailCardContent = {
  icon?: string; // lucide-react icon name
  title: string;
  description: string;
  listItems?: string[];
  cta?: string;
  ctaLink?: string;
  imageUrl?: string;
  imageHint?: string;
};

export type CaseStudy = {
  title: string;
  client?: string; // For EN version, was in previous iteration
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type CaseStudyCategory = {
  categoryTitle: string;
  cases: CaseStudy[];
};

export type Translations = {
  appName: string;
  nav: {
    home: string;
    solutions: string;
    forWhom: string;
    cases: string;
    about?: string; // Sobre Nós is in referencia, but not a primary nav item
    contact: string;
    contactCta: string;
  };
  hero: {
    mainImageUrl: string;
    mainImageHint: string;
    title: string;
    subtitle: string; // h2 in referencia
    description: string; // p in referencia
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problemStatement: { // Section: "Problema que Você Resolve"
    title: string;
    description: string;
    cta: string;
  };
  solutions: { // Section: "Nossas Soluções"
    mainTitle: string;
    cards: DetailCardContent[];
  };
  forWhom: { // Section: "Para Quem"
    mainTitle: string;
    tabs: Array<{
      tabName: string;
      content: DetailCardContent;
    }>;
  };
  caseStudies: { // Section: "Cases de Sucesso"
    mainTitle: string;
    categories: CaseStudyCategory[];
    portfolioCta: string;
  };
  about: { // Section: "Sobre Nós"
    mainTitle: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    keyPoints: Array<{
      icon: string; // lucide-react icon name
      title: string;
      text: string;
    }>;
  };
  contact: {
    mainTitle: string;
    description: string;
    formName: string;
    formEmail: string;
    formCompany?: string; // Kept from previous, useful
    formMessage: string;
    formSubmit: string;
    successMessage: string;
    errorMessage: string;
    contactDirectly: string;
    phone: string;
    email: string;
  };
  footer: {
    navLinks: {
      home: string;
      solutions: string;
      cases: string;
      contact: string;
    };
    socialMedia: {
      facebook: string;
      instagram: string;
      linkedin: string;
    };
    rights: string;
    credits: string; // "Design por Gemini. Imagens de Placehold.co."
  };
};

export const translations: Record<Locale, Translations> = {
  pt: {
    appName: "1#mensband", // From referencia.html <title> and logo
    nav: {
      home: 'Início',
      solutions: 'Nossas Soluções',
      forWhom: 'Para Quem',
      cases: 'Cases',
      contact: 'Contato',
      contactCta: 'Fale Conosco',
    },
    hero: {
      mainImageUrl: "https://placehold.co/500x250/1F2937/9CA3AF", // Placeholder dimensions from ref
      mainImageHint: "ilustracao principal",
      title: '1#mensband: Seu Braço Audiovisual <gradient>Inovador</gradient>',
      subtitle: 'Vídeos que Elevam sua Marca.',
      description: 'Suporte audiovisual criativo e técnico para agências, produtores e empresas. Transformamos ideias em vídeos de alto impacto.',
      ctaPrimary: 'Fale com um Especialista',
      ctaSecondary: 'Nossas Soluções',
    },
    problemStatement: {
      title: 'Necessita de um Parceiro Audiovisual que Entenda Seus <highlight>Desafios Criativos e Técnicos</highlight>?',
      description: 'Produzir vídeos de qualidade, em múltiplos formatos e volumes, mantendo a criatividade e a eficiência, é nosso foco. A 1#mensband está aqui para ser seu suporte audiovisual completo, desde a concepção até a entrega final.',
      cta: 'Descubra Nossas Capacidades',
    },
    solutions: {
      mainTitle: 'Soluções em Vídeo Sob Medida para Seus <gradient>Objetivos</gradient>',
      cards: [
        {
          icon: 'Sparkles', // Mapped from SVG "Rocket/Idea"
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
          icon: 'Settings2', // Mapped from SVG "Gears/Tools"
          title: 'Pós-Produção e Finalização',
          listItems: [
            'Edição Profissional (Entrevistas, VSLs)',
            'Correção de Cor e Tratamento de Imagem',
            'Motion Graphics e Animações Criativas',
            'Finalização e Otimização Multiplataforma',
          ],
          cta: 'Ver Detalhes',
          ctaLink: '#contact', // Or a specific sub-page if existed
        },
        {
          icon: 'Users', // Mapped from SVG "User/Partnership"
          title: 'Seu Braço Audiovisual',
          listItems: [
            'Parceria Estratégica com Agências',
            'Suporte Técnico para Produtores',
            'Consultoria em Vídeo Marketing',
            'Flexibilidade e Atendimento Personalizado',
          ],
          cta: 'Para Quem Servimos',
          ctaLink: '#for-whom',
        },
      ],
    },
    forWhom: {
      mainTitle: 'O Suporte Audiovisual Ideal para <highlight>Cada Parceiro</highlight>',
      tabs: [
        {
          tabName: 'Para Agências',
          content: {
            imageUrl: 'https://placehold.co/400x300/1F2937/60A5FA',
            imageHint: 'parceria agencias',
            title: 'Agências: Potencializem Suas Entregas',
            description: 'Seu departamento audiovisual externo de confiança. Entregamos vídeos de alta qualidade que se alinham às estratégias dos seus clientes, com agilidade e foco em resultados para suas campanhas.',
            cta: 'Vamos Conversar',
            ctaLink: '#contact',
          },
        },
        {
          tabName: 'Para Produtores',
          content: {
            imageUrl: 'https://placehold.co/400x300/1F2937/C084FC',
            imageHint: 'suporte produtores',
            title: 'Produtores: Expandam Seus Horizontes',
            description: 'Suporte especializado em pós-produção (edição, cor, motion), permitindo que você foque no seu core business e atenda projetos mais complexos e de maior escala.',
            cta: 'Seja um Parceiro',
            ctaLink: '#contact',
          },
        },
        {
          tabName: 'Para Empresas',
          content: {
            imageUrl: 'https://placehold.co/400x300/1F2937/34D399',
            imageHint: 'solucoes empresas',
            title: 'Empresas: Comunicação Visual de Impacto',
            description: 'Criamos vídeos institucionais, para marketing, varejo, e-commerce e setor imobiliário, fortalecendo sua marca e ajudando a atingir seus objetivos de comunicação com criatividade e profissionalismo.',
            cta: 'Solicite um Orçamento',
            ctaLink: '#contact',
          },
        },
      ],
    },
    caseStudies: {
      mainTitle: 'Nossos Cases em Destaque: <gradient>Resultados Visíveis</gradient>',
      categories: [
        {
          categoryTitle: 'Cases de Varejo',
          cases: [
            { title: 'Campanha de Lançamento - E-commerce Fashion', description: 'Produção de série de vídeos curtos e dinâmicos para redes sociais, destacando nova coleção e impulsionando tráfego para o site.', imageUrl: 'https://placehold.co/600x338/111827/60A5FA', imageHint: 'varejo fashion' },
            { title: 'Vídeos de Produto - Loja de Eletrônicos', description: 'Criação de vídeos demonstrativos para os principais produtos, melhorando a experiência do cliente e aumentando a conversão na página de produto.', imageUrl: 'https://placehold.co/600x338/111827/60A5FA', imageHint: 'varejo eletronicos' },
          ],
        },
        {
          categoryTitle: 'Cases Institucionais',
          cases: [
            { title: 'Vídeo Manifesto - Startup de Tecnologia', description: 'Desenvolvimento de vídeo conceitual para apresentar a missão e os valores da empresa, fortalecendo a marca empregadora.', imageUrl: 'https://placehold.co/600x338/111827/C084FC', imageHint: 'institucional startup' },
          ],
        },
        {
          categoryTitle: 'Cases de Performance',
          cases: [
            { title: 'Criativos para Anúncios - SaaS', description: 'Produção de um grande volume de variações de vídeos curtos para testes A/B em campanhas de Google Ads e Facebook Ads, otimizando o CPA.', imageUrl: 'https://placehold.co/600x338/111827/2DD4BF', imageHint: 'performance saas' },
          ],
        },
        {
          categoryTitle: 'Cases Imobiliários',
          cases: [
            { title: 'Tour Virtual - Lançamento de Condomínio', description: 'Criação de vídeo imersivo apresentando o empreendimento, com tomadas aéreas e destaque para os diferenciais, acelerando as vendas na planta.', imageUrl: 'https://placehold.co/600x338/111827/FBBF24', imageHint: 'imobiliario tour' },
          ],
        },
      ],
      portfolioCta: 'Ver Portfólio Completo',
    },
    about: {
      mainTitle: '1#mensband: Criatividade e Técnica <highlight>a Serviço da Sua Marca</highlight>',
      description: 'Somos mais que uma produtora: somos parceiros estratégicos que unem paixão por audiovisual com expertise técnica para entregar soluções que realmente fazem a diferença.',
      imageUrl: 'https://placehold.co/600x400/111827/9CA3AF',
      imageHint: 'sobre nos equipe',
      keyPoints: [
        { icon: 'Briefcase', title: 'Expertise Completa', text: 'Da concepção à finalização, cobrimos todas as etapas do seu projeto audiovisual.' },
        { icon: 'Cpu', title: 'Processos Inteligentes', text: 'Fluxos de trabalho otimizados para entregas ágeis e com a máxima qualidade.' },
        { icon: 'Waypoints', title: 'Colaboração Transparente', text: 'Trabalhamos lado a lado com você, com comunicação clara e foco nos seus objetivos.' },
      ],
    },
    contact: {
      mainTitle: 'Pronto para Dar o Próximo Passo com a <highlight>1#mensband</highlight>?',
      description: 'Vamos transformar suas ideias em vídeos memoráveis. Entre em contato e descubra como podemos colaborar.',
      formName: 'Nome Completo',
      formEmail: 'E-mail',
      formCompany: 'Empresa (Opcional)',
      formMessage: 'Como podemos ajudar?',
      formSubmit: 'Enviar Mensagem',
      successMessage: 'Mensagem enviada com sucesso!',
      errorMessage: 'Falha ao enviar mensagem. Tente novamente.',
      contactDirectly: 'Ou entre em contato por:',
      phone: '(00) 99999-9999',
      email: 'contato@1mensband.com',
    },
    footer: {
      navLinks: {
        home: 'Início',
        solutions: 'Soluções',
        cases: 'Cases',
        contact: 'Contato',
      },
      socialMedia: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
      rights: '© {year} 1#mensband. Todos os direitos reservados.',
      credits: 'Imagens de Placehold.co.',
    },
  },
  en: {
    appName: "1#mensband", // For consistency with PT, though PRD says VertexMedia.
    nav: {
      home: 'Home',
      solutions: 'Our Solutions',
      forWhom: 'For Whom',
      cases: 'Cases',
      contact: 'Contact',
      contactCta: 'Contact Us',
    },
    hero: {
      mainImageUrl: "https://placehold.co/500x250/1F2937/9CA3AF",
      mainImageHint: "main illustration",
      title: '1#mensband: Your <gradient>Innovative</gradient> Audiovisual Arm',
      subtitle: 'Videos that Elevate Your Brand.',
      description: 'Creative and technical audiovisual support for agencies, producers, and companies. We transform ideas into high-impact videos.',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'Our Solutions',
    },
    problemStatement: {
      title: 'Need an Audiovisual Partner Who Understands Your <highlight>Creative and Technical Challenges</highlight>?',
      description: 'Producing quality videos, in multiple formats and volumes, while maintaining creativity and efficiency, is our focus. 1#mensband is here to be your complete audiovisual support, from conception to final delivery.',
      cta: 'Discover Our Capabilities',
    },
    solutions: {
      mainTitle: 'Tailored Video Solutions for Your <gradient>Objectives</gradient>',
      cards: [
        {
          icon: 'Sparkles',
          title: 'Creation and Production',
          listItems: [
            'Institutional and Corporate Videos',
            'Creatives for Social Media (high volume)',
            'Personalized and Recurring Videos (Flights)',
            'Adaptations for Performance Campaigns',
          ],
          cta: 'Request Proposal',
          ctaLink: '#contact',
        },
        {
          icon: 'Settings2',
          title: 'Post-Production and Finishing',
          listItems: [
            'Professional Editing (Interviews, VSLs)',
            'Color Correction and Image Treatment',
            'Motion Graphics and Creative Animations',
            'Finishing and Multiplatform Optimization',
          ],
          cta: 'View Details',
          ctaLink: '#contact',
        },
        {
          icon: 'Users',
          title: 'Your Audiovisual Arm',
          listItems: [
            'Strategic Partnership with Agencies',
            'Technical Support for Producers',
            'Video Marketing Consultancy',
            'Flexibility and Personalized Service',
          ],
          cta: 'Who We Serve',
          ctaLink: '#for-whom',
        },
      ],
    },
    forWhom: {
      mainTitle: 'The Ideal Audiovisual Support for <highlight>Each Partner</highlight>',
      tabs: [
        {
          tabName: 'For Agencies',
          content: {
            imageUrl: 'https://placehold.co/400x300/1F2937/60A5FA',
            imageHint: 'agency partnership',
            title: 'Agencies: Enhance Your Deliveries',
            description: 'Your trusted external audiovisual department. We deliver high-quality videos aligned with your clients\' strategies, with agility and a focus on results for your campaigns.',
            cta: "Let's Talk",
            ctaLink: '#contact',
          },
        },
        {
          tabName: 'For Producers',
          content: {
            imageUrl: 'https://placehold.co/400x300/1F2937/C084FC',
            imageHint: 'producer support',
            title: 'Producers: Expand Your Horizons',
            description: 'Specialized support in post-production (editing, color, motion), allowing you to focus on your core business and handle more complex and larger-scale projects.',
            cta: 'Become a Partner',
            ctaLink: '#contact',
          },
        },
        {
          tabName: 'For Companies',
          content: {
            imageUrl: 'https://placehold.co/400x300/1F2937/34D399',
            imageHint: 'company solutions',
            title: 'Companies: High-Impact Visual Communication',
            description: 'We create institutional videos for marketing, retail, e-commerce, and real estate, strengthening your brand and helping you achieve your communication goals with creativity and professionalism.',
            cta: 'Request a Quote',
            ctaLink: '#contact',
          },
        },
      ],
    },
    caseStudies: {
      mainTitle: 'Our Featured Cases: <gradient>Visible Results</gradient>',
      categories: [
        {
          categoryTitle: 'Retail Cases',
          cases: [
            { title: 'Launch Campaign - E-commerce Fashion', description: 'Production of a series of short and dynamic videos for social media, highlighting a new collection and driving traffic to the site.', imageUrl: 'https://placehold.co/600x338/111827/60A5FA', imageHint: 'retail fashion' },
            { title: 'Product Videos - Electronics Store', description: 'Creation of demonstrative videos for key products, improving customer experience and increasing conversion on the product page.', imageUrl: 'https://placehold.co/600x338/111827/60A5FA', imageHint: 'retail electronics' },
          ],
        },
        {
          categoryTitle: 'Institutional Cases',
          cases: [
            { title: 'Manifesto Video - Tech Startup', description: 'Development of a conceptual video to present the company\'s mission and values, strengthening the employer brand.', imageUrl: 'https://placehold.co/600x338/111827/C084FC', imageHint: 'institutional startup' },
          ],
        },
        {
          categoryTitle: 'Performance Cases',
          cases: [
            { title: 'Ad Creatives - SaaS', description: 'Production of a large volume of short video variations for A/B testing in Google Ads and Facebook Ads campaigns, optimizing CPA.', imageUrl: 'https://placehold.co/600x338/111827/2DD4BF', imageHint: 'performance saas' },
          ],
        },
        {
          categoryTitle: 'Real Estate Cases',
          cases: [
            { title: 'Virtual Tour - Condominium Launch', description: 'Creation of an immersive video presenting the development, with aerial shots and highlighting differentials, accelerating pre-construction sales.', imageUrl: 'https://placehold.co/600x338/111827/FBBF24', imageHint: 'real estate tour' },
          ],
        },
      ],
      portfolioCta: 'View Full Portfolio',
    },
    about: {
      mainTitle: '1#mensband: Creativity and Technique <highlight>at Your Brand\'s Service</highlight>',
      description: 'We are more than a production company: we are strategic partners who unite a passion for audiovisuals with technical expertise to deliver solutions that truly make a difference.',
      imageUrl: 'https://placehold.co/600x400/111827/9CA3AF',
      imageHint: 'about us team',
      keyPoints: [
        { icon: 'Briefcase', title: 'Complete Expertise', text: 'From conception to finalization, we cover all stages of your audiovisual project.' },
        { icon: 'Cpu', title: 'Intelligent Processes', text: 'Optimized workflows for agile deliveries with maximum quality.' },
        { icon: 'Waypoints', title: 'Transparent Collaboration', text: 'We work side by side with you, with clear communication and focus on your goals.' },
      ],
    },
    contact: {
      mainTitle: 'Ready to Take the Next Step with <highlight>1#mensband</highlight>?',
      description: 'Let\'s transform your ideas into memorable videos. Get in touch and discover how we can collaborate.',
      formName: 'Full Name',
      formEmail: 'Email',
      formCompany: 'Company (Optional)',
      formMessage: 'How can we help?',
      formSubmit: 'Send Message',
      successMessage: 'Message sent successfully!',
      errorMessage: 'Failed to send message. Please try again.',
      contactDirectly: 'Or contact us via:',
      phone: '+1 (000) 000-0000', // Placeholder for US
      email: 'contact@1mensband.com',
    },
    footer: {
      navLinks: {
        home: 'Home',
        solutions: 'Solutions',
        cases: 'Cases',
        contact: 'Contact',
      },
      socialMedia: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
      rights: '© {year} 1#mensband. All rights reserved.',
      credits: 'Images by Placehold.co.',
    },
  },
};

export const getLang = (locale: Locale): Translations => translations[locale];

// Helper function to render text with <highlight> and <gradient> tags
export const renderHighlightedText = (text: string | undefined, highlightClass?: string, gradientClass?: string) => {
  if (!text) return '';
  
  const highlightPattern = /<highlight>(.*?)<\/highlight>/g;
  const gradientPattern = /<gradient>(.*?)<\/gradient>/g;

  let processedText = text;

  if (highlightClass) {
    processedText = processedText.replace(highlightPattern, `<span class="${highlightClass}">$1</span>`);
  } else {
     // Default highlight colors if none provided
    processedText = processedText.replace(highlightPattern, (match, p1, offset) => {
      const dynamicHighlightClass = (Math.floor(offset / 20)) % 2 === 0 ? "text-primary" : "text-secondary"; // Example logic
      return `<span class="${dynamicHighlightClass} font-semibold">$1</span>`;
    });
  }
  
  if (gradientClass) {
    processedText = processedText.replace(gradientPattern, `<span class="${gradientClass}">$1</span>`);
  } else {
    // Default gradient class
    processedText = processedText.replace(gradientPattern, `<span class="gradient-text">$1</span>`);
  }

  return processedText;
};
