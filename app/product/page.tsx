import ProductCard from '../components/product_card';
import SimpleHeading from '../components/simple_heading';

export default function ProductPage() {
    const products = [
        {
            productName: "えーごはん",
            productLink: "https://shindaihub-meal.vercel.app/restaurants",
            productImage: "/スクリーンショット 2025-06-16 093027.png",
            productDescription: "神戸大学周辺のお店を探せるアプリ。",
        },
        {
            productName: "えー授業",
            productLink: "https://shindaihub-class-front-deployment2.vercel.app/classes",
            productImage: "/スクリーンショット 2025-06-16 093245.png",
            productDescription: "神戸大学の授業レビューが見れるアプリ。",
        },
        {
            productName: "神大マップ",
            productLink: "https://kobe-uni-hub.vercel.app/campus-map",
            productImage: "/スクリーンショット 2025-06-16 093320.png",
            productDescription: "神戸大学のマップアプリ。棟を検索できます。",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-4 pt-18 mb-4">
            <SimpleHeading text="A4のアプリ一覧" />
            <div className="max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <div
                        key={product.productName}
                        className={`${index !== 0 ? 'border-t border-gray-200 pt-8' : ''} ${index !== products.length - 1 ? 'pb-8' : ''}`}
                    >
                        <ProductCard
                            productName={product.productName}
                            productLink={product.productLink}
                            productImage={product.productImage}
                            productDescription={product.productDescription}
                            reverse={index % 2 === 1} // 奇数番目のアイテムは逆順にする
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}