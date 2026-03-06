import { useState } from "react";
import css from "./InputExample.module.css";

const InputExample = () => {
  const [userValue, setUserValue] = useState<string>("Vasya");

  return (
    <div className={css["inputExample"]}>
      <input
        type="text"
        value={userValue}
        onChange={(e) => setUserValue(e.target.value)}
      />
    </div>
  );
};

export default InputExample;
