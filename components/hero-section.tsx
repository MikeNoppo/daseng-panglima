"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-wave" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-wave"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center -my-20">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Daseng Panglima
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 font-light">Merajut Kenangan yang Tersisa</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Sebuah monumen digital untuk menghormati warisan budaya, sejarah nelayan, dan komunitas yang pernah
            menghidupkan tempat bersejarah ini (2004-2022).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Pelajari Lebih Lanjut
            </a>
            <a
              href="/gallery"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
            >
              Lihat Galeri
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
