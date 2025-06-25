import Header from "@/components/header"
import Hero from "@/components/hero"

import { HeartHandshake } from "lucide-react";

export default function About () {
    return (
        <div className="flex flex-col items-center min-h-screen pb-20 lg:gap-12 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <Header />

            <Hero
                heading="Student-Led No-Nonsense News."
                description="We are a team of students working to create accurate, impartial, concise news. Everything in No Time For News, from our website to our paperwork, is run by students."
                button={{
                    text: "Get Involved",
                    icon: <HeartHandshake className="ml-2 size-4" />,
                    url: "/get-involved",
                }}
                trustText="No contract. No commitment. Just contribute what you can."
            />

            <div className="lg:w-[55%] w-full flex flex-col">
                <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
                <p className="mb-10 text-lg leading-relaxed">
                    At No Time For News, our mission is to make the news more approachable and engaging for everyone by breaking down complex stories and big issues into clear, engaging summaries. 
                    We're a fully student-run initiative, committed to helping people stay informed without the overwhelm. 
                    Along the way, we're creating meaningful opportunities for students to gain hands-on experience in journalism, media and technology. Inspiring people to learn the ropes by actively shaping how news is delivered.
                </p>
            </div>

            
        </div>
    )
}