import Image from "next/image";

interface ImageBoxProps {
    path?: string;
    alt?: string;
    imageClassName?: string;
    children: React.ReactNode;
    cardClassName?: string;
    imageContainerClassName?: string;
}

export default function ImageBox({
    path,
    alt = "カードの画像",
    imageClassName = "object-cover rounded-t-md",
    children,
    cardClassName = "",
    imageContainerClassName = "w-full aspect-video",
}: ImageBoxProps) {
    return (
        <div
            className={`flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full overflow-hidden ${cardClassName}`}
        >
            {path && (
                <div
                    className={`relative mb-4 ${imageContainerClassName}`}
                >
                    <Image
                        src={path}
                        alt={alt}
                        fill
                        className={imageClassName}
                        priority
                    />
                </div>
            )}
            <div className="text-center flex-grow flex flex-col p-6 pt-2">
                {children}
            </div>
        </div>
    );
}