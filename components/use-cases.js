"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function UseCases() {
  const useCases = [
    {
      title: "BFSI (Banking, Financial Services & Insurance)",
      points: [
        "Automated customer support & KYC verification",
        "Loan reminders, fraud alerts, voice-based OTPs",
        "Multilingual virtual assistants for financial literacy",
      ],
    },
    {
      title: "Agriculture & Rural Outreach",
      points: [
        "Weather updates, crop advisories in regional languages",
        "Market price alerts and subsidy notifications",
        "Voice-based helplines for farmer queries",
      ],
    },
    {
      title: "Healthcare",
      points: [
        "Appointment booking & follow-ups via voice",
        "Vaccination and health check-up reminders",
        "Multilingual health awareness campaigns",
        "Mental health support through AI voice bots",
      ],
    },
    {
      title: "Education & EdTech",
      points: [
        "Student engagement",
        "Parent-teacher communication",
        "Personalized learning paths through AI voice assistants",
      ],
    },
    {
      title: "E-Governance & Public Services",
      points: [
        "Scheme awareness and citizen feedback",
        "Real-time grievance redressal through voice bots",
        "Election reminders, public health alerts in local dialects",
      ],
    },
    {
      title: "E-Commerce & Retail",
      points: [
        "Order confirmation, delivery updates, and feedback calls",
        "Loyalty program engagement in preferred languages",
      ],
    },
    {
      title: "Telecom & Utilities",
      points: [
        "Bill reminders, outage alerts, and service updates",
        "Multilingual self-service for customer queries",
        "Voice-based onboarding and feedback collection",
      ],
    },
    {
      title: "Travel & Hospitality",
      points: [
        "Booking confirmations and itinerary updates",
        "Feedback collection and multilingual support",
        "Personalized travel tips via AI-powered calls",
      ],
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + useCases.length) % useCases.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950" id="use-cases">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Use Cases</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Voice-first solutions built to empower India's most critical sectors.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-slate-700 dark:text-slate-200" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-slate-700 dark:text-slate-200" />
            </button>
          </div>

          <div className="p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">{useCases[activeIndex].title}</h3>
            <ul className="space-y-4">
              {useCases[activeIndex].points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-8">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 mx-1 rounded-full transition-all ${
                  index === activeIndex ? "bg-blue-600 dark:bg-blue-400 w-6" : "bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
