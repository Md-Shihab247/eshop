import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import LocationIcon from "../../../icons/LocationIcon";
import CallIcon from "../../../icons/CallIcon";

const TopLeft = () => {

  let {t} = useTranslation();

  return (
    <div>
      <div className=" flex items-center justify-between px-2 sm:px-0 sm:justify-center mb-5 sm:mb-0 gap-0 sm:gap-[50px] relative text-[#303030] text-sm font-normal leading-5 before:absolute before:left-[63%] before:h-5 sm:before:h-8 before:w-[1px] before:bg-[#CBCBCB]">
        <span className="cursor-pointer flex items-center justify-center gap-2">
          <span className=" hidden sm:block">
            <LocationIcon/>
          </span>
          <Link to="https://maps.app.goo.gl/n58JNE5g419y34Uc8" target="_blank">
            {t("123_Main_Street,_Anytown_USA")}
          </Link>
        </span>
        <span className=" cursor-pointer flex items-center justify-center gap-2">
          <span className=" hidden sm:block">
            <CallIcon />
          </span>
          <Link to="tel: +1 (555) 123-4567"> {t("+1_(555)_123-4567")} </Link>
        </span>
      </div>
    </div>
  );
};

export default TopLeft;
