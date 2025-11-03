export function FeaturesSection() {
  const features = [
    {
      title: "Dokumentasi Sejarah",
      description:
        "Arsip digital lengkap tentang sejarah, fungsi sosial, dan signifikansi Daseng Panglima dalam komunitas lokal.",
      icon: "📚",
    },
    {
      title: "Galeri Visual",
      description:
        "Koleksi foto dan visual yang mendokumentasikan perjalanan Daseng Panglima dari masa jaya hingga saat ini.",
      icon: "🖼️",
    },
    {
      title: "Cerita Komunitas",
      description:
        "Testimoni dan kenangan dari masyarakat lokal, keluarga nelayan, dan mereka yang pernah menghidupkan tempat ini.",
      icon: "💬",
    },
    {
      title: "Warisan Budaya",
      description:
        "Pelestarian tradisi, nilai-nilai, dan pembelajaran dari komunitas yang menjadi bagian dari identitas lokal.",
      icon: "🏛️",
    },
  ]

  return (
    <section id="features" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Apa yang Kami Tawarkan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Platform komprehensif untuk menghormati, mendokumentasikan, dan melestarikan warisan Daseng Panglima
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
