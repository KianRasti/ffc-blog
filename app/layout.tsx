import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type { Metadata } from "next"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" })

export const metadata: Metadata = {
  title: {
    default: "Flavor Fusion Cooking",
    template: "%s | Flavor Fusion Cooking",
  },
  description:
    "Discover culinary masterpieces and unleash your inner chef with our delicious recipes and cooking tips.",
  keywords: ["cooking", "recipes", "culinary", "food", "chef"],
  authors: [{ name: "Flavor Fusion Cooking Team" }],
  creator: "Flavor Fusion Cooking",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flavorfusioncooking.com",
    siteName: "Flavor Fusion Cooking",
    title: "Flavor Fusion Cooking - Discover Delicious Recipes",
    description:
      "Explore a world of flavors with our diverse collection of recipes. From quick weeknight dinners to gourmet feasts, we have something for every cook.",
    images: [
      {
        url: "https://flavorfusioncooking.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flavor Fusion Cooking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavor Fusion Cooking - Discover Delicious Recipes",
    description:
      "Explore a world of flavors with our diverse collection of recipes. From quick weeknight dinners to gourmet feasts, we have something for every cook.",
    images: ["https://flavorfusioncooking.com/twitter-image.jpg"],
    creator: "@FlavorFusionCooking",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-ffc-background text-ffc-text">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

