# Tên Dự Án

Dự án của bạn nhằm mục đích tạo ra một REST API cho phép hiển thị nội dung kết quả đua xe F1, được lấy từ trang web chính thức của F1, https://www.formula1.com/. Crawling dữ liệu từ trang RACE RESULTS của tất cả các năm, và lưu trữ thông tin đó vào cơ sở dữ liệu MySQL. Sau đó, tạo một REST API bằng Node.js và MySQL cho phép tìm kiếm các thông tin liên quan đến năm, tay lái, đội tham gia, cuộc đua, v.v.

## Cài đặt

Hướng dẫn cài đặt và thiết lập dự án trên máy tính cục bộ.

1. Clone repository:

```bash
git clone https://github.com/nguyentantai0128/BE-interview.git
```

2. Cài đặt các dependencies:

cd BE-interview
npm install

3. Migration database
   \_ Tạo db trong mysql: CREATE DATABASE mydb
   \_ Trong file .env cấu hình db_url => mysql://username:password@localhost:3306/mydb

npm run prisma:init

4. Crawling dữ liệu từ trang RACE RESULTS
   \_ Folder: prisma/seed/seed.ts

npm run prisma:seed

5. Khởi động server

npm run start

6. Cập nhật database

\_ prisma/schema.prisma
\_ Tài liệu tham khảo : https://www.prisma.io/
\_ Sau khi cập nhật chạy lại lệnh:

npm run prisma:push

7. Build dự án

npm run build
