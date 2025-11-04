import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    { id: 1, title: "Daseng Panglima - 2003", category: "Arsip", image: "/gallery/2003-daseng.jpg" },
    { id: 2, title: "Daseng Panglima - 2020", category: "Arsip", image: "/gallery/2020-daseng.jpg" },
    { id: 3, title: "Konsolidasi Nelayan Sulut", category: "Komunitas", image: "/gallery/31-Jul-2018-Gelar Konsolidasi, Nelayan Sulut Ungkapkan Berbagai Persoalan.jpg" },
    { id: 4, title: "Daseng - Juni 2020", category: "Dokumentasi", image: "/gallery/Daseng-29-juni-2020.jpg" },
    { id: 5, title: "Tampak Depan Daseng", category: "Dokumentasi", image: "/gallery/dasengFrontView.jpg" },
    { id: 6, title: "Pemandangan dari Kapal", category: "Dokumentasi", image: "/gallery/dasenBoatView.png" },
    { id: 7, title: "Frances and Sea", category: "Komunitas", image: "/gallery/fancesAndSea.jpg" },
    { id: 8, title: "Pemandangan Laut", category: "Dokumentasi", image: "/gallery/SeaView.jpg" },
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
                className="group relative h-64 rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <span className="text-xs px-3 py-1 bg-primary/80 text-white rounded-full">{item.category}</span>
                </div>
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
