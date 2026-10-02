/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF nhẹ hơn WebP đáng kể; trình duyệt không hỗ trợ sẽ tự nhận WebP
    formats: ['image/avif', 'image/webp'],
    // thêm các mốc 1280/1440/1600 để màn ~1350px không phải tải bản 1920px
    deviceSizes: [640, 750, 828, 1080, 1280, 1440, 1600, 1920, 2560],
    // mốc nhỏ cho ảnh trong lưới/card (hiển thị ~170–430px)
    imageSizes: [128, 192, 256, 320, 384, 480, 560],
    // chất lượng được phép: 60 ảnh hero (có lớp tối phủ), 70 ảnh nội dung, 75 xem ảnh lớn
    qualities: [60, 70, 75],
  },
}

export default nextConfig
