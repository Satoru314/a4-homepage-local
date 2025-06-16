'use client';

import React from "react";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center pt-32 mb-4 bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">お問い合わせ</h1>
            <p className="text-lg mb-8 text-gray-600 text-center max-w-2xl">
                学生団体A4に関するご質問、ご意見、またはご興味をお持ちの方は、<br className="sm:hidden" />以下のフォームよりお気軽にお問い合わせください。
            </p>
            <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                        お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" // focus色を具体的に指定
                        placeholder="例: 山田 太郎"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                        メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="例: yourname@example.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none" // resize-noneでリサイズ不可に
                        rows={5}
                        placeholder="お問い合わせ内容を具体的にご記入ください。"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300" // 具体的な色指定とホバー、フォーカス時のスタイル調整
                    onClick={(e) => {
                        e.preventDefault();
                        alert("お問い合わせありがとうございます！"); // 仮の処理
                    }}
                >
                    送信する {/* ボタンテキスト */}
                </button>
            </form>
        </div>
    );
}