
const Button = ({content,bg='#FF624C',color='#fff',size="xl",fontName= 'Montserrat',weight="bold",lineHeight='30',paddingX='4',paddingY='10'}) => {
  return (
    <button className={`
        bg-[${bg}] text-[${color}] text-[${size}] leading-[${lineHeight}] font-[${fontName}] font-[${weight}] px-[${paddingX}] py-[${paddingY}] rounded-md
      `}>{content}</button>
  )
}

export default Button