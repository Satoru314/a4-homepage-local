export default function Footer() {
    return (
        <footer className="border-t-4" style={{ borderColor: 'var(--primary-color)', backgroundColor: 'var(--secondary-color)' }}>
            <div className="max-w-6xl mx-auto px-10 py-8">
                {/* メインコンテンツ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {/* ブランド情報 */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                            A4
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md">
                            革新的なアプリ開発で、<br />
                            学生生活をもっと豊かに。
                        </p>
                    </div>

                    {/* ナビゲーション */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">
                            サイトマップ
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/home"
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    ホーム
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/product"
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    アプリを使う
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/organization"
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    団体紹介
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    お問い合わせ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* SNSリンク */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">
                            関連リンク
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'white'
                                }}
                                aria-label="Twitter"
                            >
                                {/* Twitterアイコン（後で画像に置き換え可能） */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'white'
                                }}
                                aria-label="Instagram"
                            >
                                {/* Instagramアイコン（後で画像に置き換え可能） */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.151 14.894 3.661 13.743 3.661 12.446s.49-2.448 1.465-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.239-3.323 1.239zm7.83-9.608c-.807 0-1.239-.49-1.239-1.297s.432-1.297 1.239-1.297 1.297.49 1.297 1.297-.49 1.297-1.297 1.297zm3.554 9.608c-1.297 0-2.448-.49-3.323-1.297-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.239-3.323 1.239z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 下部ボーダーとコピーライト */}
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} 学生団体A4. All rights reserved.
                        </p>
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <span className="text-gray-400 text-xs">
                                Innovation meets student life
                            </span>
                            <div className="flex items-center space-x-1">
                                <span className="text-gray-400 text-xs">Developed by A4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}