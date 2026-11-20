const SOCIAL_LINKS = [
  { href: "#", src: "/img/whatsapp.png", alt: "whatsapp" },
  { href: "#", src: "/img/facebook.png", alt: "facebook" },
  { href: "#", src: "/img/youtube.png", alt: "youtube" },
  { href: "#", src: "/img/tiktok.svg", alt: "tiktok" },
  { href: "#", src: "/img/instagram.png", alt: "instagram" },
];

export function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content" id="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Location */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h2 className="footer-title text-warning text-xl opacity-100">
              Location
            </h2>
            <p className="text-neutral-content/80 text-sm text-center md:text-left max-w-md">
              Taman Sudiang Indah No.20 Blok i8, Pai, Kec. Biringkanaya, Kota
              Makassar, Sulawesi Selatan 90243
            </p>
            <iframe
              title="Dawala Hotel Makassar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0808028087317!2d119.5207460735382!3d-5.090635951615679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefba3e12e47cd%3A0xb93ab4d1ed101845!2sDawala%20Hotel%20Makassar!5e0!3m2!1sid!2sid!4v1715255189254!5m2!1sid!2sid"
              className="w-full h-64 border-none rounded-box shadow-lg mt-1"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact */}
          <div
            className="flex flex-col items-center md:items-start gap-4"
            id="contact"
          >
            <div className="flex items-center gap-3">
              <img
                src="/img/dawala-logo.png"
                alt="Dawala Hotel logo"
                className="size-10 rounded-lg"
              />
              <div>
                <h2 className="font-bold text-xl text-warning uppercase tracking-wider">
                  Dawala Hotel
                </h2>
                <p className="text-xs text-neutral-content/60">
                  Makassar, Sulawesi Selatan
                </p>
              </div>
            </div>

            <div className="divider divider-neutral my-0 w-full" />

            <h3 className="footer-title text-warning text-lg opacity-100 mb-0">
              Contact Us
            </h3>

            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a
                  href="mailto:dawala@hotel.com"
                  className="link link-hover text-base"
                >
                  dawala@hotel.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6282296144956"
                  className="link link-hover text-base"
                >
                  +62 822 9614 4956
                </a>
              </li>
            </ul>

            <div className="flex gap-2 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  aria-label={social.alt}
                  className="btn btn-ghost btn-square btn-sm hover:bg-warning/20"
                >
                  <img src={social.src} alt={social.alt} className="size-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-content/15 mt-10 pt-6 text-center text-xs text-neutral-content/60">
          © {new Date().getFullYear()} Dawala Hotel Makassar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
