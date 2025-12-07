 "use client";

import { useEffect, useState } from "react";
import { news } from "@/types";
import Article from "./Article";

export default function NewsFeed() {
  const [articles, setArticles] = useState<news[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const res = await fetch("/api/news-feed"); // we will create this endpoint below
      const data = await res.json();

      setArticles(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("NEWS FEED ERROR:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-6">
      

      {loading && (
        <p className="text-gray-500 text-center py-4">Loading news…</p>
      )}

      {articles.map((article, i) => (
        <div
          key={i}
          className="
            bg-gradient-to-br from-red-100/60 via-yellow-50/40 to-red-50/40
            dark:bg-gradient-to-br dark:from-[#1A0008]/80 dark:via-[#24000F]/70 dark:to-[#1A0008]/90
            rounded-2xl p-5
            shadow-[0_8px_20px_rgba(255,100,100,0.2)]
            dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
            hover:shadow-[0_10px_35px_rgba(255,120,80,0.3)]
            dark:hover:shadow-[0_10px_40px_rgba(255,40,0,0.5)]
            transition-all duration-300
          "
        >
          <Article data={article} />
        </div>
      ))}

      {!loading && articles.length === 0 && (
        <p className="text-red-600 text-center font-semibold">
          No news available.
        </p>
      )}
    </div>
  );
}
