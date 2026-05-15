import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | UKVIPCasinoSites.com",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal data in compliance with UK GDPR and the Data Protection Act 2018.",
}

const sections = [
  {
    title: "1. Information We Collect",
    body: null,
    items: [
      ["Personal Identifiers", "When you subscribe to our newsletter or contact our team, we may collect your name, email address, and any information you voluntarily provide."],
      ["Usage Data", "We automatically collect data about your interactions with our website, including pages viewed, time spent, referring websites, browser type, device information, and IP address."],
      ["Cookies and Tracking Technologies", "We use cookies and similar technologies to enhance your browsing experience. For full details, please consult our Cookie Policy."],
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: "We utilise collected information to: operate and maintain our website; improve user experience through personalisation; send newsletters and casino-related updates (with your consent); respond to enquiries; analyse usage patterns; comply with legal obligations; and detect and prevent fraud or security threats.",
  },
  {
    title: "3. Legal Basis for Processing",
    body: null,
    items: [
      ["Consent", "When you have given explicit permission, such as for newsletter subscriptions or personalised recommendations."],
      ["Legitimate Interests", "When processing is necessary for our business operations, provided your fundamental rights are not overridden."],
      ["Legal Obligation", "When we are required to comply with UK laws, regulatory obligations, or court orders."],
    ],
  },
  {
    title: "4. Information Sharing and Disclosure",
    body: "We do not sell, trade, or rent your personal information to any third party. We may share data only with: trusted service providers assisting with hosting and analytics (bound by strict confidentiality agreements); legal authorities when required by UK law; and in the event of a business transfer, subject to equivalent privacy protections.",
  },
  {
    title: "5. Data Security",
    body: "We implement robust technical and organisational measures to protect your personal information, including SSL/TLS encryption, secure servers, strict access controls, and regular security audits. No internet transmission is entirely risk-free, but we apply industry best-practice safeguards at every level of our infrastructure.",
  },
  {
    title: "6. Data Retention",
    body: "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable UK law. When data is no longer required, we securely delete or anonymise it in accordance with our retention schedule.",
  },
  {
    title: "7. Your Rights Under UK GDPR",
    body: null,
    items: [
      ["Right of Access", "Request a copy of all personal data we hold about you at any time."],
      ["Right to Rectification", "Correct any inaccurate or incomplete personal information we hold."],
      ["Right to Erasure", "Request the deletion of your personal data where there is no compelling reason for continued processing."],
      ["Right to Restrict Processing", "Request that we limit how we use your data in certain circumstances."],
      ["Right to Data Portability", "Receive your personal data in a structured, commonly used, machine-readable format."],
      ["Right to Object", "Object to processing based on our legitimate interests or for direct marketing purposes."],
      ["Right to Withdraw Consent", "Withdraw any previously given consent at any time without affecting the lawfulness of prior processing."],
    ],
  },
  {
    title: "8. Third-Party Links",
    body: "Our website contains links to external casino sites and third-party services. We are not responsible for the privacy practices or content of those sites. We recommend reviewing their individual privacy policies before providing any personal information.",
  },
  {
    title: "9. Children's Privacy",
    body: "Our platform is exclusively intended for individuals aged 18 and over. We do not knowingly collect personal information from anyone under 18. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will take appropriate action.",
  },
  {
    title: "10. Changes to This Policy",
    body: "We may periodically update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by posting the revised policy on this page and updating the date above. We encourage you to review this policy regularly.",
  },
  {
    title: "11. Contact Us",
    body: "For questions about this policy or to exercise your data rights, contact us at: privacy@ukvipcasinosites.com. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.",
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-[hsl(0,0%,5%)]">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(0,0%,7%)]">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)] to-transparent" />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-3">
              Legal
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-[hsl(43,20%,88%)] mb-3 text-balance">
              Privacy Policy
            </h1>
            <p className="text-sm text-[hsl(43,10%,50%)] font-sans">Last updated: 2026</p>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)]/20 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-[hsl(0,0%,5%)] flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed mb-10 border-l-2 border-[hsl(43,72%,48%)] pl-5">
              At UKVIPCasinoSites.com, safeguarding your privacy is our paramount concern. This Privacy Policy outlines how we collect, use, store, and protect your personal information in full compliance with UK GDPR and the Data Protection Act 2018.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div>
                    <h2 className="font-serif font-bold text-xl text-[hsl(43,20%,88%)] mb-1">
                      {section.title}
                    </h2>
                    <div className="h-px bg-[hsl(0,0%,16%)]" />
                  </div>

                  {section.body && (
                    <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">{section.body}</p>
                  )}

                  {section.items && (
                    <ul className="space-y-3 pl-4">
                      {section.items.map(([title, desc]) => (
                        <li
                          key={title}
                          className="flex gap-3 text-sm text-[hsl(43,10%,50%)] border-l border-[hsl(0,0%,16%)] pl-4 bg-[hsl(0,0%,7%)] py-2 pr-3"
                        >
                          <span className="font-serif font-semibold text-[hsl(43,20%,88%)] whitespace-nowrap">
                            {title}:
                          </span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* ICO callout */}
            <div className="mt-12 bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,16%)] p-6">
              <div className="h-px bg-[hsl(43,72%,48%)] mb-5" />
              <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-2">
                Regulatory Authority
              </p>
              <p className="text-sm text-[hsl(43,10%,50%)] leading-relaxed">
                If you believe your data protection rights have been breached and we have failed to resolve your concern, you have the right to complain directly to the{" "}
                <strong className="text-[hsl(43,20%,75%)]">
                  Information Commissioner&apos;s Office (ICO)
                </strong>{" "}
                at{" "}
                <span className="text-[hsl(43,72%,48%)]">ico.org.uk</span> or by calling{" "}
                <strong className="text-[hsl(43,20%,75%)]">0303 123 1113</strong>.
              </p>
              <div className="h-px bg-[hsl(43,72%,48%)]/20 mt-5" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
