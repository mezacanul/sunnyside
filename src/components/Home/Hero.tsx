export default function Hero() {
    const bgImage =
        "/src/assets/images/desktop/image-header.jpg";
    const arrowDownImage =
        "/src/assets/images/icon-arrow-down.svg";
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="flex flex-col items-center justify-center gap-20 -mt-[10rem]">
                <h1 className="text-white text-center text-7xl font-bold font-fraunces tracking-[1.3rem]">
                    {"WE ARE CREATIVES"}
                </h1>
                <img
                    src={arrowDownImage}
                    alt="arrow down"
                />
            </div>
        </div>
    );
}
