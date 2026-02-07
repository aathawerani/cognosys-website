import ServiceCard from "@/components/ServiceCard";


export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-semibold mb-4">Services</h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-12">
        We help organizations design, build, and scale intelligent digital systems
        with a strong focus on automation, architecture, and long-term growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard
          title="Intelligent Automation & AI"
          desc="Automation-first systems that improve efficiency, reliability, and decision-making."
        />
        <ServiceCard
          title="Digital Architecture & Platforms"
          desc="Scalable, secure systems designed for long-term growth."
        />
        <ServiceCard
          title="Web & Mobile Solutions"
          desc="Modern applications focused on usability and performance."
        />
        <ServiceCard
          title="Technology Strategy & Advisory"
          desc="Clear technical direction aligned with business outcomes."
        />
      </div>

      <div className="text-center mt-24">
        <h2 className="text-2xl font-semibold mb-4">
          Not sure which service fits your needs?
        </h2>
        <p className="text-gray-600 mb-6">
          Let’s discuss your goals and design the right solution together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>

    </section>
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