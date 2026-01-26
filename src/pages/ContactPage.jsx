import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle, Linkedin, Twitter, Github, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Reusable Floating Label Input Component
const FloatingLabelInput = ({ label, register, name, rules, errors, type = "text", isTextArea = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    // We need to track value changes to keep label floating if there's content
    const handleBlur = (e) => {
        setIsFocused(false);
        setHasValue(e.target.value.length > 0);
        // React Hook Form's onBlur
        register(name).onBlur(e);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleChange = (e) => {
        setHasValue(e.target.value.length > 0);
        register(name).onChange(e);
    }

    const inputProps = {
        ...register(name, rules),
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChange: handleChange
    };

    const isFloating = isFocused || hasValue;

    return (
        <div style={{ position: 'relative', marginBottom: '8px' }}>
            <div style={{
                position: 'relative',
                backgroundColor: '#F5F5F7',
                borderRadius: '12px',
                border: errors[name] ? '1px solid #FF3B30' : (isFocused ? '1px solid #0066CC' : '1px solid transparent'),
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                paddingTop: '24px',
                paddingBottom: '8px'
            }}>
                <label style={{
                    position: 'absolute',
                    left: '16px',
                    top: isFloating ? '8px' : '18px',
                    fontSize: isFloating ? '0.75rem' : '1rem',
                    color: isFocused ? '#0066CC' : (errors[name] ? '#FF3B30' : '#86868B'),
                    fontWeight: '500',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                    transformOrigin: 'left top'
                }}>
                    {label}
                </label>

                {isTextArea ? (
                    <textarea
                        {...inputProps}
                        style={{
                            width: '100%',
                            padding: '0 16px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            outline: 'none',
                            fontSize: '1rem',
                            color: '#1D1D1F',
                            resize: 'vertical',
                            minHeight: '120px',
                            lineHeight: '1.5'
                        }}
                    />
                ) : (
                    <input
                        type={type}
                        {...inputProps}
                        style={{
                            width: '100%',
                            padding: '0 16px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            outline: 'none',
                            fontSize: '1rem',
                            color: '#1D1D1F',
                            height: '24px'
                        }}
                    />
                )}
            </div>
            {errors[name] && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#FF3B30',
                    fontSize: '0.85rem',
                    marginTop: '6px',
                    marginLeft: '8px'
                }}>
                    <AlertCircle size={14} />
                    <span>{errors[name].message}</span>
                </div>
            )}
        </div>
    );
};


const ContactPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = (data) => {
        if (data.botField) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            reset();
        }, 1500);
    };

    return (
        <motion.div
            className="contact-container"
            style={{
                padding: '40px 20px',
                maxWidth: '1200px',
                margin: '0 auto',
                minHeight: '100vh',
                color: 'var(--text-color, #1D1D1F)',
                display: 'flex',
                flexDirection: 'column'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header Navigation */}
            <div style={{ marginBottom: '40px' }}>
                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#86868B',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'color 0.2s',
                    padding: '8px 0'
                }}>
                    <ArrowLeft size={20} />
                    Volver al Inicio
                </Link>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '60px',
                alignItems: 'start',
                flex: 1
            }}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ paddingTop: '20px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        letterSpacing: '-0.03em'
                    }}>
                        Hablemos de tu <br />
                        próximo proyecto.
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: '#6e6e73',
                        lineHeight: '1.6',
                        marginBottom: '60px',
                        maxWidth: '480px'
                    }}>
                        Diseños que inspiran, código que funciona. Si buscas elevar tu presencia digital, estoy listo para escuchar.
                    </p>

                    <div style={{ display: 'grid', gap: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#86868B', marginBottom: '12px' }}>
                                Email directo
                            </h3>
                            <a href="mailto:hola@luciano.dev" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-color, #1D1D1F)', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.2s' }} className="email-link">
                                hola@luciano.dev
                            </a>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#86868B', marginBottom: '12px' }}>
                                Sígueme
                            </h3>
                            <div style={{ display: 'flex', gap: '24px' }}>
                                <a href="#" style={{ color: '#1D1D1F', transition: 'opacity 0.2s', opacity: 0.8 }}><Linkedin size={28} /></a>
                                <a href="#" style={{ color: '#1D1D1F', transition: 'opacity 0.2s', opacity: 0.8 }}><Twitter size={28} /></a>
                                <a href="#" style={{ color: '#1D1D1F', transition: 'opacity 0.2s', opacity: 0.8 }}><Github size={28} /></a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        backgroundColor: '#FFFFFF',
                        padding: '48px',
                        borderRadius: '32px',
                        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)',
                        maxWidth: '500px',
                        width: '100%',
                        justifySelf: 'center' // Center in grid cell if wider
                    }}
                >
                    <AnimatePresence mode='wait'>
                        {!isSuccess ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit(onSubmit)}
                                style={{ display: 'grid', gap: '24px' }}
                                noValidate
                            >
                                <input type="text" {...register("botField")} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                                <FloatingLabelInput
                                    label="Nombre"
                                    name="name"
                                    register={register}
                                    rules={{ required: "Dime cómo te llamas" }}
                                    errors={errors}
                                />

                                <FloatingLabelInput
                                    type="email"
                                    label="Email"
                                    name="email"
                                    register={register}
                                    rules={{
                                        required: "Necesito tu email para responderte",
                                        pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
                                    }}
                                    errors={errors}
                                />

                                <FloatingLabelInput
                                    isTextArea
                                    label="Mensaje"
                                    name="message"
                                    register={register}
                                    rules={{ required: "Cuéntame un poco más", minLength: { value: 10, message: "Mínimo 10 caracteres" } }}
                                    errors={errors}
                                />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '20px',
                                        marginTop: '10px',
                                        borderRadius: '16px',
                                        border: 'none',
                                        backgroundColor: '#0066CC',
                                        color: 'white',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        cursor: isSubmitting ? 'wait' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        opacity: isSubmitting ? 0.7 : 1,
                                        transition: 'all 0.2s',
                                        boxShadow: '0 4px 12px rgba(0, 102, 204, 0.3)'
                                    }}
                                >
                                    {isSubmitting ? 'Enviando...' : (
                                        <>Enviar Mensaje <Send size={20} /></>
                                    )}
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    textAlign: 'center',
                                    padding: '60px 20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '24px'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    backgroundColor: '#0066CC',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 10px 20px rgba(0,102,204,0.3)'
                                }}>
                                    <CheckCircle size={40} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '10px' }}>¡Recibido!</h3>
                                    <p style={{ color: '#86868B', fontSize: '1.1rem', lineHeight: '1.5' }}>
                                        He recibido tu mensaje correctamente.<br />
                                        Te contactaré pronto.
                                    </p>
                                </div>
                                <button onClick={() => { setIsSuccess(false); reset(); }} style={{ marginTop: '20px', padding: '12px 30px', background: '#F5F5F7', border: 'none', borderRadius: '30px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', color: '#1D1D1F' }}>
                                    Enviar otro
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
