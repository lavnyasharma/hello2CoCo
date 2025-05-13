import { Phone, Globe, MessageSquare, MapPin, BarChart3, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Talk, Don't Type",
      description: "No app. No internet. Just a phone call to access powerful AI-driven conversations.",
      icon: Phone,
    },
    {
      title: "Multilingual by Design",
      description:
        "Supports 100+ languages & dialects, enabling seamless communication across India's diverse population.",
      icon: Globe,
    },
    {
      title: "Human-like Conversations",
      description: "Delivers personalized, intelligent, and contextual interactions that feel natural and intuitive.",
      icon: MessageSquare,
    },
    {
      title: "Built for Bharat",
      description: "Rural-first, inclusive, and frictionless — bringing AI to the remotest corners.",
      icon: MapPin,
    },
    {
      title: "Proven at Scale",
      description: "Tested and trusted with billions of calls across various sectors and citizens nationwide.",
      icon: BarChart3,
    },
    {
      title: "Serving Every Sector",
      description: "FMCG, BFSI, Healthcare, Education, Travel, Public Services — and more.",
      icon: Users,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">The India Opportunity</h2>
          <p className="mt-4 text-xl text-blue-600 dark:text-blue-400">WHY VOICE-FIRST AI IS MADE FOR BHARAT</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 inline-flex mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-all">
                <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
