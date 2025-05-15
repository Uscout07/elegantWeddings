"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarHeart, Check } from "lucide-react"
import { FadeIn, StaggeredFadeIn } from "@/components/animations"

export default function BookConsultationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Book a Consultation"
          description="Take the first step towards your dream wedding. Schedule a consultation with our expert planners."
          imageSrc="https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_1280.jpg"
        />

        {/* Consultation Information */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn direction="left">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Your Journey Begins Here</h2>
                  <p className="text-gray-600 mb-6">
                    Our initial consultation is an opportunity for us to get to know you and your vision for your
                    wedding day. We'll discuss your ideas, preferences, and budget to determine how we can best serve
                    you.
                  </p>

                  <h3 className="font-serif text-xl font-medium mb-4">What to Expect</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">A detailed discussion about your wedding vision and style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Overview of our services and how we can help you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Initial budget planning and timeline creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Opportunity to ask questions and address concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Discussion of next steps in the planning process</span>
                    </li>
                  </ul>

                  <div className="bg-rose-50 p-6 rounded-lg mb-6">
                    <h3 className="font-serif text-xl font-medium mb-2">Consultation Details</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CalendarHeart className="h-5 w-5 text-rose-500 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Duration:</strong> 60-90 minutes
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CalendarHeart className="h-5 w-5 text-rose-500 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Location:</strong> Our studio or virtual via Zoom
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CalendarHeart className="h-5 w-5 text-rose-500 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Cost:</strong> $100 (applied to your package if you book with us)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-600 italic">
                    "Our consultation was so helpful in clarifying our vision and understanding what was possible within
                    our budget. We left feeling excited and confident about our wedding plans!" - Sarah & James
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div>
                  <Card className="border-none shadow-md">
                    <CardContent className="pt-6">
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
                              required
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
                              required
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
                            required
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
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="wedding-date" className="text-sm font-medium">
                            Wedding Date
                          </label>
                          <input id="wedding-date" type="date" className="w-full px-3 py-2 border rounded-md" />
                          <p className="text-xs text-gray-500">If you don't have a date yet, that's okay!</p>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="guest-count" className="text-sm font-medium">
                            Estimated Guest Count
                          </label>
                          <input
                            id="guest-count"
                            type="number"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter estimated number of guests"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="service-type" className="text-sm font-medium">
                            Service Type
                          </label>
                          <select id="service-type" className="w-full px-3 py-2 border rounded-md">
                            <option value="">Select a service</option>
                            <option value="full-planning">Full Planning</option>
                            <option value="partial-planning">Partial Planning</option>
                            <option value="day-of-coordination">Day-of Coordination</option>
                            <option value="destination-wedding">Destination Wedding</option>
                            <option value="not-sure">Not Sure Yet</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="consultation-type" className="text-sm font-medium">
                            Consultation Type
                          </label>
                          <select id="consultation-type" className="w-full px-3 py-2 border rounded-md">
                            <option value="">Select consultation type</option>
                            <option value="in-person">In-Person</option>
                            <option value="virtual">Virtual (Zoom)</option>
                            <option value="phone">Phone Call</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Tell us about your wedding vision
                          </label>
                          <textarea
                            id="message"
                            className="w-full px-3 py-2 border rounded-md min-h-[100px]"
                            placeholder="Share your ideas, theme, colors, or any specific details you have in mind"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="referral" className="text-sm font-medium">
                            How did you hear about us?
                          </label>
                          <select id="referral" className="w-full px-3 py-2 border rounded-md">
                            <option value="">Select an option</option>
                            <option value="google">Google Search</option>
                            <option value="instagram">Instagram</option>
                            <option value="facebook">Facebook</option>
                            <option value="referral">Friend/Family Referral</option>
                            <option value="vendor">Vendor Referral</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                          Request Consultation
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <FadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about our consultation process and wedding planning services.
                </p>
              </div>
            </FadeIn>

            <StaggeredFadeIn containerClassName="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium">Is there a fee for the initial consultation?</h3>
                <p className="text-gray-600">
                  Yes, our consultation fee is $100, which is applied to your package if you choose to book with us.
                  This helps us dedicate our full attention to understanding your vision.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium">How far in advance should I book a consultation?</h3>
                <p className="text-gray-600">
                  We recommend booking a consultation as soon as you're engaged, especially if you're planning a wedding
                  during peak season (May-October). This ensures we have availability for your date.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium">What should I bring to the consultation?</h3>
                <p className="text-gray-600">
                  If you have any inspiration photos, Pinterest boards, or ideas for your wedding, please bring them
                  along. Also, having a rough idea of your budget and guest count is helpful.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium">
                  Do I need to have my venue booked before the consultation?
                </h3>
                <p className="text-gray-600">
                  No, you don't need to have your venue booked. In fact, we can provide valuable guidance on selecting
                  the perfect venue for your vision and budget.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium">
                  How long after the consultation will I receive a proposal?
                </h3>
                <p className="text-gray-600">
                  We typically provide a customized proposal within 3-5 business days after your consultation, outlining
                  our recommended services and investment.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium">Can my fiancé/partner join the consultation?</h3>
                <p className="text-gray-600">
                  We encourage both partners to attend the consultation so we can understand both of your visions and
                  preferences for the wedding day.
                </p>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
