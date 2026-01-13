const variants = {
    primary: `
    relative overflow-hidden
    px-[24px] py-[10px]
    text-[18px] font-semibold uppercase
    text-[rgb(193,163,98)]
    border-2 border-[rgb(193,163,98)]
    rounded-[34px]
    transition-all duration-300
    [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]

    before:content-['']
    before:absolute before:inset-0 before:m-auto
    before:w-[50px] before:h-[50px]
    before:rounded-[inherit]
    before:scale-0 before:-z-10
    before:bg-[rgb(193,163,98)]
    before:transition-all before:duration-600
    before:[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]

    hover:before:scale-[3]
    hover:text-[#212121]
    hover:scale-110
    hover:shadow-[0_0_20px_rgba(193,163,98,0.4)]
    active:scale-100
  `,

    outline: `
    px-6 py-2
    border border-white
    text-white
    rounded-full
    hover:bg-white hover:text-black
    transition
  `,

    solid: `
    px-6 py-2
    bg-black text-white
    rounded-full
    hover:bg-gray-800
    transition
  `,
};

const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {
    return (
        <button
            className={`${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
