
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
  border="none",
  isOpacity
}) => {


  return (
    <button
    className={`scale-85 sm:scale-100 left-[-12px] sm:left-0  relative cursor-pointer transition-all ${isOpacity && " before:absolute before:top-0 before:left-0 before:h-full before:w-full before:border before:border-[#303030] before:rounded-[5px] before:opacity-50"}`}
    style={{
      background: `${bg}`,
        color: `${color}`,
        fontSize: `${size}`,
        fontFamily: `${fontName}`,
        fontWeight: `${weight}`,
        lineHeight: `${lineHeight}`,
        padding: `${paddingY} ${paddingX}`,
        borderRadius: `${radious}px`,
        border: border,
      }}
    >
      {content}
    </button>
  );
};

export default Button;
