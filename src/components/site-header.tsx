import Link from "next/link"

function VIPLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer octagon */}
      <polygon
        points="24,2 38,8 46,22 46,26 38,40 24,46 10,40 2,26 2,22 10,8"
        stroke="hsl(43,72%,48%)"
        strokeWidth="1.5"
        fill="hsl(0,0%,8%)"
      />
      {/* Inner roulette circle */}
      <circle cx="24" cy="24" r="11" stroke="hsl(43,72%,48%)" strokeWidth="1" fill="none" />
      <circle cx="24" cy="24" r="7"  stroke="hsl(43,72%,65%)" strokeWidth="0.75" fill="none" strokeDasharray="2 2" />
      {/* Centre dot */}
      <circle cx="24" cy="24" r="2" fill="hsl(43,72%,48%)" />
      {/* Spokes */}
      <line x1="24" y1="13" x2="24" y2="17" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="24" y1="31" x2="24" y2="35" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="13" y1="24" x2="17" y2="24" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="31" y1="24" x2="35" y2="24" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="16.2" y1="16.2" x2="18.9" y2="18.9" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="29.1" y1="29.1" x2="31.8" y2="31.8" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="31.8" y1="16.2" x2="29.1" y2="18.9" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      <line x1="18.9" y1="29.1" x2="16.2" y2="31.8" stroke="hsl(43,72%,48%)" strokeWidth="1" />
      {/* Diamond ornament */}
      <polygon points="24,4 26,7 24,9 22,7" fill="hsl(43,72%,48%)" />
      {/* Crimson accent dot at right spoke */}
      <circle cx="35" cy="24" r="1.5" fill="hsl(358,72%,52%)" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[hsl(0,0%,5%)]">
      {/* Gold accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)] to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-4 group"
            aria-label="UKVIPCasinoSites — Home"
          >
            <VIPLogoMark className="w-11 h-11 shrink-0 group-hover:opacity-80 transition-opacity duration-300" />

            <div className="flex flex-col leading-none select-none">
              <span className="font-serif font-bold text-[hsl(43,20%,88%)] tracking-[0.12em] uppercase text-2xl leading-none group-hover:text-[hsl(43,72%,48%)] transition-colors duration-300">
                UK<span className="text-[hsl(43,72%,48%)]">VIP</span>
              </span>
              <span className="font-sans font-medium text-[11px] tracking-[0.38em] uppercase text-[hsl(43,10%,45%)] leading-none mt-1">
                Casino&nbsp;Sites
              </span>
              <span className="mt-[6px] block h-px w-full bg-[hsl(43,72%,48%)]/40 group-hover:bg-[hsl(43,72%,48%)] transition-colors duration-300" />
            </div>
          </Link>
        </div>
      </div>

      {/* Crimson bottom accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(358,72%,48%)]/25 to-transparent" />
    </header>
  )
}
