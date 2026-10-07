/**
 * SEMUA DATA ASLI DIISI DI SINI.
 * Aturan v2: nilai `null` / array kosong = bagian itu disembunyikan, bukan diisi placeholder.
 * Foto: taruh di /public (WebP), lalu isi path-nya, mis. "/tim/fajar.webp".
 */
export const site = {
  name: "Likrea",
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? "", // format 62812xxxx, tanpa + atau 0
  replier: null as string | null, // mis. "Fajar"
  replyHours: null as string | null, // mis. "2"
  email: null as string | null, // mis. "halo@likrea.biz.id"
  company: "CV Literasi Kreatif Indonesia",
  nib: null as string | null,
  address: null as string | null,
  village: null as string | null, // untuk baris penutup "Dari [desa], untuk usaha di mana saja."
  heroPhoto: null as string | null, // foto bersama kelima orang
};

export const wa = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type Project = {
  name: string; title: string; url: string; type: string; city: string | null; days: number | null;
  approved: boolean; // izin klien untuk tampil
  shot?: string; // screenshot WebP di /public/proyek; tanpa shot = kartu hijau berisi nama domain
};

// Urutan = urutan tampil. Pertama tampil besar, terakhir tampil lebar.
// Usaha dulu, lalu organisasi/sekolah. Hanya yang approved=true yang tampil.
export const projects: Project[] = [
  { name: "terangsejati.com", title: "Terang Sejati", url: "https://terangsejati.com", type: "Toko buku online", city: null, days: null, approved: true, shot: "/proyek/terangsejati.com.webp" },
  { name: "kanjabung.com", title: "KAN Jabung", url: "https://kanjabung.com", type: "Organisasi usaha", city: "Jawa Timur", days: null, approved: true },
  { name: "paramitra.or.id", title: "Paramitra", url: "https://paramitra.or.id", type: "Organisasi", city: null, days: null, approved: true, shot: "/proyek/paramitra.or.id.webp" },
  { name: "lpmfenomena.com", title: "LPM Fenomena", url: "https://lpmfenomena.com", type: "Pers mahasiswa", city: "Malang", days: null, approved: true, shot: "/proyek/lpmfenomena.com.webp" },
  { name: "smanasionalmalang.sch.id", title: "SMA Nasional Malang", url: "https://smanasionalmalang.sch.id", type: "Sekolah", city: "Malang", days: null, approved: true, shot: "/proyek/smanasionalmalang.sch.id.webp" },
];

// Kalimat asli dari chat WA calon klien. Kosongkan = section disembunyikan.
export const complaints: string[] = [];

export const story = {
  // Isi dengan fakta persis. Kosong = paragraf tidak tampil.
  paragraphs: [] as string[],
  nameReason: null as string | null,
};

export type Member = { name: string; role: string | null; bio: string | null; photo: string | null; linkedin: string | null };
export const team: Member[] = [
  { name: "Fajar Ariffandhi", role: null, bio: null, photo: null, linkedin: null },
  { name: "Syams Shobahizzaman", role: null, bio: null, photo: null, linkedin: "https://www.linkedin.com/in/syams-shobahizzaman-a70850206" },
  { name: "Rifky Pramadani", role: null, bio: null, photo: null, linkedin: "https://www.linkedin.com/in/rifkypramadani/" },
  { name: "Ahmad Yani Ali R.", role: null, bio: null, photo: null, linkedin: "https://www.linkedin.com/in/ahmad-yani-ali-r-3789a072/" },
  { name: "Era Zafira Faranisa", role: null, bio: null, photo: null, linkedin: "https://www.linkedin.com/in/era-zafira-faranisa-ab7a6142a/" },
];

export const services = [
  { name: "Website", get: "Website 1–5 halaman, tampil rapi di HP", teach: "Cara ganti foto, harga, dan teks sendiri" },
  { name: "Google", get: "Profil Google Bisnis + halaman yang mudah ditemukan", teach: "Cara membalas ulasan dan memperbarui jam buka" },
  { name: "Media sosial", get: "Rencana konten dan desain posting tiap bulan", teach: "Template agar bisa lanjut posting sendiri" },
  { name: "Pendampingan", get: "Perbaikan dan tempat bertanya setelah website jadi", teach: "Kapan perlu bantuan, kapan bisa sendiri" },
];

export const steps = [
  ["Ngobrol via WhatsApp", "Ceritakan usahamu. Kami tanya dulu, belum menawarkan apa-apa."],
  ["Penawaran tertulis", "Isi pekerjaan, harga, jadwal, dan jumlah revisi, dalam satu PDF."],
  ["Pembayaran", "Skema pembayaran tertulis jelas di penawaran."],
  ["Pengerjaan", "Kami pakai AI untuk mempercepat bagian teknis. Desain, teks, dan pengecekan akhir dikerjakan manusia di tim kami."],
  ["Serah terima", "Kamu terima akses admin, akun domain atas namamu, dan video panduan singkat."],
];

export const payment: string | null = null; // mis. "50% di awal, 50% setelah jadi"

export const plans = [
  { name: "Landing Page", pages: "1", revisi: "1x", support: "2 minggu", price: null as string | null },
  { name: "Website Usaha", pages: "s.d. 5", revisi: "3x", support: "1 bulan", price: null as string | null },
  { name: "Website + Toko", pages: "s.d. 5 + katalog", revisi: null as string | null, support: "3 bulan", price: null as string | null },
];
export const domainCost: string | null = null; // mis. "± Rp250.000/tahun"

export const testimonials: { quote: string; name: string; biz: string; city: string; link?: string }[] = [];

export const faq = [
  ["Berapa lama?", "Landing page 1–2 minggu, website usaha 2–4 minggu, terhitung sejak materi (foto, teks, logo) lengkap."],
  ["Saya tidak paham teknologi.", "Kamu tidak perlu paham. Setelah jadi, kami rekam video singkat cara mengubah isinya, khusus untuk websitemu."],
  ["Ada biaya bulanan?", "Tidak wajib. Yang rutin hanya domain & hosting, dibayar tahunan langsung ke penyedia atas namamu."],
  ["Kenapa pakai AI? Hasilnya seragam?", "AI membantu kami menulis kode lebih cepat, jadi harganya bisa lebih murah. Desain dan teks disesuaikan untuk usahamu, dan setiap halaman dicek manual di HP sebelum diserahkan."],
  ["Kalau Likrea tutup, website saya bagaimana?", "Tetap jalan. Domain, hosting, dan akses admin sudah atas namamu sejak awal."],
  ["Data saya aman?", "Setelah serah terima, kamu ganti semua password dan kami tidak menyimpan akses, kecuali kamu ambil paket pendampingan."],
];
