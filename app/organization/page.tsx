'use client';

import ImageBox from "../components/image_box";
import React from "react";
import SimpleHeading from "../components/simple_heading";
import DepartmentSection from "../components/department_section";

const activities = [
    {
        id: "meeting",
        path: "/IMG_5472.jpg",
        alt: "プロダクトの企画のアイコン",
        title: "プロダクトの企画",
        description: "神大生の学生生活をより便利にするアプリを企画・設計します",
    },
    {
        id: "dev",
        path: "/IMG_5471.jpg",
        alt: "アプリ開発のアイコン",
        title: "アプリ開発",
        description: "プログラミングを用いて、企画したアプリを実際に作ります",
    },
    {
        id: "pr",
        path: "/IMG_5473.jpg",
        alt: "広報活動のアイコン",
        title: "広報",
        description: "作ったアプリを神大生にとどけるための広報・渉外活動を行っています",
    },
]

// 部署データ
const departments = [
    {
        id: 'dev',
        name: "開発部",
        description: "神戸大学の学生生活をより便利に、より豊かにするためのアプリやウェブサービスを企画・設計・開発します。最新の技術トレンドを取り入れながら、ユーザーにとって本当に価値のあるサービスを開発することを目指しています。フロントエンド、バックエンド、モバイルアプリ開発など、幅広い技術領域でメンバーが協力し合い、学びながら成長できる環境を提供します。",
        imageSrc: "/IMG_5471.jpg",
        imageAlt: "開発部の活動風景"
    },
    {
        id: 'org',
        name: "組織管理部",
        description: "団体の活動が円滑に進むよう、ミーティング運営、イベント企画、メンバー間のコミュニケーション促進など、組織全体をサポートします。メンバーが最大限のパフォーマンスを発揮できるよう、働きやすい環境づくりや効率的なワークフローの構築に取り組んでいます。また、新メンバーの受け入れやオンボーディング、チームビルディング活動なども担当しています。",
        imageSrc: "/IMG_5472.jpg",
        imageAlt: "組織管理部の活動風景"
    },
    {
        id: 'marketing',
        name: "マーケティング部",
        description: "開発したプロダクトや団体の活動内容を、様々なチャネルを通じて神大生に広く届け、利用促進や認知度向上を目指します。SNSマーケティング、コンテンツ制作、イベント企画、ブランディングなど多角的なアプローチで、効果的な情報発信を行っています。データ分析に基づいた戦略立案により、ターゲットに響くメッセージを届けることを重視しています。",
        imageSrc: "/IMG_5473.jpg",
        imageAlt: "マーケティング部の活動風景"
    },
];

export default function Organization() {
    return (

        <div className="container mx-auto px-4 py-4 pt-18 mb-4">
            <SimpleHeading text="部署紹介" />


            <div className="mt-8">
                {departments.map((dept, index) => (
                    <DepartmentSection
                        key={dept.id}
                        name={dept.name}
                        description={dept.description}
                        imageSrc={dept.imageSrc}
                        imageAlt={dept.imageAlt}
                        reverse={index % 2 === 1} // 奇数番目は画像と文章を反転
                    />
                ))}
            </div>
        </div>
    );
}