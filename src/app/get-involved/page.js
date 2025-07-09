import { Footer } from "@/components/footer";
import Header from "@/components/header"
import Hero from "@/components/hero"
import TeamMember from "@/components/team-member";

import { Phone } from "lucide-react";

export default function About () {
    return (
        <div className="flex flex-col items-center min-h-screen pb-20 lg:gap-12 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <Header />

            <Hero
                heading="Get Involved"
                description="You can help NTFN deliver our promise of impartial no-nonsense news by writing articles, creating social media content, managing paperwork. If you're interested please contact us."
                button={{
                    text: "Contact",
                    icon: <Phone className="ml-2 size-4" />,
                    url: "/contact",
                }}
                trustText="No contract. No commitment. Just contribute what you can."
            />

            <div className="lg:w-[55%] w-full flex flex-col">
                <h2 className="text-3xl font-semibold mb-8">Why get involved?</h2>
                <p className="text-lg leading-relaxed">
                    Getting involved with NTFN means joining a community dedicated to making news accessible, honest, and relevant. Whether you have a passion for writing, a knack for organization, or creative ideas for engaging content, your contribution helps us cut through the noise and deliver news that matters. By volunteering your time and skills, you'll not only help inform others but also gain valuable experience and be part of something meaningful.
                </p>
            </div>

            <div className="lg:w-[55%] w-full flex flex-col">
                <p className="mb-20 text-lg leading-relaxed">
                    NTFN is just getting started, and there's so much more ahead. As we grow, we'll create new content, expand our team, and find innovative ways to inform our audience. If you're passionate about making a difference and want to help shape the future of news, we invite you to get involved and join us on this journey.
                </p>
            </div>

            <Footer />

        </div>
    )
}