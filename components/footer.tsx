export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Daseng Panglima</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Monumen digital untuk menghormati warisan budaya dan komunitas nelayan lokal.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/history" className="text-muted-foreground hover:text-primary transition-colors">
                  Sejarah
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="/stories" className="text-muted-foreground hover:text-primary transition-colors">
                  Cerita Komunitas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Hubungi Kami</h4>
            <p className="text-muted-foreground text-sm mb-2">Bagikan cerita atau foto Anda tentang Daseng Panglima</p>
            <a
              href="mailto:contact@dasengpanglima.id"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              contact@dasengpanglima.id
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Daseng Panglima Memorial. Dibuat dengan ❤️ untuk melestarikan warisan lokal.
          </p>
        </div>
      </div>
    </footer>
  )
}
