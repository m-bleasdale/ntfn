import {HeartHandshake, Phone, Menu, Newspaper, Trees } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header ({
  logo = {
    url: "/",
    title: "No Time For News"
  },
  categories = [
    { title: "UK Politics", url: "/" },
    { title: "World Politics", url: "/" },
    { title: "Conflicts", url: "/" },
  ],
  menu = [
    {
      title: "About Us",
      url: "#",
      items: [
        {
          title: "About Us",
          description: "Our mission is to provide clear and concise news and inspire student journalists.",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/about",
        },
        {
          title: "Get Involved",
          description: "Join us in producing impartial non-profit news in a easy-to-consume format.",
          icon: <HeartHandshake className="size-5 shrink-0" />,
          url: "/get-involved",
        },
        {
          title: "Contact",
          description:
            "Get in touch with our team to discuss an article, who we work with or find out more about our organisation.",
          icon: <Phone className="size-5 shrink-0" />,
          url: "/contact",
        },
        {
          title: "News About No Time For News",
          description:
            "Take a look at the most recent things we've been working on.",
          icon: <Newspaper className="size-5 shrink-0" />,
          url: "/blog",
        }
      ],
    }
  ]
    
}) {
  return (
    <header className="py-4 h-auto w-full flex justify-center lg:border-y border-b border-solid">
      <div className="container lg:w-[60%] w-full">
        {/* Desktop Menu */}
        <nav className="hidden justify-between items-center lg:flex">
            <div className="flex justify-between items-center gap-15">
                {/* Logo */}
                <a href={logo.url} className="flex items-center gap-2">
                    <span className="text-4xl font-semibold tracking-tighter">
                    {logo.title}
                    </span>
                </a>
                <div className="flex items-center">
                    <NavigationMenu>
                    <NavigationMenuList>
                        {categories.map((item) => renderMenuItem(item))}
                    </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <div>
                <div className="flex items-center">
                    <NavigationMenu>
                    <NavigationMenuList>
                        {menu.map((item) => renderMenuItem(item))}
                    </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <span className="text-3xl font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    {logo.title}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 px-2">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {categories.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <div key={item}>
        {item.items.map((subItem) => (
          <SubMenuLink key={subItem.title} item={subItem} />
        ))}
      </div>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }) => {
  return (
    <a
      className="flex items-center flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};
