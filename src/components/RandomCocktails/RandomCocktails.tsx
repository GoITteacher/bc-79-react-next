import { useEffect, useState } from "react";
import css from "./RandomCocktails.module.css";
import { Cocktail, getRandomCocktails } from "../../services/cocktails";
import toast from "react-hot-toast";

const RandomCocktails = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getRandomCocktails();
        setCocktails(data);
      } catch {
        toast.error("Smt went wrong");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleReload = async () => {
    setIsLoading(true);
    try {
      const data = await getRandomCocktails();
      setCocktails(data);
    } catch {
      toast.error("Smt went wrong");
    }
    setIsLoading(false);
  };

  return (
    <section className={css.randomCocktails}>
      <header className={css.header}>
        <div>
          <p className={css.preheading}>Bartender’s pick</p>
          <h2 className={css.title}>Random cocktails for tonight</h2>
        </div>
        <button
          className={css.reloadBtn}
          disabled={isLoading}
          onClick={handleReload}
        >
          {isLoading ? "Refreshing..." : "Reload selections"}
        </button>
      </header>

      {cocktails.length === 0 ? (
        <div className={css.emptyState}>No cocktails yet. Try again?</div>
      ) : (
        <div className={css.grid}>
          {cocktails.map((cocktail) => (
            <article key={cocktail._id} className={css.card}>
              <div className={css.imageWrapper}>
                <img
                  className={css.image}
                  src={cocktail.drinkThumb}
                  alt={cocktail.drink}
                />
                <span className={css.badge}>Chef’s choice</span>
              </div>

              <div className={css.cardBody}>
                <h3 className={css.cardTitle}>{cocktail.drink}</h3>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default RandomCocktails;
