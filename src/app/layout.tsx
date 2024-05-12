import PreLoader from "@/components/animations/preloader/PreLoader";
import "../styles/globals.css";
import type {Metadata} from "next";
import {Syne} from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio | Elias Grinwis Plaat Stultjes",
  description:
    "Ontdek mijn portfolio! Ik ben Elias Grinwis Plaat Stultjes en hier deel ik mijn projecten en ervaringen.",
  generator: "Next.js",
  applicationName: "Elias Grinwis Plaat Stultjes",
  keywords: [
    "developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "Belgium",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}>
        {children}
        <PreLoader />
      </body>
    </html>
  );
}
