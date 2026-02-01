import { motion } from "framer-motion";

export const Card = ({ children, className = "", hover = true, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={hover ? { y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" } : {}}
            className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm bg-opacity-80 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};
