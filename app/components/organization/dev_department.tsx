
import React from 'react';
import Image from 'next/image';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiGithub, SiGo } from 'react-icons/si';

const techStack = [
    { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" /> },
    { name: 'Golang', icon: <SiGo className="w-12 h-12" /> },
    { name: 'Vercel', icon: <SiVercel className="w-12 h-12" /> },
    { name: 'GitHub', icon: <SiGithub className="w-12 h-12" /> },
];

export default function DevDepartment() {
    return (
        <div>
            <div id="dev" className="absolute -translate-y-20"></div>
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative w-full h-48 md:h-56 lg:h-64">
                    <Image
                        src="/IMG_5471.jpg"
                        alt="開発部の活動風景"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">開発部</h2>
                    </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            神戸大学の学生生活をより便利に、より豊かにするためのアプリやウェブサービスを企画・設計・開発します。最新の技術トレンドを取り入れながら、ユーザーにとって本当に価値のあるサービスを開発することを目指しています。フロントエンド、バックエンド、モバイルアプリ開発など、幅広い技術領域でメンバーが協力し合い、学びながら成長できる環境を提供します。
                        </p>
                    </div>

                    <div className="mt-10 md:mt-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">使用技術</h3>
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                                    <div className="text-gray-700">{tech.icon}</div>
                                    <p className="text-sm font-medium text-gray-600">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
