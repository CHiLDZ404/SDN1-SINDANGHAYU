Catatan Struktur Media SDN 1 Sindanghayu

Tujuan
- Menstandarkan penamaan dan lokasi file gambar (PNG/JPG) dan video (MP4)
- Memudahkan penggantian aset di seluruh halaman

Aturan Penamaan
- Gunakan kebab-case: huruf kecil, tanda minus, tanpa spasi (contoh: beranda-hero.jpg)
- Format disarankan: JPG untuk foto (hemat ukuran), PNG untuk grafis/transparansi, MP4 untuk video
- Resolusi disarankan: 1920×1080 untuk hero/banner, 1200×800 untuk kartu/galeri

Struktur Folder
assets/
└─ media/
   ├─ images/
   │  ├─ logo/
   │  │  └─ logo.png
   │  ├─ hero/
   │  │  ├─ beranda-hero.jpg
   │  │  └─ ppdb-hero.jpg
   │  ├─ kegiatan/
   │  │  ├─ upacara.jpg
   │  │  ├─ literasi.jpg
   │  │  └─ olahraga.jpg
   │  ├─ fasilitas/
   │  │  ├─ kelas.jpg
   │  │  ├─ perpustakaan.jpg
   │  │  ├─ lapangan.jpg
   │  │  ├─ uks.jpg
   │  │  ├─ ruang-guru.jpg
   │  │  └─ toilet.jpg
   │  ├─ ekskul/
   │  │  ├─ pramuka.jpg
   │  │  ├─ drumband.jpg
   │  │  ├─ futsal.jpg
   │  │  ├─ pencak-silat.jpg
   │  │  ├─ tari.jpg
   │  │  └─ english-club.jpg
   │  ├─ prestasi/
   │  │  ├─ drumband-juara.jpg
   │  │  ├─ osn-matematika.jpg
   │  │  └─ adiwiyata.jpg
   │  ├─ guru/
   │  │  ├─ kepala-sekolah.jpg
   │  │  └─ guru-kelas-1.jpg
   │  ├─ ppdb/
   │  │  └─ banner-ppdb.jpg
   │  └─ galeri/
   │     ├─ 01.jpg
   │     ├─ 02.jpg
   │     └─ 03.jpg
   └─ videos/
      ├─ sekolah.mp4
      └─ video.mp4

Pemetaan Halaman
- Beranda (index.html)
  - Hero: images/hero/beranda-hero.jpg
  - Kartu fitur/berita: images/kegiatan/*.jpg atau images/galeri/*.jpg
- Profil (profil.html)
  - Foto identitas atau gedung: images/galeri/01.jpg
- Kurikulum (kurikulum.html)
  - Banner/top: images/hero/beranda-hero.jpg (opsional)
- Guru & Staf (guru.html)
  - Foto kepala sekolah/guru: images/guru/*.jpg
- Ekstrakurikuler (ekstrakurikuler.html)
  - Foto tiap ekskul: images/ekskul/*.jpg
- Prestasi (prestasi.html)
  - Foto prestasi: images/prestasi/*.jpg
- Fasilitas (fasilitas.html)
  - Foto fasilitas: images/fasilitas/*.jpg
- Berita, Pengumuman, Galeri
  - Gunakan images/galeri/*.jpg
- PPDB (ppdb.html)
  - Banner: images/ppdb/banner-ppdb.jpg

Video di Galeri
- File yang akan otomatis ditampilkan: videos/sekolah.mp4 atau videos/video.mp4
- Dapat menambah file lain; ganti logika di assets/js/main.js bila diperlukan

Cara Mengganti Aset di HTML
- Contoh: <img src="assets/media/images/fasilitas/kelas.jpg" alt="Ruang Kelas">
- Pastikan atribut alt diisi deskriptif untuk aksesibilitas

Catatan
- Kompres gambar sebelum unggah (tool rekomendasi: Squoosh, TinyJPG)
- Jaga rasio konsisten agar tata letak stabil
- Nama file jangan mengandung spasi atau huruf besar
