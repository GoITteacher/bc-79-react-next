import css from "./AppleController.module.css";

interface AppleControllerProps {
  increment: () => void;
}

const AppleController = ({ increment }: AppleControllerProps) => {
  return (
    <div className={css["appleController"]}>
      <button onClick={increment}>Apple ++</button>
    </div>
  );
};

export default AppleController;
