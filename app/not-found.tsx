export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold mb-4">Page not found</h1>
      <p className="text-slate-600 mb-6">
        The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="text-blue-600 hover:underline"
      >
        Go back home
      </a>
    </div>
  );
}
