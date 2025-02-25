type SelectProps = {
  width?: string;
  height?: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  width = "auto",
  height = "4rem",
  options,
  onChange
}: SelectProps) => {
  return (
    <select
      style={{
        width,
        height,
        padding: "0 1.2rem",
        backgroundColor: "#474747",
        borderRadius: "0.4rem",
        color: "#FFF",
        cursor: "pointer"
      }}
      onChange={onChange}
    >
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
