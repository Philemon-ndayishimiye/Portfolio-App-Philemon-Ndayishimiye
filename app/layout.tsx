import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Philemon KOMVUGA NDAYISHIMIYE Full-Stack Developer",
  description:
    "Portfolio of Philemon KOMVUGA NDAYISHIMIYE, a Full-Stack Developer specializing in React, Node.js, TypeScript and modern web technologies. Based in Kigali, Rwanda.",
  keywords: [
    "Philemon Ndayishimiye",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Kigali",
    "Rwanda",
    "Portfolio",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
