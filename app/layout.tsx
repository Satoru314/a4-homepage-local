import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/a4_logo_white_back.png" type="image/png" />
        <link rel="shortcut icon" href="/a4_logo_white_back.png" type="image/png" />
        <link rel="apple-touch-icon" href="/a4_logo_white_back.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
