import Image from "next/image"

export default function AIForBharat() {
  const points = [
    {
      title: "Democratizing Technology",
      description: "Hello2CoCo empowers India's next billion users through voice-led access in local languages",
    },
    {
      title: "Reaching the Underserved",
      description: "Hello2CoCo empowers India's next billion users through voice-led access in local languages",
    },
    {
      title: "Voice-First, India-First",
      description: "Hello2CoCo empowers India's next billion users through voice-led access in local languages",
    },
    {
      title: "Inclusive Growth at Scale",
      description: "Every citizen, every dialect personalized AI that speaks their language",
    },
    {
      title: "Driving Digital Empowerment",
      description: "Hello2CoCo is building a future where technology is not just available, but truly usable by all",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">AI for Bharat</h2>
          <p className="mt-4 text-xl text-blue-600 dark:text-blue-400 font-semibold">
            INCLUSIVE. ACCESSIBLE. TRANSFORMATIVE
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{point.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
<div className="w-full  flex items-center justify-center">


<div className="relative w-auto h-auto">
  <Image
    src="/assets/images/icons/Screenshot 2025-05-13 at 12.20.53 PM 1.svg"
    alt="CoRover graphic"
    width={400}  // Set based on your desired image size
    height={400}
    className="rounded-2xl h-auto w-auto max-w-full max-h-full"
  />
</div>

</div>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Bringing together decades of expertise in communication, AI innovation, and deep understanding of India's
            diverse needs.
          </p>
        </div>
      </div>
    </section>
  )
}
