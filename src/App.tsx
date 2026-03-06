import {
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/ui/modem-animated-footer";
import { WarpBackground } from "@/components/ui/warp-background";

function ShopifyLogo() {
  return (
    <svg viewBox="0 0 512 512" className="h-full w-full" aria-hidden="true">
      <path
        d="M160 130C174 53 225 12 300 12c58 0 103 34 125 94"
        fill="none"
        stroke="#8CC63F"
        strokeLinecap="round"
        strokeWidth="20"
      />
      <path
        d="M232 112c10-66 36-100 72-100 36 0 60 34 68 88"
        fill="none"
        stroke="#A7CF46"
        strokeLinecap="round"
        strokeWidth="18"
      />
      <path
        d="m72 145 102-33h170l82 81-50 319L29 459z"
        fill="#95BF47"
      />
      <path d="m344 112 82 81-50 319-32-18z" fill="#63963D" />
      <text
        x="205"
        y="395"
        fill="#fff"
        fontFamily="Poppins, Arial, sans-serif"
        fontSize="240"
        fontStyle="italic"
        fontWeight="900"
        textAnchor="middle"
      >
        S
      </text>
    </svg>
  );
}

function YouTubeLogo() {
  return (
    <svg viewBox="0 0 512 512" className="h-full w-full" aria-hidden="true">
      <rect x="30" y="103" width="452" height="306" rx="108" fill="#FF1A12" />
      <path d="M216 178 351 256 216 334Z" fill="#fff" />
    </svg>
  );
}

function AmazonLogo() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" rx="16" fill="#fff" />
      <text
        x="31"
        y="34"
        fill="#111827"
        fontFamily="Poppins, Arial, sans-serif"
        fontSize="26"
        fontWeight="700"
        textAnchor="middle"
      >
        a
      </text>
      <path
        d="M18 40.5c8.5 5.2 18.2 5.2 27.5 0"
        fill="none"
        stroke="#FF9900"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path d="m42.5 39.5 4 .5-2.2 3.3Z" fill="#FF9900" />
    </svg>
  );
}

const footerSocialLinks = [
  {
    icon: <ShopifyLogo />,
    href: "https://www.shopify.com",
    label: "Shopify",
  },
  {
    icon: <YouTubeLogo />,
    href: "https://www.youtube.com/",
    label: "YouTube",
  },
  {
    icon: <AmazonLogo />,
    href: "https://sell.amazon.com",
    label: "Amazon",
  },
];

const footerNavLinks = [
  { label: "Overview", href: "#overview" },
];

function ShopifyYouTubeMark() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14">
        <ShopifyLogo />
      </div>
      <div className="absolute -bottom-1 -right-1 rounded-2xl bg-white p-1 shadow-[0_10px_28px_rgba(244,63,94,0.28)] sm:p-1.5">
        <div className="h-3.5 w-5 sm:h-4 sm:w-6 md:h-5 md:w-7">
          <YouTubeLogo />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <main className="px-4 py-4 text-white sm:px-8 sm:py-8">
        <WarpBackground
          className="flex min-h-[calc(100vh-2rem)] items-center justify-center overflow-hidden border-border/70 bg-slate-950/95 p-5 shadow-spotlight sm:min-h-[calc(100vh-4rem)] sm:p-8"
          perspective={140}
          beamsPerSide={4}
          beamDuration={5}
          beamDelayMax={2.4}
          gridColor="rgba(148, 163, 184, 0.24)"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <section
              id="overview"
              className="max-w-3xl scroll-mt-24 space-y-3 sm:space-y-4"
            >
              <CardTitle className="text-[2.35rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Winme turns live shopping into a game people want to play
                <span className="jump-dot inline-block">.</span>
              </CardTitle>
              <CardDescription className="mx-auto max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
                Most live shopping feels passive. Winme makes it interactive.
              </CardDescription>
            </section>
          </div>
        </WarpBackground>
      </main>

      <Footer
        className="px-4 pb-4 sm:px-8 sm:pb-8"
        brandName="Winme.live"
        brandDescription="Turn live viewers into active buyers. Gamified live commerce for modern brands."
        socialLinks={footerSocialLinks}
        navLinks={footerNavLinks}
        brandIcon={<ShopifyYouTubeMark />}
      />
    </div>
  );
}

export default App;
