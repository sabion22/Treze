import { CONTENT } from '../content';
import './Footer.css';

export default function Footer() {
    const { footer } = CONTENT;

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand-block">
                        <span className="footer-brand">{footer.brand}</span>
                        <span className="footer-tagline">{footer.tagline}</span>
                    </div>

                    <div className="footer-social">
                        {footer.social.map((s) => (
                            <a
                                key={s.platform}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                            >
                                {s.platform}
                            </a>
                        ))}
                    </div>

                    <div className="footer-links">
                        {footer.links.map((link) => (
                            <a key={link.label} href={link.href} className="footer-link">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">{footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
