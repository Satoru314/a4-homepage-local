'use client';

import React from "react";

export default function Contact() {
    return (
        // pt-32: 上部のパディング、mb-4: 下部のマージン、bg-gray-100: 背景色
        <div className="flex flex-col items-center justify-center pt-32 mb-4 bg-gray-100 p-8"> {/* p-8: 全体に少しパディングを追加 */}
            <h1 className="text-3xl font-bold mb-4 text-gray-800">お問い合わせ</h1> {/* タイトル */}
            <p className="text-lg mb-8 text-gray-600 text-center max-w-2xl"> {/* サブタイトル。最大幅を指定し中央寄せに */}
                学生団体A4に関するご質問、ご意見、またはご興味をお持ちの方は、<br className="sm:hidden" />以下のフォームよりお気軽にお問い合わせください。
            </p>
            {/* フォームコンテナ */}
            <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"> {/* フォームに背景、角丸、影、パディングを追加 */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                        お名前 <span className="text-red-500">*</span> {/* 必須マークを追加（スタイリングは例） */}
                    </label>
                    <input
                        type="text"
                        id="name"
                        // focus:ring-primary は、別途tailwind.config.jsで primary カラーが設定されている前提です
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" // focus色を具体的に指定
                        placeholder="例: 山田 太郎"
                        required // HTMLの必須属性を追加
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                        メールアドレス <span className="text-red-500">*</span> {/* 必須マークを追加 */}
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="例: yourname@example.com"
                        required // HTMLの必須属性を追加
                    />
                </div>
                <div className="mb-6"> {/* 最後の項目はマージンを少し大きめに */}
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                        お問い合わせ内容 <span className="text-red-500">*</span> {/* 必須マークを追加 */}
                    </label>
                    <textarea
                        id="message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none" // resize-noneでリサイズ不可に
                        rows={5} // 行数を少し増やす
                        placeholder="お問い合わせ内容を具体的にご記入ください。"
                        required // HTMLの必須属性を追加
                    />
                </div>
                <button
                    type="submit"
                    // bg-primary, hover:bg-primary-dark は、別途tailwind.config.jsで primary カラーが設定されている前提です
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300" // 具体的な色指定とホバー、フォーカス時のスタイル調整
                    onClick={(e) => {
                        // HTMLのrequired属性で簡易バリデーション。
                        // ただし、formのsubmitイベントで処理するのがより標準的です。
                        // 今回はユーザーの指示通りalertを残します。
                        e.preventDefault(); // ページの再読み込みを防ぐ
                        // ここに実際のお問い合わせ送信処理（APIコールなど）を記述します
                        alert("お問い合わせありがとうございます！"); // 仮の処理
                    }}
                >
                    送信する {/* ボタンテキスト */}
                </button>
            </form>
            {/* フッターのコピーライト */}
            {/* mt-8: 上部のマージンを追加 */}
            <p className="mt-8 text-sm text-gray-600 text-center">
                © {new Date().getFullYear()} 学生団体A4. All Rights Reserved. {/* 団体名を仮で挿入 */}
            </p>
        </div>
    );
}