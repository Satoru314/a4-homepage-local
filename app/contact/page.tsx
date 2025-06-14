'use client';

import React from "react";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center pt-32 mb-4 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-8">We would love to hear from you!</p>
            <form className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={4}
                        placeholder="Your Message"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Thank you for your message!");
                    }}
                >
                    Send Message
                </button>
            </form>
            <p className="mt-6 text-sm text-gray-600">
                © {new Date().getFullYear()} My Application. All rights reserved.
            </p>
        </div>
    );
}