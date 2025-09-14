
import React, { useState } from 'react';
import Image from 'next/image';

const pastWorks = [
    {
        title: '六甲祭ビラ 2024',
        imageSrc: '/六甲祭ビラ印刷用.png',
        imageAlt: '六甲祭ビラ 2024のデザイン'
    },
    {
        title: '新歓ビラ 2025',
        imageSrc: '/A4新歓25ビラ.png',
        imageAlt: '新歓ビラ 2025のデザイン'
    },
    {
        title: 'SNS投稿コンテンツ',
        imageSrc: '/IMG_2308.jpg',
        imageAlt: 'SNS投稿コンテンツのデザイン'
    },
];

export default function MktDepartment() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

    const openModal = (imageSrc: string, imageAlt: string, title: string) => {
        setSelectedImage({ src: imageSrc, alt: imageAlt, title });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>

            <div id="mkt" className="absolute -translate-y-20"></div>
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative w-full h-32">
                    <Image
                        src="/IMG_5473.png"
                        alt="マーケティング部の活動風景"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">マーケティング部</h2>
                    </div>
                </div>

                <div className="p-6 md:p-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            開発したプロダクトや団体の活動内容を、外部に発信する部署です。<br />
                            SNSマーケティング、デザイン、コンテンツ制作、イベント企画等を行っています。
                        </p>
                    </div>

                    <div className="mt-6 md:mt-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">これまでの制作物</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {pastWorks.map((work) => (
                                <div key={work.title} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl cursor-pointer"
                                    onClick={() => openModal(work.imageSrc, work.imageAlt, work.title)}>
                                    <div className="relative w-full h-60 md:h-100">
                                        <Image
                                            src={work.imageSrc}
                                            alt={work.imageAlt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold text-gray-800">{work.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* モーダル */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-[90vh] w-full h-full p-4">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 z-10"
                        >
                            ×
                        </button>
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                            <h3 className="text-white text-xl font-bold bg-black bg-opacity-50 rounded-lg py-2 px-4 inline-block">
                                {selectedImage.title}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
