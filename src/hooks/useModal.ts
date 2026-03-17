import { useState } from "react";

type UseModalReturn = [boolean, () => void, () => void, () => void];

export const useModal = (): UseModalReturn => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return [isOpenModal, openModal, closeModal, toggleModal];
};
