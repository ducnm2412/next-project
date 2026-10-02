'use client'

// Trang chủ có nhiều tương tác (slider, form, xem ảnh, hiệu ứng cuộn) nên là
// Client Component; Next.js vẫn dựng sẵn HTML ở server rồi gắn tương tác ở trình duyệt.
import { useRef, useState } from 'react'
import { ROOMS } from '@/data'
import Header from './Header'
import Hero, { Marquee } from './Hero'
import Contact from './Contact'
import { LightboxProvider } from './Lightbox'
import { About, Experience, Faq, Footer, Gallery, Rooms, Testimonials } from './Sections'
import useReveal from '@/hooks/useReveal'
import usePauseOffscreen from '@/hooks/usePauseOffscreen'

const EMPTY_BOOKING = {
  name: '',
  phone: '',
  checkin: '',
  checkout: '',
  guests: 2,
  room: ROOMS[0].name,
  note: '',
}

function scrollToBooking() {
  window.dispatchEvent(new Event('show-booking-form'))
  document.getElementById('lien-he')?.scrollIntoView({ behavior: 'smooth' })
  setTimeout(() => document.getElementById('bk-name')?.focus({ preventScroll: true }), 600)
}

export default function HomePage() {
  const [booking, setBooking] = useState(EMPTY_BOOKING)
  const mainRef = useRef(null)
  useReveal(mainRef)
  usePauseOffscreen(mainRef)

  const handleBookRoom = (room) => {
    setBooking((b) => ({ ...b, room }))
    scrollToBooking()
  }

  return (
    <LightboxProvider>
      <a className="skip-link" href="#gioi-thieu">Bỏ qua đến nội dung</a>
      <Header />
      <main ref={mainRef}>
        <Hero />
        <Marquee />
        <About />
        <Rooms onBook={handleBookRoom} />
        <Experience />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact booking={booking} setBooking={setBooking} />
      </main>
      <Footer />
    </LightboxProvider>
  )
}
