export default function Stats() {
  const stats = [
    { value: "2X", label: "Higher Answer Rates" },
    { value: "60%", label: "Higher Answer Rates" },
    { value: "2X", label: "Higher Answer Rates" },
    { value: "30–50%", label: "Higher Answer Rates" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950" id="benefits">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
              <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
