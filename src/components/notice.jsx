import { AlertCircleIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const noticeContent = {
    "test_article": {
        title: "This Article Is Not Real",
        description: "This is a demo article to show what an article might look like. The content may be inaccurate and does not reflect the opinion of No Time For News.",
        icon: <AlertCircleIcon />
    }
}

export default function Notice({code}) {
  if(!noticeContent[code]) return;

  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        {noticeContent[code].icon}
        <AlertTitle>{noticeContent[code].title}</AlertTitle>
        <AlertDescription>{noticeContent[code].description}</AlertDescription>
      </Alert>
    </div>
  )
}
