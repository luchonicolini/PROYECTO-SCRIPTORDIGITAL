import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, Lightbulb, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <motion.div
            className="about-container"
            style={{
                padding: '40px 20px',
                maxWidth: '800px',
                margin: '0 auto',
                minHeight: '100vh',
                color: 'var(--text-color, #1D1D1F)'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header Navigation */}
            <div style={{ marginBottom: '60px' }}>
                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#86868B',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'color 0.2s'
                }}>
                    <ArrowLeft size={20} />
                    Volver al Inicio
                </Link>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    marginBottom: '30px',
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(45deg, #1D1D1F, #434344)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Diseñando con propósito, <br />
                    construyendo con pasión.
                </h1>

                <p style={{
                    fontSize: '1.5rem',
                    color: '#86868B',
                    lineHeight: '1.5',
                    marginBottom: '60px',
                    maxWidth: '90%'
                }}>
                    Soy un desarrollador creativo obsesionado con la intersección entre diseño y tecnología.
                </p>
            </motion.div>

            {/* Story Content */}
            <div style={{ display: 'grid', gap: '80px' }}>

                {/* Chapter 1 */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: '#FFD16620',
                        color: '#FFD166',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px'
                    }}>
                        <Lightbulb size={32} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px' }}>El Comienzo</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#424245' }}>
                        Todo empezó con una curiosidad insaciable por entender cómo funcionaban las cosas. Desde desmontar viejos aparatos electrónicos en el garaje de mis padres hasta descubrir las primeras líneas de código HTML en el navegador. Recuerdo la sensación mágica de escribir texto en un bloc de notas y verlo transformarse en una página web real. Esa chispa inicial encendió una pasión que me ha acompañado ever since.
                    </p>
                </motion.section>

                {/* Chapter 2 */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: '#06D6A020',
                        color: '#06D6A0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px'
                    }}>
                        <Coffee size={32} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px' }}>El Aprendizaje</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#424245' }}>
                        Los años siguientes fueron un torbellino de aprendizaje autodidacta y experiencias profesionales. Pasé noches enteras depurando código, aprendiendo frameworks que ya no existen y adaptándome a la velocidad vertiginosa de la web moderna. Trabajé con startups donde tuve que usar "muchos sombreros", diseñando interfaces por la mañana y configurando bases de datos por la tarde. Esta versatilidad me enseñó a valorar cada pieza del rompecabezas digital.
                    </p>
                </motion.section>

                {/* Chapter 3 */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: '#EF476F20',
                        color: '#EF476F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px'
                    }}>
                        <Heart size={32} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px' }}>Filosofía Actual</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#424245' }}>
                        Hoy en día, mi enfoque se centra en la simplicidad y la empatía. Creo firmemente que la tecnología debe ser invisible, potenciando al usuario sin interponerse en su camino. Busco crear experiencias que no solo sean funcionales, sino que también evoquen una respuesta emocional positiva. Me inspira el minimalismo, no como una estética vacía, sino como una herramienta para eliminar el ruido y resaltar lo esencial.
                    </p>
                </motion.section>

            </div>

            <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#86868B' }}>
                    "La simplicidad es la máxima sofisticación."
                </p>
            </div>
        </motion.div>
    );
};

export default AboutPage;
