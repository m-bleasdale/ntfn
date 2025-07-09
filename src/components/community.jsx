import { FaDiscord, FaGithub, FaXTwitter, FaInstagram, FaTiktok, FaLinkedin  } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const Community = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <img src="/FaviconTrans.png" alt="logo" className="size-20" />
          <h2 className="text-center text-3xl font-semibold">
            Follow Us Online
            <br />
            <span className="text-muted-foreground/80">
              to stay up-to-date with news
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://x.com/ntfn_"
                target="_blank"
                className="size-10"
              >
                <FaXTwitter />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.instagram.com/ntfn.co.uk/"
                target="_blank"
                className="size-10"
              >
                <FaInstagram />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.tiktok.com/@ntfn.co.uk"
                target="_blank"
                className="size-10"
              >
                <FaTiktok />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Community };
