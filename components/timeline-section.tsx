import Image from "next/image"

export function TimelineSection() {
  const timelineItems = [
    {
      year: "2003-2004",
      title: "Awal Mula",
      description:
        "Daseng Panglima didirikan sebagai pusat komunitas nelayan lokal. Struktur ini dirancang dengan mempertimbangkan kebutuhan masyarakat, menjadi tempat berkumpul, berbagi, dan melestarikan tradisi maritim yang telah turun-temurun.",
      image: "/images/2003-daseng.jpg",
      position: "left",
    },
    {
      year: "2015",
      title: "Masa Jaya - Pertengahan",
      description:
        "Daseng Panglima terus menjadi pusat aktivitas komunitas nelayan. Tempat ini menjadi saksi berbagai peristiwa penting dan menyimpan kenangan indah komunitas.",
      image: "/images/Juni-2015-daseng.jpg",
      position: "right",
    },
    {
      year: "2018",
      title: "Masa Jaya - Konsolidasi Nelayan",
      description:
        "Daseng Panglima menjadi tempat berkumpulnya nelayan Sulut untuk konsolidasi dan membahas berbagai persoalan. Tempat ini terus menjadi simbol kebersamaan dan solidaritas komunitas nelayan.",
      image: "/images/31-Jul-2018-Gelar Konsolidasi, Nelayan Sulut Ungkapkan Berbagai Persoalan.jpg",
      position: "left",
    },
    {
      year: "2020",
      title: "Akhir Perjalanan",
      description:
        "Memasuki tahun 2020, Daseng Panglima mulai mengalami perubahan. Struktur yang telah berdiri selama hampir dua dekade ini mencatat momen-momen akhir sebelum akhirnya tidak lagi berdiri pada tahun 2022.",
      image: "/images/2020-daseng.jpg",
      position: "right",
    },
    {
      year: "2024",
      title: "Warisan Digital",
      description:
        "Melalui monumen digital ini, kami berkomitmen untuk melestarikan warisan Daseng Panglima sebagai bagian integral dari identitas budaya lokal. Setiap cerita dan kenangan adalah kontribusi untuk generasi mendatang.",
      position: "left",
    },
  ]

  return (
    <section id="history" className="py-20 bg-linear-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sejarah Daseng Panglima</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perjalanan dari awal mula hingga warisan yang berkelanjutan
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-primary via-accent to-primary/30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex ${item.position === "right" ? "flex-row" : "flex-row-reverse"} gap-8 items-start`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`bg-card border border-border rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                      item.position === "right" ? "md:ml-0" : "md:mr-0"
                    }`}
                  >
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">{item.year}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">{item.title}</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>

                    {/* Image if provided */}
                    {item.image && (
                      <div className="relative overflow-hidden rounded-lg h-64">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="flex justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform transition-transform duration-300 hover:scale-150" />
                </div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Statement */}
        <div className="mt-20 bg-linear-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">Warisan yang Berkelanjutan</h3>
          <p className="text-muted-foreground leading-relaxed">
            Meskipun Daseng Panglima tidak lagi berdiri secara fisik, warisan dan dampaknya tetap hidup dalam hati dan
            ingatan komunitas. Setiap cerita, foto, dan kenangan yang dibagikan adalah kontribusi untuk memastikan bahwa
            generasi mendatang dapat belajar dari dan menghargai warisan ini.
          </p>
        </div>
      </div>
    </section>
  )
}
