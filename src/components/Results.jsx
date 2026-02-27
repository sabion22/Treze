import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CONTENT } from '../content';
import './Results.css';

function AnimatedCounter({ value, isInView }) {
    const [count, setCount] = useState('0');
    const numericPart = value.replace(/[^0-9]/g, '');
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        if (!isInView) return;
        const target = parseInt(numericPart, 10);
        if (isNaN(target)) { setCount(value); return; }

        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const interval = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            setCount(Math.floor(current) + suffix);
        }, interval);

        return () => clearInterval(timer);
    }, [isInView, numericPart, suffix, value]);

    return <span>{count}</span>;
}

export default function Results() {
    const { results } = CONTENT;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="results" className="results" ref={ref}>
            <div className="container">
                <div className={`divider-line ${isInView ? 'visible' : ''}`} />
                <span className={`section-label ${isInView ? 'visible' : ''}`}>
                    {results.sectionLabel}
                </span>
                <motion.h2
                    className="section-headline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {results.headline}
                </motion.h2>

                <div className="results-stats">
                    {results.stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        >
                            {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                            <div className="stat-value">
                                <AnimatedCounter value={stat.value} isInView={isInView} />
                            </div>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="testimonials-grid">
                    {results.testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                        >
                            <span className="testimonial-quote-mark">"</span>
                            <p className="testimonial-quote">{t.quote}</p>
                            <div className="testimonial-author-row">
                                {t.image ? (
                                    <img src={t.image} alt={t.author} className="testimonial-avatar" />
                                ) : (
                                    <div className="testimonial-avatar-placeholder">
                                        {t.author.charAt(0)}
                                    </div>
                                )}
                                <div className="testimonial-author-info">
                                    <span className="testimonial-author-name">{t.author}</span>
                                    <span className="testimonial-author-role">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
