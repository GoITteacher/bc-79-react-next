"use client";
import { useFruitsStore } from "@/stores/fruitsStore";
import css from "./CounterY.module.css";

const CounterY = () => {
  const lemons = useFruitsStore((s) => s.lemons);
  const increment = useFruitsStore((s) => s.incrementLemons);
  const decrement = useFruitsStore((s) => s.decrementLemons);

  return (
    <div className={css["counterY"]}>
      <button onClick={decrement}>-</button>
      <p>Лимони: {lemons}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CounterY;
