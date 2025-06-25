import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const creditLink = {
	"CC BY-SA 4.0": <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>,
    "CC BY-SA 2.0": <a className="underline" href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>,
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