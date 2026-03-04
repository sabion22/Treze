import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CONTENT } from '../content';
import './Method.css';

export default function Method() {
    const { method } = CONTENT;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const compRef = useRef(null);
    const compInView = useInView(compRef, { once: true, margin: '-100px' });

    return (
        <section id="method" className="method" ref={ref}>
            <div className="container">
                <div className={`divider-line ${isInView ? 'visible' : ''}`} />
                <span className={`section-label ${isInView ? 'visible' : ''}`}>
                    {method.sectionLabel}
                </span>
                <motion.h2
                    className="section-headline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {method.headline}
                </motion.h2>
                <motion.div
                    className="method-intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <p className="method-description">{method.description}</p>
                </motion.div>

                {/* Steps Timeline Alternated */}
                <div className="method-steps">
                    <div className="method-main-line" />
                    {method.steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className={`method-step ${i % 2 === 0 ? 'step-left' : 'step-right'}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
                        >
                            <div className="method-step-visual">
                                <div className="method-step-number">{step.phase}</div>
                            </div>
                            <div className="method-step-content">
                                <h3 className="method-step-title">{step.title}</h3>
                                <p className="method-step-desc">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Before/After Comparison */}
                <div className="method-comparison" ref={compRef}>
                    <motion.div
                        className="comparison-col before"
                        initial={{ opacity: 0, x: -40 }}
                        animate={compInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h4 className="comparison-col-title">{method.comparison.before.title}</h4>
                        {method.comparison.before.points.map((point, i) => (
                            <div key={i} className="comparison-point">
                                <span className="comparison-point-icon">✕</span>
                                {point}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="comparison-arrow"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={compInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        →
                    </motion.div>

                    <motion.div
                        className="comparison-col after"
                        initial={{ opacity: 0, x: 40 }}
                        animate={compInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <h4 className="comparison-col-title">{method.comparison.after.title}</h4>
                        {method.comparison.after.points.map((point, i) => (
                            <div key={i} className="comparison-point">
                                <span className="comparison-point-icon">✓</span>
                                {point}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
