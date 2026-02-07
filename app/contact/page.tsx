export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="max-w-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          name="_replyto"
          placeholder="Your email"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          className="w-full border px-4 py-2 rounded"
        />
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full">
          Send Message
        </button>
      </form>
    </main>
  );
}