import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      author: "Bapak Hendra",
      role: "Nelayan Veteran",
      excerpt:
        "Daseng Panglima adalah rumah kedua saya. Di sini saya belajar tentang laut, tentang kehidupan, dan tentang kebersamaan...",
      date: "2024",
    },
    {
      id: 2,
      author: "Ibu Siti",
      role: "Anggota Komunitas",
      excerpt:
        "Saya tumbuh besar di sekitar Daseng Panglima. Tempat ini mengajarkan saya nilai-nilai yang masih saya pegang hingga hari ini...",
      date: "2024",
    },
    {
      id: 3,
      author: "Adi",
      role: "Generasi Muda",
      excerpt:
        "Meskipun saya tidak bisa melihat Daseng Panglima dalam keadaan utuh, cerita-cerita dari orang tua saya membuat saya merasa terhubung...",
      date: "2024",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Cerita Komunitas</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Testimoni dan kenangan dari mereka yang pernah menghidupkan Daseng Panglima
            </p>
          </div>

          <div className="space-y-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{story.author}</h3>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{story.date}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{story.excerpt}"</p>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 text-sm font-medium mt-4 inline-block transition-colors"
                >
                  Baca Cerita Lengkap →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/30 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Bagikan Cerita Anda</h3>
            <p className="text-muted-foreground mb-6">
              Kami mengundang Anda untuk berbagi kenangan, pengalaman, dan cerita Anda tentang Daseng Panglima. Setiap
              cerita adalah bagian penting dari warisan ini.
            </p>
            <a
              href="mailto:contact@dasengpanglima.id"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium inline-block"
            >
              Kirim Cerita Anda
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
