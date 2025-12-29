# 📱 Responsive Design Tester – Edge Extension

A modern **Microsoft Edge browser extension** that allows developers and designers to preview any website across **real device screen sizes from 2011 to 2025**.
It supports **mobiles, tablets, laptops, and desktops**, with **portrait & landscape orientations**, all wrapped in a **clean, colorful, and non-messy UI**.

---

## 🚀 Features

### ✅ Comprehensive Device Coverage (2011–2025)

Test responsiveness on real-world screen sizes from:

* 📱 **Mobile Devices**

  * Apple iPhones (3GS → iPhone 15)
  * Samsung Galaxy (S2 → S23, Note series)
  * Google Pixel (Pixel 1 → Pixel 8)

* 📟 **Tablets**

  * Apple iPads (iPad 2 → iPad Pro 12.9")
  * Samsung Galaxy Tabs (Tab 2 → Tab S9)

* 💻 **Desktops & Laptops**

  * MacBook, MacBook Air, MacBook Pro
  * Full HD, QHD, 4K, and 5K monitors

---

### 🔄 Orientation Support

* Portrait
* Landscape (where applicable)

---

### 🎨 Clean & Modern UI/UX

* Colorful but minimal
* Even spacing
* Category-based dropdowns
* Shows **only relevant information**
* No clutter, no confusion

---

### ⚡ Instant Preview

* Opens the **current active tab**
* Resizes it to the selected device resolution
* Centers the preview window automatically

---

## 🗂️ Project Structure

```
responsive-design-tester/
├── manifest.json
├── popup.html
├── popup.js
├── background.js
├── README.md
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## 🧩 How It Works

1. Open any website in Edge
2. Click the **Responsive Design Tester** extension icon
3. Select:

   * Device Category (Mobile / Tablet / Desktop)
   * Brand or Series
   * Device Model
   * Orientation
4. Click **“Open Tester”**
5. A new popup window opens with exact device dimensions

---

## 🛠️ Installation (Developer Mode)

1. Open **Microsoft Edge**
2. Go to:

   ```
   edge://extensions
   ```
3. Enable **Developer mode** (top-right)
4. Click **Load unpacked**
5. Select the `responsive-design-tester` folder
6. Extension is now installed ✅

---

## 🧪 Recommended Use Cases

* Responsive web design testing
* CSS media query verification
* UI/UX layout debugging
* Mobile-first design checks
* Cross-device compatibility testing

---

## 📐 Responsive Breakpoints Reference

| Device Type    | Width Range   |
| -------------- | ------------- |
| Small Mobiles  | 320 – 480px   |
| Large Mobiles  | 480 – 600px   |
| Tablets        | 600 – 1024px  |
| Small Desktops | 1024 – 1280px |
| Large Desktops | 1280 – 1920px |
| Ultra-Wide     | 1920px+       |

---

## ⚠️ Limitations

* Simulates screen size, **not real device hardware**
* Touch gestures (pinch, swipe physics) are limited
* Performance/network speed is not emulated

👉 For final validation, always test on **real devices**.

---

## 📜 License

This project is open-source and free to use for **learning, development, and personal projects**.

---

## 👨‍💻 Author

**Usama Ahmad**
Web Developer | Security Enthusiast | Extension Builder
