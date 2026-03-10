import { useEffect, useState } from "react";
import css from "./News.module.css";
import { Article, getArticles } from "../../services/news";
import { Input } from "antd";

const News = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const data = await getArticles(query, page);
        setArticles(data.articles);
      } catch {
        console.log("ERROR");
        setArticles([]);
      }

      setIsLoading(false);
    }

    if (query.length) {
      fetchData();
    }
  }, [query, page]);

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={css.news}>
      <Input
        type="text"
        placeholder="Search news"
        className={css.searchInput}
        onChange={handleChangeQuery}
      />

      <ul className={css.articles}>
        {articles.map((item, i) => (
          <li className={css.article} key={i}>
            <a
              className={css.articleLink}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={css.articleImage}
                src={item.urlToImage}
                alt={item.title}
              />

              <div className={css.articleContent}>
                <h3 className={css.articleTitle}>{item.title}</h3>

                <p className={css.articleDescription}>{item.description}</p>

                <div className={css.articleMeta}>
                  <span className={css.articleAuthor}>{item.author}</span>
                  <span className={css.articleDate}>
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className={css.pagination}>
        <button
          className={css.btn}
          disabled={isLoading}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className={css.btn}
          disabled={isLoading}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
