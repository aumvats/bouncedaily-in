import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bounce Daily — Electrifying India's Last Mile",
  description:
    "The full-stack electric mobility platform powering 15,000+ delivery riders across India. Vehicles, batteries, swap stations, fleet intelligence — one system.",
  openGraph: {
    title: "Bounce Daily — Electrifying India's Last Mile",
    description:
      "The full-stack electric mobility platform powering 15,000+ delivery riders across India.",
    url: "https://bouncedaily.in",
    siteName: "Bounce Daily",
    type: "website",
  },
  metadataBase: new URL("https://bouncedaily.in"),
  themeColor: "#050507",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
