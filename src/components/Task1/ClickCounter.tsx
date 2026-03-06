/**
 * Заглушка лічильника: додайте пропси та обробники самостійно.
 */

import { useState } from "react";

const ClickCounter = () => {
  const userName = "Vasya";
  const [x, setX] = useState(0);

  const handleIncrement = () => {
    setX(x + 1);
  };

  return (
    <div>
      <p>User: {userName}</p>
      <p>Counter: {x}</p>
      <button onClick={handleIncrement}>++</button>
    </div>
  );
};

export default ClickCounter;
