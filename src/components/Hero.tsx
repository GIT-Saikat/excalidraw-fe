"use client";

import Image from "next/image";
import { WINDOW, CheckCircleIcon, PencilIcon } from "@/svgs";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <section className={isDark ? "bg-neutral-900" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-25">
        <div className="grid grid-cols-1 items-center gap-10  md:grid-cols-2 py-10 md:py-16 ">
          {/* Left: Copy */}
          <div className="-mt-2 sm:-mt-3 md:-mt-12">
            <h1 className="hero-title">
              Create and collaborate
              <br />
              visually
            </h1>
            <p className={`mt-6 text-lg leading-8 ${isDark ? "text-white" : "text-neutral-600"}`}>
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
                <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                Free to use
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                Real-time collaboration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                No sign-up required
              </li>
            </ul>
          </div>

          {/* Right: Framed image mock */}
          <div className="relative">
            <div className="frame-card">
              {/* Top-right floating pencil badge */}
              <div className="floating-badge-tr">
                <PencilIcon className="h-6 w-6 text-white icon-color-pulse" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://excalidraw.com/og-image-3.png"
                  alt="App preview"
                  width={900}
                  height={560}
                  className="h-auto w-full"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="floating-badge-bl">
                <PeopleAltOutlinedIcon className={`${isDark ? "text-white" : "text-black"}`}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


