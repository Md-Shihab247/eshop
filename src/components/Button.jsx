const Button = ({
  content,
  bg = "#FF624C",
  color = "white",
  size = "20px",
  fontName = "Montserrat",
  weight = "bold",
  lineHeight = "30px",
  paddingX = "40px",
  paddingY = "16px",
  radious = "10",
}) => {
  return (
    <button
      className=" cursor-pointer"
      style={{
        background: `${bg}`,
        color: `${color}`,
        fontSize: `${size}`,
        fontFamily: `${fontName}`,
        fontWeight: `${weight}`,
        lineHeight: `${lineHeight}`,
        padding: `${paddingY} ${paddingX}`,
        borderRadius: `${radious}px`,
      }}
    >
      {content}
    </button>
  );
};

export default Button;
