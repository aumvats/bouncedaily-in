import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bounce Daily — India's Electric Mobility Revolution",
  description:
    "100% electric scooter rentals for gig workers. Zero emissions, maximum earnings. Ride clean, earn more.",
  openGraph: {
    title: "Bounce Daily — India's Electric Mobility Revolution",
    description:
      "100% electric scooter rentals for gig workers. Zero emissions, maximum earnings.",
    url: "https://bouncedaily.in",
    siteName: "Bounce Daily",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
