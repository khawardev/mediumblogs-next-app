/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';
const AnimateWrapper = ({ children, keyValue, initial = { opacity: 0 }, animate = { opacity: 1 }, transition = { duration: 1 }, className }: any) => {
    return (
        <AnimatePresence>
            <motion.div
                key={keyValue}
                initial={initial}
                animate={animate}
                transition={transition}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence >
    )
}

export default AnimateWrapper