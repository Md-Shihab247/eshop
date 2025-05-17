import React from 'react'
import { IoMdStar } from 'react-icons/io'
import CartIcon from "../icons/CartIcon2"
import HeartIcon from "../icons/HeartIcon"
import ShareIcon from "../icons/ShareIcon"
const ProductLayout = ({productName,tittle,price,oldPrice}) => {
  return (
    <div className=' flex flex-col bg-white rounded-[10px] duration-300 group border border-transparent hover:border hover:border-[#CBCBCB]'>
        <div className='px-6 pt-6 relative'>
            <img src="images/product-img.png" alt="product img" />
            <div className=' absolute bottom-[-100px] gap-x-4.5 left-[50%] opacity-0 duration-300 group-hover:bottom-[6px] group-hover:opacity-100 translate-x-[-50%] flex justify-center items-center'>
                <div className=' h-12.5 w-12.5 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                <CartIcon />
                </div>
                <div className=' h-12.5 w-12.5 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] text-[#FF624C] duration-300 hover:bg-[#FF624C] group-[.group]:hover:text-white'>
                <HeartIcon/>
                </div>
                <div className=' h-12.5 w-12.5 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                <ShareIcon/>
                </div>
            </div>
        </div>
        <div className='pt-10 pb-11 px-6'>
            <span className='text-[#303030] font-montserrat text-sm font-normal leading-5 uppercase tracking-[5px]'>{productName}</span>
            <p className='text-[#303030] font-poppins text-xl font-semibold leading-7.5 mt-4 duration-300 group-hover:text-[#FF624C] group-hover:underline'>{tittle}</p>
            <div className=' flex items-center mt-2'>
                <IoMdStar className='text-yellow-400 h-4 w-4'/>
                <IoMdStar className='text-yellow-400 h-4 w-4'/>
                <IoMdStar className='text-yellow-400 h-4 w-4'/>
                <IoMdStar className='text-yellow-400 h-4 w-4'/>
                <IoMdStar className='text-yellow-400 h-4 w-4'/>
                    <span className=' ml-2 font-montserrat text-base font-normal leading-6'>( 100 )</span>
            </div>
            <div  className=' flex items-center  mt-6'>
            <div className='text-[#303030] font-poppins text-2xl font-semibold leading-7.5'> {price} </div>
            <span className=' opacity-50 ml-2 mt-1 text-[#303030] text-base font-montserrat font-normal leading-6 line-through'> {oldPrice} </span>
            </div>
        </div>
    </div>
  )
}

export default ProductLayout