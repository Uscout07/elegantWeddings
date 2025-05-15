import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Contact Us"
          description="We'd love to hear from you. Get in touch with our team to start planning your dream wedding."
           imageSrc="https://cdn.pixabay.com/photo/2019/11/10/11/13/happy-valentines-day-4615557_1280.jpg"
        >
          <Link href="/book-consultation">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">Book a Consultation</Button>
          </Link>
        </PageHero>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you're ready to start planning your wedding or have questions about our services, we're here
                  to help. Reach out to our team using any of the methods below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                      <p className="text-gray-500 text-sm">Monday-Friday, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">hello@eternalmoments.com</p>
                      <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">
                        123 Wedding Lane, Suite 101
                        <br />
                        New York, NY 10001
                      </p>
                      <p className="text-gray-500 text-sm">By appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-xl font-medium mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-rose-100 p-2 rounded-full hover:bg-rose-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-rose-500"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-rose-100 p-2 rounded-full hover:bg-rose-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-rose-500"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a href="#" className="bg-rose-100 p-2 rounded-full hover:bg-rose-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-rose-500"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-rose-100 p-2 rounded-full hover:bg-rose-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-rose-500"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="font-serif text-xl font-medium mb-6">Send Us a Message</h3>
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
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="What is your message about?"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="w-full px-3 py-2 border rounded-md min-h-[150px]"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Visit Our Studio</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Schedule an appointment to visit our studio and meet with our wedding planning team.
              </p>
            </div>

            <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center" style={(({ backgroundImage: `url('https://live.staticflickr.com/2888/8758840952_8bd2cfb7ff_h.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }))}>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
