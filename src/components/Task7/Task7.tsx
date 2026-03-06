import { useState } from "react";
import css from "./Task7.module.css";
import AppleController from "./AppleController/AppleController";
import OrangeController from "./OrangeController/OrangeController";
import FruitsInfo from "./FruitsInfo/FruitsInfo";
import { Flex } from "antd";

const Task7 = () => {
  const [info, setInfo] = useState({
    apples: 0,
    oranges: 0,
  });

  const handleAppleIncrement = () => {
    setInfo({
      ...info,
      apples: info.apples + 1,
    });
  };

  const handleOrangeIncrement = () => {
    const copy = { ...info };
    copy.oranges += 1;
    setInfo(copy);
  };

  return (
    <div className={css["task7"]}>
      <Flex gap="large">
        <AppleController increment={handleAppleIncrement} />
        <OrangeController onClick={handleOrangeIncrement} />
      </Flex>

      <FruitsInfo apples={info.apples} oranges={info.oranges} />
    </div>
  );
};

export default Task7;
