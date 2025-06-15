import Image from "next/image";
import ImageBox from "../components/imageBox";
import SimpleHeading from "../components/simpleHeading";

const activities = [
  {
    id: "appdev",
    path: "/IMG_5472.jpg",
    alt: "アプリ開発のアイコン",
    title: "アプリ開発",
    description: "神戸大学生向けの、便利なアプリを作っています",
  },
  {
    id: "pr",
    path: "/IMG_5473.jpg",
    alt: "広報活動のアイコン",
    title: "広報",
    description: "作ったアプリ神大生にとどけるための広報活動・渉外活動を行っています",
  },
  {
    id: "studysession",
    path: "/IMG_5471.jpg", // 画像パス (publicフォルダからの相対パスなど)
    alt: "勉強会のアイコン",
    title: "勉強会",
    description: "部署ごとに集まって、学んだことを共有する勉強会を隔週で開催しています",
  },
]

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="relative flex flex-col h-screen">
        <Image
          src="/IMG_5474.jpg"
          alt="Main Image"
          fill
          className="top-0 left-0 object-cover z-0"
        />
      </div>

      <div className="flex flex-col items-center justify-center p-16 relative ">
        <SimpleHeading text="学生団体A4とは" />
        <p className="text-lg text-gray-500 text-center max-w-2xl mb-8">
          何をしてる団体？
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {activities.map((activity) => (
            <ImageBox
              path={activity.path}
              alt={activity.alt}

            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h2>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </ImageBox>
          ))}

        </div>
        <SimpleHeading text="活動情報" />
        <div >
          <div className="mt-16 w-full h-96 flex">

            <div className="flex-1 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.456789123456!2d135.67890123!3d34.56789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000abcdef123456%3A0xabcdef123456789!2sKobe%20University%20Headquarters%20for%20Academic%20and%20Industrial%20Innovation!5e0!3m2!1sen!2sjp!4v1234567890123!5m2!1sen!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex-1 h-full p-4 bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">アクセス情報</h2>
              <p className="text-gray-700">全体ミーティングをダイセルOIホール、作業会を学生会館・グループ学習室で行っています。</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}