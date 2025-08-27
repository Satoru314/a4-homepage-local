import SimpleHeading from "./simple_heading";
import HeroButton from "./hero_button";

export default function AboutSection() {
    return (
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 relative">
            <div id="about" className="absolute -top-10"></div>
            <SimpleHeading text="学生団体A4とは" />

            {/* 画像とテキストのセクション */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 max-w-6xl mb-8">
                <div className="w-full md:w-1/2">
                    <img
                        src="/IMG_5474_trimming.jpg"
                        alt="A4の活動風景"
                        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full md:w-1/2 text-left">
                    <h3 className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                        <br />私たちは作りたいものを作るのではなく、<br />
                        神大生にとって価値のあるものを作ります。<br />
                        <br />
                        神大生が抱える課題について考え、<br />
                        その課題を解決できるアプリを作る。<br />
                        作ったアプリを宣伝し、ユーザーに届ける。<br /><br />
                        つまり、企画・開発・広報を一貫してチームで行うサークルがA4です。
                    </h3>
                    <HeroButton href="/product" className="mt-6 text-center md:text-left mx-auto md:mx-0">
                        アプリを使ってみる
                    </HeroButton>
                </div>
            </div>
        </div>
    );
}
