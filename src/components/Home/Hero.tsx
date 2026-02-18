import { useResponsive } from "../../hooks/useResponsive";
import { imgPrefix } from "../../utils/constants";

export default function Hero() {
    const bgImage = "image-header.jpg";
    const arrowDownImage = "icon-arrow-down.svg";

    const images = {
        arrow: `${imgPrefix}/${arrowDownImage}`,
        desktop: {
            bg: `${imgPrefix}/desktop/${bgImage}`,
        },
        mobile: {
            bg: `${imgPrefix}/mobile/${bgImage}`,
        },
    };

    const cssClasses = {
        desktop: {
            container:
                "bg-cover bg-center h-screen flex items-center justify-center",
        },
        mobile: {},
    };
    return (
        <div
            id="hero-section"
            className={cssClasses.desktop.container}
            style={{
                backgroundImage: `url(${useResponsive<string>(
                    [images.mobile.bg, images.desktop.bg]
                )})`,
            }}
        >
            <div className="flex flex-col items-center justify-center gap-20 -mt-[10rem]">
                <h1 className="text-white text-center text-7xl font-bold font-fraunces tracking-[1.3rem]">
                    {"WE ARE CREATIVES"}
                </h1>
                <img src={images.arrow} alt="arrow down" />
            </div>
        </div>
    );
}
