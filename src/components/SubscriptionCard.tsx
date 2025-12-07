"use client";

import React, { useState } from "react";

export default function SubscriptionCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <section
      className="
        relative p-10 rounded-2xl text-center
        backdrop-blur-2xl transition-all duration-500 ease-out

        /* Light mode – matches footer */
        bg-gradient-to-b from-red-100/60 via-red-50/40 to-yellow-100/40
        border border-red-200/50
        shadow-[0_8px_30px_rgba(255,100,100,0.15)]
        hover:shadow-[0_10px_40px_rgba(255,120,80,0.25)]
        hover:border-red-300/70

        /* Dark mode – deep wine shades like footer */
        dark:bg-gradient-to-b dark:from-[#1A0008]/80 dark:via-[#24000F]/70 dark:to-[#1A0008]/90
        dark:border-red-900/40
        dark:shadow-[0_8px_35px_rgba(0,0,0,0.5)]
        dark:hover:shadow-[0_10px_45px_rgba(0,0,0,0.7)]
        dark:hover:border-red-500

        /* Interaction */
        hover:scale-[1.03]
      "
    >
      {/* Title */}
      <h3
        className="
          text-3xl font-extrabold mb-3 tracking-tight
          bg-gradient-to-r from-red-600 to-yellow-500
          bg-clip-text text-transparent
          drop-shadow-md
          dark:from-red-400 dark:to-yellow-300
        "
      >
        Stay Updated!
      </h3>

      {/* Text */}
      <p className="mb-6 text-neutral-800 dark:text-neutral-300">
        Subscribe to our newsletter and never miss breaking news.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email address"
          className="
            px-5 py-3 rounded-xl
            border border-red-200 bg-white/70 text-red-900
            backdrop-blur-xl shadow-md
            font-medium

            focus:outline-none focus:ring-2 focus:ring-red-400

            dark:bg-[#24000F]/70 dark:text-white
            dark:border-red-700
            dark:focus:ring-red-500
          "
        />

        <button
          type="submit"
          className="
            px-6 py-3 rounded-xl font-semibold text-white cursor-pointer
            shadow-md transition-all duration-300

            bg-gradient-to-r from-red-500 to-yellow-500
            hover:from-red-600 hover:to-yellow-600
            hover:shadow-lg

            dark:bg-gradient-to-r dark:from-red-600 dark:to-yellow-500
            dark:hover:from-red-700 dark:hover:to-yellow-600
            dark:shadow-[0_0_15px_rgba(255,60,0,0.4)]
          "
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
