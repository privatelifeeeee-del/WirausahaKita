# WirausahaKita - Panduan & Galeri

Website panduan membangun wirausaha dan daya juang masyarakat permukiman dengan galeri UMKM yang inspiratif.

## Deskripsi

WirausahaKita adalah platform web interaktif yang menyediakan panduan lengkap untuk membangun wirausaha di lingkungan permukiman dan meningkatkan daya juang masyarakat. Website ini dilengkapi dengan galeri foto UMKM dan modul-modul panduan yang dapat diunduh.

## Fitur Utama

- **Hero Section Dinamis**: Video background dengan animasi floating illustration
- **Galeri UMKM**: Grid foto dinamis dan responsif dengan efek hover yang menarik
- **Modul Panduan**: 2 modul panduan yang dapat diunduh dalam format .docx:
  - Modul 1: Membangun Wirausaha yang Baik
  - Modul 2: Membangun Daya Juang Masyarakat
- **Pratinjau Interaktif**: Modal untuk melihat isi panduan sebelum mengunduh
- **Dark Mode**: Toggle tema gelap/terang dengan penyimpanan preferensi
- **Animasi Smooth**: Animasi scroll-triggered dan transisi halus
- **Fully Responsive**: Tampilan optimal di desktop, tablet, dan mobile

## Struktur Folder

```
wirausahakita/
├── index.html 
├── README.md  
├── css/
│   ├── styles.css
│   └── animations.css 
├── js/
│   └── main.js 
└── assets/
    ├── videos/
    │   └── bghome.mp4 
    └── images/
        ├── gambar1.jpg 
        ├── gambar2.jpg 
        ├── gambar3.jpg 
        ├── gambar4.jpg
        ├── gambar5.jpg 
        └── gambar6.jpg   
```

## Cara Instalasi

1. **Clone atau Download Repository**
   ```bash
   git clone https://github.com/username/wirausahakita.git
   cd wirausahakita
   ```

2. **Letakkan File Media**
   - Masukkan video `bghome.mp4` ke folder `assets/videos/`
   - Masukkan foto-foto galeri ke folder `assets/images/`

3. **Buka Website**
   - Buka file `index.html` di browser
   - Atau gunakan Live Server di VS Code untuk pengalaman yang lebih baik

## 📱 Kompatibilitas Browser

- Google Chrome (Recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## Teknologi yang Digunakan

- **HTML5**: Struktur halaman
- **CSS3**: Styling dan animasi
- **JavaScript (ES6+)**: Interaktivitas dan logika
- **Tailwind CSS**: Framework CSS utility-first
- **docx.js**: Library untuk generate file Word
- **Inter Font**: Typography

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/) - via CDN
- [docx.js](https://docx.js.org/) - via unpkg CDN
- [Google Fonts (Inter)](https://fonts.google.com/)

## Fitur CSS

### Animations
- Fade in slide up
- Slide from left/right/bottom
- Scale animations
- Float effect
- Image pulse
- Scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px
- Dynamic grid layout
- Flexible typography

## Fitur JavaScript

### Core Functions
- `downloadFile(modulKey)` - Unduh dokumen Word
- `showPreview(modulKey)` - Tampilkan pratinjau modul
- `closeModal()` - Tutup modal pratinjau
- `showNotification(message, bgColor)` - Tampilkan notifikasi
- `initScrollAnimations()` - Inisialisasi animasi scroll
- `toggleDarkMode()` - Toggle dark/light mode
- `scrollToHome()` - Scroll ke atas halaman

## Konten Modul

### Modul 1: Panduan Membangun Wirausaha
1. Identifikasi Potensi Lokal di Permukiman
2. Bentuk Kelompok Usaha Kecil (UMKM)
3. Mulai dari Usaha Berbasis Kebutuhan Harian
4. Kembangkan Produk Lokal atau Olahan Rumah Tangga
5. Manfaatkan Ruang Publik untuk Pelatihan
6. Pemasaran Murah dan Efektif
7. Pengelolaan Keuangan Transparan
8. Libatkan Anak Muda
9. Fokus pada Kualitas dan Kepercayaan
10. Evaluasi Bulanan

### Modul 2: Panduan Membangun Daya Juang Masyarakat
1. Bangun Kesadaran Bersama bahwa Perubahan Itu Mungkin
2. Tingkatkan Gotong Royong sebagai Fondasi Mental
3. Edukasi & Pelatihan: Kunci Kemandirian Mental dan Ekonomi
4. Libatkan Seluruh Kelompok Masyarakat
5. Tetapkan Target Bersama yang Jelas dan Terukur
6. Sediakan Ruang untuk Inovasi & Kreativitas
7. Perkuat Kemandirian Ekonomi Lokal
8. Bangun Lingkungan yang Positif dan Menginspirasi
9. Hadapi Masalah Secara Kolektif
10. Rayakan Kemajuan Sekecil Apa Pun

## Kustomisasi

### Mengubah Warna Tema
Edit variabel warna di `css/styles.css`:
```css
/* Primary colors */
--primary-blue: #2563EB;
--primary-teal: #0d9488;
--dark-bg: #111111;
```

### Menambah Foto Galeri
1. Tambahkan foto ke folder `assets/images/`
2. Edit bagian galeri di `index.html`
3. Tambahkan class `gallery-item` dan `stagger-item`

### Mengubah Konten Modul
Edit object `rawModuleContent` di `js/main.js`

## Kontributor

- Developer: Angelica Barus 

## Kontak

Untuk pertanyaan atau saran, silakan hubungi:
- Email: contact@wirausahakita.id
- Website: https://wirausahakita.id

## Bug Reports

Jika menemukan bug, silakan laporkan di:
- GitHub Issues: [Link ke issues]
- Email: bugs@wirausahakita.id

## Roadmap

- [ ] Tambah fitur pencarian modul
- [ ] Integrasi dengan API UMKM
- [ ] Sistem komentar dan rating
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Offline mode

## Dokumentasi Tambahan

Untuk dokumentasi lebih lengkap, kunjungi:
- [User Guide](docs/user-guide.md)
- [Developer Guide](docs/developer-guide.md)
- [API Documentation](docs/api-docs.md)
