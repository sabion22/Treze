import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CONTENT, MEDIA } from '../content';
import './Hero.css';

export default function Hero() {
    const { hero } = CONTENT;
    const { settings } = hero;
    const ref = useRef(null);

    const heroStyle = {
        '--marquee-speed': settings.marqueeSpeed,
        '--marquee-spacing': settings.marqueeLetterSpacing,
        '--marquee-size': settings.marqueeFontSize,
        '--image-pos': settings.imagePosition,
        '--image-grayscale': settings.imageGrayscale || '20%',
    };

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Marquee: repeat text many times for seamless loop
    const marqueeText = Array(8).fill(hero.mainTitle).join(' · ');

    return (
        <section id="hero" className="hero" ref={ref} style={heroStyle}>
            {/* Background marquee text */}
            <div className="hero-text-bg">
                <div className="hero-marquee-track">
                    <span className="hero-marquee-text">{marqueeText}</span>
                    <span className="hero-marquee-text">{marqueeText}</span>
                </div>
            </div>

            {/* Portrait image */}
            <motion.div
                className="hero-portrait-wrapper"
                style={{ scale: portraitScale, y: portraitY }}
            >
                {MEDIA.heroPortrait ? (
                    <img
                        src={MEDIA.heroPortrait}
                        alt={hero.mainTitle}
                        className="hero-portrait"
                        loading="eager"
                    />
                ) : (
                    <div className="hero-portrait-placeholder">
                        Adicione sua foto em /images/hero-portrait.png
                    </div>
                )}
                <div className="hero-portrait-gradient" />
            </motion.div>

            {/* Top labels */}
            <motion.div
                className="hero-top-label"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                {hero.topLabel}
            </motion.div>

            <motion.div
                className="hero-location-tag"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {hero.locationTag}
            </motion.div>

            {/* Content overlay at the bottom */}
            <motion.div className="hero-content-overlay" style={{ opacity: overlayOpacity }}>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {hero.subtitle}
                </motion.p>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <a href={hero.ctaButton.href} className="hero-btn-primary">
                        {hero.ctaButton.label}
                        <span>→</span>
                    </a>
                    <a href={hero.secondaryButton.href} className="hero-btn-secondary">
                        {hero.secondaryButton.label}
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span className="hero-scroll-text">{hero.scrollIndicator}</span>
                <div className="hero-scroll-line" />
            </motion.div>
        </section>
    );
}
