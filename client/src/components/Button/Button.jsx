function Button({
    children,
    href,
    variant = "primary",
    ...props
}) {

    const className = `btn btn--${variant}`;


    if (href) {

        return (

            <a
                href={href}
                className={className}
                {...props}
            >
                {children}
            </a>

        );

    }


    return (

        <button
            className={className}
            {...props}
        >
            {children}
        </button>

    );

}


export default Button;