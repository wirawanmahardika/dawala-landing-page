# Dawala Hotel

Landing page resmi **Dawala Hotel Makassar** yang dibangun ulang menggunakan **React Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**, dan **DaisyUI v5**.

## Tech Stack

- **Framework:** [React Router](https://reactrouter.com/) (SSR & Vite)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI v5](https://daisyui.com/)
- **Language:** TypeScript
- **Runtime / Package Manager:** [Bun](https://bun.sh/)

## Fitur Utama

- **Navbar Responsif:** Sticky navbar dengan efek blur, menu desktop, tombol CTA *Book Now*, dan dropdown menu mobile.
- **Hero Carousel:** Slider otomatis dengan indikator slide interaktif dan tombol navigasi ke daftar kamar maupun kontak WhatsApp.
- **About & Statistik:** Animasi counter statistik hotel (`Rooms`, `Events`, `Clients`) yang aktif saat bagian masuk ke viewport.
- **Special Offers:** Daftar paket promo dengan tautan langsung ke WhatsApp.
- **Services:** Informasi layanan utama hotel (*High-Speed WiFi*, *24/7 Hospitality*, *Secure Parking*).
- **Rooms:** Kartu tipe kamar (*Deluxe Room* & *Suite Room*) lengkap dengan galeri foto interaktif, badge fasilitas, harga, dan tombol *Book Now*.
- **Showcases & Landmark:** Embed video YouTube fasilitas hotel serta grid destinasi sekitar.
- **Guest Comments:** Ulasan tamu dengan rating bintang.
- **Footer:** Alamat hotel, peta Google Maps, informasi kontak, dan tautan media sosial.

## Struktur Project

```text
├── app/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GuestCommentsSection.tsx
│   │   ├── HeroCarousel.tsx
│   │   ├── LandmarkSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── RoomsSection.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ShowcasesSection.tsx
│   │   └── SpecialOffersSection.tsx
│   ├── routes/
│   │   └── home.tsx
│   ├── app.css
│   ├── root.tsx
│   └── routes.ts
├── public/
│   ├── favicon.ico
│   └── img/
├── package.json
├── react-router.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Memulai

### Instalasi

```bash
bun install
```

### Development

Jalankan development server dengan HMR:

```bash
bun run dev
```

Aplikasi dapat diakses di `http://localhost:5173`.

### Typecheck & Build

```bash
bun run typecheck
bun run build
```

### Menjalankan Production Server

```bash
bun run start
```

## Docker Deployment

```bash
docker build -t dawala-hotel .
docker run -p 3000:3000 dawala-hotel
```
