# 🇩🇪 DeutschLernen - منصة تعلم اللغة الألمانية مجاناً للعرب

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen.svg" alt="Status" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Nginx-Alpine-009639?logo=nginx&logoColor=white" alt="Nginx" />
  <img src="https://img.shields.io/badge/PWA-Supported-5A0FC8?logo=pwa&logoColor=white" alt="PWA" />
  <img src="https://img.shields.io/badge/Language-Arabic%20%7C%20German-orange" alt="Language" />
</p>

---

## 🌟 الهدف من المشروع (Mission Statement)

تم بناء هذا المشروع بهدف نبيـل ومجاني 100%: **تمكين الناطقين باللغة العربية من تعلم اللغة الألمانية بسلاسة واحترافية وبشكل مجاني تماماً** دون الحاجة لدفع مبالغ باهظة في الدورات التدريبية أو المنصات المدفوعة.

يوفر التطبيق تجربة تفاعلية متكاملة تعتمد على تقنيات التكرار المتباعد (Spaced Repetition System - SRS) والألعاب التحفيزية (Gamification) لمساعدة المتعلمين على إتقان المفردات والقواعد بسهولة.

🌐 **رابط النسخة الحية (Live Demo):**  
👉 [https://deutsch-lernen.duckdns.org](https://deutsch-lernen.duckdns.org)

---

## ✨ المميزات الرئيسية (Key Features)

- 🧠 **نظام التكرار المتباعد (SRS Algorithm):** خوارزمية ذكية لجدولة مراجعة الكلمات والعبارات بناءً على مستوى تذكر المستخدم لضمان ترسيخ المفردات في الذاكرة طويلة المدى.
- ⚡ **تطبيق ويب تقدمي (Progressive Web App - PWA):** إمكانية تثبيت التطبيق على الهواتف والأجهزة الذكية والعمل بدون اتصال بالإنترنت (Offline Mode).
- 🎮 **تحفيز وتتبع التقدم (Gamification & Progress Tracking):**
  - 🔥 نظام الأيام المتتالية (Streak Count) لتشجيع الاستمرارية اليومية.
  - ⭐ نقاط الخبرة (XP) وشريط الإنجاز اليومي.
- 🎧 **استماع ونطق صوتی:** دعم ميزة الاستماع للمفردات بالنطق الألماني الصحيح.
- 📚 **مستويات ودورات متعددة:** دورات مقسمة تناسب المستويات المختلفة (A1, A2, B1...).
- 📱 **واجهة مستخدم متجاوبة (Responsive UI/UX):** تصميم حديث، سريع ومريح للعين يدعم الكتابة من اليمين إلى اليسار (RTL) للغة العربية.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

### Frontend & Core
- **HTML5 / CSS3 / JavaScript (ES6+):** بناء الواجهة التفاعلية واستجابتها بدون مكتبات ثقيلة لضمان السرعة الفائقة.
- **Service Worker & Manifest.json:** دعم تقنية الـ PWA والتخزين المؤقت للعمل Offline.

### Deployment & Infrastructure
- **Docker & Docker Compose:** تغليف التطبيق في حاوية معزولة لسهولة النشر والتشغيل على أي سيرفر.
- **Nginx (Alpine):** خادم خفيف للسرعة الفائقة، ضغط الملفات بـ `gzip` وإدارة الكاش بشكل مخصص للـ PWA.
- **Caddy Reverse Proxy:** خادم التوجيه الخارجي مع تفعيل شهادات الأمان تلقائياً (SSL / Automatic HTTPS).

---

## 🏗️ البنية التحتية وهيكلية النشر (Architecture)

```
[ User Browser ]
       │
       ▼ (HTTPS / SSL)
[ Caddy Reverse Proxy ]
       │
       ▼ (Port 8085)
[ Docker Container (Nginx Alpine) ]
       │
       ├── index.html / styles.css / app.js
       ├── srs.js (Spaced Repetition Logic)
       └── sw.js (PWA Offline Service Worker)
```

---

## 🚀 كيفية التشغيل محلياً (Local Setup)

### الخيار 1: التشغيل المباشر عبر المتصفح
1. قم بفتح ملف `index.html` مباشرة في أي متصفح.

### الخيار 2: التشغيل باستخدام Docker
```bash
# بناء وتشغيل الحاوية
docker compose up -d --build

# فتح التطبيق في المتصفح
http://localhost:8085
```

---

## ☁️ النشر على سيرفر خاص (Production Deployment)

1. **نسخ المشروع للسيرفر:**
   ```bash
   scp -O -r . user@your-server:~/deutsch-lernen
   ```
2. **تشغيل الحاوية في السيرفر:**
   ```bash
   cd ~/deutsch-lernen
   docker compose up -d --build
   ```
3. **إضافة التوجيه في Caddyfile (`/etc/caddy/Caddyfile`):**
   ```caddy
   deutsch-lernen.duckdns.org {
       reverse_proxy localhost:8085
   }
   ```
4. **إعادة تحميل Caddy:**
   ```bash
   sudo systemctl reload caddy
   ```

---

## 📄 الترخيص (License)

هذا المشروع مفتوح المصدر ومتاح وتحت ترخيص [MIT License](LICENSE) - متاح للجميع للاستفادة والتطوير والتعلم المجاني.

---

<p align="center">
  صُنع بـ ❤️ لخدمة وتسهيل التعليم المجاني للجميع
</p>
