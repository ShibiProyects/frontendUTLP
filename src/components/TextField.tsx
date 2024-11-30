import { forwardRef, InputHTMLAttributes } from "react";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  label: string;
  error?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function Comp({ label, error, ...inputParams }, ref) {
    return (
      <>
        <label className=""> {label} </label>
        <input
          ref={ref}
          {...inputParams}
          className={`border-[1px] border-black rounded-2xl px-2 py-1 ${
            error && "border-red-500 outline-red-500"
          }`}
        />
        {error && <span className="text-red-500"> {error} </span>}
        <></>
      </>
    );
  }
);
