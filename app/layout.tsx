import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--serif", display: "swap" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--sans", display: "swap" });

export const metadata: Metadata = {
  title: "Likrea — Website untuk usaha kecil, kuncinya di tanganmu",
  description:
    "Jasa website, Google, dan media sosial untuk usaha kecil. Domain atas namamu, akses admin kamu pegang, dan kamu diajari cara mengubah isinya sendiri.",
  openGraph: { title: "Likrea", description: "Kami buatkan websitenya. Kami ajari cara pakainya.", locale: "id_ID", type: "website" },
};
export const viewport: Viewport = { themeColor: "#f6f0e4", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
