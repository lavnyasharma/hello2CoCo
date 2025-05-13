"use client"

export default function Footer({ openContactModal }) {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Hello2CoCo</h3>
            <p className="text-slate-300">Voice-first AI technology for India's next billion users.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Use Cases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                  BFSI
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                  E-Governance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-slate-300">Reach out to learn how Hello2CoCo can transform your business.</p>
            <button
              onClick={openContactModal}
              className="mt-4 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Hello2CoCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
