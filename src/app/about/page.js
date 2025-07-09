import { Footer } from "@/components/footer";
import Header from "@/components/header"
import Hero from "@/components/hero"
import TeamMember from "@/components/team-member";

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
                <p className="mb-20 text-lg leading-relaxed">
                    At No Time For News, our mission is to make the news more approachable and engaging for everyone by breaking down complex stories and big issues into clear, engaging summaries. 
                    We're a fully student-run initiative, committed to helping people stay informed without the overwhelm. 
                    Along the way, we're creating meaningful opportunities for students to gain hands-on experience in journalism, media and technology. Inspiring people to learn the ropes by actively shaping how news is delivered.
                </p>
            </div>

            <div className="lg:w-[55%] w-full flex flex-col">
                <h2 className="text-5xl font-normal mb-4 text-center">There's too much noise</h2>
                <p className="mb-20 text-md leading-relaxed text-center">
                    The world is full of information, but not all of it is useful. We believe news should be clear, concise, and free from unnecessary noise. Our goal is to help you stay informed without feeling overwhelmed — see the news that matters.
                </p>
            </div>

            <div className="lg:w-[55%] w-full flex flex-col">
                <h2 className="text-3xl font-semibold mb-8">We're still building</h2>
                <p className="mb-20 text-lg leading-relaxed">
                    We've only just started building No Time For News, and there's a lot more to come. As we grow, we'll be creating more content, expanding our team, and finding better ways to deliver news that matters. If you're passionate about making a difference or want to help shape the future of student-led journalism, we'd love for you to join us on this journey.
                </p>
            </div>

                {/*
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 w-full max-w-6xl">
                <TeamMember
                    photo="https://media.licdn.com/dms/image/v2/D5603AQG7BitsPh2-eQ/profile-displayphoto-shrink_200_200/B56ZbLUHzsH4Ag-/0/1747167773186?e=1756339200&v=beta&t=5N1FVW4IlgKkXLHZihRuUfzyGXbpPdJM-ewmX3iR4gU"
                    name="Morgan Bleasdale"
                    role="Head of Software Development"
                    linkedinLink="https://www.linkedin.com/in/morgan-bleasdale/"
                    email="morganbleasdale@ntfn.co.uk"
                />
                <TeamMember
                    photo="https://scontent-man2-1.cdninstagram.com/v/t51.2885-19/503973287_18050622761600243_2229274522767690680_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-man2-1.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2QGywfcqtZ2YMPuGABpNw7GZrarc1izebf4oSTUDNBy_JGRF2p5GutHK2AuEglnpfoM&_nc_ohc=PDpKe17AQW4Q7kNvwF6RJSc&_nc_gid=njPulBhuT7QjZxcia-jKsw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfMr9cdGrB0ZbuLzBL-DN_brB2NyY2uQUnA9TSazHtip7Q&oe=6863745B&_nc_sid=7a9f4b"
                    name="Aron Hurt"
                    role="Head of Journalism"
                    email="aronhurt@ntfn.co.uk"
                />
                <TeamMember
                    photo="https://media.licdn.com/dms/image/v2/D5603AQG7BitsPh2-eQ/profile-displayphoto-shrink_200_200/B56ZbLUHzsH4Ag-/0/1747167773186?e=1756339200&v=beta&t=5N1FVW4IlgKkXLHZihRuUfzyGXbpPdJM-ewmX3iR4gU"
                    name="Luke Thomas"
                    role="Head of Compliance"
                    linkedinLink="https://www.linkedin.com/in/luke-thomas-51bb442aa"
                    email="lukethomas@ntfn.co.uk"
                />
                <TeamMember
                    photo="https://media.licdn.com/dms/image/v2/D5603AQG7BitsPh2-eQ/profile-displayphoto-shrink_200_200/B56ZbLUHzsH4Ag-/0/1747167773186?e=1756339200&v=beta&t=5N1FVW4IlgKkXLHZihRuUfzyGXbpPdJM-ewmX3iR4gU"
                    name="Jacob Chaloner"
                    role="Head of Media and Digital"
                    linkedinLink="https://www.linkedin.com/in/luke-thomas-51bb442aa/"
                />
            </div>
            */}

            <Footer />
        </div>
    )
}