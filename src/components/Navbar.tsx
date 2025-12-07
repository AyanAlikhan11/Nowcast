// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e: any) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     window.location.href = `/search?q=${query}`;
//   };

//   return (
//     <nav className="w-full bg-white shadow rounded-xl mt-4 p-4 flex items-center justify-between">
//       <div className="flex gap-6 text-sm font-medium">
//         <Link href="/world">World</Link>
//         <Link href="/business">Business</Link>
//         <Link href="/science">Science</Link>
//         <Link href="/health">Health</Link>
//         <Link href="/sports">Sports</Link>
//         <Link href="/books">Books</Link>
//         <Link href="/travel">Travel</Link>
//       </div>

//       {/* Search bar */}
//       <form onSubmit={handleSearch} className="flex items-center gap-2">
//         <input
//           type="text"
//           placeholder="Search news..."
//           className="px-3 py-2 border rounded-xl outline-none"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />

//         <button
//           type="submit"
//           className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"
//         >
//           Search
//         </button>
//       </form>
//     </nav>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

//  function Navbar() {
//   const router = useRouter();
//   const [q, setQ] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const search = (e: any) => {
//     e.preventDefault();
//     if (!q.trim()) return;
//     router.push(`/search?q=${encodeURIComponent(q)}`);
//   };

//   const links = [
//     { href: "/world", label: "World" },
//     { href: "/sports", label: "Sports" },
//     { href: "/business", label: "Business" },
//     { href: "/science", label: "Science" },
//     { href: "/technology", label: "Technology" },
//   ];

//   return (
//     <nav className="
//   sticky top-0 z-50 mt-4
//   bg-gradient-to-r from-red-500/50 via-red-400/40 to-yellow-300/40
//   dark:bg-gradient-to-r dark:from-red-900/40 dark:via-red-800/30 dark:to-amber-700/20
//   border border-red-600/40 dark:border-red-500/30
//   backdrop-blur-xl
//   px-4 py-3
//   rounded-2xl
//   shadow-lg
//   transition-all duration-500 ease-in-out
//   hover:scale-[1.02]
//   animate-fade-in
// ">
//   {/* Top Row */}
//   <div className="
//     flex justify-between items-center 
//     border border-red-400/40 dark:border-red-700/40 
//     rounded-xl p-4 
//     shadow-md 
//     bg-white/70 dark:bg-red-900/30 
//     backdrop-blur-md 
//     transition-all duration-500 
//     hover:scale-105 
//   ">
//     <div className="text-xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md md:px-10">
//       Explore News
//     </div>

//     {/* Desktop Links */}
//     <div className="hidden md:flex gap-4 items-center text-red-900 dark:text-yellow-200">
//       {links.map((link) => (
//         <Link
//           key={link.href}
//           href={link.href}
//           className="
//             relative px-2 py-1 
//             hover:text-yellow-500 dark:hover:text-yellow-300
//             transition-colors duration-300
//             before:absolute before:-bottom-1 before:left-0 
//             before:w-0 before:h-0.5 
//             before:bg-gradient-to-r before:from-red-500 before:to-yellow-400 
//             before:transition-all before:duration-300 
//             hover:before:w-full
//           "
//         >
//           {link.label}
//         </Link>
//       ))}
//     </div>

