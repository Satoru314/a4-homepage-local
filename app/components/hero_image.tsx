"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageItem {
    src: string;
    alt: string;
}

interface HeroImageProps {
    images: ImageItem[];
    priority?: boolean;
    intervalMs?: number;
}

export default function HeroImage({ images, priority = false, intervalMs = 3000 }: HeroImageProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [images.length, intervalMs]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="w-full lg:w-2/3 relative h-64 sm:h-80 lg:h-screen order-1 lg:order-2 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover z-0"
                        priority={priority && index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
