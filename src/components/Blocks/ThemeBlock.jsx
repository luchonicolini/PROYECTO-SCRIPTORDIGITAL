import React from 'react';
import { motion } from 'framer-motion';

const ThemeBlock = ({ theme, toggleTheme }) => {
    const isDark = theme === 'dark';

    return (
        <motion.div
            className="grid-item theme-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={toggleTheme}
            style={{
                gridColumn: 'span 1',
                gridRow: 'span 1',
                backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Track for the "Toggle" look */}
            <motion.div
                style={{
                    width: '100px',
                    height: '50px',
                    backgroundColor: isDark ? '#1C1C1E' : '#1C1C1E', // Always dark track as per image
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px',
                    position: 'relative',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' // Inner shadow for depth
                }}
            >
                {/* Toggle Thumb */}
                <motion.div
                    style={{
                        width: '42px',
                        height: '42px',
                        backgroundColor: isDark ? '#303030' : '#FFFFFF', // Dark gray when dark, White when light
                        borderRadius: '50%',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    animate={{
                        x: isDark ? 50 : 0,
                        backgroundColor: isDark ? '#303030' : '#FFFFFF'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                >
                    {/* No icons inside, just the circle as requested */}
                </motion.div>
            </motion.div>

            <div style={{
                position: 'absolute',
                bottom: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: isDark ? '#888' : '#888',
                opacity: 0.8
            }}>
                {isDark ? 'Dark Mode' : 'Light Mode'}
            </div>
        </motion.div>
    );
};

export default ThemeBlock;
