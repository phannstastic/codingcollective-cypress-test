CodingCollective Cypress E2E Tests
Repositori ini berisi rangkaian pengujian End-to-End (E2E) otomatis untuk situs web Coding Collective yang dibuat menggunakan Cypress.

📋 Daftar Isi
Prasyarat

Panduan Memulai

Menjalankan Pengujian

Struktur Tes

Kontribusi

Author

🔧 Prasyarat
Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut di sistem Anda:

Node.js: Versi 18.x atau yang lebih baru direkomendasikan.

npm: Biasanya terinstal secara otomatis bersama Node.js.

🚀 Panduan Memulai
Ikuti langkah-langkah ini untuk menyiapkan proyek di mesin lokal Anda.

1. Clone Repositori
Buka terminal Anda dan jalankan perintah berikut untuk meng-clone repositori ke direktori lokal Anda, lalu masuk ke direktori tersebut.

Bash

git clone https://github.com/yourusername/codingcollective-cypress-tests.git
cd codingcollective-cypress-tests
Catatan: Jangan lupa ganti yourusername dengan nama pengguna GitHub Anda.

2. Instal Dependensi
Selanjutnya, instal semua dependensi proyek yang diperlukan dari package.json dengan menjalankan:

Bash

npm install
🧪 Menjalankan Pengujian
Anda dapat menjalankan pengujian dalam dua mode yang berbeda:

Mode Headless
Mode ini menjalankan semua pengujian di background tanpa membuka antarmuka browser. Sangat ideal untuk lingkungan CI/CD atau saat Anda hanya ingin verifikasi cepat.

Bash

npm run test
Mode Interaktif
Mode ini akan membuka Cypress Test Runner. Anda dapat melihat tes berjalan secara real-time, memilih tes spesifik untuk dijalankan, dan menggunakan alat debugging bawaan Cypress.

Bash

npm run open
📂 Struktur Tes
Semua file pengujian (test cases) terletak di dalam direktori cypress/e2e/.

Skenario pengujian mencakup fungsionalitas utama situs, seperti:

Navigasi antar halaman

Validasi konten

Pengiriman dan validasi formulir

Pemeriksaan tautan eksternal

✨ Kontribusi
Kontribusi sangat kami harapkan! Jangan ragu untuk membuka issue jika menemukan masalah atau mengajukan pull request untuk meningkatkan kualitas pengujian.

✍️ Author
Nama: Your Name

Tanggal: 2025-08-09
