
// // // "use client";

// // // import Link from "next/link";
// // // import ThemeToggle from "./ThemeToggle";

// // // export default function Header() {
// // //   return (
    

// // //   <div className="
// // //       flex items-center justify-between 
// // //       py-4 md:px-20 
// // //       rounded-xl
// // //       pt-4
// // //     bg-gradient-to-r from-red-600/60 via-red-500/50 to-yellow-300/40
// // //     dark:bg-gradient-to-r dark:from-red-900/40 dark:via-red-800/30 dark:to-amber-700/20
// // //     border border-red-600/50 dark:border-red-500/40
// // //     rounded-2xl
// // //     backdrop-blur-xl
// // //     shadow-lg
// // //     transition-all duration-500 ease-in-out
// // //     hover:shadow-2xl hover:scale-[1.01]
// // //     hover:border-red-300/60
// // //     "
// // //   >
// // //     <Link href="/">
// // //       <div className="flex items-center gap-3">
// // //         {/* Logo Image */}
// // //         <img
// // //   src="/img/nowcast.png"
// // //   alt="Nowcast Logo"
// // //   className="max-w-[200px] md:max-w-[250px] h-auto"/>
// // //       </div>
// // //     </Link>
// // //     <ThemeToggle />
// // //   </div>
// // //   );
// // // }

// // "use client";

// // import Link from "next/link";
// // import ThemeToggle from "./ThemeToggle";

// // export default function Header() {
// //   return (
// //     <div
// //       className="
// //       flex items-center justify-between 
// //       py-1.5 md:px-10 
// //       bg-gradient-to-r from-red-600/60 via-red-500/50 to-yellow-300/40
// //       dark:bg-gradient-to-r dark:from-red-900/40 dark:via-red-800/30 dark:to-amber-700/20
// //       border border-red-600/50 dark:border-red-500/40
// //       rounded-xl
// //       backdrop-blur-xl
// //       shadow-md
// //       transition-all duration-500 ease-in-out
// //       hover:shadow-xl hover:scale-[1.01]
// //       "
// //     >
// //       <Link href="/">
// //         <div className="flex items-center gap-2">
// //           {/* Logo Image (slightly smaller for thin header) */}
// //           <img
// //             src="/img/nowcast.png"
// //             alt="Nowcast Logo"
// //             className="w-12 h-12 md:w-14 md:h-14 object-contain"
// //           />
// //         </div>
// //       </Link>

// //       <ThemeToggle />
// //     </div>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Header() {
//   const router = useRouter();
//   const [openSearch, setOpenSearch] = useState(false);
//   const [query, setQuery] = useState("");

//   const links = [
//     { href: "/world", label: "World" },
//     { href: "/sports", label: "Sports" },
//     { href: "/business", label: "Business" },
//     { href: "/science", label: "Science" },
//     { href: "/technology", label: "Technology" },
//   ];

//   const handleSearch = (e: any) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     router.push(`/search?q=${encodeURIComponent(query)}`);
//     setOpenSearch(false);
//     setQuery("");
//   };

//   return (
//     <>
//       {/* THIN TOP BAR */}
//       <div
//         className="
//           flex items-center justify-between 
//           py-1.5 px-4 md:px-10 
//           bg-gradient-to-r from-red-600/60 via-red-500/50 to-yellow-300/40
//           dark:bg-gradient-to-r dark:from-red-900/40 dark:via-red-800/30 dark:to-amber-700/20
//           border border-red-600/50 dark:border-red-500/40
//           rounded-xl
//           backdrop-blur-xl
//           shadow-md
//           transition-all duration-500 ease-in-out
//           hover:shadow-xl hover:scale-[1.01]
//         "
//       >
//         {/* LEFT: Logo (slightly larger) */}
//         <Link href="/">
//           <img
//             src="/img/nowcast.png"
//             alt="Nowcast Logo"
//             className="w-21 h-10 md:w-18 md:h-18 object-contain"
//           />
//         </Link>

//         {/* CENTER: Nav Links (hidden on small screens) */}
//         <div className="hidden md:flex gap-5 text-red-900 dark:text-yellow-200 text-sm font-medium">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="
//                 relative px-2 py-1 
//                 hover:text-yellow-500 dark:hover:text-yellow-300
//                 transition-colors duration-300
//                 before:absolute before:-bottom-0.5 before:left-0 
//                 before:w-0 before:h-[2px] 
//                 before:bg-gradient-to-r before:from-red-500 before:to-yellow-400 
//                 before:transition-all before:duration-300 
//                 hover:before:w-full
//               "
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* RIGHT: Search Icon + small Theme Toggle */}
//         <div className="flex items-center gap-3">
//           {/* Search button */}
//           <button
//             aria-label={openSearch ? "Close search" : "Open search"}
//             onClick={() => setOpenSearch((s) => !s)}
//             className="p-1 rounded-md text-red-900 dark:text-yellow-200 hover:bg-white/30 dark:hover:bg-white/5 transition-all"
//             type="button"
//           >
//             {/* magnifying glass svg */}
//             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <circle cx="11" cy="11" r="6" />
//               <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>

