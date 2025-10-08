"use client";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Hand-drawn Feel",
    description:
      "Create diagrams that look and feel like they were drawn by hand, making your ideas more approachable.",
    icon: <BrushOutlinedIcon className="text-neutral-900 dark:text-white" fontSize="inherit" />,
  },
  {
    title: "Real-time Collaboration",
    description:
      "Work together with your team in real-time. See changes as they happen and communicate through visual elements.",
    icon: <PeopleAltOutlinedIcon className="text-neutral-900 dark:text-white" fontSize="inherit" />,
  },
  {
    title: "Easy Sharing",
    description:
      "Share your creations with a simple link. No complex permissions or setup required.",
    icon: <ShareOutlinedIcon className="text-neutral-900 dark:text-white" fontSize="inherit" />,
  },
  {
    title: "Lightning Fast",
    description:
      "Start drawing immediately. No heavy software to install or complex interfaces to learn.",
    icon: <BoltOutlinedIcon className="text-neutral-900 dark:text-white" fontSize="inherit" />,
  },
  {
    title: "Room Management",
    description:
      "Create, manage, and organize your collaborative rooms. Keep your projects structured and accessible.",
    icon: <PeopleAltOutlinedIcon className="text-neutral-900 dark:text-white" fontSize="inherit" />,
  },
  {
    title: "Secure by Default",
    description:
      "Your work stays yours. Share intentionally and keep control over your data.",
    icon: <ShareOutlinedIcon className="text-neutral-900 dark:text-white" fontSize="inherit" />,
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Everything you need to visualize ideas
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          From quick sketches to detailed diagrams, Excalidraw provides all the tools you need for visual
          collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-neutral-200 p-6 text-center dark:bg-neutral-900 dark:ring-white/10 shadow-lg"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-neutral-300  dark:bg-neutral-800 dark:ring-white/40 bg-[#E5E5E7]">
              <span className="text-[28px]" aria-hidden>
                {feature.icon}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{feature.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


