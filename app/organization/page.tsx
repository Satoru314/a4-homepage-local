'use client';

import React from "react";
// SimpleHeading コンポーネントがあれば、インポートして使えます。
// 例: import SimpleHeading from "../components/simple_heading";

// 部署データ
const departments = [
    {
        id: 'dev',
        name: "開発部",
        description: "神戸大学の学生生活をより便利に、より豊かにするためのアプリやウェブサービスを企画・設計・開発します。",
    },
    {
        id: 'org',
        name: "組織管理部",
        description: "団体の活動が円滑に進むよう、ミーティング運営、イベント企画、メンバー間のコミュニケーション促進など、組織全体をサポートします。",
    },
    {
        id: 'marketing',
        name: "マーケティング部",
        description: "開発したプロダクトや団体の活動内容を、様々なチャネルを通じて神大生に広く届け、利用促進や認知度向上を目指します。",
    },
];

export default function Organization() {
    // 既存の価値観データ
    const values = [
        {
            title: "成長",
            description: "技術的なスキルだけでなく、問題解決能力や協調性など、多様な側面での成長を促す環境です。",
        },
        {
            title: "協力",
            description: "部署や学年を超えてフラットな関係性で連携し、互いの知識や経験を共有しながら共に目標達成を目指します。",
        },
        {
            title: "創造",
            description: "既成概念にとらわれず、自由な発想で新しいアイデアを生み出し、それを形にするプロセスを楽しみます。",
        },
        {
            title: "挑戦",
            description: "新しい技術や未知の課題に対しても臆することなく取り組み、失敗を恐れずに一歩踏み出すことを大切にします。",
        },
        {
            title: "楽しさ",
            description: "真剣に活動に取り組むのはもちろんですが、何よりも活動自体を楽しむこと、そしてメンバーとの交流を通じて充実した時間を過ごすことを重視します。",
        },
    ];

    return (
        <div className="flex flex-col items-center pt-32 mb-4"> {/* 全体の外側コンテナ */}


            {/* ====== 部署紹介セクション ====== */}
            <div className="w-full text-center mx-auto max-w-4xl px-4 mb-16">
                {/* SimpleHeading があれば以下のコメントアウトを外し、置き換えてください */}
                {/* <SimpleHeading text="部署紹介" /> */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                    部署紹介
                </h2>
                {/* 部署カードのグリッドレイアウト */}
                {/* grid-cols-1: スマホで1列, md:grid-cols-3: mdサイズ以上で3列 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {departments.map((dept) => (
                        <div
                            key={dept.id} // keyは一意なidを使うのがベスト
                            className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {dept.name}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {dept.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* ========================== */}


            {/* ====== 私たちの価値観セクション (既存コードをベースに調整) ====== */}
            {/* mx-auto: 中央寄せ, max-w-4xl: 最大幅を設定, px-4: 左右パディング */}
            <div className="w-full text-center mx-auto max-w-4xl px-4">
                {/* SimpleHeading があれば以下のコメントアウトを外し、置き換えてください */}
                {/* <SimpleHeading text="私たちの価値観" /> */}
                {/* 元のstyle属性をTailwindクラスに置き換え */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                    私たちの価値観
                </h2>
                {/* 価値観カードのグリッドレイアウト */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index} // ここはindexでも問題ないが、idがあればそちらが良い
                            className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center"
                        >
                            {/* 必要であればここに価値観アイコンなどを追加 */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 text-center">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}