"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)] to-transparent" />
      <div className="bg-[hsl(0,0%,6%)] border-t border-[hsl(0,0%,16%)] px-4 py-5 shadow-2xl shadow-black/60">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

            {/* Text */}
            <div className="flex-1 max-w-2xl">
              <p className="text-[10px] font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-1.5">
                Cookie Notice
              </p>
              <p className="text-sm text-[hsl(43,10%,55%)] leading-relaxed">
                We use cookies to enhance your browsing experience, deliver personalised VIP casino recommendations, and analyse site traffic. View our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-[hsl(43,72%,48%)] hover:text-[hsl(43,90%,58%)] underline underline-offset-2 transition-colors"
                >
                  Cookie Policy
                </Link>{" "}
                for full details.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineAll}
                className="px-5 py-2.5 text-sm font-semibold text-[hsl(43,10%,50%)] border border-[hsl(0,0%,22%)] hover:border-[hsl(43,72%,48%)]/50 hover:text-[hsl(43,20%,88%)] transition-all duration-200"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="px-7 py-2.5 text-sm font-black tracking-widest bg-[hsl(43,72%,48%)] text-[hsl(0,0%,5%)] hover:bg-[hsl(43,90%,58%)] transition-all duration-200"
              >
                Accept All
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
