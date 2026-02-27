import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CONTENT, MEDIA } from '../content';
import './About.css';

function highlightText(text, words) {
    let result = text;
    words.forEach((w) => {
        result = result.replace(
            new RegExp(`(${w})`, 'gi'),
            `<span class="highlight">$1</span>`
        );
    });
    return result;
}

export default function About() {
    const { about } = CONTENT;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <div className={`divider-line ${isInView ? 'visible' : ''}`} />
                <span className={`section-label ${isInView ? 'visible' : ''}`}>
                    {about.sectionLabel}
                </span>

                <div className="about-content">
                    <div className="about-left">
                        <motion.h2
                            className="section-headline"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {about.headline}
                        </motion.h2>

                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {MEDIA.aboutImage ? (
                                <img src={MEDIA.aboutImage} alt={about.headline} className="about-image" />
                            ) : (
                                <div className="about-image-placeholder">
                                    Adicione sua foto em /images/about.jpg
                                </div>
                            )}
                        </motion.div>
                    </div>

                    <div className="about-right">
                        {about.paragraphs.map((p, i) => (
                            <motion.p
                                key={i}
                                className="about-paragraph"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                                dangerouslySetInnerHTML={{
                                    __html: highlightText(p, about.highlightWords),
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
