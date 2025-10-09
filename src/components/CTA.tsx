"use client";
import { useTheme } from "@mui/material/styles";


export default function CTA() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <section className={`mx-auto max-w-screen-xl px-4 sm:px-6 py-20 text-center ${isDark ? "bg-neutral-900" : "bg-white"}`}>
      <h2 className="cta-title">
        Ready to start creating?
      </h2>
      <p className="para-CTA_title">
        Join thousands of teams who use Excalidraw to bring their ideas to life through visual collaboration.
      </p>

      <div className="cta-actions">
        <a
          href="#create-room"
          className="cta-button1"
        >
          Create Your First Room
          <span className="ml-2">→</span>
        </a>
        <a
          href="#join-room"
          className="cta-button2"
        >
          Join Existing Room
        </a>
      </div>
    </section>
  );
}


