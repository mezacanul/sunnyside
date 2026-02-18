import { imgPrefix } from "../../utils/constants";

const reels = [
    "image-gallery-milkbottles.jpg",
    "image-gallery-orange.jpg",
    "image-gallery-cone.jpg",
    "image-gallery-sugarcubes.jpg",
];

export default function Reels() {
    return (
        <div className="h-[50vh] grid grid-cols-4">
            {reels.map((reel) => (
                <img
                    key={reel}
                    src={`${imgPrefix}/desktop/${reel}`}
                    alt={reel}
                    className="w-full object-cover h-full"
                />
            ))}
        </div>
    );
}
