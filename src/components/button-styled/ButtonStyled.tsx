import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

function ButtonStyled({ onClick, children, type }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-blue-300 py-3 w-full" type={type}>
      {children}
    </button>
  );
}
export default ButtonStyled;
