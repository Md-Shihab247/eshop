
const Button = ({content,bg='#FF624C',color='white',size="xl",fontName= 'Montserrat',weight="bold",lineHeight='30px',paddingX='10',paddingY='4',mt='4', radious='10px'}) => {
  return (
    <button className={`
        bg-[${bg}] text-${color} text-${size}  leading-[${lineHeight}] font-[${fontName}] font-${weight} px-${paddingX} py-${paddingY} rounded-[${radious}] mt-${mt}
      `}>{content}</button>
  )
}

export default Button