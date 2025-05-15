"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggeredFadeIn } from "@/components/animations"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="About Eternal Moments"
          description="Meet the passionate team behind your perfect wedding day."
          imageSrc="https://cdn.pixabay.com/photo/2019/11/10/11/13/happy-valentines-day-4615557_1280.jpg"
        >
          <Link href="/book-consultation">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
          </Link>
        </PageHero>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wedding planner team"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    Eternal Moments was founded in 2010 by a team of passionate wedding enthusiasts who believed that
                    every couple deserves a wedding day that truly reflects their unique love story.
                  </p>
                  <p className="text-gray-600 mb-4">
                    With over a decade of experience in the wedding industry, we've had the honor of planning and
                    coordinating hundreds of weddings, from intimate gatherings to grand celebrations.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our approach combines meticulous planning with creative vision to transform your dreams into
                    reality. We believe that every detail matters, and we're committed to creating a stress-free
                    planning experience that allows you to enjoy every moment of your journey to the altar.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-2 rounded-full">
                        <Heart className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Our Mission</h4>
                        <p className="text-gray-600 text-sm">
                          To create unforgettable wedding experiences that celebrate the unique love story of each
                          couple we work with.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-2 rounded-full">
                        <Heart className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Our Vision</h4>
                        <p className="text-gray-600 text-sm">
                          To be the most trusted wedding planning team, known for our creativity, attention to detail,
                          and personalized service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Meet Our Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our dedicated team of wedding planners brings a wealth of experience, creativity, and passion to every
                  wedding we plan.
                </p>
              </div>
            </FadeIn>

            <StaggeredFadeIn containerClassName="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Emma Thompson</h3>
                <p className="text-rose-500 mb-4">Founder & Lead Planner</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in the wedding industry, Emma brings creativity, attention to detail,
                  and a calm presence to every wedding she plans.
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_1280.jpg"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Sophia Rodriguez</h3>
                <p className="text-rose-500 mb-4">Senior Wedding Planner</p>
                <p className="text-gray-600 mb-4">
                  Sophia's background in event design and her eye for aesthetics make her the perfect planner for
                  couples looking for a visually stunning wedding day.
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">James Wilson</h3>
                <p className="text-rose-500 mb-4">Wedding Coordinator</p>
                <p className="text-gray-600 mb-4">
                  James excels at logistics and timeline management, ensuring that every wedding day runs smoothly from
                  start to finish.
                </p>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-24">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Our Approach</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We believe that planning your wedding should be as enjoyable as the day itself. Our approach is
                  designed to make the process stress-free and fun.
                </p>
              </div>
            </FadeIn>

            <StaggeredFadeIn containerClassName="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-rose-500 font-serif text-xl font-medium">1</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We begin with a detailed consultation to understand your vision, preferences, and budget. This helps
                  us create a personalized planning strategy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-rose-500 font-serif text-xl font-medium">2</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Design & Planning</h3>
                <p className="text-gray-600">
                  We create a detailed design concept and planning timeline, connecting you with the perfect vendors to
                  bring your vision to life.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-rose-500 font-serif text-xl font-medium">3</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Execution</h3>
                <p className="text-gray-600">
                  On your wedding day, we handle all the logistics and coordination, allowing you and your loved ones to
                  fully enjoy every moment.
                </p>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-rose-50">
          <div className="container text-center">
            <FadeIn direction="up">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Let's Create Your Perfect Day</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Ready to start planning your dream wedding? Contact us today to schedule a consultation with our team.
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
