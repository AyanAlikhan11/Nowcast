export type news = {
  article_id?: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  creator?: string[] | null;
  image_url?: string | null;
  source_id?: string | null;
  content?: string | null;
  country?: string[] | null;
  category?: string[] | null;
};
