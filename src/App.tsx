import {
  Boxes,
  CircleHelp,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/ui/modem-animated-footer";
import { WarpBackground } from "@/components/ui/warp-background";

const examples = [
  {
    icon: CircleHelp,
    title: "Trivia Unlock",
    product: "Skincare launch",
    action: "Ask which ingredient brightens skin during the serum demo.",
    reward: "Correct answers unlock 15% off and a free sample.",
  },
  {
    icon: Zap,
    title: "First-to-Claim Race",
    product: "Sneaker drop",
    action: "The first 50 buyers get exclusive laces and express shipping.",
    reward: "Scarcity makes the room compete in real time.",
  },
  {
    icon: Users,
    title: "Team Goal Challenge",
    product: "Fashion live",
    action: "Viewers join Team Black or Team Beige by reacting in chat.",
    reward: "The winning team unlocks a bundle deal for that style.",
  },
  {
    icon: Sparkles,
    title: "Spin After Add-to-Cart",
    product: "Beauty bundle",
    action: "Anyone who adds the featured set to cart gets one spin.",
    reward: "Prizes can be free shipping, mystery gifts, or tiered discounts.",
  },
  {
    icon: Boxes,
    title: "Mystery Box Reveal",
    product: "Gadgets and collectibles",
    action: "Every 25 purchases opens the next hidden reward on stream.",
    reward: "People keep watching and buying to reveal the next box.",
  },
];

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
  { label: "Examples", href: "#examples" },
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
                <span className="text-[#f6c945]">W</span>inme turns live
                shopping into a game people want to play
                <span className="jump-dot inline-block">.</span>
              </CardTitle>
              <CardDescription className="mx-auto max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
                Most live shopping feels passive. Winme makes it interactive.
              </CardDescription>
            </section>
          </div>
        </WarpBackground>
      </main>

      <section
        id="examples"
        className="px-4 pb-8 pt-3 text-foreground sm:px-8 sm:pb-12 sm:pt-4"
      >
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[1.75rem] border border-border/70 bg-white/70 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-[2rem] sm:p-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Example Formats
              </p>
              <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Five live commerce mechanics you can run between the stream and the sale.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                These are the exact interactive formats Winme.live can place
                into a Shopify x YouTube flow so the audience keeps reacting,
                competing, and buying while the host is live.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {examples.map(({ icon: Icon, title, product, action, reward }) => (
                <Card
                  key={title}
                  className="h-full border-slate-200 bg-slate-950 text-white shadow-[0_18px_48px_rgba(15,23,42,0.22)]"
                >
                  <CardContent className="flex h-full flex-col gap-4 p-4 text-left sm:p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                        {product}
                      </p>
                      <p className="text-xl font-semibold text-white">
                        {title}
                      </p>
                    </div>
                    <p className="text-sm leading-7 text-white/72 sm:text-[15px]">
                      {action}
                    </p>
                    <div className="mt-auto rounded-2xl border border-emerald-300/15 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-100">
                      {reward}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer
        className="px-4 pb-4 sm:px-8 sm:pb-8"
        brandName="Winme.live"
        brandDescription="Winme.live adds a gamification layer to Shopify sales on YouTube Live, turning product demos into interactive challenges, reward drops, and higher-converting checkout moments."
        socialLinks={footerSocialLinks}
        navLinks={footerNavLinks}
        brandIcon={<ShopifyYouTubeMark />}
      />
    </div>
  );
}

export default App;
