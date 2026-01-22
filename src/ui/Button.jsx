const variants = {
    primary: `
    relative overflow-hidden
    px-[24px] py-[8px]
    text-base font-semibold uppercase
    text-surface
    border border-surface
    rounded-[34px]
    transition-all duration-300
    [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]

    before:content-['']
    before:absolute before:inset-0 before:m-auto
    before:w-[50px] before:h-[50px]
    before:rounded-[inherit]
    before:scale-0 before:-z-10
    before:bg-accent
    before:transition-all before:duration-600
    before:[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]

    hover:before:scale-[3]
    hover:text-surface
    hover:scale-110
    hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
    active:scale-100
  `,

    outline: `
    relative overflow-hidden
    px-[24px] py-[8px]
    text-base font-semibold uppercase
    text-text-primary
    border border-text-muted
    rounded-[34px]
    transition-all duration-300
    [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]

    before:content-['']
    before:absolute before:inset-0 before:m-auto
    before:w-[50px] before:h-[50px]
    before:rounded-[inherit]
    before:scale-0 before:-z-10
    before:bg-accent
    before:transition-all before:duration-900
    before:[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]

    hover:before:scale-[6]
    hover:text-surface
    hover:scale-110
    hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
    active:scale-100
    `,

    explore: `
        px-7 py-3 group
        bg-text-primary text-white
        rounded-full
        font-medium tracking-wide
        shadow-[0_10px_30px_rgba(0,0,0,0.2)]
        hover:bg-black
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
        transition-all duration-300 ease-out
    `,

    authButton: `
        w-full bg-coil/80 text-white font-semibold py-3.5 rounded-full mb-10 hover:bg-text-primary duration-300 cursor-pointer
    `,
    
    authMethodButton: `
        flex-1 flex items-center cursor-pointer justify-center gap-3 border border-gray-400 hover:bg-gray-200 rounded-full py-3 duration-300 
        text-coil text-sm font-medium
    `
};

const Button = ({
    children,
    variant = "primary",
    className = "",
    loading = false,
    ...props
}) => {
    return (
        <button
            className={`${variants[variant]} ${className} cursor-pointer`}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <span className="flex justify-center items-center gap-1 py-2 cursor-no-drop">
                    <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce"></span>
                    <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                </span>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
