# Task Management By Hira

Dự án này bao gồm cả Backend và Frontend, được xây dựng để...

## Bắt Đầu

### Backend

- Di chuyển vào thư mục backend:
  `cd backend`
- Cài đặt các dependencies:
  `npm install`
- Chạy server:
  `node index.js`

### Frontend

- Di chuyển vào thư mục frontend:
  `cd frontend`
- Cài đặt các dependencies:
  `npm install`
- Chạy server:
  `node index.js`
###  Cấu Trúc Thư Mục
### backend: Chứa mã nguồn của Backend.
  src: Thư mục chính của mã nguồn Backend.
        controllers: Các controllers của ứng dụng.

        models: Các models của ứng dụng.
           
        routes: Các routes của ứng dụng.
           
        package.json: File cấu hình npm cho Backend.

### frontend: Chứa mã nguồn của Frontend.

    src: Thư mục chính của mã nguồn Frontend.
    
        components: Các components của ứng dụng.

        pages: Các trang của ứng dụng.

    public: Thư mục chứa các tệp tin tĩnh không được xử lý bởi Webpack.

    package.json: File cấu hình npm cho Frontend.

### Git Ignore

Các thư mục node_modules, build, coverage và các tệp .env đều được bỏ qua để không đưa lên Git.
