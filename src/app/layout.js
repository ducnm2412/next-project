import { Be_Vietnam_Pro, Cormorant_Garamond, Lora, Sacramento } from 'next/font/google'
import './globals.css'
import '@/styles/site.css'

// font tự lưu trên website (next/font) — không tải từ Google lúc người xem mở trang
const sans = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})
const serif = Lora({ subsets: ['latin', 'vietnamese'], weight: '400', variable: '--font-serif' })
const brandSerif = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  weight: '700',
  variable: '--font-brand-serif',
})
const brandScript = Sacramento({ subsets: ['latin'], weight: '400', variable: '--font-brand-script' })

export const metadata = {
  title: 'TỊNH House – Homestay giữa vườn xanh',
  description:
    'TỊNH House – homestay giữa vườn cây xanh, gỗ và tre ở Phú Quốc. Nơi bạn chậm lại, nghỉ ngơi và tìm về sự bình yên.',
}

export const viewport = {
  themeColor: '#1a3423',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${sans.variable} ${serif.variable} ${brandSerif.variable} ${brandScript.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
