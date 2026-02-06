export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <header className="text-center mb-20">
        <h1 className="text-4xl font-bold">Cognosys Solutions</h1>
        <p className="mt-4 text-lg text-gray-600">
          Simplifying Tech. Amplifying Businesses.
        </p>
      </header>

      <section className="text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Cognosys Solutions helps businesses scale with clarity through intelligent
          digital systems built for automation and growth. We combine systems
          architecture, intelligent automation, and strategic thinking to turn
          complexity into a competitive advantage.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <Service
          title="Intelligent Automation & AI"
          desc="Automation-first systems that improve efficiency, decision-making, and resilience."
        />
        <Service
          title="Digital Architecture & Platforms"
          desc="Scalable, secure, and resilient digital platforms built for long-term growth."
        />
        <Service
          title="Web & Mobile Solutions"
          desc="Modern web and mobile applications focused on usability and performance."
        />
        <Service
          title="Technology Strategy & Advisory"
          desc="Clear technical direction aligned with real business outcomes."
        />
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Interested in building scalable, automation-first systems?
        </h2>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full"
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