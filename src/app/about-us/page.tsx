import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | UKVIPCasinoSites.com — Expert UK Casino Reviews",
  description:
    "Discover our editorial mission, rigorous review methodology, and unwavering commitment to helping UK players find the finest UKGC-licensed VIP casinos.",
}

const pillars = [
  {
    title: "UKGC Licensed Only",
    body: "Every casino we feature holds a valid UK Gambling Commission licence — guaranteeing the highest standards of player protection, fund security, and fair gaming.",
  },
  {
    title: "UK VIP Player Focus",
    body: "We prioritise casinos that understand premium British gaming culture: GBP accounts, UK-friendly payment methods, exclusive VIP programmes, and dedicated local support.",
  },
  {
    title: "Independent Expert Reviews",
    body: "Our seasoned casino analysts conduct rigorous, hands-on testing of every platform — evaluating game quality, bonus fairness, payout speed, and overall player experience.",
  },
  {
    title: "Exclusive VIP Bonuses",
    body: "We negotiate enhanced welcome packages and exclusive promotions available only through our platform, delivering maximum value for discerning UK VIP players.",
  },
]

const G = "hsl(43,72%,48%)"
const R = "hsl(358,72%,48%)"

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-[hsl(0,0%,5%)]">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(0,0%,7%)]">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)] to-transparent" />
        <div className="container mx-auto px-4 py-14 md:py-22">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans font-semibold tracking-[0.32em] uppercase text-[hsl(43,72%,48%)] mb-4">
              Who We Are
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[hsl(43,20%,88%)] mb-5 text-balance">
              About UKVIPCasinoSites
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)]/50 to-transparent w-32 mx-auto mb-5" />
            <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed max-w-xl mx-auto">
              Your trusted authority on UK VIP casino sites — dedicated to helping British players discover the finest UKGC-licensed operators through independent, specialist-led analysis.
            </p>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)]/20 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-[hsl(0,0%,5%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Mission */}
            <div className="mb-14">
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">Our Mission</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(43,20%,88%)] mb-4">
                Clarity in a Crowded Market
              </h2>
              <div className="h-px bg-[hsl(0,0%,16%)] w-full mb-6" />
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed mb-4">
                At UKVIPCasinoSites.com, we have established ourselves as Britain&apos;s premier destination for casino evaluation and comparison. In today&apos;s saturated gaming marketplace, our specialist team cuts through the marketing noise to identify genuinely exceptional VIP casino experiences tailored exclusively for discerning British players.
              </p>
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">
                Whether you favour high-stakes slots, live blackjack, VIP roulette, or progressive jackpots, we connect you with casinos that deliver outstanding value, an elite game library, and first-class personalised service.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {pillars.map((p, i) => (
                <div key={i} className="border border-[hsl(0,0%,16%)] bg-[hsl(0,0%,8%)] p-6 hover:border-[hsl(43,72%,48%)]/40 transition-colors duration-200">
                  <div className="h-px bg-[hsl(43,72%,48%)] w-8 mb-4" />
                  <h3 className="font-serif font-bold text-base text-[hsl(43,20%,88%)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div className="mb-14">
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">Process</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(43,20%,88%)] mb-4">
                Our Review Methodology
              </h2>
              <div className="h-px bg-[hsl(0,0%,16%)] w-full mb-6" />
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed mb-6">
                Behind every recommendation lies a comprehensive evaluation process refined by industry veterans. We scrutinise each casino across eight critical dimensions:
              </p>
              <ul className="space-y-3">
                {[
                  ["Licensing & Security",   "UKGC licence verification, SSL encryption, and player fund segregation"],
                  ["Welcome Bonuses",         "Value assessment, wagering requirements, and realistic completion terms"],
                  ["Game Library",            "Slot variety, live dealer tables, jackpots, RTP rates, and software providers"],
                  ["VIP Programme",           "Tier structure, comp points, dedicated account managers, and exclusive perks"],
                  ["Payment Methods",         "UK-friendly options, instant deposits, and sub-24-hour withdrawal speeds"],
                  ["Mobile Experience",       "App quality, responsive design, and full game library on mobile devices"],
                  ["Customer Support",        "Live chat availability, response quality, and UK-based support access"],
                  ["Responsible Gaming",      "Deposit limits, time-outs, self-exclusion, and signposting to BeGambleAware"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3 text-sm text-[hsl(43,10%,50%)] border-l border-[hsl(0,0%,16%)] pl-4">
                    <span className="font-serif font-semibold text-[hsl(43,20%,88%)] whitespace-nowrap">{title}:</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="mb-14">
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">Values</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(43,20%,88%)] mb-4">
                Our Core Principles
              </h2>
              <div className="h-px bg-[hsl(0,0%,16%)] w-full mb-6" />
              <div className="space-y-4">
                {[
                  ["Transparency",        "We publish our full testing methodology and scoring criteria so you understand exactly how and why we rank each casino."],
                  ["Editorial Independence", "Our reviews remain entirely impartial. Affiliate commissions never influence our assessments — every rating reflects genuine platform quality."],
                  ["Continuous Updates",  "The casino landscape evolves rapidly. We regularly reassess and update every listing to ensure our recommendations remain accurate and current."],
                  ["Responsible Gaming",  "We are firmly committed to responsible gambling. All pages prominently feature links to BeGambleAware, GamCare, and GamStop."],
                ].map(([title, desc]) => (
                  <div key={title} className="border-l-2 border-[hsl(43,72%,48%)] pl-5 bg-[hsl(0,0%,7%)] py-3 pr-4">
                    <p className="font-serif font-semibold text-sm text-[hsl(43,20%,88%)] mb-1">{title}</p>
                    <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding callout */}
            <div className="bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,16%)] p-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)] to-transparent mb-7" />
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">
                How We Are Funded
              </p>
              <h3 className="font-serif font-bold text-xl text-[hsl(43,20%,88%)] mb-4">
                Always Free for UK Players
              </h3>
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed mb-4">
                UKVIPCasinoSites.com is sustained through affiliate partnerships with licensed casino operators, who compensate us when visitors register through our referral links. This model allows us to deliver a comprehensive, ad-free service at no cost to users.
              </p>
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">
                Crucially, these commercial arrangements never compromise our editorial integrity. Casino rankings are determined exclusively by platform quality, player satisfaction, and objective performance metrics — never by commercial considerations.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)]/30 to-transparent mt-7" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
