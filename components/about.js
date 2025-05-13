import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-slate-900" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">About us</h2>
        <p className="text-center text-lg mb-12 text-slate-700 dark:text-slate-300">
          Co-created by Cosmic Information & Technology Ltd. (CIL) & CoRover.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-6 md:p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700">
        <div class="w-24 h-24 relative w-full">

  <Image
    src="/assets/images/icons/channels4_profile 1.svg"
    alt="CIL graphic"
    layout="fill"
    objectFit="contain"
    className="rounded-2xl"
  />
</div>

            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>
                  25+ Years building India's largest omnichannel infrastructure — India's leading consumer engagement
                  solutions provider
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>4000+ Brands served across FMCG, BFSI, Agri, Healthcare, Education & Government</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>10,000+ Campaigns executed | 100K+ SIP Lines – India's largest single-location SIP setup</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>900M+ Personas | Deep audience intelligence across Bharat</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Award-winning engagement journeys blending technology + creativity</span>
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700">
<div class="mb-6  relative w-full">
  <Image
    src="/assets/images/icons/Group 1000004230.svg"
    alt="CoRover graphic"
    layout="fill"
    objectFit="contain"
    className="rounded-2xl"
  />
</div>

            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>
                  Pioneers Of BharatGPT — India's first human centric conversational and generative AI platform.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Trusted by 100+ Enterprises & Government, IRCTC, LIC, NPCI, ISRO, Indian Railways</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>1B+ Users. 20B+ Interactions. 20M+ Monthly active users.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Recognized by Gartner, NASSCOM & MeitY for AI innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Proven in secure, scalable, multilingual deployments across industries</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            AI FOR ALL. VOICE FOR BHARAT
          </h3>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Built by visionaries. Designed for every voice across India.
          </p>
        </div>
      </div>
    </section>
  )
}
