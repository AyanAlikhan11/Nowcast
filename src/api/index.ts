export const getNewsSearch = async (query: string) => {
  const url = `https://newsdata.io/api/1/news?apikey=${
    process.env.NEXT_PUBLIC_NEWSDATA_API_KEY
  }&q=${encodeURIComponent(query)}&language=en`;

  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();


  // MUST return array
  if (json && Array.isArray(json.results)) {
    return json.results;
  }

  return [];
};

export const getTopHeadlines = async (country = "in", limit = 20) => {
  const url = `https://newsdata.io/api/1/news?apikey=${
    process.env.NEXT_PUBLIC_NEWSDATA_API_KEY
  }&country=${country}&language=en`;

  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();

  if (json && Array.isArray(json.results)) {
    return json.results.slice(0, limit);
  }

  return [];
};


