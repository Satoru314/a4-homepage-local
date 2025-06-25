'use client';

import React from "react";
import SimpleHeading from "../components/simple_heading";
import ImageBox from "../components/image_box";

// 活動内容データ
const activities = [
    {
        id: "meeting",
        path: "/IMG_5472.jpg",
        alt: "プロダクトの企画のアイコン",
        title: "プロダクトの企画",
        description: "神大生の学生生活をより便利にするアプリを企画・設計します。ユーザーリサーチやアイデア出し、プロトタイプ作成など、アプリ開発の上流工程を担当します。",
        detailedDescription: "ユーザーインタビューや市場調査を通じて神大生のニーズを把握し、それを解決するアプリのアイデアを企画します。UI/UXデザインの設計から、技術的な実装方針の決定まで、プロダクト開発の基盤となる重要な工程です。"
    },
    {
        id: "dev",
        path: "/IMG_5471.jpg",
        alt: "アプリ開発のアイコン",
        title: "アプリ開発",
        description: "プログラミングを用いて、企画したアプリを実際に作ります。フロントエンド、バックエンド、モバイルアプリなど幅広い技術を活用します。",
        detailedDescription: "React、Next.js、React Native、Node.js、Python等の技術を使用してアプリを開発します。チーム開発の経験を積みながら、実際にユーザーに使ってもらえるプロダクトを作り上げます。"
    },
    {
        id: "pr",
        path: "/IMG_5473.jpg",
        alt: "広報活動のアイコン",
        title: "マーケティング・広報",
        description: "作ったアプリを神大生にとどけるための広報・渉外活動を行っています。SNS運用やイベント企画なども担当します。",
        detailedDescription: "開発したアプリの認知度向上と利用促進のため、SNSマーケティング、コンテンツ制作、イベント企画、他団体との連携など多角的なアプローチで活動しています。"
    },
];

// プロジェクト例
const projects = [
    {
        id: "project1",
        name: "神大生向け時間割アプリ",
        description: "神戸大学生のための時間割管理アプリ。履修登録から時間割確認まで一括管理できます。",
        status: "開発中",
        technologies: ["React Native", "Node.js", "PostgreSQL"]
    },
    {
        id: "project2",
        name: "サークル情報共有プラットフォーム",
        description: "神大のサークル・部活動の情報を一元化したプラットフォーム。新入生の部活選びをサポートします。",
        status: "企画段階",
        technologies: ["Next.js", "TypeScript", "Supabase"]
    },
    {
        id: "project3",
        name: "学食混雑予測アプリ",
        description: "AIを活用して学食の混雑状況を予測し、快適な食事時間を提供するアプリです。",
        status: "リリース済み",
        technologies: ["Python", "TensorFlow", "React"]
    }
];

export default function Activities() {
    return (
        <div className="flex flex-col items-center pt-32 mb-4">

            {/* ====== 活動内容概要セクション ====== */}
            <div className="w-full text-center mb-16">
                <SimpleHeading text="私たちの活動" />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4 mb-12">
                    A4では神戸大学生の学生生活をより便利にするアプリの企画から開発、リリースまでを一貫して行っています。
                </p>

                {/* 活動カード */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {activities.map((activity) => (
                        <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <ImageBox
                                path={activity.path}
                                alt={activity.alt}
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {activity.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {activity.description}
                                    </p>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {activity.detailedDescription}
                                    </p>
                                </div>
                            </ImageBox>
                        </div>
                    ))}
                </div>
            </div>

            {/* ====== プロジェクト例セクション ====== */}
            <div className="w-full text-center mb-16 max-w-6xl mx-auto px-4">
                <SimpleHeading text="プロジェクト例" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[var(--primary-color)]">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-bold text-gray-800">
                                    {project.name}
                                </h3>
                                <span className={`px-2 py-1 text-xs rounded-full ${project.status === 'リリース済み'
                                        ? 'bg-green-100 text-green-800'
                                        : project.status === '開発中'
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ====== 参加方法セクション ====== */}
            <div className="w-full text-center mb-16 max-w-4xl mx-auto px-4">
                <SimpleHeading text="参加してみませんか？" />
                <div className="bg-[var(--primary-color)] bg-opacity-10 rounded-lg p-8 mt-8">
                    <p className="text-lg text-gray-700 mb-6">
                        プログラミング経験は問いません！<br />
                        アイデア出しから実装まで、興味のある分野から始められます。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">企画・デザイン</h4>
                            <p className="text-sm text-gray-600">アイデア出しやUI/UXデザインに興味がある方</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">開発</h4>
                            <p className="text-sm text-gray-600">プログラミングを学びたい、実践したい方</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">マーケティング</h4>
                            <p className="text-sm text-gray-600">広報やマーケティングに関心がある方</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
