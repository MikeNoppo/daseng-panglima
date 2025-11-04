"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Sejarah", href: "#history" },
    { label: "Galeri", href: "/gallery" },
    { label: "Cerita Komunitas", href: "/stories" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-white/10 backdrop-blur-lg border-b border-white/20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? "bg-primary/20" : "bg-white/20"
              }`}
            >
              <span
                className={`font-bold text-lg transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                DP
              </span>
            </div>
            <span
              className={`font-semibold hidden sm:inline transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Daseng Panglima
            </span>
          </Link>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? "hover:bg-muted text-foreground" : "hover:bg-white/20 text-white"
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div
            className={`md:hidden pb-4 space-y-2 transition-colors duration-300 ${
              isScrolled ? "bg-background/95" : "bg-black/20"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-muted"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
