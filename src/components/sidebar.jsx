import { Book, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ArticleType from "@/components/article-preview/article-type";

export default function Sidebar ({title, description, category, type, author}) {
    return (
        <div className="order-last md:order-none md:col-span-2 lg:col-span-2 lg:mt-40 sticky">
          <aside className="flex flex-col gap-2">
            <div className="border-border bg-card mb-6 overflow-hidden rounded-lg border shadow-sm">
              <div className="border-border bg-muted/50 border-b px-5 py-4">
                <h3 className="flex items-center text-sm font-semibold">
                  <Book className="text-muted-foreground mr-2.5 size-3.5" />
                  Article
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-5">
                <p className="text-foreground gap-4 text-lg font-semibold leading-snug">
                    {title}
                </p>
                <p className="text-foreground gap-4 text-md leading-snug">
                    {description}
                </p>
                <div className='flex flex-row gap-2'>
                    {type && <ArticleType type={type} />}
                    {category && <Badge variant="outline">{category}</Badge>}
                </div>
                {author && 
                  <p className="text-foreground gap-4 text-md leading-snug">
                      By {author}
                  </p>
                }
              </div>
            </div>

            {/*
            <div className="border-border bg-card mb-6 overflow-hidden rounded-lg border shadow-sm">
              <div className="border-border bg-muted/50 border-b px-5 py-4">
                <h3 className="flex items-center text-sm font-semibold">
                  <Share2 className="text-muted-foreground mr-2.5 size-3.5" />
                  Share this article
                </h3>
              </div>
              <div className="p-5">
                <ul className="flex items-center gap-2">
                  <li>
                    <a
                      href="#"
                      className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                      aria-label="Share on Instagram"
                    >
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg"
                        alt="Instagram"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg"
                        alt="LinkedIn"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                      aria-label="Share on Product Hunt"
                    >
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg"
                        alt="Product Hunt"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg"
                        alt="Twitter"
                        className="size-5"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            */}
          </aside>
        </div>
    )
}