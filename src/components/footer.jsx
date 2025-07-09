
const Footer = ({
  logo = {
    src: "/NTFNFaviconTrans.png",
    alt: "No Time For News",
    title: "No Time For News",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "Impartial, No-Nonsense News",
  menuItems = [
    {
      title: "News",
      links: [
        { text: "UK Politics", url: "/" },
        { text: "World Politics", url: "/" },
        { text: "Conflicts", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Team", url: "/get-involved" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Instagram", url: "https://www.instagram.com/ntfn.co.uk/" },
        { text: "TikTok", url: "https://www.tiktok.com/@ntfn.co.uk" },
      ],
    },
  ],
  copyright = "© 2025 No Time For News. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
}) => {
  return (
    <footer className="pt-10 h-auto w-full flex justify-center border-t">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                    <li
                    key={linkIdx}
                    className="font-medium hover:text-primary"
                    >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                    </li>
                ))}
                </ul>
            </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export { Footer };