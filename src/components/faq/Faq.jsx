import { useState } from "react";
import Button from "../Button";
import Container from "../layouts/Container";
import Accordion from "./Accordion";

const Faq = () => {
  let AccordionData = [
    {
      question: "What payment methods do you accept?",
      answer: ` we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history. `,
    },
    {
      question: "How long does the product shipping take?",
      answer: ` Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time.`,
    },
    {
      question: "Do you offer international shipping?",
      answer: `You can also check the status of your order by logging into your account and viewing your order history. we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time.`,
    },
    {
      question: "Can I track my order?",
      answer: ` Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.`,
    },
  ];

  let [active,setActive] = useState(null)

  return (
    <div
      className=" py-10 sm:py-16 bg-[#F4F4F4] px-2 sm:px-0"
    >
      <Container>
        <div className=" sm:flex">
          <div className=" max-w-screen sm:w-[926px]">
            {AccordionData.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  activeToggle = {()=> {setActive(active === index ? null : index)}}
                  isOpen={active === index}
                  question={item}
                  answer={item}
                />
              );
            })}
          </div>
          <div className=" mt-6 sm:mt-0 relative sm:ml-[112px] flex items-end">
                <img className=" absolute top-0 left-[332px] hidden sm:flex" src="images/accordionDot.png" alt="accordion icon" />
            <div>
              <h4 className="max-w-[260px] sm:max-w-[306px] font-poppins text-[#303030] text-3xl sm:text-4xl font-semibold leading-[46px]">
              Frequently Asked Questions
            </h4>
            <p className=" sm:max-w-[392px] mt-2 sm:mt-6 mb-10 sm:mb-16 font-montserrat text-xl text-[#303030] font-normal leading-7.5">
              Questions that get asked the most by our clients. Get any burning
              questions?
            </p>
            <Button content={"Ask A Question"}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
