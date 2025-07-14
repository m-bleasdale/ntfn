import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics";

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
      <head>
        <script id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="d368d88e-41e7-4efe-ac83-8dd9b3ffcc2e"
          data-blockingmode="auto"
          type="text/javascript"
          async>
        </script>
        <script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/d368d88e-41e7-4efe-ac83-8dd9b3ffcc2e/cd.js"
          type="text/javascript"
        ></script>

        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
