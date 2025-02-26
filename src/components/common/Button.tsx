type ButtonProps = {
  text: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  text,
  width,
  height,
  backgroundColor,
  color,
  className = "",
  onClick
}: ButtonProps) => {
  return (
    <button
      className={`com-btn ${className}`}
      style={{
        width,
        height,
        backgroundColor,
        color
      }}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
