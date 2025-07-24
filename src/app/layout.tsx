import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { AuthModalProvider } from "@/context/AuthModalContext"

const openSans = Open_Sans({
  variable: "--font-openSans",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
})

const podcast = localFont({
  src: "../assets/fonts/Podcast.ttf",
  variable: "--font-podcast",
})

export const metadata: Metadata = {
  title: "tours to Tuscany",
  description:
    "Enjoy in the best way!, Enjoy our services for your trip anytime",
  icons: "/logo.svg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthModalProvider>
      <html lang="en">
        <body
          className={`${podcast.variable} ${openSans.className} antialiased text-[#333]`}
        >
          <Navbar
            items={[
              { content: "Home", link: "/" },
              { content: "About Us", link: "/about" },
              { content: "Tour Packages", link: "/#tour" },
              { content: "Contact Us", link: "/#contact" },
            ]}
          />
          {children}
        </body>
      </html>
    </AuthModalProvider>
  )
}
