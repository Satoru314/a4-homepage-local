import Image from "next/image";
import ImageBox from "../components/image_box";
import SimpleHeading from "../components/simple_heading";

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

export default function Home() {
  return (
    <div className="relative w-full">
      {/* ヒーローセクション */}
      <div className="flex flex-col lg:flex-row lg:h-screen">
        <div className="w-full lg:w-1/3 flex items-center justify-center lg:p-8 bg-gray-100 order-2 lg:order-1 lg:min-h-auto">
          <div className="text-center lg:text-left max-w-md">
            <h1 className="hidden lg:block text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 text-gray-800 leading-tight">
              神大生に<br />最高の<br />学生生活を。
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-2/3 relative h-64 sm:h-80 lg:h-screen order-1 lg:order-2">
          <Image
            src="/IMG_5474.jpg"
            alt="A4の活動風景"
            fill
            className="object-cover z-0"
            priority
          />
        </div>
      </div>

      {/* 団体紹介セクション */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-16 relative">
        <SimpleHeading text="学生団体A4とは" />
        <p className="text-base sm:text-lg text-gray-500 text-center max-w-2xl mb-6 sm:mb-8">
          何をしてる団体？
        </p>
        <div className="border-2 border-gray-300 rounded-lg p-4 sm:p-6 lg:p-8 mt-6 sm:mt-8 max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-6 sm:pb-8 lg:pb-16">
            {activities.map((activity) => (
              <ImageBox
                key={activity.id}
                path={activity.path}
                alt={activity.alt}
              >
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2">{activity.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{activity.description}</p>
              </ImageBox>
            ))}
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 text-center">
            <span className="text-base sm:text-lg lg:text-xl font-medium">私たちは神戸大学のサークル、A4です。アプリの企画・開発・広報を一貫して行っています。</span>
          </p>
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