//           {/* Theme toggle (smaller) */}
//           <div className="transform scale-75 origin-center">
//             <ThemeToggle />
//           </div>
//         </div>
//       </div>

//       {/* EXPANDABLE SEARCH BAR (appears below the thin topbar) */}
//       {openSearch && (
//         <div className="mt-2 px-4 md:px-10">
//           <form
//             onSubmit={handleSearch}
//             className="
//               flex items-center gap-2
//               bg-white/80 dark:bg-red-950/40
//               backdrop-blur-md
//               border border-red-400/30 dark:border-red-700/30
//               rounded-xl p-2 shadow-md
//               transition-all duration-300
//             "
//           >
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="
//                 flex-1 px-3 py-2 rounded-lg text-sm
//                 bg-transparent
//                 text-red-900 dark:text-yellow-200
//                 placeholder-red-500 dark:placeholder-amber-300
//                 focus:outline-none
//               "
//               placeholder="Search news..."
//               autoFocus
//             />

//             <button
//               type="submit"
//               className="
//                 bg-gradient-to-r from-red-500 to-yellow-400
//                 hover:from-red-400 hover:to-yellow-300
//                 px-4 py-2 rounded-lg text-sm
//                 text-black font-medium
//                 transition-all shadow-sm hover:shadow-md
//               "
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");

  const links = [
    { href: "/world", label: "World" },
    { href: "/sports", label: "Sports" },
    { href: "/business", label: "Business" },
    { href: "/science", label: "Science" },
    { href: "/technology", label: "Technology" },
  ];

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpenSearch(false);
    setQuery("");
  };

  return (
  <>
    {/* NAVBAR */}
    <div
      className="
        flex items-center justify-between
        py-3 px-4 md:px-10

        /* Light Mode */
        bg-gradient-to-r from-red-600 via-red-500 to-red-400
        border border-yellow-400/80
        shadow-md

        /* Dark Mode */
        dark:bg-gradient-to-r dark:from-red-700 dark:via-red-600 dark:to-red-500
        dark:border-yellow-400
        dark:shadow-xl

        rounded-xl
        transition-all duration-300
      "
    >
      {/* LEFT: Logo */}
      <Link href="/">
        <img
          src="/img/nowcast.png"
          alt="Nowcast Logo"
          className="
            h-8 w-auto sm:h-10
            object-contain
            drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]
            dark:drop-shadow-[0_0_6px_rgba(255,200,0,0.5)]
          "
        />
      </Link>

      {/* CENTER NAV LINKS – hidden on mobile */}
      <div className="hidden md:flex gap-6 font-medium text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="
              relative px-2 py-1
              text-white dark:text-yellow-300
              transition-all duration-300

              hover:text-yellow-300 dark:hover:text-yellow-200

              before:absolute before:-bottom-[2px]
              before:left-0 before:w-0 before:h-[2px]
              before:bg-yellow-300 dark:before:bg-yellow-500
              before:transition-all before:duration-300

              hover:before:w-full
            "
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search button */}
        <button
          onClick={() => setOpenSearch((s) => !s)}
          className="
            p-2 rounded-lg
            text-yellow-300 dark:text-yellow-400
            hover:bg-yellow-300/20 dark:hover:bg-red-900/40
            transition-all
          "
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="6" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
        </button>

        {/* Theme toggle */}
        <div className="scale-75 sm:scale-100">
          <ThemeToggle />
        </div>
      </div>
    </div>

    {/* SEARCH BAR */}
    {openSearch && (
      <div className="mt-2 px-4 md:px-10">
        <form
          onSubmit={handleSearch}
          className="
            flex flex-col sm:flex-row items-center gap-2
            bg-white dark:bg-[#0d0d0d]
            border border-yellow-400 dark:border-yellow-400
            rounded-xl p-2 shadow-sm dark:shadow-md
            transition-all duration-300
          "
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full px-3 py-2 rounded-lg
              bg-white dark:bg-transparent
              text-red-700 dark:text-yellow-300
              placeholder-red-400 dark:placeholder-yellow-600
              focus:outline-none
            "
            placeholder="Search news..."
            autoFocus
          />

          <button
            type="submit"
            className="
              w-full sm:w-auto
              px-4 py-2 rounded-lg font-semibold

              bg-yellow-400 text-red-900
              hover:bg-yellow-300

              dark:bg-yellow-600 dark:text-black
              dark:hover:bg-yellow-500

              transition-all shadow-sm hover:shadow-md
            "
          >
            Search
          </button>
        </form>
      </div>
    )}
  </>
);

}



