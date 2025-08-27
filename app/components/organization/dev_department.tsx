
import React from 'react';
import Image from 'next/image';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiGithub, SiGo } from 'react-icons/si';

const techStack = [
    { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" /> },
    { name: 'Golang', icon: <SiGo className="w-8 h-8" /> },
    { name: 'GitHub', icon: <SiGithub className="w-10 h-10" /> },
];

export default function DevDepartment() {
    return (
        <div>
            <div id="dev" className="absolute -translate-y-20"></div>
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative w-full h-32">
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

                <div className="p-6 md:p-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            WEBアプリケーションを企画・設計・開発している部署です。チームで役割分担を行い、協力してアプリを作っています。<br />技術の教え合いや意見交換も活発に行っています。
                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">主な使用技術</h3>
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                                    <div className="text-gray-700 ">{tech.icon}</div>
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
