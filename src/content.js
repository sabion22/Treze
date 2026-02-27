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
        accent: '#2DE2C5',          // Cor de destaque principal (teal)
        accentHover: '#25C4AB',
        accentGlow: 'rgba(45, 226, 197, 0.15)',
        gradientStart: '#2DE2C5',
        gradientEnd: '#1A8FE3',
        divider: 'rgba(255, 255, 255, 0.06)',
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
    logo: '/images/logo.png',                    // Logo principal
    logoLight: '/images/logo-light.png',          // Logo versão clara (se houver)
    favicon: '/images/favicon.ico',
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
        title: 'Marcelo Treze — Estrategista de E-commerce FBA',
        description: 'Mentor e estrategista de e-commerce. Estruturação de operações profissionais para empresas que querem escalar no comércio eletrônico com Amazon FBA, Mercado Livre e Shopee.',
        keywords: 'e-commerce, FBA, Amazon, Mercado Livre, mentoria, consultoria, marketplace, escalar vendas',
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
        subtitle: 'Mentor & Estrategista Full FBA',
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
            'Mentor e estrategista de e-commerce com atuação full FBA, totalmente direcionado à estruturação de operações profissionais para empresas e lojistas que querem entrar ou escalar no comércio eletrônico de forma sólida, previsível e organizada.',
            'O foco não é iniciante individual tentando vender de forma improvisada. O trabalho é voltado para empresas, lojas físicas, distribuidores e negócios já estruturados que precisam dar o próximo passo no digital.',
        ],
        // Palavras que serão destacadas com a cor accent dentro dos parágrafos acima
        highlightWords: ['full FBA', 'operações profissionais', 'escalar'],
    },

    // Seção Expertise (Superpowers)
    expertise: {
        sectionLabel: 'EXPERTISE',
        headline: 'Pilares da Operação',
        items: [
            {
                title: 'Amazon FBA',
                description: 'Operação completa com logística FBA como pilar central para performance, autoridade e conversão no maior marketplace do mundo.',
                tags: ['Logística FBA', 'Buy Box', 'Brand Registry', 'Catálogo Otimizado'],
            },
            {
                title: 'Mercado Livre',
                description: 'Estruturação profissional de contas, anúncios otimizados, gestão de reputação e escala sustentável no maior marketplace da América Latina.',
                tags: ['Full', 'Mercado Envios', 'Anúncios Premium', 'Reputação'],
            },
            {
                title: 'Estratégia Multicanal',
                description: 'Shopee como canal complementar de expansão e volume, dentro de uma estratégia orientada a marca, operação e crescimento real.',
                tags: ['Shopee', 'Diversificação', 'Volume', 'Expansão'],
            },
            {
                title: 'Gestão & Processos',
                description: 'Organização de catálogo, precificação estratégica, leitura de métricas, controle operacional e planejamento de envios para centros logísticos.',
                tags: ['Métricas', 'Precificação', 'Estoque', 'Processos'],
            },
        ],
    },

    // Results Section (Números e Prova Social)
    results: {
        sectionLabel: 'RESULTADOS',
        headline: 'Números Que Falam',
        stats: [
            { value: '500+', label: 'Empresas Assessoradas', suffix: '' },
            { value: '10M+', label: 'Em Vendas Geradas', suffix: 'R$' },
            { value: '3', label: 'Plataformas Dominadas', suffix: '' },
            { value: '98%', label: 'De Satisfação', suffix: '' },
        ],
        // Cards de depoimentos/cases
        testimonials: [
            {
                quote: 'O Marcelo transformou nossa operação. Saímos de zero no digital para faturar 6 dígitos mensais na Amazon em menos de 6 meses.',
                author: 'Nome do Cliente',
                role: 'CEO, Empresa X',
                image: '/images/testimonial-1.jpg',
            },
            {
                quote: 'A consultoria mudou completamente o rumo da nossa empresa no e-commerce. Processos claros, resultados previsíveis.',
                author: 'Nome do Cliente',
                role: 'Diretor Comercial, Empresa Y',
                image: '/images/testimonial-2.jpg',
            },
        ],
    },

    // Method / Scale Section (Artesanal vs FBA)
    method: {
        sectionLabel: 'MÉTODO',
        headline: 'De Artesanal Para Escala',
        description: 'A transformação que leva sua empresa do modelo improvisado para uma operação de e-commerce profissional e escalável.',
        steps: [
            {
                phase: '01',
                title: 'Diagnóstico',
                description: 'Análise completa do negócio, mix de produtos, estrutura comercial e potencial de mercado nos marketplaces.',
            },
            {
                phase: '02',
                title: 'Estruturação',
                description: 'Organização de catálogo, padronização de anúncios, estratégia de precificação e gestão de estoque.',
            },
            {
                phase: '03',
                title: 'Implantação FBA',
                description: 'Configuração logística, planejamento de envios para centros de distribuição e ativação da operação FBA.',
            },
            {
                phase: '04',
                title: 'Escala',
                description: 'Expansão de catálogo, otimização contínua, treinamento de equipe e crescimento previsível de faturamento.',
            },
        ],
        // Comparativo visual
        comparison: {
            before: {
                title: 'Modelo Artesanal',
                points: ['Logística manual', 'Estoque parado', 'Vendas imprevisíveis', 'Sem processos', 'Margem apertada'],
            },
            after: {
                title: 'Operação FBA',
                points: ['Logística automatizada', 'Giro de estoque otimizado', 'Vendas previsíveis', 'Processos claros', 'Margem saudável'],
            },
        },
    },

    // CTA / Contact Section
    contact: {
        sectionLabel: 'CONTATO',
        headline: "VAMOS ESCALAR\nSEU NEGÓCIO",
        description: 'Pronto para transformar sua empresa em uma operação de e-commerce profissional? Entre em contato e descubra como.',
        ctaButton: {
            label: 'Aplicar Para Consultoria',
            href: 'https://wa.me/5511999999999', // Link do WhatsApp
        },
        email: 'contato@marcelotreze.com.br',
        phone: '+55 11 99999-9999',
    },

    // Footer
    footer: {
        brand: 'MARCELO TREZE',
        tagline: 'Estrategista de E-commerce FBA',
        copyright: `© ${new Date().getFullYear()} Marcelo Treze. Todos os direitos reservados.`,
        social: [
            { platform: 'Instagram', url: 'https://instagram.com/marcelotreze', icon: 'instagram' },
            { platform: 'YouTube', url: 'https://youtube.com/@marcelotreze', icon: 'youtube' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/in/marcelotreze', icon: 'linkedin' },
            { platform: 'TikTok', url: 'https://tiktok.com/@marcelotreze', icon: 'tiktok' },
        ],
        links: [
            { label: 'Política de Privacidade', href: '/privacidade' },
            { label: 'Termos de Uso', href: '/termos' },
        ],
    },
};
