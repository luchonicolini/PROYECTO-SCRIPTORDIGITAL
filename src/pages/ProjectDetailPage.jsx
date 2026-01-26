import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Layers } from 'lucide-react';
import TiltWrapper from '../components/TiltWrapper';
import projectsData from '../data/projects';

const ProjectDetailPage = () => {
    const { id } = useParams();

    const project = projectsData[id] || {
        title: "Proyecto no encontrado",
        desc: "El proyecto que buscas no existe.",
        tags: [],
        content: <p>Intenta volver al inicio.</p>
    };

    const relatedProjects = Object.values(projectsData).filter(p => p.id !== Number(id));

    return (
        <motion.div
            className="project-detail-container"
            style={{
                maxWidth: '1000px',
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
            <div style={{ marginBottom: '40px' }}>
                <Link to="/projects" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#86868B',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'color 0.2s'
                }}>
                    <ArrowLeft size={20} />
                    Volver a Proyectos
                </Link>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div style={{
                    borderRadius: '30px',
                    overflow: 'hidden',
                    height: '500px',
                    marginBottom: '50px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '20px',
                        letterSpacing: '-0.02em'
                    }}>
                        {project.title}
                    </h1>

                    <p style={{
                        fontSize: '1.5rem',
                        color: '#86868B',
                        lineHeight: '1.4',
                        marginBottom: '40px'
                    }}>
                        {project.subtitle}
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '15px',
                        flexWrap: 'wrap',
                        marginBottom: '50px',
                        borderBottom: '1px solid rgba(0,0,0,0.1)',
                        paddingBottom: '40px'
                    }}>
                        {project.tags.map((tag, i) => (
                            <span key={i} style={{
                                padding: '8px 16px',
                                backgroundColor: '#F5F5F7',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                color: '#333'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div style={{
                        lineHeight: '1.8',
                        fontSize: '1.1rem',
                        marginBottom: '80px'
                    }}>
                        {project.content}
                    </div>
                </div>
            </motion.div>

            {/* Related Projects */}
            <section style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '60px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '30px' }}>Más Proyectos</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {relatedProjects.map(p => (
                        <TiltWrapper key={p.id}>
                            <Link to={`/projects/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <motion.div style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    height: '300px',
                                    position: 'relative'
                                }} whileHover={{ y: -5 }}>
                                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '20px',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                        color: 'white'
                                    }}>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{p.title}</h4>
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

export default ProjectDetailPage;
