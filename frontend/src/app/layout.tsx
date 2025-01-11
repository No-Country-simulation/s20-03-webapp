import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nombre",
    default: "Nombre",
  },
  authors: [{ name: "(Redu) Eduardo R.", url: "https://github.com/MrRedu" }],
  creator: "Equipo s20-03-webapp - NoCountry",
  description: "",
  keywords: ["", "", ""],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
