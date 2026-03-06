import css from "./OrangeController.module.css";

interface OrangeControllerProps {
  onClick: () => void;
}

const OrangeController = ({ onClick }: OrangeControllerProps) => {
  return (
    <div className={css["orangeController"]}>
      <button onClick={onClick}>Orange ++</button>
    </div>
  );
};

export default OrangeController;
