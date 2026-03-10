// ============================================================
// CONTENT.JS — ARQUIVO CENTRAL DE CONFIGURAÇÃO
// Troque aqui TODAS as imagens, vídeos, cores, fontes,
// textos, logos e links. Todo o site puxa daqui.
// ============================================================

// ------ DESIGN TOKENS (Cores, Fontes, Espaçamentos) ------
export const THEME = {
    colors: {
        background: '#000000',
        surface: '#0A0A0A',
        surfaceLight: '#111111',
        cardBg: 'rgba(255, 255, 255, 0.03)',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        textPrimary: '#FFFFFF',
        textSecondary: '#A1A1A1',
        textMuted: '#666666',
        accent: '#FC0000',          // Cor de destaque principal (teal)
        accentHover: '#25C4AB',
        accentGlow: 'rgba(45, 226, 197, 0.15)',
        gradientStart: '#FC0000',
        gradientEnd: '#1A8FE3',
        divider: 'rgba(255, 255, 255, 0.06)',
        // Novas Cores de Plataformas
        amazonBlue: '#0066cc',
        mercadoLivreYellow: '#fff159',
        shopeeOrange: '#FF5722',
        whatsappGreen: '#25D366',
    },
    fonts: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        mono: "'JetBrains Mono', 'Fira Code', monospace",
        googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
    },
    borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        full: '9999px',
    },
    transitions: {
        fast: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        default: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        spring: '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
};

// ------ IMAGENS E MÍDIA ------
export const MEDIA = {
    logo: '',                    // Deixe vazio para usar o placeholder de texto no Header
    logoLight: '',
    favicon: '/images/favicon.png',
    heroPortrait: '/images/hero-portrait.png',    // Foto do Marcelo (fundo transparente PNG)
    heroVideo: '',                                // Vídeo de fundo do Hero (deixe vazio para não usar)
    aboutImage: '/images/about.jpg',              // Imagem da seção Sobre
    ogImage: '/images/og-image.jpg',              // Imagem para compartilhamento em redes sociais
    // Adicione quantas imagens quiser aqui:
    gallery: [
        '/images/gallery-1.jpg',
        '/images/gallery-2.jpg',
        '/images/gallery-3.jpg',
    ],
    // Ícones de plataformas (usados nos cards de resultados)
    platformIcons: {
        amazon: '/images/icons/amazon.svg',
        mercadoLivre: '/images/icons/mercado-livre.svg',
        shopee: '/images/icons/shopee.svg',
    },
};

