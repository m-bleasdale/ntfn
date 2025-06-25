import Header from "@/components/header"
import { Button } from "@/components/ui/button"

export default function NotFound () {
    return(
        <div className="flex flex-col items-center min-h-screen pb-20 lg:gap-30 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <Header />
            <main className="flex flex-col gap-[50px] items-center justify-center">
                <h1 className="text-5xl semibold">404: Page Not Found</h1>     
                <p>It might have been moved or deleted.</p>
                <div className="flex flex-row gap-5">
                    <a href="/"><Button variant="default">Return to Home</Button></a>
                    <a href="/contact"><Button variant="outline">Contact</Button></a>
                </div>       
            </main>
        </div>
        
    )
}