import css from "./FruitsInfo.module.css";

interface FruitsInfoProps {
  apples: number;
  oranges: number;
}

const FruitsInfo = ({ apples, oranges }: FruitsInfoProps) => {
  return (
    <div className={css["fruitsInfo"]}>
      <p>APPLES: {apples}</p>
      <p>ORANGES: {oranges}</p>
      <p>TOTAL: {apples + oranges}</p>
    </div>
  );
};

export default FruitsInfo;
