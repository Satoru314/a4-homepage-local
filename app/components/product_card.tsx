// ProductCard.tsx
import Image from "next/image";
import React from "react";

interface ProductCardProps {
    productName: string;
    productLink: string;
    productImage: string; // 画像のURLまたはパス
    productDescription: React.ReactNode;
    reverse?: boolean; // 画像と文章の順序を反転させるオプション
}

export default function ProductCard({
    productName,
    productLink,
    productImage,
    productDescription,
    reverse = false,
}: ProductCardProps) {
    return (
        <a
            href={productLink}
            target="_blank" // 新しいタブで開く (外部リンクの場合)
            rel="noopener noreferrer"
            className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} h-full`}>
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-gray-200 group cursor-pointer">
                        <Image
                            src={productImage}
                            alt={`プロダクト「${productName}」の画像`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 relative inline-block">
                        {productName}
                        <div className="absolute bottom-0 -left-2 -right-2 h-0.5 bg-[var(--primary-color)] rounded-full"></div>
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        {productDescription}
                    </p>
                </div>
            </div>
        </a>
    );
}