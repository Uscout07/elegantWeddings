"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarHeart, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggeredFadeIn } from "@/components/animations"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Our Wedding Planning Services"
          description="From intimate gatherings to grand celebrations, we offer a range of services tailored to your unique vision."
          imageSrc="https://cdn.pixabay.com/photo/2019/11/10/11/13/happy-valentines-day-4615557_1280.jpg"
        >
          <Link href="/book-consultation">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
          </Link>
        </PageHero>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Comprehensive Wedding Planning</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We offer a range of services to meet your unique needs, from full-service planning to day-of
                  coordination.
                </p>
              </div>
            </FadeIn>

            <StaggeredFadeIn containerClassName="grid md:grid-cols-3 gap-8">
              <Card id="full-planning" className="bg-white border-none shadow-md hover:shadow-lg min-h-[500px] transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <CalendarHeart className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">Full Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive planning service covers every aspect of your wedding from start to finish. We'll
                    be with you every step of the way.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Unlimited consultations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Venue selection and management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Vendor recommendations and coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Budget management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Timeline creation and management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Full day-of coordination</span>
                    </li>
                  </ul>
                  <Link href="/book-consultation">
                    <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card id="partial-planning" className="bg-white border-none shadow-md hover:shadow-lg min-h-[500px] transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <CalendarHeart className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">Partial Planning</h3>
                  <p className="text-gray-600 mb-4">
                    For couples who have started planning but need professional guidance to bring their vision to life.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Monthly consultations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Vendor recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Design and decor assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Timeline creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Month-of coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Full day-of coordination</span>
                    </li>
                  </ul>
                  <Link href="/book-consultation">
                    <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card
                id="day-of-coordination"
                className="bg-white border-none shadow-md hover:shadow-lg min-h-[500px] transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <CalendarHeart className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">Day-of Coordination</h3>
                  <p className="text-gray-600 mb-4">
                    We ensure your wedding day runs smoothly, managing all logistics so you can be present in every
                    moment.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Pre-wedding consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Vendor confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Detailed timeline creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Ceremony rehearsal coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Full day-of coordination (up to 12 hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Emergency kit and supplies</span>
                    </li>
                  </ul>
                  <Link href="/book-consultation">
                    <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
                  </Link>
                </CardContent>
              </Card>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Additional Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We offer specialized services to enhance your wedding planning experience.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn direction="left">
                <Card id="destination-weddings" className="bg-white border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="font-serif text-xl font-medium mb-4">Destination Weddings</h3>
                    <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src="https://cdn.pixabay.com/photo/2019/11/10/11/13/happy-valentines-day-4615557_1280.jpg"
                        alt="Destination wedding"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mb-4">
                      Planning a wedding away from home? Our destination wedding services include location scouting,
                      travel arrangements, and coordination with local vendors to ensure your dream wedding in paradise.
                    </p>
                    <Link href="/book-consultation">
                      <Button
                        variant="outline"
                        className="border-rose-200 text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <Card id="vendor-recommendations" className="bg-white border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="font-serif text-xl font-medium mb-4">Vendor Recommendations</h3>
                    <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src="https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_1280.jpg"
                        alt="Wedding vendors"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mb-4">
                      With our extensive network of trusted vendors, we can connect you with the perfect professionals
                      for your wedding. From photographers to florists, we'll help you find vendors who match your style
                      and budget.
                    </p>
                    <Link href="/book-consultation">
                      <Button
                        variant="outline"
                        className="border-rose-200 text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container">
            <FadeIn direction="up">
              <div className="bg-rose-50 rounded-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Ready to Start Planning?</h2>
                    <p className="text-gray-600 mb-6">
                      Let's create the wedding of your dreams together. Contact us today to schedule a consultation and
                      learn more about our services.
                    </p>
                    <Link href="/book-consultation">
                      <Button className="bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src="https://cdn.pixabay.com/photo/2016/11/29/04/28/wedding-1867318_1280.jpg"
                      alt="Happy couple"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
