import AccordionIcon from "../icons/AccordionIcon"

const Accordion = ({question,answer,isOpen,activeToggle}) => {
    
  return (
    <button onClick={activeToggle}  className={` transition-all cursor-pointer duration-300 w-full flex justify-start gap-x-8 bg-white rounded-[25px] py-[33px] pl-12 pr-[56px] mb-6 last:mb-0`} >
        <div>
        <AccordionIcon active= {isOpen}  toggle={activeToggle}/>
        </div>

        <div>
           <h3 className=" text-[#303030] text-start font-poppins text-2xl font-semibold leading-7.5"> {question.question} </h3>

           {isOpen 
           &&
            <div className={` max-w-[755px] bg-white text-start font-montserrat mt-4 text-[#303030] text-xl font-normal leading-7.5 opacity-75`}> {answer.answer} </div>
            }
        </div>
    </button>
  )
}

export default Accordion