import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-slate-900 dark:text-white">A new era of</span>
            <span className="block text-blue-600 dark:text-blue-400 mt-2">Voice first Digital transformation</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300">
            Empowering India with AI-driven voice technology that connects, engages, and transforms.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#features"
              className="px-8 py-3 rounded-full text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md md:py-4 md:text-lg md:px-10"
            >
              Discover Features
            </a>
            <a
              href="#about"
              className="px-8 py-3 rounded-full text-base font-medium text-slate-700 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all md:py-4 md:text-lg md:px-10"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl">
      <Image
  src="/assets/images/icons/28886Y_ahp62rjjdhgn8rri41h6ut0.jpg"
  alt="Voice-first technology graphic"
  fill
  style={{ objectFit: "cover" }}
  className="rounded-2xl"
/>

          </div>
        </div>
      </div>
    </section>
  )
}
