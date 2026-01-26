import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, BookOpen } from 'lucide-react';
import TiltWrapper from '../components/TiltWrapper';
import CodeBlock from '../components/UI/CodeBlock';
import tutorialsData from '../data/tutorials';

const TutorialDetailPage = () => {
    const { id } = useParams();

    const tutorial = tutorialsData[id] || {
        title: "Tutorial no encontrado",
        subtitle: "El recurso que buscas no existe o ha sido movido.",
        color: "#86868B",
        content: <p>Intenta volver al inicio.</p>
    };

    // Filtramos para mostrar otros tutoriales que no sean el actual
    const relatedTutorials = Object.values(tutorialsData).filter(t => t.id !== Number(id));

    return (
        <motion.div
            className="tutorial-detail-container"
            style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '40px 20px',
                minHeight: '100vh',
                color: 'var(--text-color, #1D1D1F)'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <Link to="/tutorials" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#86868B',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'color 0.2s'
                }}>
                    <ArrowLeft size={20} />
                    Volver
                </Link>

                <div style={{ display: 'flex', gap: '15px' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#86868B' }}>
                        <Bookmark size={20} />
                    </button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#86868B' }}>
                        <Share2 size={20} />
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    backgroundColor: `${tutorial.color}20`,
                    color: tutorial.color,
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '20px'
                }}>
                    {tutorial.category}
                </span>

                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    marginBottom: '15px',
                    letterSpacing: '-0.02em'
                }}>
                    {tutorial.title}
                </h1>

                <p style={{
                    fontSize: '1.5rem',
                    color: '#86868B',
                    lineHeight: '1.4',
                    marginBottom: '30px'
                }}>
                    {tutorial.subtitle}
                </p>

                <div style={{
                    display: 'flex',
                    gap: '20px',
                    color: '#86868B',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    paddingBottom: '40px',
                    marginBottom: '40px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={16} />
                        <span>{tutorial.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={16} />
                        <span>{tutorial.readTime}</span>
                    </div>
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="tutorial-content"
                style={{
                    lineHeight: '1.8',
                    fontSize: '1.1rem'
                }}
            >
                {tutorial.content}
            </motion.article>

            {/* Recommended Tutorials Section */}
            <section style={{ marginTop: '80px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '40px' }}>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '30px',
                    color: 'var(--text-color, #1D1D1F)'
                }}>
                    También te podría interesar
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '24px'
                }}>
                    {relatedTutorials.map((related) => (
                        <TiltWrapper key={related.id}>
                            <Link to={`/tutorials/${related.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <motion.div
                                    style={{
                                        backgroundColor: 'var(--card-bg, #FFFFFF)',
                                        borderRadius: '24px',
                                        padding: '24px',
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
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            backgroundColor: `${related.color}20`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: related.color,
                                            marginBottom: '15px'
                                        }}>
                                            {related.icon}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '700',
                                            marginBottom: '8px',
                                            color: 'var(--text-color, #1D1D1F)'
                                        }}>
                                            {related.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#86868B',
                                            lineHeight: '1.4'
                                        }}>
                                            {related.description}
                                        </p>
                                    </div>
                                    <div style={{
                                        marginTop: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        color: '#0066CC',
                                        fontWeight: '600',
                                        fontSize: '0.9rem'
                                    }}>
                                        <span>Leer más</span>
                                        <BookOpen size={14} />
                                    </div>
                                </motion.div>
                            </Link>
                        </TiltWrapper>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default TutorialDetailPage;
