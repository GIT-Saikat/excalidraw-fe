"use client";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { useTheme } from "@mui/material/styles";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

// Hooks must be called inside a component body; see usage below

const features: Feature[] = [
  {
    title: "Hand-drawn Feel",
    description:
      "Create diagrams that look and feel like they were drawn by hand, making your ideas more approachable.",
    icon: <BrushOutlinedIcon className="text-theme" fontSize="inherit" />,
  },
  {
    title: "Real-time Collaboration",
    description:
      "Work together with your team in real-time. See changes as they happen and communicate through visual elements.",
    icon: <PeopleAltOutlinedIcon className="text-theme" fontSize="inherit" />,
  },
  {
    title: "Easy Sharing",
    description:
      "Share your creations with a simple link. No complex permissions or setup required.",
    icon: <ShareOutlinedIcon className="text-theme" fontSize="inherit" />,
  },
  {
    title: "Lightning Fast",
    description:
      "Start drawing immediately. No heavy software to install or complex interfaces to learn.",
    icon: <BoltOutlinedIcon className="text-theme" fontSize="inherit" />,
  },
  {
    title: "Room Management",
    description:
      "Create, manage, and organize your collaborative rooms. Keep your projects structured and accessible.",
    icon: <PeopleAltOutlinedIcon className="text-theme" fontSize="inherit" />,
  },
  {
    title: "Secure by Default",
    description:
      "Your work stays yours. Share intentionally and keep control over your data.",
    icon: <ShareOutlinedIcon className="text-theme" fontSize="inherit" />,
  },
];

export default function Features() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <section className={`mx-auto max-w-screen-xl px-4 sm:px-6 py-16 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
      <div className="text-center mb-12">
        <h2 className="section-title">
          Everything you need to visualize ideas
        </h2>
        <p className="para-title">
          From quick sketches to detailed diagrams, Excalidraw provides all the tools you need for visual
          collaboration.
        </p>
      </div>

      <div className="grid-styles">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="feature-card"
          >
            <div className="feature-badge">
              <span className="text-[28px] feature-badge-icon" aria-hidden>
                {feature.icon}
              </span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


