import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
      onClick={handleOutsideClick}
    >
      <div className="relative bg-white p-4  shadow-md min-w-[30vw] max-h-[80vh] text-center rounded-xl ">
        {children}
        <Button
          variant="ghost"
          className=" absolute top-4 right-4"
          onClick={onClose}
        >
          <X className="text-red-500 " />
        </Button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
