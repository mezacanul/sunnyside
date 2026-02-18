export default function Logo({
    color,
    className,
}: {
    color?: string;
    className: string;
}) {
    const colorClass = color ? `text-${color}` : "";
    return (
        <h2
            className={`${colorClass} font-barlow font-bold ${className}`}
        >
            {"sunnyside"}
        </h2>
    );
}
