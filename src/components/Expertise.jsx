import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CONTENT } from '../content';
import './Expertise.css';

export default function Expertise() {
    const { expertise } = CONTENT;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="expertise" className="expertise" ref={ref}>
            <div className="container">
                <div className={`divider-line ${isInView ? 'visible' : ''}`} />
                <span className={`section-label ${isInView ? 'visible' : ''}`}>
                    {expertise.sectionLabel}
                </span>
                <motion.h2
                    className="section-headline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {expertise.headline}
                </motion.h2>

                <div className="expertise-grid">
                    {expertise.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`expertise-card ${item.platform || ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                        >
                            <div className="expertise-card-glow" />
                            <h3 className="expertise-card-title">{item.title}</h3>
                            <p className="expertise-card-desc">{item.description}</p>
                            <div className="expertise-tags">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="expertise-tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
