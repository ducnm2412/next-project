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

## Trước khi đưa lên mạng

- Thay nội dung mẫu trong `src/data.js`: giá phòng, số liệu (4.9 / 5+), đánh giá (chỉ dùng nhận xét thật), câu trả lời FAQ.
- Form đặt phòng chưa gửi đi đâu: nối với nơi nhận yêu cầu tại chỗ ghi `TODO` trong `src/components/Contact.jsx`.
