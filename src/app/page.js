import HomePage from '@/components/HomePage'
import { CONTACT, GEO, IMAGES, ROOMS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/data'

const toNumber = (price) => Number(price.replace(/\D/g, ''))
const prices = ROOMS.map((r) => toNumber(r.price))
const fmt = (n) => `${n.toLocaleString('vi-VN')}đ`

/*
 * Dữ liệu có cấu trúc (schema.org) giúp Google hiểu đây là cơ sở lưu trú: tên,
 * địa chỉ, điện thoại, giờ nhận/trả phòng, khoảng giá, vị trí bản đồ.
 * Không khai báo đánh giá/điểm sao: đánh giá trên trang đang là nội dung mẫu,
 * Google phạt nếu dữ liệu có cấu trúc chứa đánh giá không thật.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': `${SITE_URL}/#lodging`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: [`${SITE_URL}/opengraph-image.jpg`, ...Object.values(IMAGES).map((img) => `${SITE_URL}${img.src}`)],
  telephone: '+84389733426',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '320a Nguyễn Trung Trực',
    addressLocality: 'Phú Quốc',
    addressRegion: 'An Giang',
    addressCountry: 'VN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
  hasMap: CONTACT.maps,
  sameAs: [CONTACT.facebook],
  checkinTime: '14:00',
  checkoutTime: '12:00',
  priceRange: `${fmt(Math.min(...prices))} – ${fmt(Math.max(...prices))}`,
  currenciesAccepted: 'VND',
  containsPlace: ROOMS.map((room) => ({
    '@type': 'HotelRoom',
    name: room.name,
    description: room.desc,
    image: `${SITE_URL}${room.image.src}`,
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // thay "<" để chuỗi trong dữ liệu không thể đóng thẻ script (chống XSS)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <HomePage />
    </>
  )
}
