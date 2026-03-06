/**
 * Заглушка лічильника: додайте пропси та обробники самостійно.
 */
interface ClickCounterProps {
  handleIncrement: () => void;
}

const ClickCounter = ({ handleIncrement }: ClickCounterProps) => {
  return (
    <div>
      <button onClick={handleIncrement}>++</button>
    </div>
  );
};

export default ClickCounter;
