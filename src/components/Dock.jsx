import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Wrench, Mail } from 'lucide-react';

const Dock = () => {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            className="dock-container"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                padding: '12px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                zIndex: 1000,
                height: '64px',
                alignItems: 'end'
            }}
        >
            <DockIcon mouseX={mouseX} icon={<Home />} label="Home" href="#home" />
            <DockIcon mouseX={mouseX} icon={<User />} label="About" href="#about" />
            <DockIcon mouseX={mouseX} icon={<Wrench />} label="Tools" href="#tools" />
            <DockIcon mouseX={mouseX} icon={<Mail />} label="Contact" href="#contact" />
        </motion.div>
    );
};

const DockIcon = ({ mouseX, icon, label, href }) => {
    const ref = useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={href}
            ref={ref}
            style={{ width, height: width }}
            className="dock-icon"
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#1D1D1F',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    position: 'relative'
                }}
            >
                {React.cloneElement(icon, { size: '50%', strokeWidth: 2 })}
            </motion.div>
        </motion.a>
    );
};

export default Dock;
