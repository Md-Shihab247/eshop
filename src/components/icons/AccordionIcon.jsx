
const AccordionIcon = ({toggle,active}) => {
  return (
    <svg onClick={toggle} className={` ${active && 'rotate-90'} cursor-pointer duration-300 outline outline-offset-[-2px] outline-[#FF624C] rounded-[50%]`} width="31" height="31" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" className=" transition-all duration-300" transform="matrix(-1 0 0 1 32 0)" style={{fill: active ? "white" : '#FF624C'}}/>
    <path d="M18.4001 16.0001C18.4001 15.8978 18.361 15.7954 18.2829 15.7173L14.2829 11.7173C14.1266 11.561 13.8735 11.561 13.7173 11.7173C13.5611 11.8736 13.561 12.1267 13.7173 12.2829L17.4345 16.0001L13.7173 19.7173C13.561 19.8736 13.561 20.1267 13.7173 20.2829C13.8736 20.4391 14.1267 20.4392 14.2829 20.2829L18.2829 16.2829C18.361 16.2048 18.4001 16.1024 18.4001 16.0001Z" style={{fill: active ? "#FF624C" : "white"}}/>
    </svg>
  )
}

export default AccordionIcon