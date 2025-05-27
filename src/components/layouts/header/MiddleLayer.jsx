import { IoSearchOutline } from "react-icons/io5"
import Container from "../Container"
import CartIcon from "../../icons/CartIcon"
import UserIcon from "../../icons/UserIcon"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import SearchIcon from "../../icons/SearchIcon"
const MiddleLayer = () => {

  let { t } = useTranslation();

  return (
    <Container >
      <div className=" font-montserrat py-6 flex items-center justify-between">
        <div>
          <Link to="/"><img src="./images/logo.png" alt="logo" /></Link>
        </div>

        <div className=" flex justify-end items-center">
          <div className="relative flex items-center ">
            <input type="text"  placeholder={t("Search_Products")} className=" w-[332px] h-14 pl-6 pr-12 py-[18px] bg-white border border-[#979797] opacity-75 rounded-[10px] text-[#303030] font-montserrat text-sm font-normal leading-5"/>
            {/* <IoSearchOutline className=" absolute right-[24px] cursor-pointer top-[18px] h-5 w-5" /> */}
            <SearchIcon/>
          </div>
          <div className=" flex items-center justify-center gap-6 mr-[80px] ml-12">
            <CartIcon />
            <div className=" text-[#303030] text-base  leading-6">
              <p className=" font-normal"> {t("Cart")} </p>
              <span className=" font-bold"> {t("$_150,000")} </span>
            </div>
          </div>

          <div className=" flex items-center justify-end gap-6 ml-12 relative before:absolute before:left-[-50%] before:h-8 before:w-[1px] before:bg-[#CBCBCB]">
            <UserIcon/>
            <div className=" text-[#303030] text-base  leading-6">
              <p className=" font-normal">{t("User")}</p>
              <span className=" font-bold">{t("Account")}</span>
            </div>
          </div>
          
        </div>
      </div>
    </Container>
  )
}

export default MiddleLayer