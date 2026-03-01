# Заняття 13 - Маршрутизація

- Паралельні маршрути (слоти)
- Перехоплення маршрутів для модалки
  - створили @modal – для модалки
  - додали default.tsx – обовʼязковий файл
  - додали modal у RootLayout
  - створили (.)notes/[id] – для перехоплення маршруту
  - використали Modal з router.back()
  - винесли @modal з (public routes) – щоб працювало
  - перезапустили проєкт – обов’язково.

[Dummy Json Server](https://dummyjson.com/docs)

```text
app/
├── inbox/
│   ├── layout.tsx
│   ├── @main/
│   │   └── default.tsx          ← контент
│   └── @sidebar/
│       ├── page.tsx          ← сайдбар
│       ├── filters/
│       │   └── page.tsx      ← фільтри
│       ├── folders/
│       │   └── page.tsx      ← шось якісь папки
│       └── settings/
│           └── page.tsx      ← налаштування

```
