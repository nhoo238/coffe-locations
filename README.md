# coffe-locations
Ứng dụng Express + EJS hiển thị danh sách địa điểm café.

## Cấu trúc project

- `app.js` – file chính server Express
- `package.json` – dependencies
- `/views` – template EJS
- `/public` – file tĩnh (CSS, JS, images)
- `README.md` – hướng dẫn

## Cài đặt

```bash
npm init -y
npm install express.ejs

## chay
node app.js

truy cap: http://localhost:3000

## **Bước 4: Push lên GitHub**

Mở terminal trong thư mục project:

```bash
# Khởi tạo git nếu chưa có
git init

# Thêm tất cả file
git add .

# Commit
git commit -m "Initial commit - full project"

# Thêm remote
git remote add origin https://github.com/username/coffee-locations.git

# Đẩy lên GitHub
git branch -M main
git push -u origin main
