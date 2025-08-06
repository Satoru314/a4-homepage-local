import SimpleHeading from "./simple_heading";
import DepartmentSection from "./department_section";

const departments = [
    {
        id: 'dev',
        name: "開発部",
        description: `プログラミングを用いて、アプリを開発している部署です。設計からリリースまでを一貫して行っています。`,
        imageSrc: "/IMG_5471.jpg",
        imageAlt: "開発部の活動風景",
        link: "/organization#dev"
    },
    {
        id: 'org',
        name: "組織管理部",
        description: `組織開発という分野を実践していく部署です。メンバーの活動を支援し、組織の運営を円滑にするための施策を考えています。`,
        imageSrc: "/IMG_5472.jpg",
        imageAlt: "組織管理部の活動風景",
        link: "/organization#org"
    },
    {
        id: 'mkt',
        name: "マーケティング部",
        description: "アプリの宣伝や広報活動を行う部署です。SNSやイベントを通じて、A4の活動を広めています。",
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
