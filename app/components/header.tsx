"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isTop, setIsTop] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHomePage = pathname === "/home";

    return (
        <header
            className="fixed flex items-center justify-between w-full p-4 border-b-4 transition-colors duration-300"
            style={{
                backgroundColor: isHomePage && isTop ? "transparent" : "rgba(255, 255, 255, 1)",
                borderColor: "var(--primary-color)",
                zIndex: 10,
            }}
        >
            <h1
                className="text-xl font-bold"
                style={{ color: isHomePage && isTop ? "#ffffff" : "var(--secondary-color)" }}
            >
                学生団体A4
            </h1>
            <nav
                style={{ color: isHomePage && isTop ? "#ffffff" : "var(--secondary-color)" }}
            >
                <ul className="flex space-x-4">
                    <li><a href="/home" >ホーム</a></li>
                    <li><a href="/product" >プロダクト紹介</a></li>
                    <li><a href="/organization" >団体紹介</a></li>
                    <li><a href="/contact" >お問い合わせ</a></li>
                </ul>
            </nav>
        </header>
    );
}