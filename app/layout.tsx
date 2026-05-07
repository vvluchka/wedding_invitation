import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Запрошуємо вас на наше весілля!",
  description:
    "Роман і Христина запрошують вас розділити з ними радість їхнього весілля 6 червня 2026 року.",

  metadataBase: new URL("https://wedding-invitation-navy-one.vercel.app"),

  openGraph: {
    title: "Роман ❤️ Христина | 6 червня 2026",
    description:
      "Запрошуємо вас розділити з нами найщасливіший день у нашому житті! ✨",
    images: [
      {
        url: "/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Весілля Роман і Христина - 6 червня 2026",
      },
    ],
    type: "website",
    locale: "uk_UA",
    siteName: "Весілля Роман і Христина",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}