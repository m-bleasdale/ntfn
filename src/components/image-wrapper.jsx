import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const creditLink = {
	"CC BY-SA 4.0": <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>,
    "CC BY-SA 2.0": <a className="underline" href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>,
    "CC 3.0": <a className="underline" href="https://creativecommons.org/licenses/by/3.0/">CC 3.0</a>,
    "CC0 1.0 Universal": <a className="underline" href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">CC0 1.0 Universal</a>,
}

export default function ImageWrapper ({children, credit, type}) {
    return (
    <Tooltip>
        <TooltipTrigger className="w-full">{children}</TooltipTrigger>
        <TooltipContent>
            <p>{credit} {creditLink[type]}</p>
        </TooltipContent>
    </Tooltip>
    )
}