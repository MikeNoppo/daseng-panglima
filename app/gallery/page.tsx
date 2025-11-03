import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const galleryItems = [
    { id: 1, title: "Daseng Panglima - Masa Jaya", category: "Arsip" },
    { id: 2, title: "Komunitas Nelayan Berkumpul", category: "Komunitas" },
    { id: 3, title: "Aktivitas Sehari-hari", category: "Dokumentasi" },
    { id: 4, title: "Perayaan Hasil Tangkapan", category: "Perayaan" },
    { id: 5, title: "Generasi Muda Belajar", category: "Edukasi" },
    { id: 6, title: "Momen Bersama Keluarga", category: "Komunitas" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Galeri Visual</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Koleksi foto dan visual yang mendokumentasikan perjalanan Daseng Panglima
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative h-64 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📷</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-card rounded-lg border border-border text-center">
            <p className="text-muted-foreground mb-4">
              Galeri foto sedang dalam proses pengumpulan dan kurasi. Kami mengundang Anda untuk berkontribusi dengan
              membagikan foto dan cerita Anda tentang Daseng Panglima.
            </p>
            <a href="#contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Bagikan Foto Anda →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
