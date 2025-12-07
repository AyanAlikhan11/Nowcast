
import { getTopHeadlines } from "@/api";
import { removeDuplicateData } from "@/utils";
import NewsFeed from "@/components/NewsFeed";

export default async function Home() {
  const raw = await getTopHeadlines("in", 20);
  const articles = removeDuplicateData(raw);

  return (
    <main className="mt-6 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6">
      {/* Hero Section */}
      <section className="mb-8 text-center sm:text-left">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight
          bg-gradient-to-r from-red-500 to-yellow-400
          text-transparent bg-clip-text
          drop-shadow-lg
          animate-gradient-x">
          Top Headlines
        </h1>
        <p className="mt-2 text-base sm:text-lg text-red-900 dark:text-red-200 opacity-90">
          Catch up with the latest breaking news from India and around the world.
        </p>
        <NewsFeed />
      </section>
    </main>
  );
}
