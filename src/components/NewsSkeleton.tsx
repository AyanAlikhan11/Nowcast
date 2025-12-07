
export default function NewsSkeleton() {
  return (
    <div className="animate-pulse bg-white/50 dark:bg-slate-800/40 
                    p-3 sm:p-4 rounded-xl shadow w-full">

      <div className="h-32 xs:h-36 sm:h-40 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>

      <div className="mt-3 h-3 sm:h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>

      <div className="mt-2 h-2.5 sm:h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
    </div>
  );
}
