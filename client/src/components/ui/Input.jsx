export const Input = ({ label, id, type = "text", error, className = "", ...props }) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && <label htmlFor={id} className="text-sm text-gray-400 font-medium ml-1">{label}</label>}
            <input
                id={id}
                type={type}
                className={`bg-gray-800 border ${error ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                {...props}
            />
            {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
        </div>
    );
};
