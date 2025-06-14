import Image from "next/image";

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
        <h2 className="font-bold p-16 mb-4 text-3xl sm:text-4xl text-center tracking-widest border-b-2 border-gray-300 pb-2">
          学生団体A4とは
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-8">
          神大生によりよい学生生活を送ってもらうことを目的とした団体です。<br />
          様々なWEBアプリを企画・開発し、神大生に届けています。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">プログラミング</h2>
            <p className="text-gray-600 text-center">神大生の学生生活を手助けする、WEBアプリケーションを開発しています。</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">広報</h2>
            <p className="text-gray-600 text-center">アプリをより良いものにし、神大生にとどけるための広報活動・渉外活動を行っています。</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">勉強会</h2>
            <p className="text-gray-600 text-center">部署ごとに集まって、学んだことを共有する勉強会を隔週で開催しています。</p>
          </div>
        </div>
        <div className="pt-8">

          <h2 className="font-bold p-16 mb-4 text-3xl sm:text-4xl text-center tracking-widest border-b-2 border-gray-300 pb-2">
            活動情報
          </h2>
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
              <p className="text-gray-700">神戸大学のキャンパスは、六甲山のふもとに位置し、美しい自然に囲まれています。公共交通機関を利用して簡単にアクセスできます。</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}