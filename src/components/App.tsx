import { useState, useEffect } from "react";
// import Timer from "./Timer";
import Sidebar from "./Sidebar";
import CharacterWidget from "./CharacterWidget";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <button onClick={open}>Open</button>
      {isOpen && <Sidebar onClose={close} />}
      <CharacterWidget />
      {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <Timer />} */}
    </>
  );
}
