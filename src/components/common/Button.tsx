type ButtonProps = {
  text: string;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  onClick?: () => void;
};

const Button = ({
  text,
  width = "auto",
  height = "4rem",
  padding = "0 1.2rem",
  fontSize = "1.6rem",
  fontWeight = "500",
  backgroundColor = "#78a188",
  borderRadius = "0.4rem",
  color = "#FFF",
  onClick
}: ButtonProps) => {
  return (
    <button
      style={{
        width,
        height,
        padding,
        fontSize,
        fontWeight,
        backgroundColor,
        borderRadius,
        color
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
