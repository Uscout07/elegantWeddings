"use client"

import type React from "react"
import Image from "next/image"
import { FadeIn } from "@/components/animations"

interface PageHeroProps {
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  children?: React.ReactNode
}

export function PageHero({
  title,
  description,
  imageSrc = "/placeholder.svg?height=800&width=1600",
  imageAlt = "Hero image",
  children,
}: PageHeroProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 text-center text-white">
        <FadeIn direction="down" duration={0.8}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">{title}</h1>
        </FadeIn>
        {description && (
          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <p className="max-w-xl text-lg md:text-xl text-gray-100 mb-8">{description}</p>
          </FadeIn>
        )}
        {children && (
          <FadeIn direction="up" delay={0.4} duration={0.8}>
            {children}
          </FadeIn>
        )}
      </div>
    </section>
  )
}
