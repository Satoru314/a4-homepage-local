
import React from 'react';
import Image from 'next/image';

const pastWorks = [
    {
        title: '六甲祭ビラ 2024',
        imageSrc: '/スクリーンショット 2025-06-16 093027.png',
        imageAlt: '六甲祭ビラ 2024のデザイン'
    },
    {
        title: '新歓ビラ 2025',
        imageSrc: '/スクリーンショット 2025-06-16 093245.png',
        imageAlt: '新歓ビラ 2025のデザイン'
    },
    {
        title: 'SNS投稿コンテンツ',
        imageSrc: '/スクリーンショット 2025-06-16 093320.png',
        imageAlt: 'SNS投稿コンテンツのデザイン'
    },
];

export default function MktDepartment() {
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
                                <div key={work.title} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative w-full h-48">
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
        </div>
    );
}
