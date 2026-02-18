import { imgPrefix } from "../../utils/constants";

interface TextSectionProps {
    title: string;
    description: string;
}

export default function About() {
    const { textSections, imageSections } = content;
    return (
        <div className="h-screen grid grid-cols-2">
            <TextSection
                title={textSections[0].title}
                description={textSections[0].description}
            />
            <img
                className="w-full object-cover h-[50vh]"
                src={`${imgPrefix}/desktop/${imageSections[0]}`}
                style={{ filter: "brightness(1.2)" }}
            />
            <img
                className="w-full object-cover h-[50vh]"
                src={`${imgPrefix}/desktop/${imageSections[1]}`}
            />
            <TextSection
                title={textSections[1].title}
                description={textSections[1].description}
            />
        </div>
    );
}

function TextSection({
    title,
    description,
}: TextSectionProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-[50vh]">
            <div className="w-[70%] flex flex-col justify-center gap-7">
                <h3 className="text-4xl font-extrabold font-fraunces text-gray-950">
                    {title}
                </h3>
                <p className="font-barlow text-base text-gray-600">
                    {description}
                </p>
                <a
                    href="#"
                    className="font-fraunces font-bold text-sm text-gray-950"
                >
                    LEARN MORE
                </a>
            </div>
        </div>
    );
}

const content = {
    textSections: [
        {
            title: "Transform your brand",
            description:
                "We are a full-service creative agency that specializes in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        },
        {
            title: "Stand out to the right audience",
            description:
                "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
        },
    ],
    imageSections: [
        "image-transform.jpg",
        "image-stand-out.jpg",
    ],
};
