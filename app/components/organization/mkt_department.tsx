
import React from 'react';
import Image from 'next/image';

const pastWorks = [
    {
        title: '新歓ビラ 2025',
        description: '2025年度新歓活動で使用したビラ。A4の魅力と活動内容を分かりやすく伝えました。',
        imageSrc: '/スクリーンショット 2025-06-16 093027.png',
        imageAlt: '新歓ビラ 2025のデザイン'
    },
    {
        title: '団体紹介スライド',
        description: '説明会やイベントで使用するスライド。写真や図を多く使い、視覚的にアピールしました。',
        imageSrc: '/スクリーンショット 2025-06-16 093245.png',
        imageAlt: '団体紹介スライドのデザイン'
    },
    {
        title: 'SNS投稿コンテンツ',
        description: 'InstagramやXで定期的に発信する画像コンテンツ。イベント告知や活動報告が中心です。',
        imageSrc: '/スクリーンショット 2025-06-16 093320.png',
        imageAlt: 'SNS投稿コンテンツのデザイン'
    },
];

export default function MktDepartment() {
    return (
        <section id="mkt" className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image
                    src="/IMG_5473.jpg"
                    alt="マーケティング部の活動風景"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">マーケティング部</h2>
                </div>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Voice</h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        開発したプロダクトや団体の活動内容を、様々なチャネルを通じて神大生に広く届け、利用促進や認知度向上を目指します。SNSマーケティング、コンテンツ制作、イベント企画、ブランディングなど多角的なアプローチで、効果的な情報発信を行っています。データ分析に基づいた戦略立案により、ターゲットに響くメッセージを届けることを重視しています。
                    </p>
                </div>

                <div className="mt-10 md:mt-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">Our Past Works</h3>
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
                                    <p className="text-sm text-gray-600 mt-1">{work.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
