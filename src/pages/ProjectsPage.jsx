import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltWrapper from '../components/TiltWrapper';
import projectsData from '../data/projects';

const ProjectsPage = () => {
    const projects = Object.values(projectsData);

    return (
        <motion.div
            className="projects-container"
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
                    Proyectos Destacados
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#86868B',
                    maxWidth: '600px'
                }}>
                    Una selección de mis trabajos más recientes en desarrollo web y diseño de productos.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '30px'
            }}>
                {projects.map((project) => (
                    <TiltWrapper key={project.id}>
                        <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div
                                style={{
                                    backgroundColor: 'var(--card-bg, #FFFFFF)',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    cursor: 'pointer',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>

                                <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '10px',
                                        color: 'var(--text-color, #1D1D1F)'
                                    }}>
                                        {project.title}
                                    </h3>

                                    <p style={{
                                        color: '#86868B',
                                        lineHeight: '1.5',
                                        marginBottom: '20px',
                                        flexGrow: 1
                                    }}>
                                        {project.desc}
                                    </p>

                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                        {project.tags.map((tag, i) => (
                                            <span key={i} style={{
                                                fontSize: '0.75rem',
                                                padding: '4px 10px',
                                                backgroundColor: '#f5f5f7',
                                                borderRadius: '15px',
                                                color: '#666',
                                                fontWeight: '500'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        color: '#0066CC',
                                        fontWeight: '600',
                                        fontSize: '0.95rem'
                                    }}>
                                        <span>Ver Caso de Estudio</span>
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </TiltWrapper>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
