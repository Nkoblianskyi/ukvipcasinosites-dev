import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Responsible Gaming | UKVIPCasinoSites.com",
  description:
    "UKVIPCasinoSites.com is committed to responsible gambling. Find tools, self-help resources, and UK support organisations to help you stay in control.",
}

const tools = [
  {
    title: "Deposit Limits",
    body: "All UKGC-licensed operators are legally required to offer daily, weekly, and monthly deposit caps. Establish these limits before you begin playing to ensure your spend never exceeds a level you are comfortable with.",
  },
  {
    title: "Reality Check Alerts",
    body: "Reality check notifications interrupt your session at regular intervals to remind you how long you have been playing and how much you have wagered. These prompts help maintain healthy perspective during extended gaming sessions.",
  },
  {
    title: "Time-Out Periods",
    body: "If you feel you need a short break from gambling, licensed casinos offer temporary account suspensions ranging from 24 hours to 6 weeks. During a time-out your account is fully locked and no marketing will be sent to you.",
  },
  {
    title: "Self-Exclusion",
    body: "Self-exclusion lets you permanently block yourself from gambling at a casino for a minimum period of 6 months. All UKGC-licensed operators are legally obligated to honour self-exclusion requests and must not contact you with promotional material during this period.",
  },
]

const organisations = [
  {
    name: "BeGambleAware",
    description: "Free, confidential advice and support around the clock. Call the National Gambling Helpline: 0808 8020 133.",
    href: "https://www.begambleaware.org/",
    logo: "/gamble-aware.png",
  },
  {
    name: "GamCare",
    description: "The UK's leading provider of information, advice and support for anyone affected by problem gambling.",
    href: "https://www.gamcare.org.uk/",
    logo: "/gamcare.png",
  },
  {
    name: "GamStop",
    description: "Register with GamStop to self-exclude from all UKGC-licensed gambling websites and mobile applications simultaneously.",
    href: "https://www.gamstop.co.uk/",
    logo: "/gamstop.svg",
  },
  {
    name: "Gambling Therapy",
    description: "Free online support, forums, and counselling for anyone worldwide affected by the harms of problem gambling.",
    href: "https://www.gamblingtherapy.org/",
    logo: "/gordon.png",
  },
]

const warningSign = [
  "Spending more than you can reasonably afford to lose",
  "Gambling to escape stress, anxiety, or personal difficulties",
  "Chasing losses by increasing bet sizes or session lengths",
  "Being dishonest with friends or family about your gambling",
  "Neglecting work, study, family, or personal commitments",
  "Borrowing money or selling assets to fund continued gambling",
  "Feeling anxious, irritable, or restless when unable to gamble",
  "Making repeated unsuccessful attempts to reduce or stop gambling",
]

export default function ResponsibleGaming() {
  return (
    <main className="min-h-screen flex flex-col bg-[hsl(0,0%,5%)]">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(0,0%,7%)]">
        <div className="h-[2px] bg-[hsl(43,72%,48%)]" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-4">
              Player Welfare
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[hsl(43,20%,88%)] mb-5 text-balance">
              Responsible Gaming
            </h1>
            <div className="h-px bg-[hsl(43,72%,48%)]/30 w-32 mx-auto mb-5" />
            <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed max-w-xl mx-auto">
              Gambling is entertainment. At UKVIPCasinoSites.com, we are unconditionally committed to promoting safe, responsible, and informed play for every UK player.
            </p>
          </div>
        </div>
        <div className="h-px bg-[hsl(43,72%,48%)]/20" />
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-[hsl(0,0%,5%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Commitment */}
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">Our Commitment</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(43,20%,88%)] mb-4">
                Playing Within Control
              </h2>
              <div className="h-px bg-[hsl(0,0%,18%)] w-full mb-6" />
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed mb-4">
                Online gambling is a legitimate form of entertainment enjoyed responsibly by millions of British adults. However, for some individuals it can develop into a harmful compulsion. We take our duty of care seriously and actively encourage all visitors to set clear boundaries, gamble only with money they can afford to lose, and treat gaming purely as entertainment.
              </p>
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">
                Every casino on our platform holds a valid UKGC licence. Licensed operators are legally required to provide comprehensive responsible gambling tools and must comply with strict player protection standards. If you have any concerns about your gambling, please make immediate use of the resources below.
              </p>
            </div>

            {/* Tools */}
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">Tools</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(43,20%,88%)] mb-4">
                Responsible Gambling Tools
              </h2>
              <div className="h-px bg-[hsl(0,0%,18%)] w-full mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tools.map((tool, i) => (
                  <div key={i} className="border border-[hsl(0,0%,18%)] bg-[hsl(0,0%,8%)] p-6 hover:border-[hsl(43,72%,48%)]/40 transition-colors duration-200">
                    <div className="h-px bg-[hsl(43,72%,48%)] w-8 mb-4" />
                    <h3 className="font-serif font-bold text-base text-[hsl(43,20%,88%)] mb-2">{tool.title}</h3>
                    <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">{tool.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning signs */}
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">Awareness</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(43,20%,88%)] mb-4">
                Recognising Problem Gambling
              </h2>
              <div className="h-px bg-[hsl(0,0%,18%)] w-full mb-6" />
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed mb-6">
                Early recognition is the most important step towards recovery. Please seek immediate support if you identify with any of the following behaviours:
              </p>
              <ul className="space-y-2">
                {warningSign.map((sign, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[hsl(43,10%,50%)] border-l border-[hsl(0,0%,18%)] pl-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(358,72%,52%)] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support organisations */}
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">Support</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(43,20%,88%)] mb-4">
                UK Support Organisations
              </h2>
              <div className="h-px bg-[hsl(0,0%,18%)] w-full mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {organisations.map((org) => (
                  <Link
                    key={org.name}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[hsl(0,0%,18%)] bg-[hsl(0,0%,8%)] p-5 hover:border-[hsl(43,72%,48%)]/40 transition-colors duration-200 flex flex-col gap-3 group"
                  >
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={120}
                      height={36}
                      className="object-contain bg-white rounded p-1 h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    <div>
                      <p className="font-serif font-bold text-sm text-[hsl(43,20%,88%)] mb-1 group-hover:text-[hsl(43,72%,48%)] transition-colors duration-200">{org.name}</p>
                      <p className="text-xs text-[hsl(43,10%,50%)] leading-relaxed">{org.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Emergency callout */}
            <div className="bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,18%)] p-8">
              <div className="h-px bg-[hsl(43,72%,48%)] mb-7" />
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">
                Need Help Right Now?
              </p>
              <h3 className="font-serif font-bold text-xl text-[hsl(43,20%,88%)] mb-4">
                Free, Confidential Support — Available 24/7
              </h3>
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed mb-4">
                The National Gambling Helpline provides free, confidential support, information, and counselling at any hour of the day or night. You do not need to be in crisis to call.
              </p>
              <p className="font-serif font-bold text-2xl text-[hsl(43,72%,48%)] mb-2">0808 8020 133</p>
              <p className="text-xs text-[hsl(43,10%,50%)] mb-6">Free from all UK landlines and mobile phones</p>
              <p className="text-xs text-[hsl(43,10%,40%)] leading-relaxed">
                18+ only. Gambling can be addictive. Please play responsibly. All featured casinos hold valid UKGC licences.
              </p>
              <div className="h-px bg-[hsl(43,72%,48%)]/30 mt-7" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
