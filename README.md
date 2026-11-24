# Portofolio Dzaki Al Farizi: Versi Tailwind CSS (Latihan 2)

Website portofolio dari Latihan 1, dengan seluruh gaya ditulis ulang memakai **Tailwind CSS** (utility-first).
Branch: `Lat2_Tailwind`

Live (branch utama, Latihan 1): https://dzakialfarizi23.github.io/Portofolio-Dzaki-Al-Farizi/

## Struktur

```
index.html            halaman utama (HTML + class utility Tailwind)
src/input.css         sumber Tailwind: token warna, font, breakpoint, animasi
assets/css/style.css  CSS hasil kompilasi (dipakai oleh index.html)
assets/js/main.js     kursor kustom, menu mobile, animasi scroll
package.json          script build Tailwind
```

## Apa yang berubah dibanding Latihan 1

- Blok `<style>` panjang diganti **class utility Tailwind** langsung di HTML
  (contoh: `rounded-2xl border border-line bg-surface p-7 hover:-translate-y-1`).
- Variabel CSS (`--bg`, `--accent`, dll.) menjadi **theme token Tailwind** di `src/input.css`
  (`bg-canvas`, `text-accent`, `border-line`, ...).
- Breakpoint 580px dan 900px dipertahankan sebagai `sm:` dan `desk:`.
- Menu **hamburger** ditambahkan, karena versi lama menyembunyikan menu navigasi di layar kecil tanpa pengganti.
- Aksesibilitas: tautan "Lewati ke konten", tautan eksternal memakai `rel="noopener noreferrer"`,
  animasi mengikuti `prefers-reduced-motion`, dan warna teks redup dibuat sedikit lebih terang agar terbaca.
- Desain, warna, font (Syne + DM Sans), dan seluruh isi konten tetap sama.

## Cara menjalankan

Cukup buka `index.html` di browser (CSS hasil kompilasi sudah disertakan), atau di GitHub Pages.

## Mengubah tampilan (opsional)

Butuh Node.js. Setelah mengubah class di `index.html` atau `src/input.css`, kompilasi ulang CSS:

```bash
npm install
npm run build     # sekali jalan
npm run dev       # otomatis kompilasi saat file berubah
```

## Kenapa Tailwind?

| Aspek | CSS biasa (Latihan 1) | Tailwind (Latihan 2) |
|---|---|---|
| Penulisan gaya | File CSS terpisah, nama class dibuat sendiri | Class utility langsung di HTML |
| Konsistensi | Bergantung pada disiplin penulis | Dari satu theme (warna, jarak, font) |
| Responsif | Media query manual | Prefix `sm:` dan `desk:` |
| Ukuran CSS | Semua aturan ikut terkirim | Hanya class yang dipakai (sekitar 29 KB) |
