import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import CartIcon from "../icons/CartIcon2"
import HeartIcon from "../icons/HeartIcon"
import ShareIcon from "../icons/ShareIcon"
const ProductLayout = ({springDisAmount,springDiscount,limited,padding,src="images/product-img.png", catagory="it's missing",tittle="Title missing",price="price is not define",oldPrice,rating,bordering,discount,stack,starckAmount}) => {

    let [ratings,setRatings] = useState(new Array(rating).fill(rating))

  return (
    <div className={`${padding && `p-10`} flex flex-col bg-white rounded-[10px] duration-300 group border border-transparent ${bordering && `hover:border hover:border-[#CBCBCB]`}`}>
        <div className={`${padding ? `px-0 pt-0` : `px-6 pt-6`} relative`}>
            <img src={src} alt="product img" />
            {discount &&
              <div className=' absolute top-4 right-4 font-bold font-montserrat text-base leading-6 py-[7px] px-5 rounded-[5px] bg-[#FF624C] text-white'>50%</div>
            }
            {springDiscount &&
              <div className=' absolute top-0 right-0 font-bold font-montserrat text-base leading-6 flex items-center justify-center w-[100px] h-[100px] rounded-[50%] bg-[#FF624C] text-white'> {springDisAmount} </div>
            }
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
        <div className={`${padding ? `pt-10 pb-0 px-0` : `pt-10 pb-11 px-6`}`}>
            <span className='text-[#303030] font-montserrat text-sm font-normal leading-5 uppercase tracking-[5px]'>{catagory}</span>
            <p className='text-[#303030] font-poppins text-xl font-semibold leading-7.5 mt-4 duration-300 group-hover:text-[#FF624C] group-hover:underline'>{tittle}</p>
            <div className=' flex items-center mt-2'>
                {ratings.map((star,index)=>{

                   return  <IoMdStar key={index} className={`text-yellow-400 h-4 w-4`}/>

                })}
                
                <span className=' ml-2 font-montserrat text-base font-normal leading-6'>( 100 )</span>
            </div>
            <div  className=' flex items-center  mt-6'>
            <div className='text-[#303030] font-poppins text-2xl font-semibold leading-7.5'> {price} </div>
            <span className=' opacity-50 ml-2 mt-1 text-[#303030] text-base font-montserrat font-normal leading-6 line-through'> {oldPrice} </span>
            </div>
            {stack &&
                <div className=' bg-[#E0E0E0] w-full h-[30px] mt-8 rounded-[25px] relative'>
                    <div className={`top-0 left-0 h-[100%] ${limited ? `w-[97%]` : `w-[59%]`} rounded-[25px] z-10 ${limited ? `bg-[#FF624C]` : `bg-[#303030]`}`}></div>
                    <p className=' absolute top-[5px] left-[50%] translate-x-[-50%]  font-bold text-sm font-montserrat text-white leading-6'> {starckAmount} {limited ? limited : "AVAILABLE"}</p>
                </div>
            }
        </div>
    </div>
  )
}

export default ProductLayout