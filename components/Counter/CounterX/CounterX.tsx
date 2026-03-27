"use client";

import { useFruitsStore } from "@/stores/fruitsStore";
import css from "./CounterX.module.css";

const CounterX = () => {
  const apples = useFruitsStore((store) => store.apples);
  const increment = useFruitsStore((store) => store.incrementApples);
  const decrement = useFruitsStore((store) => store.decrementApples);

  return (
    <div className={css["counterX"]}>
      <button onClick={decrement}>-</button>
      <p>Яблука: {apples}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CounterX;
