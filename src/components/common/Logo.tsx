export default function Logo({
    color,
    className,
}: {
    color: string;
    className: string;
}) {
    return (
        <h2
            className={`text-${color} font-barlow font-bold ${className}`}
        >
            {"sunnyside"}
        </h2>
    );
}
