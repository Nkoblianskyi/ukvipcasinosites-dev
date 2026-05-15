import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "UK VIP Casino Sites | Premier UK VIP Casinos 2026 | ukvipcasinosites.com",
  description:
    "Britain's most exclusive VIP casino comparison platform. Expert reviews, verified bonuses, and top-rated UKGC-licensed casinos handpicked by our specialist team.",
  keywords:
    "UK VIP casino sites, best VIP casinos UK, UK casino comparison, top UK casinos 2026, UKGC licensed casinos, VIP casino bonuses, premium UK casinos",
}

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CookieConsentProvider>
            {children}

          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
