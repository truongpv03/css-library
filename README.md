# 📌 CSS Utility-First Library

Thư viện CSS Utility-First giúp bạn xây dựng giao diện nhanh chóng với các class tiện ích giống như Bootstrap hoặc TailwindCSS.

---

## 📂 Cấu trúc thư viện

```
/css-library  
│── /src  
│   │── /utilities        # Nhóm class tiện ích  
│   │   │── _spacing.css       # Padding & Margin  
│   │   │── _flex.css          # Flexbox Utilities  
│   │   │── _grid.css          # Grid System  
│   │   │── _typography.css    # Font size, line-height, text utilities  
│   │   │── _colors.css        # Màu sắc  
│   │   │── _visibility.css    # Hiển thị (hidden, visible, d-none, v.v.)  
│   │── /base             # CSS nền tảng (reset, variables, global styles)  
│   │   │── _reset.css         # Reset mặc định  
│   │   │── _variables.css     # Biến màu sắc, font-size  
│   │   │── _global.css        # Các thiết lập chung (body, html)  
│   │── /components       # Thành phần UI  
│   │   │── _button.css        # Button styles  
│   │   │── _card.css          # Card component  
│   │   │── _form.css          # Form elements  
│   │   │── _navbar.css        # Navigation bar  
│   │── main.css          # Tích hợp toàn bộ file CSS  
│── /dist  
│   │── css-library.min.css  # Phiên bản nén để sử dụng  
│── index.html           # Demo thử nghiệm thư viện  
│── README.md            # Hướng dẫn sử dụng  

```

---

## 🚀 Cách sử dụng

### 1️⃣ **Cài đặt**
Bạn có thể sử dụng thư viện này bằng cách tải file `css-library.min.css` và nhúng vào HTML:

```html
<link rel="stylesheet" href="dist/css-library.min.css">
```

Hoặc sử dụng phiên bản đầy đủ trong thư mục `src/`.

### 2️⃣ **Ví dụ sử dụng**

#### 🎨 **Sử dụng class tiện ích**
```html
<div class="p-4 m-2 bg-primary text-white">
    Đây là một box với padding 4, margin 2, nền màu chính và chữ trắng.
</div>
```

#### 🔘 **Sử dụng button**
```html
<button class="btn btn-primary">Nút chính</button>
<button class="btn btn-secondary">Nút phụ</button>
```

---

## 🌟 Các thành phần hỗ trợ

- **📌 Utilities:** Spacing, Flexbox, Grid, Typography, Colors, Visibility  
- **🎨 Components:** Buttons, Cards, Forms, Navbar  

---

## 🔧 Phát triển & Build

1. Clone repo về máy:
   ```sh
   git clone https://github.com/truongpv03/css-library.git
   cd css-library
   ```

2. Chỉnh sửa các file trong thư mục `/src/`.

3. Dùng Webpack để build file `css-library.min.css`:
   ```sh
   npm install
   npm run build
   ```

---

## 📌 Ghi chú
- Đây là phiên bản ban đầu, có thể mở rộng sau này.  
- Bạn có thể tùy chỉnh CSS theo nhu cầu của mình.


