"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Smartphone, BarChart2, Brain, Target, Mic, ChevronLeft, ChevronRight } from "lucide-react"

export default function Capabilities() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      // Add custom CSS to hide scrollbars
      const style = document.createElement("style")
      style.textContent = `
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;             /* Chrome, Safari and Opera */
        }
      `
      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [isMounted])

  const capabilities = [
    {
      title: "Unified Communication Framework",
      description: "All in one communication suite for seamless integration.",
      icon: MessageCircle,
    },
    {
      title: "Omnichannel Experience",
      description: "Seamless integration of text, voice, and video for smooth CX.",
      icon: Smartphone,
    },
    {
      title: "Real-Time Analytics",
      description: "Track campaign performance & performance insights for instant optimization.",
      icon: BarChart2,
    },
    {
      title: "GenAI-Powered Personalization",
      description: "AI that adapts to user intent, context and journey.",
      icon: Brain,
    },
    {
      title: "Intelligent Campaign Automation",
      description: "Smart targeting, engagement, and multi-channel optimization.",
      icon: Target,
    },
    {
      title: "Advanced AI Voice Agents",
      description: "Automate surveys, leads, bookings, alerts, reminders & more.",
      icon: Mic,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-slate-900" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">The power behind</h2>
          <p className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">HELLO2COCO</p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Powering intelligent, real-time conversations across every corner of India.
          </p>
        </div>

        <div className="mt-8 text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">PLATFORM CAPABILITIES & KEY FEATURES</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 inline-flex mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-all">
                <capability.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{capability.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{capability.description}</p>
            </div>
          ))}
        </div>

        <GameChangerCarousel />
      </div>
    </section>
  )
}

function GameChangerCarousel() {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    {
      title: "AI Agent",
      description:
        "Meet your 24/7 AI Agent—always on, always smart—qualifying leads, resolving queries, and delivering instant, intelligent support at scale.",
    },
    {
      title: "Maximum Reach",
      description: "Connect with every customer, no matter where they are. Last Mile reach.",
    },
    {
      title: "AI for All",
      description:
        "From startups to enterprises, AI is the new standard—fast, smart, and personalized voice automation for all.",
    },
    {
      title: "Instant Lead Engagement",
      description: "100% lead activation with 24/7 AI voice assistance.",
    },
    {
      title: "Effortless High-Volume Calling",
      description: "Run large-scale campaigns without tech bottlenecks. Scale seamlessly.",
    },
    {
      title: "Localized, Human-like Voices",
      description: "Speak to your customers in their dialect with regional fluency.",
    },
    {
      title: "Smart, Goal-Oriented Conversations",
      description: "Intelligent bots drive calls towards outcomes.",
    },
    {
      title: "Fully Integrated Automation",
      description: "From CRM to outbound/inbound calls. End-to-end, zero manual touchpoints.",
    },
    {
      title: "Customer-Centric, Data-Driven",
      description:
        "Real-time, personalized, and multilingual conversations. Context-aware | India-first | Inclusive by design.",
    },
  ]

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return

    // Ensure index is within bounds
    const newIndex = Math.max(0, Math.min(index, items.length - 1))
    setActiveIndex(newIndex)

    // Get the container width and item width
    const containerWidth = carouselRef.current.clientWidth
    const itemElements = carouselRef.current.querySelectorAll(".carousel-item")

    if (itemElements.length > 0) {
      const itemElement = itemElements[newIndex]
      if (itemElement) {
        // Scroll to the element
        itemElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
      }
    }
  }

  const handleNext = () => {
    scrollToIndex(activeIndex + 1)
  }

  const handlePrev = () => {
    scrollToIndex(activeIndex - 1)
  }

  // Handle scroll event to update active index
  const handleScroll = () => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    const scrollPosition = container.scrollLeft
    const containerWidth = container.clientWidth

    // Find which item is most visible
    const itemElements = container.querySelectorAll(".carousel-item")
    let bestVisibleIndex = activeIndex
    let bestVisibleArea = 0

    itemElements.forEach((item, index) => {
      const itemLeft = item.offsetLeft - container.offsetLeft
      const itemRight = itemLeft + item.offsetWidth

      // Calculate how much of the item is visible
      const visibleLeft = Math.max(itemLeft, scrollPosition)
      const visibleRight = Math.min(itemRight, scrollPosition + containerWidth)
      const visibleWidth = Math.max(0, visibleRight - visibleLeft)

      if (visibleWidth > bestVisibleArea) {
        bestVisibleArea = visibleWidth
        bestVisibleIndex = index
      }
    })

    if (bestVisibleIndex !== activeIndex) {
      setActiveIndex(bestVisibleIndex)
    }
  }

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between mb-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">A Game changer</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Smarter outreach. Deeper connections. AI that scales with ambition.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-slate-700 dark:text-slate-200" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex >= items.length - 1}
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="text-slate-700 dark:text-slate-200" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div ref={carouselRef} onScroll={handleScroll} className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-6 py-4 flex-nowrap">
            {items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item flex-none w-full sm:w-1/2 lg:w-1/3 px-2 transition-opacity duration-300 ${
                  Math.abs(activeIndex - index) > 2 ? "opacity-60" : "opacity-100"
                }`}
              >
                <div
                  className={`min-h-[220px] p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg border ${
                    activeIndex === index
                      ? "border-blue-300 dark:border-blue-700 ring-2 ring-blue-200 dark:ring-blue-800/30"
                      : "border-slate-100 dark:border-slate-700"
                  } hover:shadow-xl transition-all duration-300 flex flex-col`}
                >
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center gap-1.5 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === index ? "bg-blue-600 dark:bg-blue-400 w-4" : "bg-slate-300 dark:bg-slate-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
