import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const TopLeft = () => {
  return (
    <div>
      <div className=" flex items-center justify-center gap-[50px] relative text-[#303030] text-sm font-normal leading-5 before:absolute before:left-[62%] before:h-8 before:w-[1px] before:bg-[#CBCBCB]">
        <span className="cursor-pointer flex items-center justify-center gap-2">
          <IoLocationOutline />
          <Link to="https://maps.app.goo.gl/n58JNE5g419y34Uc8" target="_blank">
            123 Main Street, Anytown USA
          </Link>
        </span>
        <span className=" cursor-pointer flex items-center justify-center gap-2">
          <IoCallOutline />
          <Link to="tel: +1 (555) 123-4567">+1 (555) 123-4567</Link>
        </span>
      </div>
    </div>
  );
};

export default TopLeft;
