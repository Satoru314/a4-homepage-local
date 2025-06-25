import React from 'react';
import Image from 'next/image';
import HeroButton from './hero_button';

interface DepartmentSectionProps {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean; // 画像と文章の順序を反転させるオプション
    link?: string; // 詳細ページへのリンク
}

export default function DepartmentSection({
    name,
    description,
    imageSrc,
    imageAlt,
    reverse = false,
    link
}: DepartmentSectionProps) {
    return (
        <div className="w-full max-w-6xl mx-auto px-8 py-12 border-b border-gray-200 last:border-b-0">
            <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-8`}>
                {/* 画像セクション */}
                <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[5/3] w-full rounded-lg overflow-hidden shadow-lg border-2 border-transparent hover:border-[var(--primary-color)] transition-all duration-300">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* 文章セクション */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 relative inline-block">
                        {name}
                        <div className="absolute bottom-0 -left-2 -right-2 h-0.5 bg-[var(--primary-color)] rounded-full"></div>
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {description}
                    </p>
                    {link && (
                        <div className="flex justify-center lg:justify-start">
                            <HeroButton href={link}>
                                詳細を見る
                            </HeroButton>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
