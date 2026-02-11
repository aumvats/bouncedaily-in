import type { Metadata } from "next";
import NavbarV2 from "@/components/v2/NavbarV2";
import FooterV2 from "@/components/v2/FooterV2";

export const metadata: Metadata = {
  title: "Bounce Daily — Full-Stack EV Infrastructure",
  description:
    "India's full-stack EV infrastructure company. From manufacturing to gig fleet rentals to consumer mobility — one platform.",
  openGraph: {
    title: "Bounce Daily — Full-Stack EV Infrastructure",
    description:
      "India's full-stack EV infrastructure company. Manufacturing, gig fleet rentals, and consumer mobility — one platform.",
    url: "https://bouncedaily.in",
    siteName: "Bounce Daily",
    type: "website",
  },
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarV2 />
      {children}
      <FooterV2 />
    </>
  );
}
