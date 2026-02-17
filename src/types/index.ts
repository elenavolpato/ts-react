export interface Author {
  name: string
  socials: string | null
}

export interface NewsItem {
  id: number
  title: string
  url: string
  authors: Author[]
  events: any[]
  featured: boolean
  image_url: string
  launches: any[]
  news_site: string
  published_at: string
  summary: string
  updated_at: string
}
