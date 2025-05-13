"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import About from "@/components/about"
import Features from "@/components/features"
import Capabilities from "@/components/capabilities"
import UseCases from "@/components/use-cases"
import AIForBharat from "@/components/ai-for-bharat"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ContactModal from "@/components/contact-modal"

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar openContactModal={openContactModal} />
        <Hero />
        <Stats />
        <About />
        <Features />
        <Capabilities />
        <UseCases />
        <AIForBharat />
        <Footer openContactModal={openContactModal} />
        <ScrollToTop />
        <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      </main>
    </ThemeProvider>
  )
}
