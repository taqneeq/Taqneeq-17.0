import { IBM_Plex_Mono, Big_Shoulders_Display} from "next/font/google";
import "./globals.css";

// export const impact = Impact({
//   variable: "--font-impact",
//   subsets: ["latin"],
// });

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
        className={` ${ibm.variable} ${bigShouldersDisplay.variable} antialiased w-full min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}
