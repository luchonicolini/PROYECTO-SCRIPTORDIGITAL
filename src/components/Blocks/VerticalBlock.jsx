import React from 'react';
import { motion } from 'framer-motion';

const VerticalBlock = () => {
    return (
        <motion.div
            className="grid-item vertical-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
                padding: '0',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                alt="iOS App Interface"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />

            {/* Optional Overlay for text */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                color: 'white'
            }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>iOS App Design</h3>
            </div>
        </motion.div>
    );
};

export default VerticalBlock;
