import Image from "next/image"

export function TimelineSection() {
  const timelineItems = [
    {
      year: "2004",
      title: "Awal Mula",
      description:
        "Daseng Panglima didirikan sebagai pusat komunitas nelayan lokal. Struktur ini dirancang dengan mempertimbangkan kebutuhan masyarakat, menjadi tempat berkumpul, berbagi, dan melestarikan tradisi maritim yang telah turun-temurun.",
      image: "/daseng-panglima-2004-bangunan-asli.jpg",
      position: "left",
    },
    {
      year: "2004-2020",
      title: "Masa Jaya",
      description:
        "Selama lebih dari 15 tahun, Daseng Panglima menjadi simbol ketangguhan dan kebersamaan komunitas. Tempat ini menjadi saksi berbagai peristiwa penting dan repository kenangan komunitas.",
      image: "/komunitas-nelayan-berkumpul-bersama.jpg",
      position: "right",
    },
    {
      year: "2021-2022",
      title: "Perubahan dan Kehancuran",
      description:
        "Pada tahun 2021-2022, Daseng Panglima mengalami perubahan signifikan yang berakhir dengan kehancurannya. Berbagai faktor berkontribusi pada nasib tragis struktur bersejarah ini.",
      image: "/perubahan-sosial-ekonomi-komunitas.jpg",
      position: "left",
    },
    {
      year: "2024",
      title: "Warisan Digital",
      description:
        "Melalui monumen digital ini, kami berkomitmen untuk melestarikan warisan Daseng Panglima sebagai bagian integral dari identitas budaya lokal. Setiap cerita dan kenangan adalah kontribusi untuk generasi mendatang.",
      position: "right",
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
