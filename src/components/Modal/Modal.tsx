import css from "./Modal.module.css";
interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <button onClick={onClose} className={css["close-btn"]}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
