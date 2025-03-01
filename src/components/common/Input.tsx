import { forwardRef } from "react";

interface InputProps {
  width?: string;
  height?: string;
  type: "text" | "password" | "number" | "email";
  placeholder: string;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputMode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
}

// forwardRef를 사용해서 ref를 input 요소에 전달
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width, height, type = "text", placeholder, onInput, ...rest }, ref) => {
    return (
      <input
        type={type}
        className="com-inp"
        placeholder={placeholder}
        style={{ width, height }}
        ref={ref} // ref 전달
        {...rest} // register가 전달하는 props 적용
        onInput={onInput}
      />
    );
  }
);

export default Input;
