import { useState } from "react";

export default function CharacterWidget() {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  );
}
