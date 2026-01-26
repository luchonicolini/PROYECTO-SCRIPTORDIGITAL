import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projects';

const ProjectsBlock = () => {
    // Tomamos solo los primeros 3 proyectos para mostrar en el dashboard
    const projects = Object.values(projectsData).slice(0, 3);

    return (
        <motion.div
            className="grid-item projects-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ padding: '30px', backgroundColor: '#FFFFFF', position: 'relative' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Proyectos Recientes</h2>
                <Link to="/projects" style={{ color: '#0066CC', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>
                    Ver todos
                </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {projects.map((project, index) => (
                    <Link to={`/projects/${project.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <motion.div
                            whileHover="hover"
                            style={{
                                position: 'relative',
                                height: '240px',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                cursor: 'pointer'
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                            />

                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '20px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                color: 'white'
                            }}>
                                <h3 style={{ marginBottom: '4px', fontSize: '1.2rem' }}>{project.title}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{project.desc}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectsBlock;
