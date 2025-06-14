export default function Organization() {
    const values = [
        {
            title: "成長",
            description: "メンバー全員が技術的・個人的に成長できる環境を提供します。",
        },
        {
            title: "協力",
            description: "チームワークを重視し、互いに助け合いながら目標を達成します。",
        },
        {
            title: "創造",
            description: "新しいアイデアを形にし、価値あるプロダクトを生み出します。",
        },
        {
            title: "挑戦",
            description: "困難な課題にも果敢に挑戦し、限界を超える努力をします。",
        },
        {
            title: "楽しさ",
            description: "活動を楽しみながら、充実した時間を過ごします。",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center pt-32 mb-4">
            <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--secondary-color)' }}>私たちの価値観</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {value.title}
                        </h2>
                        <p className="text-gray-600 text-center">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}