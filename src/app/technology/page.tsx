import { getNewsSearch } from '@/api'
import Article from '@/components/Article'

export default async function Page() {
  const news = await getNewsSearch("technology")
  
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-8 space-y-6">
      {news.map((article: any, idx: number) => (
        <Article key={idx} data={article} />
      ))}
    </div>
  )
}
