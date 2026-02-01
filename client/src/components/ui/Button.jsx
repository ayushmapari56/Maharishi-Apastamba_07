import { motion } from "framer-motion";

export const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50",
        secondary: "bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700",
        outline: "bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10",
        danger: "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-500/50",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};
