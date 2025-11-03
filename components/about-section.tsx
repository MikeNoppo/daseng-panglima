export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Tentang Daseng Panglima</h2>
            <p className="text-muted-foreground leading-relaxed">
              Daseng Panglima adalah sebuah struktur bersejarah yang berdiri dari tahun 2004 hingga 2022. Lebih dari
              sekadar bangunan, Daseng Panglima adalah jantung dari komunitas nelayan lokal, tempat di mana tradisi,
              cerita, dan kehidupan sehari-hari masyarakat berkumpul.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tempat ini menjadi saksi perjalanan panjang komunitas, menyimpan kenangan indah, dan menjadi simbol
              ketangguhan budaya lokal. Melalui website ini, kami mengabadikan warisan tersebut untuk generasi
              mendatang.
            </p>
          </div>

          <div className="relative h-96 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌊</div>
                <p className="text-muted-foreground">Galeri Foto Segera Hadir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
