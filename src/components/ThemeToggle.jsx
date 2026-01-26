import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
    const isDark = theme === 'dark';

    return (
        <div
            onClick={toggleTheme}
            style={{
                width: '50px',
                height: '30px',
                backgroundColor: isDark ? '#30D158' : '#E9E9EA', // iOS Green for on, Gray for off
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background-color 0.3s ease'
            }}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                animate={{
                    x: isDark ? 20 : 0
                }}
            >
                {/* Optional: Icons inside the toggle thumb */}
                {isDark ? (
                    <span style={{ fontSize: '14px', lineHeight: 1 }}>🌙</span>
                ) : (
                    <span style={{ fontSize: '14px', lineHeight: 1 }}>☀️</span>
                )}
            </motion.div>
        </div>
    );
};

export default ThemeToggle;
