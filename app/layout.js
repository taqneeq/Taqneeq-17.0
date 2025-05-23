import { IBM_Plex_Mono, Big_Shoulders_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import PageAnimatePresence from "@/app/components/PageAnimatePresence";
import LenisProvider from "./components/smooth";

const impact = localFont({
  src: "./fonts/impact.ttf",
  variable: "--font-impact",
  weight: "100 900",
});

const bigShouldersDisplay = Big_Shoulders_Display({
  variable: "--font-big-shoulders-display",
  weight: "900",
  subsets: ["latin"],
});

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm",
});

export const metadata = {
  title: "Taqneeq",
  description: "Taqneeq is the official techfest of NMIMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${ibm.variable} ${bigShouldersDisplay.variable} ${impact.variable} antialiased w-full min-h-screen relative`}
        suppressHydrationWarning
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
