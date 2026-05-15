"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "faq-1",
    question: "How do we select the best UK VIP casino sites?",
    answer:
      "Our specialist team subjects every casino to a comprehensive, multi-layered evaluation — covering UKGC licence verification, security audits, VIP programme quality, welcome bonus value, live game breadth, software providers, mobile performance, withdrawal speeds, and customer support responsiveness. Only operators that consistently excel across every dimension earn a place on our platform.",
  },
  {
    id: "faq-2",
    question: "Are these casino sites fully legal and safe for UK players?",
    answer:
      "Absolutely. Every casino listed on UKVIPCasinoSites.com holds a valid UK Gambling Commission licence, ensuring strict compliance with player protection requirements, fair gaming standards, secure transaction processing, and mandatory responsible gambling provisions. Player funds are protected by law, and all operators use military-grade SSL encryption.",
  },
  {
    id: "faq-3",
    question: "What types of welcome bonuses do top UK VIP casinos offer?",
    answer:
      "Premium UK casinos offer a range of welcome packages — including matched deposit bonuses (e.g. 100% up to £500), free spins bundles, no-deposit bonus credits, cashback offers, and multi-stage VIP welcome series. We scrutinise wagering requirements, game restrictions, and validity periods to highlight only the most genuinely rewarding offers.",
  },
  {
    id: "faq-4",
    question: "How do I claim a VIP welcome bonus?",
    answer:
      "Claiming is straightforward: 1) Click our exclusive link to your chosen casino, 2) Register a new account with accurate personal details, 3) Make a qualifying deposit using an eligible payment method, 4) Opt in or enter any required promo code. Some bonuses activate automatically on deposit. Always review the specific T&Cs relating to wagering requirements and eligible games before proceeding.",
  },
  {
    id: "faq-5",
    question: "What payment methods do UK VIP casinos accept?",
    answer:
      "Top-tier UK casinos support debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, prepaid cards (Paysafecard), and modern digital wallets (Apple Pay, Google Pay). Note: credit cards are prohibited for gambling transactions in the UK. The majority of operators process instant deposits and withdrawals within 24 hours, with e-wallets typically being fastest.",
  },
  {
    id: "faq-6",
    question: "Can I play VIP casino games on mobile?",
    answer:
      "Yes. All casinos we recommend deliver first-class mobile experiences — either through dedicated iOS and Android apps or fully optimised responsive web platforms. You can access the complete game library, claim bonuses, manage your account, and process withdrawals directly from your smartphone or tablet.",
  },
  {
    id: "faq-7",
    question: "What is the UK Gambling Commission?",
    answer:
      "The UK Gambling Commission (UKGC) is the statutory regulator that licences and supervises all gambling operators targeting UK customers. It enforces rigorous standards covering game fairness, data security, anti-money laundering, and responsible gambling obligations. UKGC-licensed casinos must maintain segregated player funds, provide self-exclusion tools, and undergo regular compliance audits.",
  },
  {
    id: "faq-8",
    question: "How can I gamble responsibly?",
    answer:
      "Set hard deposit and loss limits before playing, never chase losses, take regular breaks, and treat gambling purely as entertainment. All UKGC-licensed casinos must provide deposit limits, reality checks, time-outs, and self-exclusion options. If you have concerns about your gambling, contact BeGambleAware.org (0808 8020 133), GamCare.org.uk, or self-exclude from all UK gambling sites via GamStop.co.uk.",
  },
]

export function FaqSection() {
  return (
    <section className="py-10 md:py-18 bg-[hsl(0,0%,5%)]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[10px] md:text-xs font-sans font-semibold tracking-[0.32em] uppercase text-[hsl(43,72%,48%)] mb-2">
            FAQ
          </p>
          <h2 className="font-serif font-bold text-xl md:text-4xl text-[hsl(43,20%,88%)] mb-3 text-balance">
            Frequently Asked Questions
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)] to-transparent w-24 md:w-40 mx-auto my-4" />
          <p className="hidden md:block text-sm text-[hsl(43,10%,50%)] max-w-xl mx-auto leading-relaxed">
            Everything UK players need to know about VIP casino sites, bonuses, licensing, and responsible gambling
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-[hsl(0,0%,16%)] last:border-b-0"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-sm md:text-base text-[hsl(43,20%,88%)] py-4 md:py-5 hover:text-[hsl(43,72%,48%)] transition-colors duration-200 gap-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-[hsl(43,10%,50%)] pb-4 md:pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
