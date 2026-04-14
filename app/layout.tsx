import type { Metadata } from "next";
import { Fraunces, Commissioner } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "700", "800"],
  display: "swap",
});

const commissioner = Commissioner({
  subsets: ["latin"],
  variable: "--font-commissioner",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chrisdell.co"),
  title: "Chris Dell — Sports Media | Educator | Founder",
  description:
    "Award-winning Sports Editor, Media Educator, and Tech Founder with 22+ years building newsrooms, audiences, and revenue-generating platforms from scratch.",
  openGraph: {
    title: "Chris Dell — Sports Media | Educator | Founder",
    description:
      "Award-winning Sports Editor, Media Educator, and Tech Founder. 2× APSE Triple Crown winner. Penn State × Associated Press.",
    url: "https://chrisdell.co",
    siteName: "Chris Dell",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Dell — Sports Media | Educator | Founder",
    description:
      "Award-winning Sports Editor, Media Educator, and Tech Founder. 22+ years building newsrooms and audiences.",
    creator: "@MaddJournalist",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${commissioner.variable}`}>
      <body>{children}</body>
    </html>
  );
}
