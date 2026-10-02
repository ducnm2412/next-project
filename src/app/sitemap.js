import { IMAGES, SITE_URL } from '@/data'

// trang một trang duy nhất; kèm ảnh để Google Hình ảnh lập chỉ mục
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: Object.values(IMAGES).map((img) => `${SITE_URL}${img.src}`),
    },
  ]
}
