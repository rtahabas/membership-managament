import React from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";

export type BaseModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> | ((prevState: boolean) => void);
  classes?: string;
};

type Props = BaseModalProps & {
  children: React.ReactNode;
};

const customStyles: ReactModalProps["style"] = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    padding: "24px",
    width: "400px",
    height: "198px",
    top: "50%",
    left: "50%",
    border: "none",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 12,
    boxShadow: "0 8px 8px -4px rgba(16, 24, 40, 0.04), 0 20px 24px -4px rgba(16, 24, 40, 0.1)",
  },
};

ReactModal.setAppElement("#root");

const Modal: React.FC<Props> = ({ children, isOpen, setIsOpen, classes }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} className={classes}>
      {children}
    </ReactModal>
  );
};

export default Modal;
