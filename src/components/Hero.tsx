"use client";

import Image from "next/image";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10  md:grid-cols-2 py-10 md:py-16 ">
          {/* Left: Copy */}
          <div className="-mt-2 sm:-mt-3 md:-mt-12">
            <h1 className="hero-title">
              Create and collaborate
              <br />
              visually
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300 ">
              Excalidraw is a virtual collaborative whiteboard tool that lets you easily
              sketch diagrams that have a hand-drawn feel to them.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="btn-primary"
              >
                Get Started Free
                <span className="ml-2">→</span>
              </a>
              <a
                href="#sign-in"
                className="btn-ghost"
              >
                Sign In
              </a>
            </div>

              <ul className="hero-features">
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
            <div className="frame-card">
              {/* Top-right floating pencil badge */}
              <div className="floating-badge-tr">
                <svg className="h-6 w-6 text-white icon-color-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {/* <path d="M12 20h9" /> */}
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
              <div className="floating-badge-bl">
                <PeopleAltOutlinedIcon className=" text-neutral-900 dark:text-white"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


