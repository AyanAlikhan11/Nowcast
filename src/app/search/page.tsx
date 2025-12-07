'use client'

import Article from '@/components/Article'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Search() {
  const [newsData, setNewsData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const params = useSearchParams()
  const search = params.get("q") || ""

  useEffect(() => {
    if (!search.trim()) return

    setLoading(true)

    const url = `https://newsdata.io/api/1/news?apikey=${
      process.env.NEXT_PUBLIC_NEWSDATA_API_KEY
    }&q=${encodeURIComponent(search)}&language=en`

    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log("SEARCH PAGE RESPONSE:", json)

        if (Array.isArray(json.results)) {
          setNewsData(json.results)
        } else {
          setNewsData([])
        }
      })
      .finally(() => setLoading(false))
  }, [search])

  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-8 space-y-6">
      {loading && <p className="text-center text-gray-700 dark:text-gray-300">Loading...</p>}

      {!loading && newsData.length === 0 && (
        <p className="text-center text-red-500 font-bold">No articles found</p>
      )}

      {newsData.map((a, i) => (
        <Article key={i} data={a} />
      ))}
    </div>
  )
}