//     {/* Hamburger (Mobile) */}
//     <button
//       className="md:hidden text-red-900 dark:text-yellow-200 focus:outline-none"
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         {isOpen ? (
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//         ) : (
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//         )}
//       </svg>
//     </button>
//   </div>

//   {/* Mobile Links */}
//   {isOpen && (
//     <div className="flex flex-col mt-3 gap-2 md:hidden text-red-900 dark:text-yellow-200">
//       {links.map((link) => (
//         <Link
//           key={link.href}
//           href={link.href}
//           className="px-2 py-1 hover:text-red-600 dark:hover:text-yellow-400 transition-colors duration-300"
//           onClick={() => setIsOpen(false)}
//         >
//           {link.label}
//         </Link>
//       ))}
//     </div>
//   )}

//   {/* Search Form */}
//   <form
//     onSubmit={search}
//     className="flex flex-col md:flex-row items-center gap-2 mt-3 w-full max-w-md mx-auto"
//   >
//     <input
//       value={q}
//       onChange={(e) => setQ(e.target.value)}
//       type="text"
//       placeholder="Search news..."
//       className="
//         flex-1 px-4 py-2 rounded-full 
//         border border-red-300 dark:border-amber-700
//         bg-white/90 dark:bg-red-950/40 
//         text-red-900 dark:text-yellow-200
//         placeholder-red-400 dark:placeholder-amber-300
//         focus:outline-none focus:ring-2 
//         focus:ring-yellow-400 dark:focus:ring-red-600 
//         transition-all duration-300 
//         shadow-sm w-full
//       "
//     />
//     <button
//       type="submit"
//       className="
//         bg-gradient-to-r from-red-500 to-yellow-400
//         hover:from-red-400 hover:to-yellow-300
//         text-black font-medium
//         px-6 py-2 rounded-full
//         shadow-md hover:shadow-xl
//         transition-all duration-300
//         w-full md:w-auto
//       "
//     >
//       Search
//     </button>
//   </form>
// </nav>

//   );
// }

// export default Navbar

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const search = (e: any) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const links = [
    { href: "/world", label: "World" },
    { href: "/sports", label: "Sports" },
    { href: "/business", label: "Business" },
    { href: "/science", label: "Science" },
    { href: "/technology", label: "Technology" },
  ];

  return (
    <nav
      className="
      sticky top-0 z-50 mt-2
      bg-gradient-to-r from-red-500/50 via-red-400/40 to-yellow-300/40
      dark:bg-gradient-to-r dark:from-red-900/40 dark:via-red-800/30 dark:to-amber-700/20
      border border-red-600/40 dark:border-red-500/30
      backdrop-blur-xl
      px-3 py-1.5
      rounded-2xl
      shadow-md
      transition-all duration-500 ease-in-out
      hover:scale-[1.01]
      "
    >
      {/* Top Row */}
      <div
        className="
        flex justify-between items-center
        border border-red-400/40 dark:border-red-700/40
        rounded-lg px-3 py-2
        shadow-sm
        bg-white/70 dark:bg-red-900/30
        backdrop-blur-md
        transition-all duration-500
      "
      >
        {/* Title */}
        <div className="text-lg font-semibold tracking-wide bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Explore News
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-3 items-center text-red-900 dark:text-yellow-200 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                relative px-1.5 py-0.5
                hover:text-yellow-500 dark:hover:text-yellow-300
                transition-colors duration-300
                before:absolute before:-bottom-0.5 before:left-0
                before:w-0 before:h-[2px]
                before:bg-gradient-to-r before:from-red-500 before:to-yellow-400
                before:transition-all before:duration-300
                hover:before:w-full
              "
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-red-900 dark:text-yellow-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor">
            {isOpen ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="flex flex-col mt-2 gap-1 md:hidden text-red-900 dark:text-yellow-200 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 py-1 hover:text-red-600 dark:hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Search */}
      <form
        onSubmit={search}
        className="
          flex flex-col md:flex-row items-center gap-1 mt-2 
          w-full max-w-md mx-auto
        "
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          type="text"
          placeholder="Search..."
          className="
            flex-1 px-3 py-1.5 rounded-full text-sm
            border border-red-300 dark:border-amber-700
            bg-white/90 dark:bg-red-950/40
            text-red-900 dark:text-yellow-200
            placeholder-red-400 dark:placeholder-amber-300
            focus:outline-none focus:ring-2
            focus:ring-yellow-400 dark:focus:ring-red-600
            transition-all duration-300 shadow-sm
          "
        />

        <button
          type="submit"
          className="
            bg-gradient-to-r from-red-500 to-yellow-400
            hover:from-red-400 hover:to-yellow-300
            text-black font-medium text-sm
            px-4 py-1.5 rounded-full
            shadow-md hover:shadow-lg
            transition-all duration-300
            w-full md:w-auto
          "
        >
          Search
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
