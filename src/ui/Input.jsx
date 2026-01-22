import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

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
const Input = ({ label, error, onChange, variant = "signup", className = "", password = false, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="w-full">

            {/* Label */}
            {label && (
                <label className={`text-sm mb-2 block ${error ? "text-error" : "text-coil"}`}>
                    {label}
                </label>
            )}

            {/* Input Wrapper */}
            <div className="relative w-full">
                <input
                    type={password && !showPassword ? "password" : "text"}
                    className={` 
                        ${variants[variant]} 
                        ${error
                            ? "border-error border text-error focus:border-error focus:ring-error"
                            : "focus:border-coil focus:ring-coil border border-gray-300"
                        } 
                        ${className}
                        ${password ? "pr-10" : ""}
                    `}
                    onChange={onChange}
                    {...props}
                />

                {/* Eye Icon Button */}
                {password && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 text-xl -translate-y-1/2 text-coil cursor-pointer hover:text-gray-600 focus:outline-none"
                    >
                        {showPassword ? <IoEyeOffOutline />: <IoEyeOutline />}
                    </button>
                )}
            </div>

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
