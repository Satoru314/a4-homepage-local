import SimpleHeading from "./simple_heading";
import DepartmentSection from "./department_section";

const departments = [
    {
        id: 'dev',
        name: "開発部",
        description: `神戸大学の学生生活をより便利にするアプリを、プログラミングを用いて制作しています。
    `,
        imageSrc: "/IMG_5471.jpg",
        imageAlt: "開発部の活動風景",
        link: "/organization#dev"
    },
    {
        id: 'org',
        name: "組織管理部",
        description: `「組織開発」という分野の知識を応用しながらA4のメンバーが最大限実力を活躍し、最高のプロダクトを制作できるように働きかける部署です。
物事の本質を考え抜き、大胆に行動することが特徴です！
「考える」に対してより深く理解し、根気強く行動する人の育成を目指しています。`,
        imageSrc: "/IMG_5472.jpg",
        imageAlt: "組織管理部の活動風景",
        link: "/organization#org"
    },
    {
        id: 'mkt',
        name: "マーケティング部",
        description: "開発したプロダクトや団体の活動内容を、様々なチャネルを通じて神大生に広く届け、利用促進や認知度向上を目指します。SNSマーケティング、コンテンツ制作、イベント企画、ブランディングなど多角的なアプローチで、効果的な情報発信を行っています。データ分析に基づいた戦略立案により、ターゲットに響くメッセージを届けることを重視しています。",
        imageSrc: "/IMG_5473.jpg",
        imageAlt: "マーケティング部の活動風景",
        link: "/organization#mkt"
    },
];

export default function DepartmentsSection() {
    return (
        <div className="w-full text-center">
            <SimpleHeading text="部署紹介" />

            <div>
                {departments.map((dept, index) => (
                    <DepartmentSection
                        key={dept.id}
                        name={dept.name}
                        description={dept.description}
                        imageSrc={dept.imageSrc}
                        imageAlt={dept.imageAlt}
                        reverse={index % 2 === 1} // 奇数番目は画像と文章を反転
                        link={dept.link}
                    />
                ))}
            </div>
        </div>
    );
}
