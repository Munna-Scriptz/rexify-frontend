const variants = {
    signup: `
    w-full
    px-4 py-3
    text-sm
    rounded-lg
    bg-white
    text-text-primary
    placeholder:text-gray-400
    transition-colors
    focus:outline-none
    focus:border-coil
    focus:ring-1
  `,
};

const Input = ({
    label,
    error,
    variant = "signup",
    className = "",
    ...props
}) => {
    return (
        <div className="w-full">

            {/* Label */}
            {label && (
                <label className={`text-sm mb-2 block ${error ? "text-error" : "text-coil"}`}>
                    {label}
                </label>
            )}

            {/* Input */}
            <input
                className={` 
                    ${variants[variant]} 
                    ${error
                        ? "border-error border text-error focus:border-error focus:ring-error"
                        : "focus:border-coil focus:ring-coil border border-gray-300"
                    } 
                    ${className}
                `}
                {...props}
            />

            {/* Error */}
            {error && (
                <p className="text-xs text-error mt-2">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
