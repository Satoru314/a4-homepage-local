import SimpleHeading from "./simple_heading";

const news = [
    {
        id: 1,
        date: "2025.7.20",
        category: "お知らせ",
        title: "A4のホームページを作成しました。",
        description: "学生団体A4の公式ホームページを作成しました。今後、活動内容やイベント情報などを掲載していきます。"
    },
    {
        id: 2,
        date: "2025.7.20",
        category: "リリース",
        title: "えー授業をリリースしました。",
        description: "神戸大学の授業レビューを検索できるアプリ、えー授業をリリースしました。ぜひご利用ください。"
    }
];

export default function NewsSection() {
    // 投稿が1ヶ月以内かどうかをチェックする関数
    const currentDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(currentDate.getMonth() - 1); // 1ヶ月前の日付
    const isRecent = (dateString: string) => {
        const postDate = new Date(dateString.replace(/\./g, '-')); // YYYY.MM.DD形式をYYYY-MM-DD形式に変換
        return postDate >= oneMonthAgo;
    };

    return (
        <div className="w-full py-8">
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
                                        {isRecent(item.date) && (
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
