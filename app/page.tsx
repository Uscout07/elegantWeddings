"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"
import { CalendarHeart, ChevronRight, Heart, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggeredFadeIn } from "@/components/animations"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://cdn.pixabay.com/photo/2019/11/10/11/13/happy-valentines-day-4615557_1280.jpg"
              alt="Wedding couple"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 text-center text-white">
            <FadeIn direction="down" duration={0.8}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
                Creating Unforgettable <br />
                <span className="font-medium">Wedding Experiences</span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="max-w-xl text-lg md:text-xl text-gray-100 mb-8">
                We transform your dreams into reality with our bespoke wedding planning services, creating moments that
                last a lifetime.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} duration={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white">Our Services</Button>
                </Link>
                <Link href="/book-consultation">
                  <Button variant="outline" className="border-white text-rose-500 hover:bg-white/20">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Our Wedding Planning Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  From intimate gatherings to grand celebrations, we offer a range of services tailored to your unique
                  vision.
                </p>
              </div>
            </FadeIn>

            <StaggeredFadeIn containerClassName="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none min-h-[260px] shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col justify-evenly h-full">
                  <div className="mb-4 bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <CalendarHeart className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">Full Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive planning from engagement to the big day. We handle every detail so you can enjoy the
                    journey.
                  </p>
                  <Link
                    href="/services#full-planning"
                    className="text-rose-500 font-medium inline-flex items-center hover:text-rose-600"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white border-none min-h-[260px] shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col justify-evenly h-full">
                  <div className="mb-4 bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <CalendarHeart className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">Partial Planning</h3>
                  <p className="text-gray-600 mb-4">
                    For couples who've started planning but need expert guidance to bring their vision to life.
                  </p>
                  <Link
                    href="/services#partial-planning"
                    className="text-rose-500 font-medium inline-flex items-center hover:text-rose-600"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white border-none min-h-[260px] shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col justify-evenly h-full">
                  <div className="mb-4 bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <CalendarHeart className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">Day-of Coordination</h3>
                  <p className="text-gray-600 mb-4">
                    We ensure your wedding day runs smoothly, managing all logistics so you can be present in every
                    moment.
                  </p>
                  <Link
                    href="/services#day-of-coordination"
                    className="text-rose-500 font-medium inline-flex items-center hover:text-rose-600"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Our Wedding Portfolio</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Browse through our collection of beautiful weddings we've had the honor of planning and coordinating.
                </p>
              </div>
            </FadeIn>

            <StaggeredFadeIn containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg group">
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

              <div className="relative aspect-square overflow-hidden rounded-lg group">
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

              <div className="relative aspect-square overflow-hidden rounded-lg group">
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

              <div className="relative aspect-square overflow-hidden rounded-lg group">
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
            </StaggeredFadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="text-center mt-10">
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-rose-200 text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                  >
                    View Full Gallery
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-rose-50">
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
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Meet Our Team</h2>
                  <p className="text-gray-600 mb-4">
                    With over 10 years of experience in the wedding industry, our passionate team of planners is
                    dedicated to creating magical moments that reflect your unique love story.
                  </p>
                  <p className="text-gray-600 mb-6">
                    We believe that every wedding should be as unique as the couple it celebrates. Our approach combines
                    meticulous planning with creative vision to transform your dreams into reality.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-full">
                        <Heart className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Personalized Approach</h4>
                        <p className="text-gray-600 text-sm">
                          We take the time to understand your vision and preferences.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-full">
                        <Heart className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Attention to Detail</h4>
                        <p className="text-gray-600 text-sm">We meticulously plan every aspect of your special day.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-full">
                        <Heart className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Vendor Relationships</h4>
                        <p className="text-gray-600 text-sm">
                          We work with the best vendors to bring your vision to life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">What Our Couples Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Hear from couples who trusted us with their special day.
                </p>
              </div>
            </FadeIn>

            <StaggeredFadeIn containerClassName="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none min-h-[260px] shadow-md">
                <CardContent className="pt-6 flex flex-col justify-evenly h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "Working with Eternal Moments was the best decision we made for our wedding. They took care of every
                    detail and made our day absolutely perfect."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2016/11/29/04/28/wedding-1867318_1280.jpg"
                        alt="Client"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Sarah & James</h4>
                      <p className="text-gray-500 text-sm">June 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-none min-h-[260px] shadow-md">
                <CardContent className="pt-6 flex flex-col justify-evenly h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "The team at Eternal Moments went above and beyond to make our wedding day stress-free and magical.
                    We couldn't have asked for better planners!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2019/05/24/18/41/marriage-4226896_1280.jpg"
                        alt="Client"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Emily & Michael</h4>
                      <p className="text-gray-500 text-sm">September 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-none min-h-[260px] shadow-md">
                <CardContent className="pt-6 flex flex-col justify-evenly h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "From our first meeting to the last dance, Eternal Moments made planning our wedding an absolute
                    joy. Their attention to detail is unmatched!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_1280.jpg"
                        alt="Client"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Jessica & David</h4>
                      <p className="text-gray-500 text-sm">August 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn direction="left">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Let's Plan Your Perfect Day</h2>
                  <p className="text-gray-600 mb-8">
                    Ready to start planning your dream wedding? Get in touch with our team to schedule a consultation.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-full">
                        <Phone className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-gray-600">(123) 456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-full">
                        <Mail className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">hello@eternalmoments.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-gray-600">
                          123 Wedding Lane, Suite 101
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div>
                  <Card className="border-none shadow-md">
                    <CardContent className="pt-6 flex flex-col justify-evenly h-full">
                      <h3 className="font-serif text-xl font-medium mb-6">Request a Consultation</h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium">
                              First Name
                            </label>
                            <input
                              id="first-name"
                              className="w-full px-3 py-2 border rounded-md"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium">
                              Last Name
                            </label>
                            <input
                              id="last-name"
                              className="w-full px-3 py-2 border rounded-md"
                              placeholder="Enter your last name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter your phone number"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="date" className="text-sm font-medium">
                            Wedding Date
                          </label>
                          <input id="date" type="date" className="w-full px-3 py-2 border rounded-md" />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Tell us about your wedding
                          </label>
                          <textarea
                            id="message"
                            className="w-full px-3 py-2 border rounded-md min-h-[100px]"
                            placeholder="Share your vision, guest count, location, etc."
                          />
                        </div>

                        <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Submit Request</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
