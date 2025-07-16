import { Badge } from "@/components/ui/badge"

export default function ArticleType ({type}) {
    const variant = {
        "Analysis": "destructive",
        "Top Story": "default"
    }

    const colour = variant[type];

    return (
        <Badge variant={colour}>{type}</Badge>
    )
}