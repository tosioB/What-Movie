type ButtonProps = {
  type?: "button" | "submit";
  text: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  type = "button",
  text,
  width,
  height,
  backgroundColor,
  color,
  className = "",
  disabled = false,
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`com-btn ${className}`}
      style={{
        width,
        height,
        backgroundColor,
        color
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
