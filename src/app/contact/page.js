import { Footer } from "@/components/footer";
import Header from "@/components/header"
import Hero from "@/components/hero"
import TeamMember from "@/components/team-member";

import { Phone } from "lucide-react";

export default function Contact () {
    return (
        <div className="flex flex-col items-center min-h-screen pb-20 lg:gap-12 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <Header />

            <div className="lg:w-[55%] w-full flex flex-col">
                <h1 className="text-center mt-20 mb-20 text-6xl">Contact Us</h1>
            </div>

            <div className="lg:w-[55%] w-full flex flex-col">
                <div className="mb-20 flex lg:flex-row flex-col justify-between">
                    <p className="text-lg leading-relaxed">Email: <span className="font-semibold">contact@ntfn.com</span></p>
                    <p className="text-lg leading-relaxed">Instagram: <a href="https://www.instagram.com/ntfn.co.uk/" className="text-blue-600 underline">@ntfn.co.uk</a></p>
                    <p className="text-lg leading-relaxed">TikTok: <a href="https://www.tiktok.com/@ntfn.co.uk" className="text-blue-600 underline">@ntfn.co.uk</a></p>
                </div>
            </div>

            <Footer />

        </div>
    )
}