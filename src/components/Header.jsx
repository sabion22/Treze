import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../content';
import './Header.css';

export default function Header() {
    const { nav } = CONTENT;
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-inner">
                    <a href="#hero" className="header-brand" onClick={(e) => handleLinkClick(e, '#hero')}>
                        {nav.brand}
                    </a>

                    <nav className="header-nav">
                        {nav.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="header-nav-link"
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href={nav.ctaButton.href}
                        className="header-cta"
                        onClick={(e) => handleLinkClick(e, nav.ctaButton.href)}
                    >
                        {nav.ctaButton.label}
                    </a>

                    <div
                        className={`header-menu-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        className="mobile-nav open"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {nav.links.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={(e) => handleLinkClick(e, link.href)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href={nav.ctaButton.href}
                            className="header-cta"
                            style={{ marginTop: '2rem' }}
                            onClick={(e) => handleLinkClick(e, nav.ctaButton.href)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: nav.links.length * 0.1 }}
                        >
                            {nav.ctaButton.label}
                        </motion.a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
