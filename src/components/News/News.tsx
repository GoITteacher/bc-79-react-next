import { useState } from "react";
import css from "./News.module.css";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../services/news";

const News = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    setQuery(query);
    setPage(1);
  };

  const newsQuery = useQuery({
    queryKey: ["getArticles", query, page],
    queryFn: () => getArticles(query, page),
    enabled: query.length > 0,
    // retry: 5,
    // retryDelay: 1000,
    // staleTime: 1000 * 60 * 60 * 24,
  });

  const articles = newsQuery.data?.articles;
  const isLoading = newsQuery.isLoading;
  const isError = newsQuery.isError;

  return (
    <div className={css["news"]}>
      <form action={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">search</button>
      </form>

      <h1>Шукаємо новини по запиту: {query}</h1>

      {isLoading && <p>Loading</p>}
      {isError && <p>Error</p>}

      {articles && (
        <ul>
          {articles.map((article) => {
            const { author, title, description, url, urlToImage, publishedAt } =
              article;
            const date = new Date(publishedAt).toLocaleDateString();
            return (
              <article className={css.article}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.link}
                >
                  <div className={css.imageWrapper}>
                    <img src={urlToImage} alt={title} className={css.image} />
                  </div>

                  <div className={css.content}>
                    <h2 className={css.title}>{title}</h2>

                    <p className={css.description}>{description}</p>

                    <div className={css.meta}>
                      <span className={css.author}>
                        {author || "Unknown author"}
                      </span>
                      <span className={css.date}>{date}</span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </ul>
      )}

      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
};

export default News;
