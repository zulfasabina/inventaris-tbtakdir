# Inventaris Sederhana TB Takdir
Proyek Semester Pemrograman Web Fullstack: **PHP + MySQL + Bootstrap + jQuery + API (JSON)**.

```
prototype-uts/   Fase 1 - prototipe UI statis dengan data dummy (checkpoint UTS)
app/             Fase 2 - aplikasi fullstack (PHP, MySQL, AJAX/JSON)
database/        schema.sql (struktur + data contoh)
docs/            DOKUMENTASI.md, ERD.md, API.md, TEST_CHECKLIST.md
```

Mulai dari `docs/DOKUMENTASI.md` (project brief, kebutuhan, arsitektur, cara menjalankan).

Fitur aplikasi: login + hak akses (admin/karyawan), CRUD barang, ubah stok + riwayat, **CRUD kategori dan lokasi (admin)**, **laporan stok/riwayat: Excel (CSV) dan cetak/PDF (admin)**, dashboard.

Hosting: import `database/schema_hosting.sql`, upload isi `app/` (lihat `docs/DOKUMENTASI.md` bagian Deploy ke hosting).

Cara cepat: XAMPP/Laragon -> import `database/schema.sql` -> salin `app/` ke `htdocs/inventaris` -> buka `http://localhost/inventaris/` -> login `admin@mail.com` / `admin123`.

## Panduan Git (commit bertahap)
Penilaian melihat riwayat commit yang menunjukkan progres. Lakukan commit sesuai pekerjaan Anda yang sebenarnya, misalnya:
```
git init
git add docs/DOKUMENTASI.md && git commit -m "docs: project brief dan kebutuhan"
git add prototype-uts && git commit -m "feat(ui): prototipe login, dashboard, data barang"
git add database docs/ERD.md && git commit -m "feat(db): ERD dan schema.sql"
git add app/includes app/login.php app/logout.php && git commit -m "feat(auth): login session dan koneksi PDO"
git add app/api/barang.php app/barang.php app/assets && git commit -m "feat(barang): CRUD barang + AJAX"
git add app/api/stok.php app/api/riwayat.php app/riwayat.php && git commit -m "feat(stok): ubah stok dan riwayat"
git add docs/API.md docs/TEST_CHECKLIST.md && git commit -m "docs: API dan test checklist"
```
`app/includes/config.php` sudah masuk `.gitignore` agar kredensial tidak ter-commit.
