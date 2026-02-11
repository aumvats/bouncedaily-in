import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Bounce Daily Studio",
  description: "Content management for Bounce Daily blog.",
  robots: "noindex, nofollow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="sanity-studio"
      style={{ height: "100vh", maxHeight: "100vh", overflow: "hidden" }}
    >
      {children}
    </div>
  );
}