// ------ TEXTOS DO SITE ------
export const CONTENT = {
    // SEO & Meta
    seo: {
        title: 'Marcelo Treze — Estrategista de E-commerce Piracicaba',
        description: 'Estrategista de e-commerce e especialista em FBA na região de Piracicaba e interior de SP. Estruturação e escalabilidade de operações em Marketplaces.',
        keywords: 'e-commerce Piracicaba, FBA Piracicaba, Amazon interior SP, Mercado Livre, consultoria marketplace Piracicaba, escalar vendas, DBA',
    },

    // Header / Navegação
    nav: {
        brand: 'MARCELO TREZE',
        links: [
            { label: 'Início', href: '#hero' },
            { label: 'Sobre', href: '#about' },
            { label: 'Expertise', href: '#expertise' },
            { label: 'Resultados', href: '#results' },
            { label: 'Método', href: '#method' },
        ],
        ctaButton: {
            label: 'Falar com Marcelo',
            href: '#contact',
        },
    },

    // Hero Section
    hero: {
        topLabel: 'ESTRATEGISTA DE E-COMMERCE',
        mainTitle: 'MARCELO TREZE',
        subtitle: 'Estrategista de E-commerce & Marketplaces',
        description: 'Transformando empresas tradicionais em operações de e-commerce de alta performance nos maiores marketplaces do Brasil.',
        ctaButton: {
            label: 'Iniciar Transformação',
            href: '#contact',
        },
        secondaryButton: {
            label: 'Conhecer o Método',
            href: '#method',
        },
        // Configurações de Design do Hero
        settings: {
            marqueeSpeed: '400s',      // Mais lento ainda
            marqueeLetterSpacing: '0.2em', // Letras mais espaçadas
            marqueeFontSize: 'clamp(6rem, 18vw, 16rem)', // Diminuído um pouco
            imagePosition: 'center center', // Centralizado na web
            imageGrayscale: '15%',
        },
        // Texto que aparece nos cantos do Hero
        locationTag: 'BRASIL',
        scrollIndicator: 'SCROLL',
    },

    // Seção Sobre (About / Welcome)
    about: {
        sectionLabel: 'SOBRE',
        headline: 'Quem é Marcelo Treze',
        paragraphs: [
            'Estrategista de e-commerce especializado na estruturação e escalabilidade de operações em marketplaces como Amazon e Mercado Livre, com foco em FBA e modelos logísticos profissionais.',
            'Ao longo da minha trajetória, ajudei empresas e lojistas a transformarem o digital em uma frente estratégica real de crescimento e a saírem da improvisação rumo a operações organizadas, previsíveis e lucrativas.',
            'Meu trabalho não é sobre vender produtos online. É sobre construir uma operação estruturada, com processos claros, posicionamento competitivo e visão de longo prazo dentro dos marketplaces.',
            'Atuo diretamente com negócios que já possuem estrutura e desejam profissionalizar o e-commerce para escalar com segurança e consistência.',
            'Se a sua empresa quer parar de testar o digital e começar a tratá-lo como um braço estratégico de expansão, você está no lugar certo.',
        ],
        // Palavras que serão destacadas com a cor accent dentro dos parágrafos acima
        highlightWords: ['Amazon', 'Mercado Livre', 'FBA', 'operações organizadas', 'estratégico', 'escalar'],
    },

    // Seção Expertise (Superpowers)
    expertise: {
        sectionLabel: 'EXPERTISE',
        headline: 'Pilares da Operação',
        items: [
            {
                title: 'Logística Amazon',
                description: 'Implementação de modelos logísticos Amazon (FBA, DBA, CSBA). Analisamos juntos qual a melhor estratégia para o seu modelo de negócio, garantindo máxima performance e Buy Box.',
                tags: ['FBA', 'DBA', 'CSBA', 'Logística Premium'],
                platform: 'amazon'
            },
            {
                title: 'Mercado Livre Full',
                description: 'Estruturação profissional de contas para o modelo Full e Envios. Foco em anúncios otimizados, gestão de reputação e escala sustentável no maior player da América Latina.',
                tags: ['Mercado Envios Full', 'Anúncios Premium', 'Reputação Gold'],
                platform: 'mercadoLivre'
            },
            {
                title: 'Estratégia Multicanal',
                description: 'Expansão estratégica para canais complementares como Shopee, orientada a marca, controle de estoque centralizado e crescimento real de volume.',
                tags: ['Shopee', 'Diversificação', 'Volume de Vendas'],
                platform: 'shopee'
            },
            {
                title: 'Gestão & Processos',
                description: 'Profissionalização total: organização de catálogo, precificação estratégica fundamentada em dados, e controle operacional previsível.',
                tags: ['Métricas', 'Precificação', 'Estoque', 'Processos'],
            },
        ],
    },

    // Results Section (Números e Prova Social)
    results: {
        sectionLabel: 'RESULTADOS',
        headline: 'Números Que Falam',
        stats: [
            { value: '112+', label: 'Empresas Assessoradas', suffix: '' },
            { value: '8M+', label: 'Em Vendas Geradas', suffix: 'R$' },
            { value: '3', label: 'Plataformas Dominadas', suffix: '' },
            { value: '40%', label: 'Média de Crescimento', suffix: '' },
        ],
        // Cards de depoimentos/cases
        testimonials: [
            {
                quote: 'O Marcelo transformou nossa operação. Saímos de zero no digital para faturar 6 dígitos mensais na Amazon em menos de 6 meses.',
                author: 'Encicãopédia',
                role: 'CEO, Lucas Piva',
                image: '/images/testimonial-1.jpg',
            },
            {
                quote: 'A consultoria mudou completamente o rumo da nossa empresa no e-commerce. Processos claros, resultados previsíveis.',
                author: 'Harmonia Store',
                role: 'Gestor de Operações, Robson Fonseca',
                image: '/images/testimonial-2.jpg',
            },
        ],
    },

    // Method / Scale Section
    method: {
        sectionLabel: 'MÉTODO',
        headline: 'Transformação Para Escala',
        description: 'A jornada que leva sua empresa de uma operação improvisada para um braço estratégico de expansão digital.',
        steps: [
            {
                phase: '01',
                title: 'Diagnóstico',
                description: 'Análise profunda do negócio, mix de produtos e estrutura operacional para identificar gargalos e oportunidades.',
            },
            {
                phase: '02',
                title: 'Estruturação',
                description: 'Padronização de anúncios, precificação estratégica e organização de processos internos.',
            },
            {
                phase: '03',
                title: 'Logística Avançada',
                description: 'Implementação de modelos profissionais (FBA, Full, DBA) para garantir competitividade e agilidade.',
            },
            {
                phase: '04',
                title: 'Escala & Performance',
                description: 'Crescimento previsível através de otimização contínua, leitura de métricas e expansão de catálogo.',
            },
        ],
        // Comparativo visual
        comparison: {
            before: {
                title: 'Operação Improvisada',
                points: ['Logística manual', 'Estoque parado', 'Vendas imprevisíveis', 'Sem processos', 'Margem apertada'],
            },
            after: {
                title: 'Braço Estratégico',
                points: ['Logística profissional', 'Giro de estoque ágil', 'Vendas previsíveis', 'Processos claros', 'Escalabilidade real'],
            },
        },
    },

    // CTA / Contact Section
    contact: {
        sectionLabel: 'CONTATO',
        headline: "VAMOS ESTRUTURAR\nSEU CRESCIMENTO",
        description: 'Pronto para profissionalizar sua operação e escalar com segurança? Entre em contato agora.',
        form: {
            faturamentoLabel: 'Qual seu faturamento mensal atual?',
            faturamentoOptions: ['Até 10k', '10k - 50k', '50k+'],
            ondeVendeLabel: 'Você vende em:',
            ondeVendeOptions: ['Loja Física', 'Marketplace', 'Ambos'],
            gargaloLabel: 'Qual sua principal dificuldade hoje?',
            gargaloPlaceholder: 'Ex: Logística, tráfego, gestão...',
            submitButton: 'Finalizar no WhatsApp',
            validationErrorMessage: 'Por favor, preencha todos os campos antes de continuar.',
            whatsappTemplate: 'Olá, quero aplicar para a consultoria.\n\nMeu faturamento atual é: {faturamento}\nEu vendo em: {ondeVende}\nMinha principal dificuldade é: {gargalo}',
        },
        ctaButton: {
            label: 'Aplicar Para Consultoria',
            href: 'https://wa.me/5519971359913', // Link do WhatsApp
        },
        email: 'treze@marcelotreze.com',
        phone: '+55 19 97135-9913',
    },

    // Footer
    footer: {
        brand: 'MARCELO TREZE',
        tagline: 'Estrategista de E-commerce & Marketplaces',
        copyright: `© ${new Date().getFullYear()} Marcelo Treze. Todos os direitos reservados.`,
        social: [
            { platform: 'Instagram', url: 'https://www.instagram.com/eutreze_', icon: 'instagram' },
            { platform: 'YouTube', url: 'https://www.youtube.com/@MtrezeAmazon', icon: 'youtube' },

        ],
        links: [
        ],
    },
};
