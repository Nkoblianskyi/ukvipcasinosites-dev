import Link from "next/link"
import Image from "next/image"

function VIPLogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <polygon points="24,2 38,8 46,22 46,26 38,40 24,46 10,40 2,26 2,22 10,8" stroke="hsl(43,72%,48%)" strokeWidth="1.5" fill="hsl(0,0%,8%)" />
      <circle cx="24" cy="24" r="11" stroke="hsl(43,72%,48%)" strokeWidth="1" fill="none" />
      <circle cx="24" cy="24" r="7"  stroke="hsl(43,72%,65%)" strokeWidth="0.75" fill="none" strokeDasharray="2 2" />
      <circle cx="24" cy="24" r="2" fill="hsl(43,72%,48%)" />
      <line x1="24" y1="13" x2="24" y2="17" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="24" y1="31" x2="24" y2="35" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="13" y1="24" x2="17" y2="24" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="31" y1="24" x2="35" y2="24" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="16.2" y1="16.2" x2="18.9" y2="18.9" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="29.1" y1="29.1" x2="31.8" y2="31.8" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="31.8" y1="16.2" x2="29.1" y2="18.9" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="18.9" y1="29.1" x2="16.2" y2="31.8" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <polygon points="24,4 26,7 24,9 22,7" fill="hsl(43,72%,48%)" />
    </svg>
  )
}

const navLinks = [
  { label: "Home",               href: "/"                   },
  { label: "About Us",           href: "/about-us"           },
  { label: "Privacy Policy",     href: "/privacy-policy"     },
  { label: "Cookie Policy",      href: "/cookie-policy"      },
  { label: "Terms & Conditions", href: "/terms"              },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
]

const partnerLogos = [
  { src: "/gamble.webp",             alt: "BeGambleAware",          href: "https://www.begambleaware.org/"         },
  { src: "/gamecare.svg",                  alt: "GamCare",                href: "https://www.gamcare.org.uk/"            },
  { src: "/gordon.png",                   alt: "Gambling Therapy",       href: "https://www.gamblingtherapy.org/"       },
  { src: "/commission.png", alt: "UK Gambling Commission", href: "https://www.gamblingcommission.gov.uk/" },
  { src: "/gamstop.svg",                  alt: "GamStop",                href: "https://www.gamstop.co.uk/"             },
]

export function SiteFooter() {
  return (
    <footer className="bg-[hsl(0,0%,3%)] text-[hsl(43,20%,88%)]">
      {/* Gold top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)] to-transparent" />

      {/* Main footer grid */}
      <div className="container mx-auto px-4 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[hsl(0,0%,12%)]">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <VIPLogoMark className="w-10 h-10 shrink-0 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="flex flex-col leading-none select-none">
                <span className="font-serif font-bold tracking-[0.14em] uppercase text-xl leading-none text-[hsl(43,20%,88%)] group-hover:text-[hsl(43,72%,48%)] transition-colors duration-300">
                  UK<span className="text-[hsl(43,72%,48%)]">VIP</span>
                </span>
                <span className="font-sans text-[10px] tracking-[0.36em] uppercase text-[hsl(43,10%,42%)] leading-none mt-1">
                  Casino&nbsp;Sites
                </span>
                <span className="mt-[5px] block h-px w-full bg-[hsl(43,72%,48%)]/35 group-hover:bg-[hsl(43,72%,48%)] transition-colors duration-300" />
              </div>
            </Link>
            <p className="text-xs text-[hsl(43,10%,42%)] leading-relaxed">
              Britain&apos;s most exclusive VIP casino comparison platform. Independent, unbiased expert reviews of every UKGC-licensed operator.
            </p>
            {/* 18+ badge */}
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-[hsl(358,72%,48%)] border-2 border-[hsl(43,72%,48%)] flex items-center justify-center text-white font-black text-xs shrink-0">
                18+
              </div>
              <span className="text-xs text-[hsl(43,10%,38%)] leading-tight">
                Strictly no gambling under the age of 18.
              </span>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)]">
                Navigation
              </span>
              <div className="mt-3 h-px bg-[hsl(0,0%,14%)]" />
            </div>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-[hsl(43,10%,48%)] hover:text-[hsl(43,72%,48%)] transition-colors duration-200 group"
                    >
                      <span className="block w-3 h-px bg-[hsl(43,72%,48%)]/30 group-hover:w-5 group-hover:bg-[hsl(43,72%,48%)] transition-all duration-200 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Responsible Gaming */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)]">
                Responsible Gaming
              </span>
              <div className="mt-3 h-px bg-[hsl(0,0%,14%)]" />
            </div>

            {/* Helpline highlight */}
            <div className="bg-[hsl(0,0%,7%)] border-l-2 border-[hsl(43,72%,48%)] px-4 py-3">
              <p className="text-[11px] text-[hsl(43,10%,48%)] leading-relaxed mb-2">
                All featured casinos hold valid{" "}
                <strong className="text-[hsl(43,20%,72%)]">UK Gambling Commission</strong> licences. Gambling is strictly prohibited for anyone under 18. Never wager more than you can afford to lose.
              </p>
              <p className="text-[11px] text-[hsl(43,10%,48%)]">
                Immediate support —{" "}
                <strong className="text-[hsl(43,20%,80%)] text-sm">0808 8020 133</strong>
                <span className="text-[hsl(43,10%,36%)]"> (free, 24/7)</span>
              </p>
            </div>

            {/* Slogan */}
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-[hsl(358,72%,48%)]/20" />
              <p className="text-[11px] font-semibold tracking-wider text-[hsl(358,72%,55%)] uppercase whitespace-nowrap">
                When the fun stops, STOP.
              </p>
              <div className="h-px flex-1 bg-[hsl(358,72%,48%)]/20" />
            </div>

            {/* Affiliate note */}
            <p className="text-[11px] text-[hsl(43,10%,35%)] leading-relaxed">
              We may earn a commission when you register through our affiliate links. This does not affect our editorial independence.
            </p>
          </div>

          {/* Col 4 — Partner Logos */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)]">
                Our Partners
              </span>
              <div className="mt-3 h-px bg-[hsl(0,0%,14%)]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {partnerLogos.map((logo) => (
                <Link
                  key={logo.alt}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={logo.alt}
                  className="flex items-center justify-center px-3 py-2 h-16 rounded-sm border border-[hsl(0,0%,22%)] hover:border-[hsl(43,72%,48%)]/60 transition-colors duration-200"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={44}
                    className="object-contain w-auto max-h-11"
                    style={{ filter: "none", opacity: 1 }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[hsl(43,10%,30%)] text-center md:text-left">
            &copy; {new Date().getFullYear()} ukvipcasinosites.com — All rights reserved. Independent comparison service.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {["UKGC Licensed", "18+", "GambleAware", "BeGambleAware.org"].map((tag, i, arr) => (
              <span key={tag} className="flex items-center gap-3">
                <span className="text-[11px] text-[hsl(43,10%,32%)]">{tag}</span>
                {i < arr.length - 1 && (
                  <span className="w-px h-3 bg-[hsl(0,0%,20%)]" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
