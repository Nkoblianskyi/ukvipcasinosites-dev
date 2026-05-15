"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, Award, Clock } from "lucide-react"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[66px]">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative text-primary-foreground overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg.jpg"
              alt="Luxurious UK VIP casino - roulette wheel, playing cards and gold chips"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark cinematic overlay */}
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="container mx-auto px-4 py-6 md:py-14 relative z-10">
            <div className="max-w-3xl mx-auto text-center">

              {/* Eyebrow - desktop only */}
              <div className="hidden md:flex items-center justify-center gap-2 mb-5 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <div className="h-px w-8 bg-accent/60" />
                <span className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent">
                  UKGC Licensed &amp; Verified
                </span>
                <div className="h-px w-8 bg-accent/60" />
              </div>

              {/* Headline */}
              <h1
                className="font-serif font-bold text-2xl md:text-5xl leading-tight text-primary-foreground mb-3 md:mb-4 text-balance animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                The UK&apos;s Most Prestigious<br />
                <span className="text-accent">Casino Sites</span> Ranked
              </h1>

              {/* Sub - desktop only */}
              <p
                className="hidden md:block text-base text-white/90 leading-relaxed max-w-2xl mx-auto mb-7 text-pretty animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                Our editorial team independently reviews every UKGC-licensed casino - comparing game libraries, bonuses, withdrawal speeds, and customer support so you play with confidence.
              </p>

              {/* Trust badges - desktop only */}
              <div
                className="hidden md:flex flex-wrap justify-center items-center gap-5 mb-7 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex items-center gap-1.5">
                  <Image src="/flag.png" alt="UK Flag" width={20} height={14} />
                  <span className="text-xs text-white font-sans">UKGC Licensed</span>
                </div>
                <div className="w-px h-3 bg-white/30" />
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span className="text-xs text-white font-sans">Exclusive Bonuses</span>
                </div>
                <div className="w-px h-3 bg-white/30" />
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span className="text-xs text-white font-sans">Expert Reviews</span>
                </div>
              </div>

              {/* Last updated - desktop only */}
              <div
                className="hidden md:flex items-center justify-center gap-1.5 mb-5 animate-fade-in-up"
                style={{ animationDelay: "450ms" }}
              >
                <Clock className="w-3 h-3 text-accent" aria-hidden="true" />
                <span className="text-xs text-white/80 font-sans">
                  Last updated: <span className="text-white font-semibold">{currentDate}</span>
                </span>
              </div>

              {/* Disclaimer links */}
              <p className="text-[10px] md:text-[11px] text-white/60 mt-3 md:mt-0 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
                18+ only. Gamble responsibly. BeGambleAware.org.{" "}
                <button
                  onClick={() => setIsAdvertiserModalOpen(true)}
                  className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  Advertiser Disclosure
                </button>
                {" "}|{" "}
                <button
                  onClick={() => setIsAgeModalOpen(true)}
                  className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  Age Verification
                </button>
              </p>
            </div>
          </div>

        </section>

        {/* ── Casino Sites List ─────────────────────────────── */}
        <div id="casino-sites">
          <BettingSitesList />
        </div>



        {/* ── Editorial Guide ───────────────────────────────── */}
        <section className="py-8 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-6 md:mb-12">
                <p className="text-[10px] md:text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-2">
                  Editorial Guide
                </p>
                <h2 className="font-serif font-bold text-xl md:text-4xl text-foreground mb-2 md:mb-4 text-balance">
                  How to Choose the Best UK Casino
                </h2>
                <div className="rule-gold mx-auto w-24 md:w-40 my-3" />
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Your comprehensive guide to selecting a trusted, UKGC-licensed casino in the United Kingdom.
                </p>
              </div>

              {/* Article */}
              <article className="space-y-5 md:space-y-10">
                {[
                  {
                    title: "Understanding UK Casino Regulation",
                    body: [
                      "The UK boasts one of the most stringent and well-respected gambling regulatory frameworks in the world. Every legitimate casino operating in Britain must hold a valid licence from the UK Gambling Commission (UKGC). This regulatory body ensures that operators maintain the highest standards of player protection, fair gaming practices, and responsible gambling measures.",
                      "When evaluating casinos, the UKGC licence should be your first checkpoint. Licensed operators are required to segregate customer funds, implement robust age verification systems, and provide comprehensive responsible gambling tools.",
                    ],
                    highlight: false,
                  },
                  {
                    title: "Evaluating Welcome Bonuses",
                    body: [
                      "Welcome offers can significantly enhance your initial casino experience, but understanding the terms is crucial. UK casinos typically offer matched deposit bonuses, free spins, or no-deposit bonuses for new players.",
                      "Pay close attention to wagering requirements, minimum odds restrictions, and time limitations. A smaller bonus with reasonable terms often provides better value than a larger offer with restrictive conditions.",
                    ],
                    highlight: true,
                  },
                  {
                    title: "Game Libraries and Software Providers",
                    body: [
                      "The breadth and depth of a casino's game library directly impacts your experience. Premier casinos offer thousands of slots, live dealer tables, classic table games, and progressive jackpots powered by industry-leading software providers.",
                      "Look for casinos partnered with reputable providers such as NetEnt, Microgaming, Evolution Gaming, and Playtech. These studios guarantee provably fair games with independently audited RTP rates.",
                    ],
                    highlight: false,
                  },
                  {
                    title: "Banking Methods and Transaction Speed",
                    body: [
                      "Efficient banking is fundamental to a positive casino experience. Leading UK casinos support diverse payment methods including debit cards, e-wallets, bank transfers, and increasingly Apple Pay. Note that credit card gambling has been prohibited in the UK since 2020.",
                      "Withdrawal speed separates exceptional operators from mediocre ones. The fastest casinos process e-wallet withdrawals within hours, whilst debit card transfers typically complete within 2–3 business days.",
                    ],
                    highlight: false,
                  },
                  {
                    title: "Mobile Casino Experience",
                    body: [
                      "Mobile gaming has become the preferred method for millions of UK players. Whether through dedicated iOS and Android applications or mobile-optimised websites, your casino should deliver seamless functionality across devices.",
                      "Evaluate game selection on mobile, live casino availability, and account management features. Superior apps provide biometric login security, personalised notifications, and full access to promotions.",
                    ],
                    highlight: true,
                  },
                  {
                    title: "Customer Support and Responsible Gaming",
                    body: [
                      "Responsive customer support proves invaluable when issues arise. Premium UK casinos offer 24/7 assistance through multiple channels: live chat, email, and telephone support with UK-based agents.",
                      "UKGC-licensed operators must provide deposit limits, reality checks, self-exclusion options, and links to organisations like GamCare and BeGambleAware. These features should be prominent and easily accessible.",
                    ],
                    highlight: false,
                  },
                ].map((section, i) => (
                  <div
                    key={i}
                    className={`${section.highlight ? "border-l-2 border-accent pl-4 md:pl-6" : "border-l border-border pl-4 md:pl-6"}`}
                  >
                    <h3 className="font-serif font-bold text-base md:text-2xl text-foreground mb-2 md:mb-3">
                      {section.title}
                    </h3>
                    {section.body.map((p, j) => (
                      <p key={j} className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}

                {/* ── FAQ ───────────────────────────────────────────── */}
                <div id="faq-section">
                  <FaqSection />
                </div>

                {/* Bottom CTA */}
                <div className="bg-primary text-primary-foreground p-5 md:p-8 text-center mt-6 md:mt-12">
                  <div className="h-px bg-accent mb-5 md:mb-8" />
                  <h3 className="font-serif font-bold text-lg md:text-2xl text-primary-foreground mb-2 md:mb-3">
                    Ready to Find Your Ideal Casino?
                  </h3>
                  <p className="text-xs md:text-sm text-primary-foreground/70 mb-3 leading-relaxed max-w-xl mx-auto">
                    Compare our expert-reviewed UK casinos above and discover exclusive welcome bonuses available only through UKVIPCasinoSites.com.
                  </p>
                  <p className="text-[10px] md:text-xs text-primary-foreground/45">
                    Gambling should be entertaining, not a way to make money. Only bet what you can afford to lose.
                  </p>
                  <div className="h-px bg-accent/30 mt-5 md:mt-8" />
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <CookieBanner />
      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
