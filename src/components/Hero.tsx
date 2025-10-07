"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          {/* Left: Copy */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
              Create and collaborate
              <br />
              visually
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              Excalidraw is a virtual collaborative whiteboard tool that lets you easily
              sketch diagrams that have a hand-drawn feel to them.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-neutral-900/10 transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Get Started Free
                <span className="ml-2">→</span>
              </a>
              <a
                href="#sign-in"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-neutral-900/10 transition hover:bg-neutral-50 dark:text-white dark:ring-white/20 dark:hover:bg-white/10"
              >
                Sign In
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-600 dark:text-neutral-300">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to use
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Real-time collaboration
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No sign-up required
              </li>
            </ul>
          </div>

          {/* Right: Framed image mock */}
          <div className="relative">
            <div className="relative rounded-3xl border border-neutral-200 bg-white p-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-neutral-900 dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
              {/* Top-right floating pencil badge */}
              <div className="pointer-events-none absolute -top-4 right-4 select-none rounded-full bg-white p-2 shadow-lg ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10">
                <svg className="h-6 w-6 text-neutral-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/window.svg"
                  alt="App preview"
                  width={900}
                  height={560}
                  className="h-auto w-full"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="pointer-events-none absolute -bottom-4 left-4 select-none rounded-full bg-white p-2 shadow-lg ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10">
                <span className="block h-6 w-6 rounded-full bg-neutral-900 dark:bg-white"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


