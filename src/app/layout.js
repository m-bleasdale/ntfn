import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics";

import Script from 'next/script';

import Analytics from "@/components/anal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "No Time For News",
  description: "Impartial, Non-Nonsense News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
