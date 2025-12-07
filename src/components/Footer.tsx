"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        mt-14
        bg-gradient-to-b from-yellow-200/60 to-red-200/40
        dark:from-red-900/40 dark:to-black/40
        backdrop-blur-2xl
        border-t border-red-300/40 dark:border-red-700/30
        shadow-[0_-8px_40px_rgba(255,0,0,0.15)]
        transition-all duration-500
        animate-fadeIn
      "
    >
      <div className="max-w-7xl mx-auto py-14 px-6 md:px-12">

        {/* Brand + Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Nowcast Logo */}
          <Link href="/">
            <h2
              className="
                text-4xl font-extrabold tracking-tight cursor-pointer
                bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400
                bg-clip-text text-transparent
                drop-shadow-lg
                hover:scale-110 hover:drop-shadow-xl
                transition-all duration-300
              "
            >
              Nowcast
            </h2>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            {[
              { icon: "🐦", link: "#" },
              { icon: "📘", link: "#" },
              { icon: "📸", link: "#" },
              { icon: "▶️", link: "#" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="
                  p-3 rounded-full
                  bg-yellow-100/60 dark:bg-red-900/30
                  backdrop-blur-md
                  border border-red-300/40 dark:border-red-700/40
                  shadow-md hover:shadow-red-400/40
                  hover:bg-yellow-200/80 dark:hover:bg-red-800/60
                  hover:scale-110
                  transition-all duration-300
                "
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Link Groups */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-12">
          {[
            {
              title: "Categories",
              links: ["World", "Business", "Sports", "Technology"],
              base: "/",
            },
            {
              title: "Company",
              links: ["About Us", "Contact", "Careers", "Press"],
              base: "#",
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookies"],
              base: "#",
            },
            {
              title: "Support",
              links: ["Help Center", "FAQs", "Feedback"],
              base: "#",
            },
          ].map((section, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-3 tracking-wide text-red-900 dark:text-red-200">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm">
                {section.links.map((l, idx) => (
                  <li key={idx}>
                    <Link
                      href={`${section.base}${l.toLowerCase()}`}
                      className="
                        text-red-700 dark:text-red-300
                        hover:text-yellow-600 dark:hover:text-yellow-400
                        hover:underline underline-offset-4
                        transition-all duration-300
                      "
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-red-300/40 dark:border-red-700/30 text-center">
          <p className="text-sm opacity-80 text-red-900 dark:text-red-200">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Nowcast</span> — Delivering trusted journalism.
          </p>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
}
