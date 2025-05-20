import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button"

const NewProduct = () => { 

    let [isDropDownOpen,setIsDropDownOpen] = useState(false)
    let dropdownRef = useRef(null)

    useEffect(()=>{

        let handleDropDown = (event)=>{

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownOpen(false)
            }
        }

        document.addEventListener('click',handleDropDown)
        return ()=>{
        document.removeEventListener('click',handleDropDown)
        }

    },[])

  return (
    <div className="my-[80px]">
      <Container>
        <div className=" flex justify-between mb-12">
          <h3 className=" font-poppins font-semibold text-[#303030] text-4xl leading-[46px]">New Products</h3>
          <div className=" flex items-center gap-x-4">
            <span className=" text-[#303030] font-montserrat text-base font-normal leading-6">Sort by</span>
            <div ref={dropdownRef} className=" relative flex items-center"> 
                <button onClick={()=> setIsDropDownOpen(!isDropDownOpen)} className=" flex items-center cursor-pointer text-[#FF624C] font-montserrat text-base font-bold leading-6"> All Categories <IoIosArrowDown  className="ml-[100px] h-4 w-4"/></button>
            {isDropDownOpen && (
                <ul className="bg-[#fff] right-10 font-montserrat font-semibold absolute box-border top-8  shadow-xl text-sm text-[#303030] w-[180px] z-[999]">
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Electronics
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Fashion
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Home & Kitchen
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Toys & Games
                  </li>
                  <li className=" cursor-pointer px-5 py-3 hover:bg-[#DFE3E7]">
                    Books & Stationery
                  </li>
                </ul>
              )}
              </div>
          </div>
        </div>
          <div className=" flex gap-x-6">
          <ProductLayout catagory={"PHONE"} tittle={"JPhone 13 High Quality Value Buy Best Cam..."} price={"$999.00"} rating={5} bordering={true} discount={true} stack={false} starckAmount={"50"} />
          <ProductLayout catagory={"AUDIO"} tittle={"WH-1000XM4 Wireless Headphones High Qu..."} price={"$59.00"} rating={4} oldPrice={"$118.00"} discount={false} bordering={true} stack={false} starckAmount={"50"} />
          <ProductLayout catagory={"LAPTOP"} tittle={"S21 Laptop Ultra HD LED Screen Feature 2023 ..."} price={"$1,199.00"} rating={3} bordering={true} discount={false} stack={false} starckAmount={"50"} />
          <ProductLayout catagory={"CAMERA"} tittle={"Mini Polaroid Camera for Girls with Flash Li..."} price={"$79.00"} rating={5} bordering={true} discount={true} stack={false} starckAmount={"50"} />
          <ProductLayout catagory={"TELEVISION"} tittle={"AG OLED65CXPUA 4K Smart OLED TV New ..."} price={"$2,799.00"} rating={2} bordering={true} discount={false} stack={false} starckAmount={"50"} />
          </div>
          <div className=" mt-16 flex justify-center">
              <Button content={"Load More"} bg="transparent" color="#FF624C" border="1px solid #FF624C" />
          </div>
      </Container>
    </div>
  );
};

export default NewProduct;
