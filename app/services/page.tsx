export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-10">Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Service
          title="Intelligent Automation & AI"
          desc="Automation-first systems that improve efficiency, reliability, and decision-making."
        />
        <Service
          title="Digital Architecture & Platforms"
          desc="Scalable, secure systems designed for long-term growth."
        />
        <Service
          title="Web & Mobile Solutions"
          desc="Modern applications focused on usability and performance."
        />
        <Service
          title="Technology Strategy & Advisory"
          desc="Clear technical direction aligned with business outcomes."
        />
      </div>
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