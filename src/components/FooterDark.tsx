import Image from "next/image";
import { siteConfig, footerLinks } from "@/lib/data";

export default function FooterDark() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Bounce Daily"
              width={120}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              {Object.entries(siteConfig.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dim hover:text-neon transition-colors duration-300 text-sm capitalize"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-dim hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-dim hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-dim hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4 mt-8">
              Contact
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-dim hover:text-foreground transition-colors duration-200">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-dim hover:text-foreground transition-colors duration-200">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.stationsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-dim hover:text-foreground transition-colors duration-200">
                  {siteConfig.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-dim">
            &copy; {new Date().getFullYear()} Bounce Daily. All rights reserved.
          </p>
          <div className="accent-line w-16" />
        </div>
      </div>
    </footer>
  );
}
