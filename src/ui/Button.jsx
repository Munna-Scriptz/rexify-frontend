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
};

const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {
    return (
        <button
            className={`${variants[variant]} ${className} cursor-pointer`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
