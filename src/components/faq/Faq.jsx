import { useState } from "react";
import Button from "../Button";
import Container from "../layouts/Container";
import Accordion from "./Accordion";

const Faq = () => {
  let AccordionData = [
    {
      question: "What payment methods do you accept?",
      answer: ` Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. `,
    },
    {
      question: "How long does the product shipping take?",
      answer: ` Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time.`,
    },
    {
      question: "Do you offer international shipping?",
      answer: ` Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time.`,
    },
    {
      question: "Can I track my order?",
      answer: ` Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.`,
    },
  ];

  let [active,setActive] = useState(null)

  return (
    <div
      className="py-16"
      style={{
        backgroundRepeat: "no-repeat",
        background: "url(./images/faqbg.png)",
      }}
    >
      <Container>
        <div className=" flex">
          <div className="w-[926px]">
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
          <div className=" ml-[112px] flex items-end">
            <div>
              <h4 className=" max-w-[306px] font-poppins text-[#303030] text-4xl font-semibold leading-[46px]">
              Frequently Asked Questions
            </h4>
            <p className=" max-w-[392px] mt-6 mb-16 font-montserrat text-xl text-[#303030] font-normal leading-7.5">
              Questions that get asked the most by our clients. Get any burning
              questions?
            </p>
            <Button content={"Ask A Question"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
