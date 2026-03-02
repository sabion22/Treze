import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT, MEDIA } from '../content';
import './Header.css';

export default function Header() {
    const { nav } = CONTENT;
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Atualiza Favicon se definido no content.js
        if (MEDIA.favicon) {
            let link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            link.href = MEDIA.favicon;
        }

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
                        {MEDIA.logo ? (
                            <img src={MEDIA.logo} alt={nav.brand} className="header-logo" />
                        ) : (
                            <div className="header-logo-placeholder">
                                <span>{nav.brand}</span>
                            </div>
                        )}
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-cta whatsapp-cta"
                    >
                        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.539 2.016 2.041-.534c.95.517 1.954.808 3.01.808 3.195 0 5.767-2.587 5.768-5.766.001-3.18-2.587-5.767-5.768-5.777zm1.144 9.074c-.161.432-.916.899-1.288.948-.372.049-.714.24-2.185-.347-1.47-.587-2.427-1.782-2.5-1.88-.073-.098-.598-.795-.598-1.517 0-.722.378-1.077.513-1.226.134-.149.293-.186.39-.186.098 0 .195.011.272.011.085 0 .195-.035.305.232.11.267.378.916.415.989.037.073.061.159.012.257-.037.108-.073.183-.146.269-.073.085-.159.183-.22.256-.073.073-.146.159-.061.305.085.146.378.623.82.99.561.477 1.036.623 1.182.721.146.098.232.085.317-.012.085-.098.366-.428.464-.574.098-.146.195-.122.33-.073.134.049.854.403 1.001.477.146.073.244.11.28.171.037.074.037.428-.124.86z" />
                        </svg>
                        <span>{nav.ctaButton.label}</span>
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
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header-cta whatsapp-cta"
                            style={{ marginTop: '2rem', display: 'flex', border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: nav.links.length * 0.1 }}
                        >
                            <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.539 2.016 2.041-.534c.95.517 1.954.808 3.01.808 3.195 0 5.767-2.587 5.768-5.766.001-3.18-2.587-5.767-5.768-5.777zm1.144 9.074c-.161.432-.916.899-1.288.948-.372.049-.714.24-2.185-.347-1.47-.587-2.427-1.782-2.5-1.88-.073-.098-.598-.795-.598-1.517 0-.722.378-1.077.513-1.226.134-.149.293-.186.39-.186.098 0 .195.011.272.011.085 0 .195-.035.305.232.11.267.378.916.415.989.037.073.061.159.012.257-.037.108-.073.183-.146.269-.073.085-.159.183-.22.256-.073.073-.146.159-.061.305.085.146.378.623.82.99.561.477 1.036.623 1.182.721.146.098.232.085.317-.012.085-.098.366-.428.464-.574.098-.146.195-.122.33-.073.134.049.854.403 1.001.477.146.073.244.11.28.171.037.074.037.428-.124.86z" />
                            </svg>
                            <span>{nav.ctaButton.label}</span>
                        </motion.a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
