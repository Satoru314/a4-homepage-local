"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const [isTop, setIsTop] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // コンポーネントがマウントされたことを記録
        setMounted(true);

        // 初期スクロール位置をチェック
        setIsTop(window.scrollY === 0);

        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isHomePage = pathname === "/home";
    const isTransparent = mounted && isHomePage && isTop && !isMenuOpen;


    return (
        <header
            className={`fixed flex items-center justify-between w-full px-4 py-4 md:py-3 border-b-4 transition-all duration-300 h-16 md:h-auto ${isTransparent ? "bg-transparent" : "bg-white"}`}
            style={{
                borderColor: "var(--primary-color)",
                zIndex: 50,
            }}
        >
            <a href="/home" >
                <div className="flex items-center space-x-2">
                    <Image
                        src="/a4_logo_white_back.png"
                        alt="A4ロゴ"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <h1
                        className={`text-xl font-bold
                        ${isTransparent ? "text-white lg:text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"}
                        `}
                    >
                        学生団体A4
                    </h1>
                </div>
            </a>
            <nav
                className="hidden md:block"
                style={{ color: isTransparent ? "#ffffff" : "var(--secondary-color)" }}
            >
                <ul className="flex space-x-4">
                    <li>
                        <a href="/home" className="block py-2">ホーム</a>
                    </li>
                    <li>
                        <a href="/home#about" className="block py-2">団体について</a>
                    </li>
                    <li>
                        <a href="/organization" className="block py-2">部署紹介</a>
                    </li>
                    <li>
                        <a
                            href="/product"
                            className="px-3 py-2 rounded-md block"
                            style={{ backgroundColor: "color-mix(in srgb, var(--primary-color) 50%, transparent)" }}
                        >
                            アプリ一覧
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="block py-2">お問い合わせ</a>
                    </li>
                </ul>
            </nav>

            {/* ハンバーガーメニューボタン */}
            <button
                className="md:hidden w-8 h-8 flex flex-col justify-center space-y-1 p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="メニューを開く"
                style={{ color: isTransparent ? "#ffffff" : "var(--secondary-color)" }}
            >
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* モバイルメニュー */}
            {
                isMenuOpen && (
                    <>
                        {/* 背景オーバーレイ */}
                        <div
                            className="fixed inset-0 bg-opacity-50 md:hidden"
                            style={{ zIndex: 30, backgroundColor: "transparent" }}
                            onClick={() => setIsMenuOpen(false)}
                        ></div>

                        <nav
                            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-b-2"
                            style={{
                                borderColor: "var(--primary-color)",
                                zIndex: 40
                            }}
                        >
                            <ul className="flex flex-col">
                                <li>
                                    <a
                                        href="/home"
                                        className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors text-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        ホーム
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/home#about"
                                        className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors text-lg border-t border-gray-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        団体について
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/organization"
                                        className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors text-lg border-t border-gray-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        部署紹介
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/product"
                                        className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors text-lg border-t border-gray-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        アプリ一覧
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors text-lg border-t border-gray-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        お問い合わせ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </>
                )
            }
        </header >
    );
}