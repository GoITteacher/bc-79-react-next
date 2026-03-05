import CocktailCard from "./CocktailCard/CocktailCard";
import css from "./CocktailList.module.css";

const cocktails = [
  {
    imgUrl: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a",
    title: "Mojito",
    description:
      "A refreshing Cuban cocktail with white rum, lime juice, mint leaves, sugar, and soda water.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1582571352032-448f7925f76f",
    title: "Margarita",
    description:
      "A classic tequila-based cocktail with lime juice and orange liqueur served with a salted rim.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39",
    title: "Pina Colada",
    description:
      "A tropical cocktail made with rum, coconut cream, and pineapple juice.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8",
    title: "Cosmopolitan",
    description:
      "A stylish cocktail with vodka, triple sec, cranberry juice, and fresh lime juice.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1587223962930-cb7f31384c19",
    title: "Old Fashioned",
    description:
      "A strong classic cocktail made with bourbon or rye whiskey, sugar, bitters, and orange peel.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1604908177522-4320d1bb3f41",
    title: "Negroni",
    description:
      "An Italian cocktail made with gin, Campari, and sweet vermouth, known for its bitter taste.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34",
    title: "Daiquiri",
    description:
      "A simple and refreshing drink made with rum, lime juice, and sugar.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1551538827-cd2e6f8a13b4",
    title: "Bloody Mary",
    description:
      "A savory cocktail made with vodka, tomato juice, spices, and lemon juice.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
    title: "Aperol Spritz",
    description:
      "A light Italian cocktail with Aperol, prosecco, and soda water served over ice.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1604908177093-43f5201fa89a",
    title: "Mai Tai",
    description:
      "A rum-based tiki cocktail with lime juice, orange liqueur, and almond syrup.",
  },
];

const CocktailList = () => {
  return (
    <div className={css["cocktails-container"]}>
      <h2>Cocktails</h2>
      <ul className={css["cocktails-list"]}>
        {cocktails.map((item, i) => {
          return (
            <li key={i}>
              <CocktailCard data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CocktailList;

/* 
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
<CocktailCard cocktail={item} />
*/
