import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hack OKState '25 | Oklahoma State University Hackathon",
  description: "Join us for Hack OKState '25 - Oklahoma State University's premier hackathon. Innovation, creativity, and collaboration await!",
  keywords: "hackathon, Oklahoma State University, programming, coding, innovation, technology",
  authors: [{ name: "Hack OKState Team" }],
  openGraph: {
    title: "Hack OKState '25",
    description: "Oklahoma State University's premier hackathon",
    type: "website",
    siteName: "Hack OKState",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hack OKState '25 - Oklahoma State University Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack OKState '25",
    description: "Oklahoma State University's premier hackathon",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}