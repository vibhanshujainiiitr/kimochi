import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "./components/common/NavBar";
import { SiteFooter } from "./components/common/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimochi - Connecting India and Japan",
  description: "Connecting India and Japan for IB schools with cross-cultural student collaboration.",
  icons: [
    { rel: "icon", url: "/logo.png" },
    { rel: "icon", url: "/logo.png", type: "image/png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
