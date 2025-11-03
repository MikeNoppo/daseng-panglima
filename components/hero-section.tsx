"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-daseng-panglima.jpg"
        alt="Daseng Panglima"
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Daseng Panglima
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 mb-8 font-light drop-shadow-md">
            Merajut Kenangan yang Tersisa
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            Sebuah monumen digital untuk menghormati warisan budaya, sejarah nelayan, dan komunitas yang pernah
            menghidupkan tempat bersejarah ini (2004-2022).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Pelajari Lebih Lanjut
            </a>
            <a
              href="/gallery"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Lihat Galeri
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
