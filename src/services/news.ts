import axios from "axios";

export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const getArticles = async (query: string, page: number) => {
  const baseUrl = "https://newsapi.org/v2";
  const endPoint = "/everything";
  const url = baseUrl + endPoint;

  const params = {
    q: query,
    page: page,
    pageSize: 6,
    apiKey: "c8747511a2c34730a83caaff4f3693e7",
  };

  const res = await axios.get<NewsResponse>(url, { params });
  return res.data;
};
