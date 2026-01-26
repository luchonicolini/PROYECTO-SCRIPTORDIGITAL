import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactBlock = () => {
    return (
        <motion.div
            className="grid-item contact-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2>¿Trabajamos juntos?</h2>
            <p>
                Estoy disponible para nuevos proyectos. Si tienes una idea o necesitas ayuda con tu producto, hablemos.
            </p>
            <Link to="/contact" className="contact-btn" style={{ textDecoration: 'none' }}>
                Envíame un correo
            </Link>
        </motion.div>
    );
};

export default ContactBlock;
