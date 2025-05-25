import AccordionIcon from "../icons/AccordionIcon"

const Accordion = ({question,answer,isOpen,activeToggle}) => {
    
  return (
    <div  className={` transition-all duration-300 w-full flex gap-x-8 bg-white rounded-[25px] py-[33px] pl-12 pr-[56px] mb-6 last:mb-0`} >
        <div>
        <AccordionIcon active= {isOpen}  toggle={activeToggle}/>
        </div>
        <div>
           <h3 className=" text-[#303030] font-poppins text-2xl font-semibold leading-7.5"> {question.question} </h3>

           {isOpen 
           &&
            <div className={` bg-white font-montserrat mt-4 text-[#303030] text-xl font-normal leading-7.5`}> {answer.answer} </div>
            }
        </div>
    </div>
  )
}

export default Accordion