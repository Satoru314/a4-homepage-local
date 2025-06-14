import Image from "next/image";

export default function Product() {
    const apps = [
        {
            name: "タスク管理アプリ",
            description: "効率的なタスク管理をサポートするアプリです。",
            image: "/file.svg",
        },
        {
            name: "チャットアプリ",
            description: "リアルタイムでコミュニケーションが取れるチャットアプリ。",
            image: "/globe.svg",
        },
        {
            name: "学習支援アプリ",
            description: "学習を効率化するためのツールを提供します。",
            image: "/next.svg",
        },
        {
            name: "イベント管理アプリ",
            description: "イベントの計画と管理を簡単に行えるアプリ。",
            image: "/vercel.svg",
        },
        {
            name: "健康管理アプリ",
            description: "日々の健康を記録し、管理するためのアプリです。",
            image: "/window.svg",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center pt-32 mb-4">
            <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--secondary-color)' }}>
                サークルのプロダクト
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {apps.map((app, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={app.image}
                            alt={app.name}
                            width={100}
                            height={100}
                            className="mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {app.name}
                        </h2>
                        <p className="text-gray-600 text-center">
                            {app.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}