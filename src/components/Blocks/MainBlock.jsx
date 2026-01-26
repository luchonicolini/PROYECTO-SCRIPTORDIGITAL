import React from 'react';
import { motion } from 'framer-motion';

const MainBlock = () => {
    return (
        <motion.div
            className="grid-item main-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bio-content">
                <h1>Hola, soy Luciano.</h1>
                <p>Diseñador UI/UX y Desarrollador Frontend apasionado por crear experiencias digitales limpias y funcionales.</p>
            </div>
            <div className="avatar-container">
                <img src="/assets/avatar_3d.png" alt="Avatar 3D" className="avatar-img" onError={(e) => e.target.style.display = 'none'} />
            </div>
        </motion.div>
    );
};

export default MainBlock;
