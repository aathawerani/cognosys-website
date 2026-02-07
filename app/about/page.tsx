export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-16">

      {/* Intro */}
      <div>
        <h1 className="text-4xl font-semibold mb-6">
          About Cognosys Solutions
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Cognosys Solutions is a technology and automation company focused on helping
          businesses scale with clarity and confidence. We design and build intelligent
          digital systems that reduce complexity and enable sustainable growth.
        </p>
      </div>

      {/* Mission */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to simplify complex technology decisions and build systems that
          enable long-term business growth. We believe technology should empower teams,
          not overwhelm them.
        </p>
      </div>

      {/* Philosophy */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
        <p className="text-gray-600 leading-relaxed">
          We take an architecture-led approach to problem solving. Every solution is
          designed with scalability, automation, and maintainability in mind from day one.
        </p>
      </div>

      {/* How We Work */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
        <ul className="space-y-3 text-gray-600 list-disc list-inside">
          <li>Clarity before execution</li>
          <li>Automation by design, not as an afterthought</li>
          <li>Technology aligned with real business outcomes</li>
          <li>Long-term partnerships, not short-term delivery</li>
        </ul>
      </div>

    </section>
  );
}
