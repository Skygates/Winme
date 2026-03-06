import type { ReactNode } from "react";

import { ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: ReactNode;
  className?: string;
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Footer({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) {
  return (
    <section className={cn("relative mt-0 w-full overflow-hidden", className)}>
      <footer className="relative mt-14 border-t bg-background sm:mt-20">
        <div className="relative mx-auto flex min-h-[24rem] max-w-7xl flex-col justify-between p-4 py-8 sm:min-h-[35rem] sm:py-10 md:min-h-[40rem]">
          <div className="mb-10 flex w-full flex-col sm:mb-20 md:mb-0">
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-1 flex-col items-center space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground sm:text-3xl">
                    {brandName}
                  </span>
                </div>
                <p className="w-full max-w-sm px-4 text-center text-sm font-medium leading-7 text-muted-foreground sm:w-96 sm:px-0 sm:text-base">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="mb-8 mt-4 flex items-center gap-4 sm:gap-5">
                  {socialLinks.map((link) => (
                    <a
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      className="rounded-[1.35rem] border border-border/70 bg-card/90 p-2 text-muted-foreground shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground sm:p-2.5"
                      target={isExternalHref(link.href) ? "_blank" : undefined}
                      rel={
                        isExternalHref(link.href)
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={link.label}
                    >
                      <div className="flex h-11 w-11 items-center justify-center duration-300 hover:scale-110 sm:h-12 sm:w-12">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <nav className="flex max-w-full flex-wrap justify-center gap-4 px-4 text-sm font-medium text-muted-foreground">
                  {navLinks.map((link) => (
                    <a
                      key={`${link.label}-${link.href}`}
                      className="duration-300 hover:font-semibold hover:text-foreground"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              )}
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-2 px-4 md:mt-24 md:flex-row md:items-center md:justify-between md:gap-1 md:px-0">
            <p className="text-center text-base text-muted-foreground md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground transition-colors duration-300 hover:font-medium hover:text-foreground"
                >
                  Crafted by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-32 left-1/2 max-w-[95vw] -translate-x-1/2 select-none bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent bg-clip-text px-4 text-center font-extrabold leading-none tracking-tighter text-transparent md:bottom-32"
          style={{
            fontSize: "clamp(2.5rem, 12vw, 10rem)",
          }}
        >
          {brandName.toUpperCase()}
        </div>

        <div className="absolute bottom-[4.5rem] left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-3xl border-2 border-border bg-background/60 p-3 backdrop-blur-sm drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] duration-300 hover:border-foreground dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] md:bottom-20">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground to-foreground/80 shadow-lg sm:h-16 sm:w-16 md:h-24 md:w-24">
            {brandIcon || (
              <ShoppingBag className="h-8 w-8 text-background drop-shadow-lg sm:h-10 sm:w-10 md:h-14 md:w-14" />
            )}
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent backdrop-blur-sm sm:bottom-34" />

        <div className="absolute bottom-20 h-24 w-full bg-gradient-to-t from-background via-background/80 to-background/40 blur-[1em] sm:bottom-28" />
      </footer>
    </section>
  );
}
