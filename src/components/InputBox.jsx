import React from 'react'

const InputBox = ({inputType,type,placeholder,textArea}) => {
  return (
    <>
        <label htmlFor="" className=' font-montserrat text-xl text-[#303030] font-bold leading-7.5'> {inputType} <span className=' text-[#FF624C]'>*</span></label> <br />
        {textArea
          ?
          <textarea type={type} placeholder={placeholder} className=' resize-none w-full h-[173px] box-border block mt-3 py-[25px] px-8 text-[#303030]  font-montserrat text-xl font-normal leading-7.5 outline-hidden rounded-[10px] border border-[#CBCBCB]' />
          :
          <input type={type} placeholder={placeholder} className=' w-full block mt-3 py-[25px] px-8 text-[#303030]  font-montserrat text-xl font-normal leading-7.5 outline-hidden rounded-[10px] border border-[#CBCBCB]' />

        }
    </>
  )
}

export default InputBox