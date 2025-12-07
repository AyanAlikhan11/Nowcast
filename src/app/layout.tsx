import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import SubscriptionCard from "@/components/SubscriptionCard";
import Weather from "@/components/Weather";

const trispace = Trispace({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nowcast",
  description: "news for you where you can find what you need",
  icons: {
    icon: [
      { url: "/img/favicon-32x32.png", sizes: "32x32" },
      { url: "/img/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: "News-U",
    description: "news for you where you can find what you need",
    type: "article",
    authors: "theoyoth",
  },
  keywords: ["news-u", "news", "news about everything"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
       className={`${trispace.className} text-black dark:bg-slate-900 dark:text-white transition-colors duration-500`}>
        <main className="flex flex-col px-4 sm:px-6 lg:px-20">

          {/* Sticky Header */}
          <div className="sticky top-0 z-50 mb-4">
            <Header />
          </div>

          {/* Weather */}
          <div className="pb-2 mt-1">
            <Weather />
          </div>
          <section className="flex flex-col lg:flex-row gap-4 sm:gap-6">

            {/* Main Feed */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-6 pb-4">
              {React.Children.map(children, (item, idx) => (
                <div
                  key={idx}
                  className="
                    bg-gradient-to-br from-red-100/60 via-yellow-50/40 to-red-50/40
                    dark:bg-gradient-to-br dark:from-[#1A0008]/80 dark:via-[#24000F]/70 dark:to-[#1A0008]/90
                    rounded-2xl p-4 sm:p-6
                    shadow-[0_8px_20px_rgba(255,100,100,0.2)]
                    dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]
                    hover:shadow-[0_10px_35px_rgba(255,120,80,0.3)]
                    dark:hover:shadow-[0_10px_40px_rgba(255,40,0,0.5)]
                    border border-transparent hover:border-red-400
                    transition-all duration-300">
                  {item}
                </div>
             ))}
            </div>

          {/* You can re-enable Sidebar here if needed */}
        </section>

          {/* Floating Action Button */}
        <button
          className="
          fixed bottom-6 right-6 
          bg-indigo-600 hover:bg-indigo-500
          text-white w-12 h-12 sm:w-14 sm:h-14
          rounded-full shadow-lg
          flex items-center justify-center
          transition-transform transform hover:scale-110
          z-50">
        +
        </button>

          {/* Subscription Section */}
          <div className="mt-6 sm:mt-10">
            <SubscriptionCard />
          </div>

        {/* Footer */}
        <Footer />
      </main>
    </body>
  </html>

  );
}
