import { useEffect, useState } from "react";
import css from "./CocktailList.module.css";
import { Cocktail, getRandomCocktails } from "../../services/cocktails";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    console.log("РОБИМО ЗАПИТ");
    getRandomCocktails().then((res) => {
      setCocktails(res);
    });
  }, []);

  return (
    <div className={css["cocktailList"]}>
      <ul>
        {cocktails.map((item, i) => {
          return <li key={i}>{item.drink}</li>;
        })}
      </ul>
    </div>
  );
};

export default CocktailList;
