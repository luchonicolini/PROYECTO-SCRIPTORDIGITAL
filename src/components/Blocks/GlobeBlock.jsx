import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { motion } from 'framer-motion';

const GlobeBlock = ({ theme }) => {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 4.5; // Start centered roughly on South America

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600,
            height: 600,
            phi: phi,
            theta: 0,
            dark: theme === 'dark' ? 1 : 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: theme === 'dark' ? [0.3, 0.3, 0.3] : [1, 1, 1],
            markerColor: [0, 0.6, 1], // Apple Blue
            glowColor: theme === 'dark' ? [0.1, 0.1, 0.1] : [1, 1, 1],
            markers: [
                // Buenos Aires roughly
                { location: [-34.6, -58.4], size: 0.1 }
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // state.phi = phi + r;
                state.phi = phi;
                phi += 0.003; // Auto rotate slowly
            },
        });

        return () => {
            globe.destroy();
        };
    }, [theme]);

    return (
        <motion.div
            className="grid-item globe-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
                backgroundColor: theme === 'dark' ? '#1C1C1E' : '#FFFFFF',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>
                <canvas
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '100%',
                        aspectRatio: '1',
                        cursor: 'grab'
                    }}
                />
            </div>

            <div className="location-tag" style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: '#1D1D1F',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                zIndex: 10
            }}>
                <span style={{ marginRight: '6px' }}>📍</span> Buenos Aires
            </div>
        </motion.div>
    );
};

export default GlobeBlock;
