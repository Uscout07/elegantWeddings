import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="What Our Couples Say"
          description="Hear from couples who trusted us with their special day."
          imageSrc="https://cdn.pixabay.com/photo/2019/11/10/11/13/happy-valentines-day-4615557_1280.jpg"
        >
          <Link href="/book-consultation">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
          </Link>
        </PageHero>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah & James",
                  date: "June 2023",
                  quote:
                    "Working with Eternal Moments was the best decision we made for our wedding. They took care of every detail and made our day absolutely perfect.",
                  image: "https://cdn.pixabay.com/photo/2016/11/29/04/28/wedding-1867318_1280.jpg",
                },
                {
                  name: "Emily & Michael",
                  date: "September 2023",
                  quote:
                    "The team at Eternal Moments went above and beyond to make our wedding day stress-free and magical. Their attention to detail and creative vision brought our dream wedding to life in ways we couldn't have imagined.",
                  image: "https://cdn.pixabay.com/photo/2019/05/24/18/41/marriage-4226896_1280.jpg",
                },
                {
                  name: "Jessica & David",
                  date: "August 2023",
                  quote:
                    "From our first meeting to the last dance, Eternal Moments made planning our wedding an absolute joy. Their professionalism, creativity, and genuine care for our vision made all the difference.",
                  image: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_1280.jpg",
                },
                {
                  name: "Olivia & William",
                  date: "July 2023",
                  quote:
                    "We hired Eternal Moments for day-of coordination, and it was the best investment we made. They handled everything flawlessly, allowing us to truly enjoy our wedding day without any stress or worry.",
                  image: "https://cdn.pixabay.com/photo/2021/11/26/10/41/bride-6825609_1280.jpg",
                },
                {
                  name: "Sophia & Ethan",
                  date: "May 2023",
                  quote:
                    "Planning a destination wedding seemed overwhelming until we found Eternal Moments. Their expertise and connections made the entire process seamless, and our wedding in Italy was absolute perfection.",
                  image: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276620_1280.jpg",
                },
                {
                  name: "Emma & Noah",
                  date: "October 2023",
                  quote:
                    "Emma and her team exceeded all our expectations. They transformed our venue into a magical space that perfectly reflected our style and personalities. Our guests are still talking about how beautiful everything was!",
                  image: "https://cdn.pixabay.com/photo/2023/05/26/12/31/couple-8019370_1280.jpg",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="bg-white border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
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
                    <div className="flex flex-col justify-between h-[200px]">
                    <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.date}</p>
                      </div>
                    </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonial */}
        {/* <section className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Hear From Our Couples</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Watch these video testimonials from couples who share their experience working with Eternal Moments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">Video Testimonial Placeholder</div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">Video Testimonial Placeholder</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Ready to Join Our Happy Couples?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let us help you create your own wedding success story. Contact us today to schedule a consultation.
            </p>
            <Link href="/book-consultation">
              <Button className="bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
