import Container from "../Container"
import CartIcon from "../../icons/CartIcon"
import UserIcon from "../../icons/UserIcon"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import SearchIcon from "../../icons/SearchIcon"
import { useEffect, useRef, useState } from "react"
import { HiBars3 } from "react-icons/hi2"
import { useDispatch } from "react-redux"
import  { toggleSidebar }  from "../../../store/slices/SidebarSlice"
const MiddleLayer = () => {

  let { t } = useTranslation();
  let [showSearch,setShowSearch] = useState(false)
  let ForInputRef = useRef(null)
  let dispatch = useDispatch()
  

  useEffect(()=>{

    let handleClick = (event)=>{
       if (ForInputRef.current && !ForInputRef.current.contains(event.target)) {
          setShowSearch(false)
       }
    }
    document.addEventListener("click",handleClick)

  },[])

  return (
    <>
      <Container >
      <div ref={ForInputRef} className={ `px-2 sm:px-0 font-montserrat py-6 flex items-center justify-between`}>
        <div className={`${showSearch && 'hidden'}`}>
          <Link to="/"><img src="./images/logo.png" alt="logo" /></Link>
        </div>

        <div className="relative flex justify-end items-center ">
          <div className={`${showSearch ? 'flex': 'hidden'} relative items-center max-w-[95.5vw] `}>
            <input type="text"  placeholder={t("Search_Products")} className=" w-screen  sm:w-[332px] h-14 pl-6 pr-12 py-[18px] bg-white border border-[#979797] opacity-75 rounded-[10px] text-[#303030] font-montserrat text-sm font-normal leading-5"/>
            <span className=" absolute right-[24px] cursor-pointer">
              <SearchIcon/>
            </span>
          </div>

          <span onClick={()=> setShowSearch(!showSearch)} className={` ${showSearch && "hidden"} sm:hidden absolute left-[10px] cursor-pointer`}>
            <SearchIcon width="22" height="22"/>
          </span>
          <HiBars3 onClick={()=> dispatch(toggleSidebar(true))} className=" absolute sm:hidden left-[-30px] h-[25px] w-[25px] cursor-pointer"/>

          <div className=" flex items-center justify-center gap-x-6 mr-[18px] sm:mr-[80px] ml-12">
            <span className={` ${showSearch && 'hidden'}`}>
              <CartIcon />
            </span>
            <div className=" hidden sm:block text-[#303030] text-base  leading-6">
              <p className=" font-normal"> {t("Cart")} </p>
              <span className=" font-bold"> {t("$_150,000")} </span>
            </div>
          </div>

          <div className=" flex items-center justify-end gap-x-6 ml-0 sm:ml-12 relative sm:before:absolute sm:before:left-[-50%] sm:before:h-8 sm:before:w-[1px] sm:before:bg-[#CBCBCB]">
            <span className={` ${showSearch && 'hidden'}`}>
              <UserIcon/>
            </span>
            <div className=" hidden sm:block text-[#303030] text-base  leading-6">
              <p className=" font-normal">{t("User")}</p>
              <span className=" font-bold">{t("Account")}</span>
            </div>
          </div>
          
        </div>
      </div>
    </Container>
    </>
  )
}

export default MiddleLayer