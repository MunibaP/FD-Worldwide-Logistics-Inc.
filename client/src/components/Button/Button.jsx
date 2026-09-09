import { FaArrowRight } from "react-icons/fa";
import "../Button/Button.css";

function Button({
    children,
    href,
    type = "button",
    variant = "primary",
    icon = true,
    onClick
}) {

    const className = `button button-${variant}`;

    if (href) {
        return (
            <a
                href={href}
                className={className}
            >
                <span>{children}</span>

                {icon && (
                    <span className="button-icon">
                        <FaArrowRight />
                    </span>
                )}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            <span>{children}</span>

            {icon && (
                <span className="button-icon">
                    <FaArrowRight />
                </span>
            )}
        </button>
    );
}

export default Button;