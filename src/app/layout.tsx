import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import ClientOnly from "../components/ClientOnly";
import ColorModeProvider from "../theme/ColorModeProvider";

// You can use a standard font or import a Google font here if you prefer.
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My New Next App", // Update this for your project
  description: "A fresh start for my Next.js project.", // Update this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Remove 'className={inter.className}' if using a standard system font */}
      <body suppressHydrationWarning>
        <ClientOnly>
          <ColorModeProvider>
            <Navbar />
            {children}
          </ColorModeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}