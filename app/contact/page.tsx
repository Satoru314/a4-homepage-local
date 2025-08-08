'use client';

import React, { useState } from "react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log('フォーム送信開始');
        e.preventDefault();
        e.stopPropagation();
        
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            console.log('APIリクエスト送信: /api/contact');
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
                setErrorMessage(result.error || '送信中にエラーが発生しました。');
            }
        } catch (error) {
            console.error('フォーム送信エラー:', error);
            setSubmitStatus('error');
            setErrorMessage('送信中にエラーが発生しました。しばらく後に再度お試しください。');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center pt-32 mb-4 bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">お問い合わせ</h1>
            <p className="text-lg mb-8 text-gray-600 text-center max-w-2xl">
                学生団体A4に関するご質問、ご意見、またはご興味をお持ちの方は、<br className="sm:hidden" />以下のフォームよりお気軽にお問い合わせください。
            </p>
            
            {submitStatus === 'success' && (
                <div className="w-full max-w-2xl mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    お問い合わせを受け付けました。ありがとうございます！
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div className="w-full max-w-2xl mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    {errorMessage}
                </div>
            )}

            <form 
                className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md" 
                onSubmit={handleSubmit}
                action="/api/contact"
                method="POST"
            >
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                        お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="例: 山田 太郎"
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                        メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="例: yourname@example.com"
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        rows={5}
                        placeholder="お問い合わせ内容を具体的にご記入ください。"
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? '送信中...' : '送信する'}
                </button>
            </form>
        </div>
    );
}