import { useState } from 'react'
import Transparent from "../components/icons/Transparent"
import Shipping from "../components/icons/Shipping"
import Secure from "../components/icons/Secure"
import Button from "../components/Button"
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import CartIcon from "../components/icons/CartIcon2"
const ProductDetailsServices = () => {
  let [quantity,setQuantity] = useState(1)


  return (
    <div className=" flex items-center justify-between mt-[50px] gap-x-[94px] mb-[100px]">
          <div className=" flex gap-x-12 items-center">
              <div className=" flex items-center gap-x-6">
                <Shipping />
                <div>
                  <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                    Free Shipping
                  </h3>
                  <p className=" font-montserrat text-[#303030] text-base font-normal mt-0.5 leading-6">
                    Worldwide available
                  </p>
                </div>
              </div>

              <div className=" flex items-center gap-x-6">
                <Secure />
                <div>
                  <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                    100% Guaranteed
                  </h3>
                  <p className=" font-montserrat text-[#303030] text-base font-normal mt-0.5 leading-6">
                    Receive product first
                  </p>
                </div>
              </div>

              <div className=" flex items-center gap-x-6">
                <Transparent />
                <div>
                  <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                    Return Available
                  </h3>
                  <p className=" font-montserrat text-[#303030] text-base font-normal mt-0.5 leading-6">
                    See return policy
                  </p>
                </div>
              </div>
          </div>

          <div className=" flex items-center gap-x-[84px]"> 
            <div className=" flex gap-x-[50px]">
              <div onClick={()=> setQuantity((quantity > 0) && --quantity)} className=" h-[56px] w-[56px] cursor-pointer flex items-center justify-center bg-transparent rounded-[50%] hover:bg-[#F4F4F4] ">
                <HiOutlineMinus className=" w-6 h-6 " />
              </div>
              <input type="number" readOnly value={quantity}  className=" w-[80px] outline-hidden border-hidden text-center text-[#303030] font-poppins text-3xl font-semibold leading-[46px]"/>
              <div onClick={()=> setQuantity(++quantity)} className=" h-[56px] w-[56px] cursor-pointer flex items-center justify-center bg-transparent rounded-[50%] hover:bg-[#F4F4F4] ">
                <HiOutlinePlus  className=" w-6 h-6" />
              </div>
            </div>
            <div className=" flex items-center gap-x-4"> 
              <Button content={"Buy Now"} paddingX="40px" paddingY="16px" color="white" radious="10" bg="#FF624C"/>
              <div className=" h-[62px] w-[62px] flex items-center justify-center rounded-[10px] border border-[#FF624C]">
                  <CartIcon width={28} height={28}/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductDetailsServices