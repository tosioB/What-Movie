interface InputProps {
  width?: string;
  height?: string;
  type: "text" | "password" | "number";
  placeholder: string;
}

const Input = ({ width, height, type = "text", placeholder }: InputProps) => {
  return (
    <input
      type={type}
      className="com-inp"
      placeholder={placeholder}
      style={{ width, height }}
    />
  );
};

export default Input;
