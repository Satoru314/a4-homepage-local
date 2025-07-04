import ImageBox from "../components/image_box";
import SimpleHeading from "../components/simple_heading";
import HeroButton from "../components/hero_button";
import DepartmentSection from "../components/department_section";
import HeroImage from "../components/hero_image";

const activities = [
  {
    id: "meeting",
    path: "/IMG_5472.jpg",
    alt: "アプリ開発",
    title: "アプリ制作",
    description: "神大生向けアプリの企画・開発・広報をサークル内で一貫して行っています。",
  },
  {
    id: "dev",
    path: "/IMG_5471.jpg",
    alt: "アプリ開発のアイコン",
    title: "勉強会",
    description: "プログラミングやマーケティングのスキルを向上させるための勉強会を定期的に開催しています。",
  },
  {
    id: "pr",
    path: "/IMG_5473.jpg",
    alt: "広報活動のアイコン",
    title: "全体ミーティング",
    description: "部署ごとの進捗共有やアプリの企画を行っています。",
  },
]

const departments = [
  {
    id: 'dev',
    name: "開発部",
    description: "神戸大学の学生生活をより便利に、より豊かにするためのアプリやウェブサービスを企画・設計・開発します。最新の技術トレンドを取り入れながら、ユーザーにとって本当に価値のあるサービスを開発することを目指しています。フロントエンド、バックエンド、モバイルアプリ開発など、幅広い技術領域でメンバーが協力し合い、学びながら成長できる環境を提供します。",
    imageSrc: "/IMG_5471.jpg",
    imageAlt: "開発部の活動風景",
    link: "/organization#dev"
  },
  {
    id: 'org',
    name: "組織管理部",
    description: "団体の活動が円滑に進むよう、ミーティング運営、イベント企画、メンバー間のコミュニケーション促進など、組織全体をサポートします。メンバーが最大限のパフォーマンスを発揮できるよう、働きやすい環境づくりや効率的なワークフローの構築に取り組んでいます。また、新メンバーの受け入れやオンボーディング、チームビルディング活動なども担当しています。",
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

const heroImages = [
  { src: "/IMG_5474.jpg", alt: "A4の活動風景 1" },
  { src: "/IMG_5471.jpg", alt: "A4の活動風景 2" },
  { src: "/IMG_5472.jpg", alt: "A4の活動風景 3" },
  { src: "/IMG_5473.jpg", alt: "A4の活動風景 4" },
  { src: "/IMG_5475.jpg", alt: "A4の活動風景 5" },
  { src: "/IMG_5476.jpg", alt: "A4の活動風景 6" },
];

export default function Home() {
  return (
    <div className="relative w-full">
      {/* ヒーローセクション */}
      <div className="flex flex-col lg:flex-row lg:h-screen relative">
        <div className="w-full lg:w-1/3 flex items-center justify-center lg:p-8 order-2 lg:order-1 lg:min-h-auto">
          <div className="text-center lg:text-left max-w-md mt-8">
            <h1 className="hidden lg:block text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight">
              神大生に<br />最高の<br />学生生活を。
            </h1>
            <HeroButton href="#about" className="hidden lg:block">
              団体について知る
            </HeroButton>
          </div>
        </div>

        <HeroImage
          images={heroImages}
          priority
          intervalMs={4000}
        />
      </div>

      {/* 団体紹介セクション */}
      <div id="about" className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-16 relative">
        <SimpleHeading text="学生団体A4とは" />
        <p className="text-base sm:text-lg text-gray-500 text-center max-w-2xl mb-6 sm:mb-8">
          何をしている団体なの？
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-6 sm:pb-8 lg:pb-16">
          {activities.map((activity) => (
            <ImageBox
              key={activity.id}
              path={activity.path}
              alt={activity.alt}
            >
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2">{activity.title}</h2>
              <p className="text-gray-900 text-sm sm:text-base">{activity.description}</p>
            </ImageBox>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 lg:gap-8">
          <p className="text-base sm:text-base lg:text-lg text-gray-700 text-center lg:text-left">
            <span className="text-base sm:text-lg lg:text-xl font-medium">メンバーみんなで協力してアプリを制作しています！</span>
          </p>
          <HeroButton href="/product" className="lg:mt-0">
            アプリを使ってみる
          </HeroButton>
        </div>
      </div>
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

      <div className="w-full text-center mb-16">
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
              link={dept.link}
            />
          ))}
        </div>
      </div>

      <SimpleHeading text="活動情報" />

      {/* 活動日程セクション */}
      <div className="w-full mx-auto px-4 mb-16 max-w-6xl">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">定期活動</h4>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium mb-1 sm:mb-0">全体ミーティング</span>
                  <span className="text-gray-600 text-sm sm:text-base">毎週水曜日 17:00-19:00</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium mb-1 sm:mb-0">部署別作業会</span>
                  <span className="text-gray-600 text-sm sm:text-base">隔週で実施</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">今後の予定</h4>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-green-50 rounded">
                  <span className="font-medium mb-1 sm:mb-0">夏合宿</span>
                  <span className="text-gray-600 text-sm sm:text-base">8月予定</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-yellow-50 rounded">
                  <span className="font-medium mb-1 sm:mb-0">六甲祭出展</span>
                  <span className="text-gray-600 text-sm sm:text-base">10月予定</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-blue-50 rounded">
                  <span className="font-medium mb-1 sm:mb-0">新歓イベント</span>
                  <span className="text-gray-600 text-sm sm:text-base">4月予定</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-4 mb-16 max-w-6xl">
        <div className="mt-8 sm:mt-12 lg:mt-16 w-full flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
          <div className="w-full md:w-1/2 h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204.94774605679828!2d135.2340499!3d34.7262619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008c1099500001%3A0x98e427ff38944988!2z5a2m6KGT44O755Sj5qWt44Kk44OO44OZ44O844K344On44Oz5Ym16YCg5pys6YOo!5e0!3m2!1sen!2sjp!4v1749961311795!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of the location"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 p-6 sm:p-8 bg-gray-100 flex flex-col justify-center">
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-medium  leading-relaxed">全体ミーティングを学術・産業イノベーション創造本部のダイセルOIホールで行っています。</p>
          </div>
        </div>
      </div>

    </div>
  );
}