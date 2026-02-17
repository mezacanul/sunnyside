interface ServiceCardProps {
    title: string;
    description: string;
    color: string;
    image: string;
    saturate: number;
}

export default function Services() {
    return (
        <div className="h-[65vh] grid grid-cols-2">
            <ServiceCard
                title="Graphic Design"
                description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
                color="green-800"
                image="image-graphic-design.jpg"
                saturate={1.2}
            />
            <ServiceCard
                title="Photography"
                description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                color="blue-800"
                image="image-photography.jpg"
                saturate={1.5}
            />
        </div>
    );
}

function ServiceCard({
    title,
    description,
    color,
    image,
    saturate,
}: // saturate = false,
ServiceCardProps) {
    const textColor = `text-${color}`;
    const imgPrefix = "/src/assets/images/desktop/";
    const imgSrc = `${imgPrefix}${image}`;
    const saturateFilter = `saturate(${saturate})`;
    return (
        <div
            className="flex justify-center items-end pb-8 h-full bg-cover bg-center"
            style={{
                backgroundImage: `url(${imgSrc})`,
                filter: saturateFilter,
            }}
        >
            <div className="flex flex-col justify-center items-center gap-4 w-[70%] text-center">
                <h3
                    className={`text-4xl font-bold font-fraunces ${textColor}`}
                >
                    {title}
                </h3>
                <p
                    className={`font-barlow text-base ${textColor}`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
