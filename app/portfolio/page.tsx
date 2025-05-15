"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggeredFadeIn } from "@/components/animations"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Our Wedding Portfolio"
          description="Browse through our collection of beautiful weddings we've had the honor of planning and coordinating."
          imageSrc="https://cdn.pixabay.com/photo/2019/11/10/11/13/happy-valentines-day-4615557_1280.jpg"
        >
          <Link href="/book-consultation">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
          </Link>
        </PageHero>

        {/* Portfolio Gallery */}
        <section className="py-16 md:py-24">
          <div className="container">
            <StaggeredFadeIn containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
                  <Image
                    src="https://cdn.pixabay.com/photo/2016/11/29/04/28/wedding-1867318_1280.jpg"
                    alt="Wedding portfolio 1"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Sarah & James</span>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="https://cdn.pixabay.com/photo/2019/05/24/18/41/marriage-4226896_1280.jpg"
                    alt="Wedding portfolio 2"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Emily & Michael</span>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image
                    src="https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_1280.jpg"
                    alt="Wedding portfolio 3"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Jessica & David</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="https://cdn.pixabay.com/photo/2021/11/26/10/41/bride-6825609_1280.jpg"
                    alt="Wedding portfolio 4"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Olivia & William</span>
                  </div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
                  <Image
                    src="https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276620_1280.jpg"
                    alt="Wedding portfolio 5"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Sophia & Ethan</span>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image
                    src="https://cdn.pixabay.com/photo/2023/05/26/12/31/couple-8019370_1280.jpg"
                    alt="Wedding portfolio 6"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Emma & Noah</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image
                    src="https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_1280.jpg"
                    alt="Wedding portfolio 7"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Ava & Benjamin</span>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1621829845053-c8114fc01eb3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wedding portfolio 8"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Charlotte & Lucas</span>
                  </div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wedding portfolio 9"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl">Mia & Alexander</span>
                  </div>
                </div>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Featured Weddings */}
        <section className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Featured Weddings</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Take a closer look at some of our favorite weddings that showcase our planning and design expertise.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <FadeIn direction="left">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2016/11/29/04/28/wedding-1867318_1280.jpg"
                    alt="Featured wedding"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium mb-4">Sarah & James - Elegant Garden Wedding</h3>
                  <p className="text-gray-600 mb-6">
                    Sarah and James envisioned a romantic garden wedding with lush florals and elegant details. We
                    transformed their venue into a dreamy outdoor celebration with hanging installations, candlelit
                    pathways, and a stunning floral arch for their ceremony.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Garden Wedding</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Spring</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Outdoor Ceremony</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Floral Design</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn direction="left" delay={0.2} className="flex flex-col justify-center order-2 md:order-1">
                <div>
                  <h3 className="font-serif text-2xl font-medium mb-4">Emily & Michael - Modern City Celebration</h3>
                  <p className="text-gray-600 mb-6">
                    Emily and Michael wanted a sophisticated urban wedding that reflected their love for the city. We
                    designed a sleek, modern celebration with minimalist decor, geometric details, and a stunning
                    rooftop reception overlooking the skyline.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Urban Wedding</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Fall</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Rooftop Reception</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Modern Design</span>
                  </div>
  
                </div>
              </FadeIn>
              <FadeIn direction="right" className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
                <div className="relative h-full w-full">
                  <Image
                    src="https://cdn.pixabay.com/photo/2019/05/24/18/41/marriage-4226896_1280.jpg"
                    alt="Featured wedding"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <FadeIn direction="up">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Ready to Create Your Own Wedding Story?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Let us help you design and plan the wedding of your dreams. Contact us today to schedule a consultation.
              </p>
              <Link href="/book-consultation">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
