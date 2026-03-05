interface ModalProps {
  children?: React.ReactNode;
  title?: string;
}

const Modal = ({ title, children }: ModalProps) => {
  return (
    <div>
      <button>CLOSE</button>
      {title ?? children}
    </div>
  );
};

export default Modal;
