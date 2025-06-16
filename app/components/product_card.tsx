// ProductCard.tsx

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
            rel="noopener noreferrer" // セキュリティ対策
            className=" bg-white rounded-lg shadow-lg 
        hover:shadow-xl transition-all duration-300 
        overflow-hidden group h-full flex flex-col
      "
        // block: aタグをブロック要素にし、幅や高さを扱えるように
        // overflow-hidden: 画像の角丸などがはみ出ないように
        // group: 子要素でのホバーエフェクト（例: 画像の拡大）に使用
        // h-full: 親がGridでitems-stretchの場合、高さを揃えるのに役立ちます
        // flex flex-col: カード内部のレイアウトを縦方向にFlexboxで制御
        >
            {/* 画像セクション */}
            <div className="relative w-full aspect-video overflow-hidden">
                {/* aspect-video: 一般的な16:9のアスペクト比を維持します。他の比率なら aspect-square や aspect-[4/3] など */}
                <img
                    src={productImage}
                    alt={`プロダクト「${productName}」の画像`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                // object-cover: アスペクト比を保ったままコンテナを埋めます
                // group-hover:scale-105: カードホバー時に画像を少し拡大するエフェクト (オプション)
                />
            </div>

            {/* コンテンツセクション */}
            <div className="p-6 flex-grow flex flex-col">
                {/* flex-grow: このセクションが残りの高さを埋めるようにします */}
                {/* flex flex-col: 内部要素を縦に並べます */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {productName}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {/* 
            line-clamp-3: 説明文を最大3行で表示し、それ以上は省略（...）します。
            (Tailwind CSS v3.3以降で標準サポート、それ以前は @tailwindcss/line-clamp プラグインが必要)
            行数を変更したい場合は line-clamp-4 などに変更してください。
          */}
                    {productDescription}
                </p>
                {/* 
          カード全体がリンクなので、ここに追加の「詳細を見る」ボタンは通常不要です。
          もしデザイン上、明示的なCTAが欲しい場合はコメントアウトを解除して調整してください。
        <div className="mt-auto pt-4">
          <span className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            詳しく見る →
          </span>
        </div>
        */}
            </div>
        </a>
    );
}