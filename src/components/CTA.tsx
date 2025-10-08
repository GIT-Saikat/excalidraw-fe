export default function CTA() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Ready to start creating?
      </h2>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">
        Join thousands of teams who use Excalidraw to bring their ideas to life through visual collaboration.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#create-room"
          className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-neutral-900/10 transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Create Your First Room
          <span className="ml-2">→</span>
        </a>
        <a
          href="#join-room"
          className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-900 ring-1 ring-neutral-900/10 transition hover:bg-neutral-50 dark:text-white dark:ring-white/20 dark:hover:bg-white/10"
        >
          Join Existing Room
        </a>
      </div>
    </section>
  );
}


