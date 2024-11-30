import { useEffect } from "react";
import { ToastType } from "./toast.model";

function Toast({ title, message, onClose }: ToastType) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Cierra automáticamente el toast después de 3 segundos.
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="absolute bottom-0 p-2 flex items-center  right-0 min-h-24 min-w-72 bg-neutral-300 rounded-lg  ">
      <div className="relative pl-4 flex flex-col gap-1">
        <div className=" rounded-lg absolute left-0 h-full w-2 bg-red-500  "></div>
        <span className=" text-red-500 text-xl "> {title} </span>
        <p className="text-base"> {message} </p>
      </div>
    </div>
  );
}
export default Toast;
