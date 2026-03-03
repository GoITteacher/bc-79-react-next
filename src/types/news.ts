type SearchIn = "title" | "description" | "content";

interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    id: string;
    name: string;
  };
}

export interface GetEverythingParams {
  apiKey: string;
  q?: string;
  searchIn?: SearchIn;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: string;
  pageSize?: number;
  page?: number;
}

export interface GetEverythingResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
