import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

const Article = ({ data }: { data: any }) => {
  return (
    <div className="py-2 mb-5 border-b border-red-300 w-full">

      {/* Image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden">
        <Image
          src={data?.image_url || '/img/news-u-logo.webp'}
          alt={data?.title || 'News Image'}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Title */}
      <Link href={data?.link || "#"} legacyBehavior>
        <a className="block mt-2 font-bold text-base sm:text-lg md:text-xl text-gray-900 dark:text-gray-100 hover:text-red-600 transition-colors duration-300">
          {data?.title}
        </a>
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2 mb-1">
        <Tag data={data?.source_id || "Unknown Source"} />
        <Tag data={data?.creator?.[0] || "Unknown Author"} />
        <Tag data={data?.pubDate ? new Date(data?.pubDate).toDateString() : "Unknown Date"} />
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-1">
        {data?.description}
      </p>

    </div>
  )
}

export default Article
