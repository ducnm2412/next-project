# TỊNH House – landing page (Next.js)

Trang giới thiệu homestay TỊNH House, viết bằng Next.js 16 (App Router).

## Chạy dự án

```bash
npm install
npm run dev      # chạy thử ở http://localhost:3000
npm run build    # build bản production
npm start        # chạy bản production đã build
npm run lint
```

Thử trên điện thoại cùng mạng Wi-Fi: `npm run dev -- -H 0.0.0.0`, rồi mở `http://<IP máy tính>:3000`.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `src/app/layout.js` | Font (`next/font`), tiêu đề, mô tả, màu thanh trình duyệt |
| `src/app/page.js` | Trang chủ |
| `src/app/icon.svg` | Icon trên tab trình duyệt |
| `src/app/globals.css` | Biến màu, font, CSS nền |
| `src/styles/site.css` | Toàn bộ giao diện các section |
| `src/components/` | Các phần của trang (`HomePage.jsx` là gốc) |
| `src/hooks/` | Slider, hiện dần khi cuộn, tạm dừng animation ngoài màn hình |
| `src/data.js` | **Nội dung**: phòng, giá, đánh giá, FAQ, liên hệ, link bản đồ |
| `src/assets/` | Ảnh dùng trên trang (được `next/image` tối ưu tự động) |
| `design-assets/` | File logo gốc, không đưa lên web |

## SEO

- Tên miền, tên và mô tả trang: `SITE_URL`, `SITE_NAME`, `SITE_DESCRIPTION` trong `src/data.js`. Có tên miền riêng thì đổi `SITE_URL`, mọi thứ khác (canonical, sitemap, ảnh chia sẻ, dữ liệu có cấu trúc) tự cập nhật.
- Ảnh khi chia sẻ link (Facebook, Zalo…): `src/app/opengraph-image.jpg` (1200×630), chữ mô tả trong `opengraph-image.alt.txt`.
- `src/app/robots.js`, `src/app/sitemap.js`: tạo `/robots.txt`, `/sitemap.xml`.
- Dữ liệu có cấu trúc (schema.org `LodgingBusiness`): `src/app/page.js`. Không thêm đánh giá/điểm sao vào đây khi đánh giá chưa phải là thật.
- Sau khi deploy: khai báo trang trong Google Search Console và gửi `https://<tên miền>/sitemap.xml`.

## Trước khi đưa lên mạng

- Thay nội dung mẫu trong `src/data.js`: giá phòng, số liệu (4.9 / 5+), đánh giá (chỉ dùng nhận xét thật), câu trả lời FAQ.
- Form đặt phòng chưa gửi đi đâu: nối với nơi nhận yêu cầu tại chỗ ghi `TODO` trong `src/components/Contact.jsx`.
