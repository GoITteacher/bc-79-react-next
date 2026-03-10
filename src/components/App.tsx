import { useState } from "react";
import Timer from "./Timer";
// import Sidebar from "./Sidebar";
import CharacterWidget from "./CharacterWidget";
import News from "./News/News";
import RandomCocktails from "./RandomCocktails/RandomCocktails";
import { Toaster } from "react-hot-toast";
// import CocktailList from "./CocktailList/CocktailList";
// import ProductList from "./ProductList/ProductList";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* <ProductList /> */}
      {/* <CocktailList /> */}
      {/* <button onClick={open}>Open</button> */}
      {/* {isOpen && <Sidebar onClose={close} />} */}
      {/* <CharacterWidget />
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <Timer />} */}
      <RandomCocktails />
      <News />

      <Toaster position="top-left" />
    </>
  );
}
