/**
 * Заглушка акордеона: додайте типи пропсів, стан та обробники під час уроку.
 */
import { useState } from "react";
import css from "./Accordion.module.css";
export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css["container"]}>
      <h3>Accordion</h3>
      <button onClick={() => setIsOpen(!isOpen)}>Open/Close</button>

      {isOpen && (
        <div>
          <p>hello</p>
          <p>world</p>
        </div>
      )}
    </div>
  );
}
