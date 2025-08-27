import HeroButton from "./hero_button";
import HeroImage from "./hero_image";

const heroImages = [
    { src: "/IMG_5474.jpg", alt: "A4の活動風景 1" },
    { src: "/IMG_5471.jpg", alt: "A4の活動風景 2" },
    { src: "/IMG_5472.jpg", alt: "A4の活動風景 3" },
    { src: "/IMG_5473.jpg", alt: "A4の活動風景 4" },
    { src: "/IMG_5475.jpg", alt: "A4の活動風景 5" },
    { src: "/IMG_5476.jpg", alt: "A4の活動風景 6" },
];

export default function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row md:h-screen relative">
            <div className="w-full md:w-1/3 flex items-center justify-center md:p-8 order-2 md:order-1 md:min-h-auto">
                <div className="text-center md:text-left max-w-md mt-8">
                    <h1 className="hidden md:block text-3xl sm:text-4xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
                        神大生に<br />最高の<br />学生生活を。
                    </h1>
                    <HeroButton href="#about" className="hidden md:block">
                        団体について知る
                    </HeroButton>
                </div>
            </div>

            <HeroImage
                images={heroImages}
                priority
                intervalMs={4000}
            />

            {/* スマホ用オーバーレイテキスト */}
            <div className="md:hidden absolute inset-0 flex items-center justify-center">
                <div className="border-2 border-white p-6 flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-white text-center mb-4" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', height: '200px' }}>
                        神大生に最高の 学生生活を。
                    </h1>
                </div>
            </div>
        </div>
    );
}
