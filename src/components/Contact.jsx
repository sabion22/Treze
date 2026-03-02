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
                        className="contact-cta-btn whatsapp-btn"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.539 2.016 2.041-.534c.95.517 1.954.808 3.01.808 3.195 0 5.767-2.587 5.768-5.766.001-3.18-2.587-5.767-5.768-5.777zm1.144 9.074c-.161.432-.916.899-1.288.948-.372.049-.714.24-2.185-.347-1.47-.587-2.427-1.782-2.5-1.88-.073-.098-.598-.795-.598-1.517 0-.722.378-1.077.513-1.226.134-.149.293-.186.39-.186.098 0 .195.011.272.011.085 0 .195-.035.305.232.11.267.378.916.415.989.037.073.061.159.012.257-.037.108-.073.183-.146.269-.073.085-.159.183-.22.256-.073.073-.146.159-.061.305.085.146.378.623.82.99.561.477 1.036.623 1.182.721.146.098.232.085.317-.012.085-.098.366-.428.464-.574.098-.146.195-.122.33-.073.134.049.854.403 1.001.477.146.073.244.11.28.171.037.074.037.428-.124.86z" />
                        </svg>
                        <span>{contact.ctaButton.label}</span>
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
