# Gstar Product API Migration V1

ชุดนี้ทำให้ Product เดิมยังอยู่ครบ พร้อมโลโก้เดิมบน GitHub และสามารถแก้ข้อมูลจาก Control Tower ได้

## ไฟล์สำหรับ GitHub

- `products.html`
- `Gstar-Management.html`
- `assets/js/api.js`
- `assets/js/app.js`
- `assets/js/management.js`

## ไฟล์สำหรับ Apps Script

- `apps-script/ProductMigration.gs`

## หลักการ

- หน้า Products จะลองอ่าน Google Sheet ก่อน
- ถ้า Sheet ยังว่างหรือ API มีปัญหา จะใช้ Product เดิมใน `app.js` เป็น Backup ทันที
- โลโก้ยังโหลดจาก path เดิมบน GitHub เช่น `product/GstarCAD.png`
- Control Tower แก้ Tagline, Logo Path, Developer, Version, Download URL และข้อมูลเดิมได้
