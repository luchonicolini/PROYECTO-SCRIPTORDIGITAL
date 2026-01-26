import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const ArticlesBlock = () => {
    return (
        <Link to="/tutorials" style={{ textDecoration: 'none' }}>
            <motion.div
                className="grid-item articles-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                style={{
                    backgroundColor: '#FFFFFF',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none', // Remove default link underline
                    cursor: 'pointer'
                }}
            >
                <div style={{ zIndex: 2 }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '15px',
                        color: '#86868B'
                    }}>
                        <BookOpen size={20} />
                        <span style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                            Knowledge Base
                        </span>
                    </div>

                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#1D1D1F',
                        marginBottom: '10px',
                        lineHeight: '1.2'
                    }}>
                        Aprende Diseño & React
                    </h3>

                    <p style={{
                        fontSize: '1rem',
                        color: '#86868B',
                        lineHeight: '1.5',
                        maxWidth: '80%'
                    }}>
                        Tutoriales, guías y cursos sobre desarrollo web moderno.
                    </p>
                </div>

                <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#0066CC',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    zIndex: 2
                }}>
                    <span>Ver Cursos</span>
                    <ArrowRight size={16} />
                </div>

                {/* Decorative Background Element */}
                <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    width: '140px',
                    height: '140px',
                    background: 'linear-gradient(135deg, #E0F7FA 0%, #E1F5FE 100%)',
                    borderRadius: '50%',
                    opacity: 0.5,
                    zIndex: 1
                }} />
            </motion.div>
        </Link>
    );
};

export default ArticlesBlock;
