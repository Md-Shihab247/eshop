import React, { useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { HiOutlinePlus } from 'react-icons/hi'

const Counter = ({price}) => {
    
    let [quantity,setQuantity] = useState(1)

  return (
    <div className=' flex items-center gap-x-[130px]'>
        <div className=' flex items-center gap-4'>
            <AiOutlineMinus onClick={()=> setQuantity((quantity > 1) ? --quantity : quantity)} className=' cursor-pointer'/>
            <input readOnly type="text" value={quantity} className=' text-center border-hidden outline-hidden w-10 h-10 bg-[#F4F4F4] rounded-[50%] text-[#303030] font-montserrat text-base font-bold leading-6'/>
            <HiOutlinePlus onClick={()=> setQuantity(++quantity)}  className=' cursor-pointer'/>
        </div>
        <div className='text-[#303030] font-poppins text-xl font-semibold leading-7.5'> ${quantity * price}.00</div>
    </div>
  )
}

export default Counter