import SimpleHeading from "./simple_heading";

const news = [
    {
        id: 1,
        date: "2025.06.20",
        category: "お知らせ",
        title: "夏合宿の詳細が決定しました",
        description: "今年の夏合宿は8月15日〜17日に兵庫県淡路島で開催予定です。開発集中期間とチームビルディングを予定しています。",
        isNew: true
    },
    {
        id: 2,
        date: "2025.06.15",
        category: "イベント",
        title: "新メンバー歓迎会を開催しました",
        description: "6月の新メンバー歓迎会が無事終了しました。新しい仲間とともにA4の活動がさらに活発になりそうです。",
        isNew: true
    },
    {
        id: 3,
        date: "2025.06.10",
        category: "リリース",
        title: "神大生向け時間割アプリをアップデートしました",
        description: "バグ修正と新機能を追加したv2.1をリリースしました。より使いやすくなった時間割管理をお試しください。",
        isNew: false
    },
    {
        id: 4,
        date: "2025.06.05",
        category: "お知らせ",
        title: "組織管理部の新体制がスタートしました",
        description: "組織管理部に新しいリーダーが就任し、より効率的な運営体制を構築していきます。",
        isNew: false
    }
];

export default function NewsSection() {
    return (
        <div className="w-full py-6 sm:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <SimpleHeading text="ニュース" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {news.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="p-3 sm:p-4">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-xs text-gray-500">{item.date}</span>
                                    <div className="flex items-center gap-1">
                                        <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${item.category === 'お知らせ' ? 'bg-blue-100 text-blue-700' :
                                            item.category === 'イベント' ? 'bg-green-100 text-green-700' :
                                                'bg-purple-100 text-purple-700'
                                            }`}>
                                            {item.category}
                                        </span>
                                        {item.isNew && (
                                            <span className="bg-red-500 text-white px-1 py-0.5 rounded-full text-xs font-bold">
                                                NEW
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1.5 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
