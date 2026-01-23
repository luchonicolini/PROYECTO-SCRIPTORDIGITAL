
import { Variants, Transition } from "framer-motion"

export const springTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
}

export const smoothTransition: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 0.5,
}

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4 }
    },
}

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition
    },
}

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: smoothTransition
    },
}
