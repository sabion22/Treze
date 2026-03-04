import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../content';
import './Contact.css';

export default function Contact() {
    const { contact } = CONTENT;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        faturamento: '',
        ondeVende: '',
        gargalo: ''
    });

    const faturamentoOptions = ['Até 10k', '10k - 50k', '50k+'];
    const ondeVendeOptions = ['Loja própria', 'Marketplace', 'Ambos'];

    const handleOption = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.faturamento || !formData.ondeVende || !formData.gargalo.trim()) {
            alert('Por favor, preencha todos os campos antes de continuar.');
            return;
        }

        const message = `Olá, quero aplicar para a consultoria.\n\nMey faturamento atual é: ${formData.faturamento}\nEu vendo em: ${formData.ondeVende}\nMeu principal gargalo é: ${formData.gargalo}`;
        const encoded = encodeURIComponent(message);

        // Guarantee we strip everything that isn't a number
        const phone = contact.phone.replace(/\D/g, '');
        window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    };

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
                        Vamos estruturar<br />seu crescimento
                    </motion.h2>

                    <motion.p
                        className="contact-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Pronto para profissionalizar sua operação e escalar com segurança?
                    </motion.p>

                    <motion.form
                        className="contact-smart-form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label>Qual seu faturamento mensal atual?</label>
                            <div className="pills-group">
                                {faturamentoOptions.map(opt => (
                                    <button
                                        type="button"
                                        key={opt}
                                        className={`pill ${formData.faturamento === opt ? 'active' : ''}`}
                                        onClick={() => handleOption('faturamento', opt)}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Você vende em:</label>
                            <div className="pills-group">
                                {ondeVendeOptions.map(opt => (
                                    <button
                                        type="button"
                                        key={opt}
                                        className={`pill ${formData.ondeVende === opt ? 'active' : ''}`}
                                        onClick={() => handleOption('ondeVende', opt)}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Qual seu principal gargalo hoje?</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Ex: Logística, tráfego, gestão..."
                                value={formData.gargalo}
                                onChange={(e) => handleOption('gargalo', e.target.value)}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className={`form-submit whatsapp-style ${!(formData.faturamento && formData.ondeVende && formData.gargalo.trim()) ? 'blocked' : ''}`}
                            whileHover={formData.faturamento && formData.ondeVende && formData.gargalo.trim() ? { scale: 1.02 } : {}}
                            whileTap={formData.faturamento && formData.ondeVende && formData.gargalo.trim() ? { scale: 0.98 } : {}}
                            disabled={!(formData.faturamento && formData.ondeVende && formData.gargalo.trim())}
                        >
                            <svg className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" style={{ width: '20px', height: '20px', marginRight: '10px' }}>
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            Finalizar no WhatsApp
                        </motion.button>
                    </motion.form>

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
