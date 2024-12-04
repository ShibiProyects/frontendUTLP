import { ReactNode } from "react";

function ButtonStyled({
  onclick,
  primary,
  children,
}: {
  onclick: () => void;
  primary?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onclick}
      className={`text-xl h-max w-max px-3 py-2 border-[2px] font-semi rounded-xl ${
        primary ? " bg-primary text-white" : "  border-secondary text-black"
      }`}
    >
      {children}
    </button>
  );
}
export default ButtonStyled;
