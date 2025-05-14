import Button from "../../Button"
import Container from "../Container"
const FooterTop = () => {
  return (
    <Container>
        <div class="bg-[linear-gradient(90deg,_rgba(244,244,244,1)_28%,_rgba(217,217,217,1)_46%)] w-full rounded-[25px] py-[114px] pl-[100px]">
            <h3 className=" text-[#303030] font-poppins text-4xl leading-[46px] font-semibold">Get Our Updates</h3>
            <p className=" mt-4 mb-8 font-montserrat text-[20px] font-normal leading-[30px] max-w-[514px]">Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
            <input type="email"  placeholder="Enter your email address ..." className=" w-[494px] h-[72px] text-base text-[#303030] pl-6 pr-12 py-[18px] bg-white border border-[#929292] opacity-50 rounded-[10px] mb-4"/>
            <br />
            <Button content={'Subscribe'}/>
        </div>
    </Container>
  )
}

export default FooterTop