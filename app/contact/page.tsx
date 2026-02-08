"use client";

import { useState } from "react";


export default function ContactPage() {

const [error, setError] = useState(false);

const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setError(false);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setError(true);
    }
  }



  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">
      Contact
      </h1>

    <div className="rounded-2xl border border-slate-200 p-8">
      <form onSubmit={handleSubmit}
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="max-w-xl space-y-4"
      >
        <label className="block text-sm text-slate-600 mb-1">
        Your name
      </label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border px-4 py-3"
        />
                <label className="block text-sm text-slate-600 mb-1">
          Your email
        </label>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border px-4 py-3"
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
        <label className="block text-sm text-slate-600 mb-1">
          Your message
        </label>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full rounded-lg border px-4 py-3"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-4 rounded-full bg-blue-600 px-6 py-3 text-white
                    hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {error && (
          <p className="mt-4 text-red-600">
            Something went wrong. Please try again later.
          </p>
        )}
        {success && (
        <p className="mt-4 text-green-600">
          Your message has been sent successfully.
        </p>
      )}
      </form>
      </div>
    </div>
    
  );
}

