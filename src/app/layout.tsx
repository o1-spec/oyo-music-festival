import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
// import { Analytics } from '@vercel/analytics/next'
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700", "900"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oyo Music Festival 2025 | Celebrating Yoruba Culture",
  description:
    "A two-day celebration of Yoruba culture through music, art, and entertainment. March 2025 at University of Ibadan.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/talking-drum.png",
        sizes: "16x16",
      },
      {
        url: "/images/talking-drum.png",
        sizes: "32x32",
      },
      {
        url: "/images/talking-drum.png",
        sizes: "48x48",
      },
    ],
    apple: "/images/talking-drum.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <CustomCursor />
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
