# BE-INTERVIEW (Bài test).

Dự án của bạn nhằm mục đích tạo ra một REST API cho phép hiển thị nội dung kết quả đua xe F1, được lấy từ trang web chính thức của F1, https://www.formula1.com/. Crawling dữ liệu từ trang RACE RESULTS của tất cả các năm, và lưu trữ thông tin đó vào cơ sở dữ liệu MySQL. Sau đó, tạo một REST API bằng Node.js và MySQL cho phép tìm kiếm các thông tin liên quan đến năm, tay lái, đội tham gia, cuộc đua, v.v.
Dự án sử dụng Node Js với framework Express, Mysql, lib Prisma là một Object Relational Mapping (ORMs) giúp giao tiếp với db một cách dễ dàng hơn.
Môi trường Node js (v16.14.2).

## Cài đặt

Hướng dẫn cài đặt và thiết lập dự án trên máy tính cục bộ.

1. Clone repository:

```bash
git clone https://github.com/nguyentantai0128/BE-interview.git
```

2. Cài đặt các dependencies:

cd BE-interview && npm install

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

# API Documentation

## Tìm kiếm kết quả đua xe F1

### Endpoint

GET [/results](http://localhost:${port}/api/v1/race/results)

### Parameters

| Parameter | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| year      | number | Năm để tìm kiếm kết quả (tùy chọn)                    |
| driver    | string | Tên hoặc phần tên của tay lái (tùy chọn)              |
| team      | string | Tên hoặc phần tên của đội tham gia (tùy chọn)         |
| grandPrix | string | Cuộc đua ôtô tranh giải quán quân thế giới (tùy chọn) |

### Response

Status: 200 OK
{
"code": 200,
"message": "Thành công!",
"data": [
{
"id": 1095,
"date": "2023-03-04T00:00:00.000Z",
"grandPrix": "Bahrain",
"driver": "Max\n Verstappen\n \n VER",
"team": "Red Bull Racing Honda RBPT",
"laps": "57",
"time": "1:33:56.736"
},
{
"id": 1096,
"date": "2023-03-18T00:00:00.000Z",
"grandPrix": "Saudi Arabia",
"driver": "Sergio\n Perez\n \n PER",
"team": "Red Bull Racing Honda RBPT",
"laps": "50",
"time": "1:21:14.894"
},
...
]
}

### Description

API này cho phép tìm kiếm kết quả đua xe F1 dựa trên các tiêu chí tùy chọn như năm, tay lái, đội tham gia và cuộc đua. Khi gửi yêu cầu tới endpoint /results với các query parameters tương ứng, API sẽ trả về danh sách các kết quả đua xe F1 phù hợp với tiêu chí tìm kiếm.

Nếu không cung cấp bất kỳ query parameter nào, API sẽ trả về toàn bộ danh sách kết quả đua xe F1.

### Example

Request

GET /results?year=2022

Response

Status: 200 OK

{
"code": 200,
"message": "Thành công!",
"data": [
{
"id": 1102,
"date": "2022-03-19T00:00:00.000Z",
"grandPrix": "Bahrain",
"driver": "Charles\n Leclerc\n \n LEC",
"team": "Ferrari",
"laps": "57",
"time": "1:37:33.584"
},
{
"id": 1103,
"date": "2022-03-26T00:00:00.000Z",
"grandPrix": "Saudi Arabia",
"driver": "Max\n Verstappen\n \n VER",
"team": "Red Bull Racing RBPT",
"laps": "50",
"time": "1:24:19.293"
},
{
"id": 1104,
"date": "2022-04-09T00:00:00.000Z",
"grandPrix": "Australia",
"driver": "Charles\n Leclerc\n \n LEC",
"team": "Ferrari",
"laps": "58",
"time": "1:27:46.548"
},
....
]
}

Trong ví dụ trên, API trả về danh sách các kết quả đua xe F1 trong năm 2022.
