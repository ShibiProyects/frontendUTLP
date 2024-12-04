import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className=" bg-white p-4  shadow-md min-w-[30vw] max-h-[80vh] text-center rounded-xl ">
        {children}
        <button
          className="mt-4 px-4 py-2 bg-danger font-semibold rounded-lg text-white"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
