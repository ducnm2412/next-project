import { Be_Vietnam_Pro, Cormorant_Garamond, Lora, Sacramento } from 'next/font/google'
import './globals.css'
import '@/styles/site.css'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/data'

// font tự lưu trên website (next/font) — không tải từ Google lúc người xem mở trang
// Chỉ tải trước font chữ chính (bộ Latin). Các font/bộ ký tự khác vẫn có đủ và tải
// khi trang cần (unicode-range) — không tranh băng thông với ảnh hero lúc mở trang.
const sans = Be_Vietnam_Pro({
  subsets: ['latin'],
  preload: true,
  // chỉ các độ đậm thật sự dùng — mỗi độ đậm là một file font phải tải
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
})
const serif = Lora({ subsets: ['latin', 'vietnamese'], weight: '400', variable: '--font-serif', preload: false })
const brandSerif = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  weight: '700',
  variable: '--font-brand-serif',
  preload: false,
})
const brandScript = Sacramento({ subsets: ['latin'], weight: '400', variable: '--font-brand-script', preload: false })

const TITLE = 'TỊNH House – Homestay giữa vườn xanh ở Phú Quốc'

// ảnh chia sẻ lấy tự động từ app/opengraph-image.jpg và app/twitter-image.jpg
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ['TỊNH House', 'homestay Phú Quốc', 'homestay Dương Đông', 'homestay vườn xanh', 'phòng nghỉ Phú Quốc'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: '/',
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
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
