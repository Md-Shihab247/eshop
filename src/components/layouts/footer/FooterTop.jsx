import Button from "../../Button"
import Container from "../Container"
const FooterTop = () => {
  return (
    <Container>
        <div className="bg-[linear-gradient(90deg,_rgba(244,244,244,1)_36%,_rgba(217,217,217,1)_49%)] w-full rounded-[25px] py-[114px] pl-[100px]">
            <h3 className=" text-[#303030] font-poppins text-4xl leading-[46px] font-semibold">Get Our Updates</h3>
            <p className=" mt-4 mb-8 font-montserrat text-[#303030] text-[20px] font-normal leading-[30px] max-w-[490px]">Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
            <input type="email"  placeholder="Enter your email address ..." className=" w-[494px] h-[72px] text-base text-[#303030] pl-6 pr-12 py-[18px] bg-white border border-[#929292] opacity-75 rounded-[10px] mb-4"/>
            <br />
            <Button content={'Subscribe'}/>
        </div>
    </Container>
  )
}

export default FooterTop