import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StoryBlock = () => {
    return (
        <motion.div
            className="grid-item story-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <h3>Mi Historia</h3>
            <p>Comencé mi viaje en el diseño hace 5 años, buscando siempre la simplicidad.</p>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <button className="discover-btn" style={{ cursor: 'pointer' }}>Descubrir más</button>
            </Link>
        </motion.div>
    );
};

export default StoryBlock;
