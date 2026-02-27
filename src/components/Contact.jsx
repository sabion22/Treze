import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CONTENT } from '../content';
import './Contact.css';

export default function Contact() {
    const { contact } = CONTENT;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="contact" ref={ref}>
            <div className="container">
                <div className="contact-inner">
                    <motion.div
                        className={`section-label ${isInView ? 'visible' : ''}`}
                        style={{ justifyContent: 'center' }}
                    >
                        {contact.sectionLabel}
                    </motion.div>

                    <motion.h2
                        className="contact-headline"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {contact.headline}
                    </motion.h2>

                    <motion.p
                        className="contact-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        {contact.description}
                    </motion.p>

                    <motion.a
                        href={contact.ctaButton.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-cta-btn"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <span>{contact.ctaButton.label}</span>
                        <span>→</span>
                    </motion.a>

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <a href={`mailto:${contact.email}`} className="contact-info-item">
                            {contact.email}
                        </a>
                        <a href={`tel:${contact.phone}`} className="contact-info-item">
                            {contact.phone}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
