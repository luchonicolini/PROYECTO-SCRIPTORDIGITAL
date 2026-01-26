import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Video, FileText, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltWrapper from '../components/TiltWrapper';
import tutorialsData from '../data/tutorials';

const TutorialsPage = () => {
    const tutorials = Object.values(tutorialsData);

    return (
        <motion.div
            className="tutorials-container"
            style={{
                padding: '40px 20px',
                maxWidth: '1200px',
                margin: '0 auto',
                minHeight: '100vh'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ marginBottom: '40px' }}>
                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-color, #1D1D1F)',
                    textDecoration: 'none',
                    marginBottom: '20px',
                    fontWeight: '500'
                }}>
                    <ArrowLeft size={20} />
                    Volver al Inicio
                </Link>

                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '10px',
                    letterSpacing: '-0.02em',
                    color: 'var(--text-color, #1D1D1F)'
                }}>
                    Tutoriales y Cursos
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#86868B',
                    maxWidth: '600px'
                }}>
                    Explora nuestra biblioteca de recursos de aprendizaje sobre desarrollo web, diseño y tecnología.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px'
            }}>
                {tutorials.map((tutorial) => (
                    <TiltWrapper key={tutorial.id}>
                        <Link to={`/tutorials/${tutorial.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div
                                style={{
                                    backgroundColor: 'var(--card-bg, #FFFFFF)',
                                    borderRadius: '24px',
                                    padding: '30px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    cursor: 'pointer'
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        backgroundColor: `${tutorial.color}20`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: tutorial.color,
                                        marginBottom: '20px'
                                    }}>
                                        {tutorial.icon}
                                    </div>

                                    <span style={{
                                        fontSize: '0.8rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: '#86868B',
                                        fontWeight: '600',
                                        display: 'block',
                                        marginBottom: '8px'
                                    }}>
                                        {tutorial.type}
                                    </span>

                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '10px',
                                        color: 'var(--text-color, #1D1D1F)'
                                    }}>
                                        {tutorial.title}
                                    </h3>

                                    <p style={{
                                        color: '#86868B',
                                        lineHeight: '1.5'
                                    }}>
                                        {tutorial.description}
                                    </p>
                                </div>

                                <div style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#0066CC',
                                    fontWeight: '600'
                                }}>
                                    <span>Empezar</span>
                                    <BookOpen size={16} />
                                </div>
                            </motion.div>
                        </Link>
                    </TiltWrapper>
                ))}
            </div>
        </motion.div>
    );
};

export default TutorialsPage;
