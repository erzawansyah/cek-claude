import Link from "next/link";

export const metadata = { title: "Kebijakan Privasi — Likrea" };

export default function Privasi() {
  return (
    <main className="wrap" style={{ padding: "48px 16px", maxWidth: 680 }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 16 }}>Kebijakan Privasi</h1>
      <p>Situs ini tidak punya formulir, akun, atau cookie pelacak. Kami tidak mengumpulkan data dari kunjungan kamu.</p>
      <p>Kalau kamu klik tombol WhatsApp, percakapan berlangsung di WhatsApp dan tunduk pada kebijakan mereka. Kami hanya menyimpan isi chat yang kamu kirim sendiri, untuk menjawab pertanyaanmu.</p>
      <p style={{ marginTop: 24 }}><Link href="/">← Kembali</Link></p>
    </main>
  );
}
