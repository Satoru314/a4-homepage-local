// ProductCard.tsx
import Image from "next/image";

interface ProductCardProps {
    productName: string;
    productLink: string;
    productImage: string; // 画像のURLまたはパス
    productDescription: string;
}

export default function ProductCard({
    productName,
    productLink,
    productImage,
    productDescription,
}: ProductCardProps) {
    return (
        <a
            href={productLink}
            target="_blank" // 新しいタブで開く (外部リンクの場合)
            rel="noopener noreferrer"
            className=" bg-white rounded-lg shadow-lg 
        hover:shadow-xl transition-all duration-300 
        overflow-hidden group h-full flex flex-col
      "
        >
            <div className="relative w-full aspect-video overflow-hidden">
                <Image
                    src={productImage}
                    alt={`プロダクト「${productName}」の画像`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {productName}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {productDescription}
                </p>
            </div>
        </a>
    );
}