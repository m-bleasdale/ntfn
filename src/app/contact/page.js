import { Community } from "@/components/community";
import { Footer } from "@/components/footer";
import Header from "@/components/header"

export const metadata = {
    title: "Contact - No Time For News",
    description: "Contact No Time For News at contact@ntfn.co.uk",
    openGraph: {
        title: "Contact - No Time For News",
        description: "Contact No Time For News at contact@ntfn.co.uk",
    }
}


export default function Contact () {
    return (
        <div className="flex flex-col items-center min-h-screen pb-20 lg:gap-12 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <Header />

            <div className="lg:w-[55%] w-full flex flex-col">
                <h1 className="text-center lg:my-20 my-10 text-6xl">Contact Us</h1>
            </div>

            <div className="lg:w-[55%] w-full flex flex-col items-center gap-1 justify-center">
                <p className="text-muted-foreground/80 font-semibold text-lg">Email</p>
                <p className="text-center text-2xl font-medium">contact@ntfn.com</p>
            </div>

            <div className="lg:py-20 pb-20 pt-10">
                <Community />
            </div>
            

            <Footer />

        </div>
    )
}