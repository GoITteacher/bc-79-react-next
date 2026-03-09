// import OrderForm from "./OrderForm/OrderForm";
// import { OPENAI_TOKEN } from "../helpers/constnants";

import { Toaster } from "react-hot-toast";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";

export default function App() {
  return (
    <>
      {/* <OrderForm /> */}
      {/* <OrderForm /> */}
      {/* <SearchForm /> */}
      <Task3 />
      <hr />
      <Task2 />

      <Toaster />
    </>
  );
}
