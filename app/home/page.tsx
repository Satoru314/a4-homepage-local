import Image from "next/image";
import ImageBox from "../components/image_box";
import SimpleHeading from "../components/simple_heading";

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
      {/* <div className="relative flex flex-col h-screen">
        <Image
          src="/IMG_5474.jpg"
          alt="Main Image"
          fill
          className="top-0 left-0 object-cover z-0"
        />
      </div> */}
      {/* ====== ここから修正部分 ====== */}
      {/* 画像(2/3)とテキストボックス(1/3)を横並びにするセクション */}
      {/* h-screenで高さを画面いっぱいに設定、mdサイズ以上で横並び(flex-row)、モバイルでは縦並び(flex-col) */}
      <div className="flex flex-col md:flex-row h-screen">

        {/* テキストボックス部分（左側に配置したいので先に記述） */}
        {/* モバイルでは幅いっぱい、mdサイズ以上で幅1/3 */}
        <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-gray-100">
          {/* テキスト内容のコンテナ。必要に応じてスタイルを調整してください。 */}
          <div className="text-center md:text-left"> {/* モバイルでは中央寄せ、md以上で左寄せ */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">神大生に<br />よりよい<br />学生生活を。</h1> {/* 例：タイトル */}
            {/* 例：さらに詳細な情報や募集に関するボタンなどを追加 */}
            {/* <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              詳しく見る
            </button> */}
          </div>
        </div>

        {/* 画像部分（右側に配置したいので後に記述） */}
        {/* モバイルでは幅いっぱい、mdサイズ以上で幅2/3 */}
        {/* relativeとh-fullは、Image fillプロパティが正しく機能するために必要 */}
        <div className="w-full md:w-2/3 relative h-full">
          <Image
            src="/IMG_5474.jpg" // 表示したい画像のパス
            alt="メインビジュアル：学生団体A4の活動風景など" // altテキストは具体的に
            fill // 親要素いっぱいに画像を広げる
            className="object-cover z-0" // アスペクト比を維持しつつコンテナを埋める
          />
          {/* 画像の上に重ねたい要素があればここに追加 */}
        </div>
      </div>
      {/* ====== 修正部分ここまで ====== */}

      <div className="flex flex-col items-center justify-center p-16 relative ">
        <SimpleHeading text="学生団体A4とは" />
        <p className="text-lg text-gray-500 text-center max-w-2xl mb-8">
          何をしてる団体？
        </p>
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
        <SimpleHeading text="活動情報" />
        <div >
          <div className="mt-16 w-full h-96 flex">

            <div className="w-full md:w-1/2 h-64 md:h-auto"> {/* 親の高さは h-64 (モバイル) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204.94774605679828!2d135.2340499!3d34.7262619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008c1099500001%3A0x98e427ff38944988!2z5a2m6KGT44O755Sj5qWt44Kk44OO44OZ44O844K344On44Oz5Ym16YCg5pys6YOo!5e0!3m2!1sen!2sjp!4v1749961311795!5m2!1sen!2sjp"
                width="100%"   // 親要素に合わせる
                height="100%"  // 親要素に合わせる (この場合は h-64 が適用される)
                style={{ border: 0 }} // JSXのstyleオブジェクト形式
                allowFullScreen  // キャメルケース
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // キャメルケース
                title="Google Map of the location" // title属性を追加することを推奨
              ></iframe>
            </div>
            <div className="flex-1 h-full p-4 bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">アクセス情報</h2>
              <p className="text-gray-700">全体ミーティングは学術・産業イノベーション創造本部のダイセルOIホールを借りて行っています。</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}