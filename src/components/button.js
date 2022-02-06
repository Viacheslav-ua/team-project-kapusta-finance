export function Button({
    type = "button",
    styles,
    disabled = false,
    onClick,
    children }) {
    return (
        <button
            type={type}
            className={styles}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}