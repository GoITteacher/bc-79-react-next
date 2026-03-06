// import Accordion from "./Task1/Accordion";
// import ClickCounter from "./Task1/ClickCounter";
// import UserList from "./Task3/UserList/UserList";
// import InputExample from "./Task4/InputExample/InputExample";

import Task7 from "./Task7/Task7";
import { DownloadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Input } from "antd";

// import { useState } from "react";
// import ClickCounter from "./Task5/ClickCounter";
// import CountDisplay from "./Task5/CountDisplay";
// import Task6 from "./Task6/Task6";
// import Modal from "./Modal/Modal";

export default function App() {
  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const openModal = () => {
  //   setIsOpenModal(true);
  // };

  // const closeModal = () => {
  //   setIsOpenModal(false);
  // };

  // const toggleModal = () => {
  //   setIsOpenModal(!isOpenModal);
  // };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Lesson App</h1>

      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />

      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <Button type="primary">Primary Button</Button>
        <Button shape="round" icon={<DownloadOutlined />} size={"large"} danger>
          Download
        </Button>
      </Card>

      {/* {isOpenModal && (
        <Modal onClose={closeModal}>
          <h2>HELLO</h2>
        </Modal>
      )} */}

      {/* <button onClick={toggleModal}>
        {isOpenModal ? "Закрити модалку" : "Відкрити модалку"}
      </button>

      {isOpenModal && (
        <div>
          <h2>MODAL</h2>
        </div>
      )} */}

      {/* <div>
        <ClickCounter handleIncrement={handleIncrement} />
        <CountDisplay value={counter} />
      </div> */}
      {/* <Task6 /> */}
      {/* <InputExample /> */}
      {/* <Accordion /> */}
      {/* <ClickCounter /> */}
      {/* <UserList /> */}

      <Task7 />
    </div>
  );
}
