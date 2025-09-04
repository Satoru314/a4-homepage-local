
import React from 'react';
import Image from 'next/image';
import { FaSlack, FaGoogleDrive } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

const tools = [
    { name: 'Slack', description: 'リアルタイムのコミュニケーションと情報共有', icon: <FaSlack className="w-12 h-12 text-[#4A154B]" /> },
    { name: 'Notion', description: 'ドキュメント管理、タスク管理、情報集約', icon: <SiNotion className="w-12 h-12 text-black" /> },
    { name: 'Google Drive', description: 'ファイル共有、共同編集、クラウドストレージ', icon: <FaGoogleDrive className="w-12 h-12 text-[#4285F4]" /> },
];

export default function OrgDepartment() {
    return (
        <div>
            <div id="org" className="absolute -translate-y-20"></div>
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative w-full h-32">
                    <Image
                        src="/IMG_5472.jpg"
                        alt="組織管理部の活動風景"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">組織管理部</h2>
                    </div>
                </div>

                <div className="p-6 md:p-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            団体の活動が円滑に進むよう、組織全体をサポートする部署です。ミーティング運営、イベント企画、メンバー間のコミュニケーション促進など、幅広い業務を担当しています。<br />
                            また、新メンバーの受け入れやオンボーディング、チームビルディング活動も担当しています。
                        </p>
                    </div>

                    <div className="mt-6 md:mt-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">A4に導入したツール</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
                            {tools.map((tool) => (
                                <div key={tool.name} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex-shrink-0">{tool.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{tool.name}</h4>
                                        <p className="text-sm text-gray-600">{tool.description}</p>
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
