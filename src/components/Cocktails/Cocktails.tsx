import { useEffect } from "react";
import css from "./Cocktails.module.css";
import { getRandomCocktails } from "../../services/cocktails";
import { useQuery } from "@tanstack/react-query";

const Cocktails = () => {
  const cocktailsQuery = useQuery({
    queryKey: ["getRandomCocktails"],
    queryFn: () => getRandomCocktails(),
    // refetchInterval: 5000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchOnReconnect: true,
  });

  const cocktails = cocktailsQuery.data || [];
  const isLoading = cocktailsQuery.isLoading;
  const isError = cocktailsQuery.isError;

  return (
    <div className={css["cocktails"]}>
      {isLoading && <p>Loading Data</p>}
      {isError && <p>Somth went wrong</p>}

      {cocktails.length > 0 && (
        <ul>
          {cocktails.map((cocktail) => {
            const { drink, drinkThumb, description } = cocktail;
            return (
              <article className={css.cocktail}>
                <div className={css.imageWrapper}>
                  <img
                    src={drinkThumb}
                    alt={drink}
                    className={css.image}
                    loading="lazy"
                  />
                </div>

                <div className={css.content}>
                  <h3 className={css.title}>{drink}</h3>
                  <p className={css.description}>{description}</p>
                </div>
              </article>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cocktails;
