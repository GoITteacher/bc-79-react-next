import css from "./CocktailCard.module.css";

interface CocktailCardProps {
  cocktail: {
    _id: string;
    drink: string;
    drinkThumb: string;
    description: string;
  };
}

const CocktailCard = ({ cocktail }: CocktailCardProps) => {
  return (
    <div className={css["cocktailCard"]}>
      <p>{cocktail.drink}</p>
      <p>{cocktail.description}</p>
    </div>
  );
};

export default CocktailCard;
