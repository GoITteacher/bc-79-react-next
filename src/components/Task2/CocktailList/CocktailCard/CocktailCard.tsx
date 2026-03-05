import Button from "../../../customComponents/Button/Button";
import css from "./CocktailCard.module.css";
import { MdFavorite } from "react-icons/md";

interface CocktailCardProps {
  data: { imgUrl: string; title: string; description: string };
}

const CocktailCard = ({ data }: CocktailCardProps) => {
  return (
    <div className={css["cocktail-card"]}>
      <img src={data.imgUrl} alt={data.title} width={100} />
      <h5>{data.title}</h5>
      <p>{data.description}</p>
      <div>
        <Button isPrimary={true}>Learn More</Button>
        <Button>
          <MdFavorite color="teal" size="50px" />
        </Button>
      </div>
    </div>
  );
};

export default CocktailCard;
