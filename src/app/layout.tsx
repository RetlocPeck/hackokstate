import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hack OKState &rsquo;25 | Oklahoma State University Hackathon",
  description: "Join us for Hack OKState &rsquo;25 - Oklahoma State University&rsquo;s premier hackathon. Innovation, creativity, and collaboration await!",
  keywords: "hackathon, Oklahoma State University, programming, coding, innovation, technology",
  authors: [{ name: "Hack OKState Team" }],
  openGraph: {
    title: "Hack OKState &rsquo;25",
    description: "Oklahoma State University&rsquo;s premier hackathon",
    type: "website",
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
      </body>
    </html>
  );
}
