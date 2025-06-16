import ProductCard from '../components/product_card';
import SimpleHeading from '../components/simple_heading';

export default function ProductPage() {
    const products = [
        {
            productName: "えーご飯",
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
        <div className="container mx-auto px-4 py-8 pt-20 sm:pt-32 mb-4">
            <SimpleHeading text="A4のサービス一覧" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {products.map((product) => (
                    <ProductCard
                        key={product.productName} // product.name を productName に合わせる
                        productName={product.productName}
                        productLink={product.productLink}
                        productImage={product.productImage}
                        productDescription={product.productDescription}
                    />
                ))}
            </div>
        </div>
    );
}