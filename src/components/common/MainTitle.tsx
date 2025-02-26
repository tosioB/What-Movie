interface TitleProps {
  title: string;
  marginBottom?: string;
  textAlign?: "left" | "right" | "center";
}

const MainTitle = ({ title, marginBottom, textAlign }: TitleProps) => {
  return (
    <h3 className="main-title" style={{ marginBottom, textAlign }}>
      {title}
    </h3>
  );
};

export default MainTitle;
