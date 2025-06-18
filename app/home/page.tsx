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
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-gray-100">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">神大生に<br />よりよい<br />学生生活を。</h1>
          </div>
        </div>

        <div className="w-full md:w-2/3 relative h-full">
          <Image
            src="/IMG_5474.jpg"
            alt="A4の活動風景"
            fill
            className="object-cover z-0"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-16 relative ">
        <SimpleHeading text="学生団体A4とは" />
        <p className="text-lg text-gray-500 text-center max-w-2xl mb-8">
          何をしてる団体？
        </p>
        <div className="border-2 border-gray-300 rounded-lg p-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {activities.map((activity) => (
              <ImageBox
                key={activity.id}
                path={activity.path}
                alt={activity.alt}

              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h2>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </ImageBox>
            ))}
          </div>
          <p className="text-lg text-gray-700">
            <span className="text-xl font-medium">私たちは神戸大学のサークル、A4です。神大生の学生生活を便利にする、アプリの企画・開発・広報を一貫して行っています。</span>
          </p>
        </div>

      </div>
      <SimpleHeading text="活動情報" />
      <div >
        <div className="mt-16 w-full h-96 flex">

          <div className="w-full md:w-1/2 h-64 md:h-auto">
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
          <div className="flex-1 h-full p-4 bg-gray-100">
            <h2 className="text-xl font-semibold mb-4">アクセス情報</h2>
            <p className="text-gray-700">全体ミーティングは学術・産業イノベーション創造本部のダイセルOIホールを借りて行っています。</p>
          </div>
        </div>
      </div>

    </div>
  );
}