import css from "./CarItem.module.css";
import { Flex } from "antd";

const CarItem = () => {
  return (
    <li className={css["car-item"]}>
      <Flex gap="large">
        <p>Test</p>
        <p>Test</p>
        <p>test</p>
        <p>Test</p>
      </Flex>
      <Flex gap="small">
        <button className={css["sell-btn"]}>Продати</button>
        <button className={css["remove-btn"]}>Видалити</button>
      </Flex>
    </li>
  );
};

export default CarItem;
