"use client"

import { useState, FormEvent } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const SearchInput = () => {
  const [keywords, setKeywords] = useState<string>("")
  const router = useRouter()

  const searchKeywords = (e: FormEvent) => {
    e.preventDefault()
    if (!keywords.trim()) {
      router.push('/')
    } else {
      router.push(`/search?q=${encodeURIComponent(keywords)}`)
    }
  }

  return (
    <form
      onSubmit={searchKeywords}
      className="flex w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl space-x-2 items-center"
    >
      <input
        type="text"
        placeholder="e.g. sports, lifestyle"
        className="
          flex-1 px-3 py-2 text-sm sm:text-base
          border border-gray-400 rounded-md
          outline-none
          focus:ring-2 focus:ring-red-500 focus:border-red-500
        "
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button
        type="submit"
        className="
          bg-red-500 hover:bg-red-600 text-white p-2 rounded-md
          transition-colors duration-200
          flex items-center justify-center
        "
      >
        <BiSearch className="text-xl sm:text-2xl" />
      </button>
    </form>
  )
}

export default SearchInput
