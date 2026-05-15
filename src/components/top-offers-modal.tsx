"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

function StarRating({ rating }: { rating: number }) {
  const stepped    = Math.round(((rating / 10) * 5) / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-5 h-5">
            <Star className="w-5 h-5 text-[hsl(0,0%,22%)]" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-5 h-5 text-[hsl(43,72%,48%)]" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function TopOffersModal() {
  const [isOpen, setIsOpen]   = useState(false)
  const [mounted, setMounted] = useState(false)
  const topSite               = bettingSites[0]

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
    >
      <div className="relative w-full max-w-sm bg-[hsl(0,0%,8%)] animate-scale-in shadow-2xl border border-[hsl(43,72%,48%)]/60 shadow-[hsl(43,72%,48%)]/10">

        {/* Gold top rule */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(43,72%,48%)] to-transparent" />

        {/* Header */}
        <div className="bg-[hsl(0,0%,7%)] px-6 py-4 flex items-center justify-between border-b border-[hsl(0,0%,16%)]">
          <div>
            <p className="text-[10px] font-sans font-semibold tracking-[0.28em] uppercase text-[hsl(43,72%,48%)] mb-0.5">
              VIP Exclusive Offer
            </p>
            <h2 className="font-serif font-bold text-lg text-[hsl(43,20%,88%)] leading-tight">
              Top UK VIP Casino Pick
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[hsl(43,20%,88%)]/35 hover:text-[hsl(43,72%,48%)] transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col items-center gap-5">

          {/* Logo */}
          <div className="w-full bg-white border border-[hsl(0,0%,20%)] flex items-center justify-center p-6 h-32">
            <Image
              src={topSite.logo || "/placeholder.svg"}
              alt={`${topSite.name} logo`}
              width={240}
              height={90}
              className="object-contain max-h-full w-full"
            />
          </div>

          {/* Score */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="font-serif font-bold text-4xl text-[hsl(43,20%,88%)] leading-none">{topSite.score.toFixed(1)}</p>
            <StarRating rating={topSite.score} />
            <p className="text-xs text-[hsl(43,10%,45%)] font-sans">{topSite.reviews.toLocaleString()} verified reviews</p>
          </div>

          {/* Bonus */}
          <div className="w-full border border-[hsl(43,72%,48%)]/40 bg-[hsl(43,72%,48%)]/5 px-5 py-4 text-center">
            <p className="text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[hsl(43,72%,48%)] mb-1">
              VIP Welcome Bonus
            </p>
            <p className="font-serif font-bold text-xl text-[hsl(43,20%,92%)]">{topSite.bonus}</p>
            <p className="text-[11px] text-[hsl(43,10%,55%)] font-sans mt-1">{topSite.welcomeOffer}</p>
          </div>

          {/* CTA */}
          <Link
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[hsl(43,72%,48%)] text-[hsl(0,0%,5%)] py-3.5 text-sm font-black tracking-widest hover:bg-[hsl(43,90%,58%)] transition-colors duration-200"
          >
            Claim VIP Casino Bonus
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-[10px] text-[hsl(43,10%,38%)] font-sans text-center leading-relaxed">
            18+ | Terms &amp; Conditions Apply | BeGambleAware.org | Please Gamble Responsibly
          </p>
        </div>

        {/* Crimson bottom rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-[hsl(358,72%,48%)]/50 to-transparent" />
      </div>
    </div>
  )
}
