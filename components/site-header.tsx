import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-serif font-medium tracking-wide">Eternal Moments</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-rose-500 transition-colors">
            About
          </Link>
          <Link href="/testimonials" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Contact
          </Link>
        </nav>
        <Link href="/book-consultation">
          <Button
            variant="outline"
            className="hidden md:inline-flex border-rose-200 text-rose-500 hover:bg-rose-50 hover:text-rose-600"
          >
            Book Consultation
          </Button>
        </Link>
        <Button variant="ghost" size="icon" className="md:hidden">
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
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
