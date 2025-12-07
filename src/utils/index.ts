
import { news } from "@/types"

export const removeDuplicateData = (articles: any) => {
  const randomArticle: news[] = articles?.articles ?? []

  const unique = new Map()

  randomArticle.forEach(item => {
    if (item?.title) {
      unique.set(item.title, item)
    }
  })

  return Array.from(unique.values())
}
