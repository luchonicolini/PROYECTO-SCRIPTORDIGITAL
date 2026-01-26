import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const GithubBlock = () => {
    return (
        <motion.div
            className="grid-item github-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
                gridColumn: 'span 1',
                gridRow: 'span 1',
                backgroundColor: '#24292e', // GitHub Dark
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                position: 'relative'
            }}
        >
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'inherit' }}>
                <Github size={48} strokeWidth={1.5} />

                {/* Action Button */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        color: '#24292e'
                    }}
                >
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                </motion.div>
            </a>
        </motion.div>
    );
};

export default GithubBlock;
