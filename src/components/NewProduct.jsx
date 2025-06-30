import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button"

const NewProduct = () => { 

      const newProducts = [
        { product: 'All Catagories' },
        { product: 'Computers'},
        { product: 'Electronics'  },
        { product: 'Smartphones' },
        { product: 'Smart Watches' },
        { product: 'Wearless devices' },
    ]

    let [isDropDownOpen,setIsDropDownOpen] = useState(false)
    let [selected,setSelected] = useState(null)
    let dropdownRef = useRef(null)

    useEffect(()=>{
        let handleDropDown = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownOpen(false)
            }}

        document.addEventListener('click',handleDropDown)
        return ()=>{
        document.removeEventListener('click',handleDropDown)
        }
    },[])

    let handleSelect = (item)=>{
      setSelected(item)
      setIsDropDownOpen(false)

    }

  return (
    <div className="my-[80px]">
      <Container>
        <div className=" flex justify-between mb-12">
          <h3 className=" font-poppins font-semibold text-[#303030] text-4xl leading-[46px]">New Products</h3>
          <div className=" flex items-center gap-x-4">
            <span className=" text-[#303030] font-montserrat text-base font-normal leading-6">Sort by</span>
            <div 
                onClick={()=> {setIsDropDownOpen(!isDropDownOpen) }}
                ref={dropdownRef}
                className=" relative flex items-center"> 
                  {selected 
                  ?
                  <div  className=" flex items-center justify-between cursor-pointer text-[#FF624C] font-montserrat text-base font-bold leading-6 w-[235px]"> <span className=""> {selected} </span> <IoIosArrowDown  className={`${isDropDownOpen && `rotate-180`} transition-all text-black h-4 w-4 `}/> </div>
                  : 
                  <div  className=" flex items-center justify-between w-[235px] cursor-pointer text-[#FF624C] font-montserrat text-base font-bold leading-6"> All Catagories <IoIosArrowDown  className={`${isDropDownOpen && `rotate-180`}  transition-all text-black h-4 w-4`}/></div>
                  }

                {isDropDownOpen && (
                    <ul className="bg-[#fff] rounded-[5px] overflow-hidden right-10 font-montserrat font-semibold absolute box-border top-8  shadow-xl text-sm text-[#303030] w-[180px] z-[999]">
                      {newProducts.map((item,index)=>{

                      return <li onClick={()=> handleSelect(item.product)} className={` py-2 px-3 border-b border-[#CBCBCB] cursor-pointer  last:border-b-transparent hover:bg-[#ddd]`} key={index}> {item.product} </li>

                      })}
                    </ul>
                      
                  )}
              </div>
          </div>
        </div>
          <div className=" flex gap-x-6">
            <div className=" max-w-[285px]">
                <ProductLayout catagory={"WATCH"} tittle={"Orange Watch 12 High Quality Health Sensor..."} price={"$959.99"} oldPrice={"$1,919.99"} rating={5} bordering={true} discount={true} stack={false} starckAmount={"50"} />
            </div>
            <div className=" max-w-[285px]">
                <ProductLayout catagory={"TABLET"} tittle={"Ultra Tablet Qwerty HD 10765 Series Low Pri..."} price={"$799.00"} rating={4} discount={false} bordering={true} stack={false} starckAmount={"50"} />
            </div>
            <div className=" max-w-[285px]">
                <ProductLayout catagory={"AUDIO"} tittle={"QuietComfort 45 Wireless Headphone..."} price={"$329.99"} rating={3} bordering={true} discount={false} stack={false} starckAmount={"50"} />
            </div>
            <div className=" max-w-[285px]">
                <ProductLayout catagory={"LAPTOP"} tittle={"Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..."} price={"$2,399.99"} oldPrice={"$2,878.00"} rating={5} bordering={true} discount={true} stack={false} starckAmount={"50"} />
            </div>
            <div className=" max-w-[285px]">
                <ProductLayout catagory={"CAMERA"} tittle={"CamPro HERO10 Black Sleek Design 2023 4K ..."} price={"$1,499.99"} rating={2} bordering={true} discount={false} stack={false} starckAmount={"50"} />
            </div>
          </div>
          <div className=" mt-16 flex justify-center">
              <Button content={"Load More"} bg="transparent" color="#FF624C" border="1px solid #FF624C" />
          </div>
      </Container>
    </div>
  );
};

export default NewProduct;
