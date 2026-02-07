export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="pt-12 pb-16 text-center">
        <h1 className="text-4xl font-bold">
          Cognosys Solutions
        </h1>
        <p className="mt-2 text-slate-600 text-sm">
          Simplifying Tech. Amplifying Businesses.
        </p>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-2xl font-semibold text-center mb-4">
          What We Do
        </h2>
        <p className="max-w-3xl mx-auto text-slate-600 mt-4 text-base leading-relaxed">
          Cognosys Solutions helps businesses scale with clarity through intelligent
          digital systems built for automation and growth. We combine systems
          architecture, intelligent automation, and strategic thinking to turn
          complexity into a competitive advantage.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="border border-slate-200 rounded-xl p-6 bg-white hover:shadow-md transition">
          <h3 className="font-semibold text-slate-900 mb-2">Intelligent Automation & AI</h3>
          <p className="text-slate-500">
            Automation-first systems that improve efficiency.
          </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-white hover:shadow-md transition">
          <h3 className="font-semibold text-slate-900 mb-2">Digital Architecture & Platforms</h3>
          <p className="text-slate-500">
            Scalable, secure digital platforms for growth.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="border border-slate-200 rounded-xl p-6 bg-white hover:shadow-md transition">
          <h3 className="font-semibold text-slate-900 mb-2">Web & Mobile Solutions</h3>
          <p className="text-slate-500">
            Modern web and mobile applications focused on usability and performance.
          </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-white hover:shadow-md transition">
          <h3 className="font-semibold text-slate-900 mb-2">Technology Strategy & Advisory</h3>
          <p className="text-slate-500">
            Clear technical direction aligned with real business outcomes.
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-6">Our Approach</h2>
        <ul className="space-y-3 text-gray-600">
          <li>Architecture-led thinking before implementation</li>
          <li>Automation embedded by design, not as an afterthought</li>
          <li>Technology aligned with real business outcomes</li>
          <li>Collaborative engagement focused on long-term value</li>
        </ul>
      </section>

      <section className="mt-28 mb-20 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          Interested in building scalable, automation-first systems?
        </h2>
        <p className="mt-2 text-slate-600">
          Get in touch to start a conversation.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border rounded-xl">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}