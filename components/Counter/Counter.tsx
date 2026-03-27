"use client";
import { useFruitsStore } from "@/stores/fruitsStore";
import css from "./Counter.module.css";
import CounterX from "./CounterX/CounterX";
import CounterY from "./CounterY/CounterY";

const Counter = () => {
  const { apples, lemons, clearStore } = useFruitsStore();

  return (
    <div className={css["counter"]}>
      <p>TOTAL: {apples + lemons}</p>
      <CounterX />
      <CounterY />

      <button onClick={clearStore}>Clear store</button>
    </div>
  );
};

export default Counter;
