import { brutalistSiteConfig, brutalistFooterLinks } from "@/lib/data";

/**
 * Dense grid footer with thick dividers and industrial information density
 */
export default function BrutalistFooter() {
  return (
    <footer className="border-t-8 border-black bg-[#1A1A1A]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-0 border-8 border-black">
          {/* Brand */}
          <div className="p-8 border-r-4 border-b-4 md:border-b-0 border-black bg-[#D4D4D4]">
            <span className="font-bebas text-4xl tracking-widest text-[#1A1A1A]">
              {brutalistSiteConfig.name}
            </span>
            <p className="mt-4 font-ibm-mono text-xs uppercase text-[#1A1A1A] leading-relaxed">
              Building India's electric last-mile infrastructure.
              One rider at a time.
            </p>

            {/* Contact grid */}
            <div className="mt-6 space-y-2 font-ibm-mono text-xs uppercase">
              <a
                href={`tel:${brutalistSiteConfig.phone}`}
                className="block text-[#1A1A1A] hover:text-[#B85C38] transition-none"
              >
                {brutalistSiteConfig.phone}
              </a>
              <a
                href={`mailto:${brutalistSiteConfig.email}`}
                className="block text-[#1A1A1A] hover:text-[#B85C38] transition-none"
              >
                {brutalistSiteConfig.email}
              </a>
              <p className="text-[#525252]">{brutalistSiteConfig.location}</p>
            </div>
          </div>

          {/* Product */}
          <div className="p-8 border-r-4 border-b-4 md:border-b-0 border-black bg-[#1A1A1A]">
            <p className="font-bebas text-xl tracking-wider text-[#FFD600]">
              PRODUCT
            </p>
            <nav className="mt-6 flex flex-col gap-3">
              {brutalistFooterLinks.product.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-ibm-mono text-xs uppercase text-[#F5F5F5] hover:text-[#FFD600] transition-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="p-8 border-r-4 border-b-4 md:border-b-0 border-black bg-[#1A1A1A]">
            <p className="font-bebas text-xl tracking-wider text-[#FFD600]">
              COMPANY
            </p>
            <nav className="mt-6 flex flex-col gap-3">
              {brutalistFooterLinks.company.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-ibm-mono text-xs uppercase text-[#F5F5F5] hover:text-[#FFD600] transition-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="p-8 border-b-4 md:border-b-0 border-black bg-[#1A1A1A]">
            <p className="font-bebas text-xl tracking-wider text-[#FFD600]">
              LEGAL
            </p>
            <nav className="mt-6 flex flex-col gap-3">
              {brutalistFooterLinks.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-ibm-mono text-xs uppercase text-[#F5F5F5] hover:text-[#FFD600] transition-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t-4 border-black flex justify-between items-center">
          <p className="font-ibm-mono text-xs uppercase text-[#9CA3AF]">
            Made in Bengaluru, for the streets of India
          </p>
          <p className="font-ibm-mono text-xs uppercase text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} Bounce Daily
          </p>
        </div>
      </div>
    </footer>
  );
}
