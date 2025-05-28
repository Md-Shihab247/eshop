import React from 'react'

const RightArrow = ({click,springArrow,width,height ,bg}) => {
  return (
    <svg style={{width: width || "40px", height: height || "40px", background: bg || "transparent"}} className={` rounded-[50%] absolute cursor-pointer top-[50%] ${springArrow ? 'right-[-36px]' : 'right-[-37px]'} -translate-y-[50%]`}  onClick={click} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0)" stroke="#303030"/>
    <path d="M23 20C23 19.8721 22.9512 19.7441 22.8535 19.6465L17.8535 14.6465C17.6582 14.4511 17.3418 14.4511 17.1465 14.6465C16.9513 14.8418 16.9512 15.1582 17.1465 15.3535L21.793 20L17.1465 24.6465C16.9512 24.8418 16.9512 25.1582 17.1465 25.3535C17.3419 25.5487 17.6583 25.5488 17.8535 25.3535L22.8535 20.3535C22.9512 20.2558 23 20.1278 23 20Z" fill="#303030"/>
    </svg> 

  )
}

export default RightArrow