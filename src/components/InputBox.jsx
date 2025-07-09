import { Bounce, toast } from 'react-toastify'
const InputBox = ({inputType,type,placeholder,textArea,isContact,isStar,value}) => {


      let handleAlert= ()=>{

          if (inputType == "Country" || inputType == "State" || inputType == "City") {
              toast.error(' Select from the Dropdown ', {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
          }

      }

  return (
    <>
        <label htmlFor="" className=' font-montserrat text-xl text-[#303030] font-bold leading-7.5'> {inputType} {isStar &&  <span className=' text-[#FF624C]'>*</span>} </label> <br />
        {textArea
          ?
          <textarea type={type} placeholder={placeholder} className={ ` ${isContact ? "h-[240px]" : "h-[173px]"} resize-none w-full box-border block mt-3 py-[25px] px-8 text-[#303030]  font-montserrat text-xl font-normal leading-7.5 outline-hidden rounded-[10px] border border-[#CBCBCB]`} />
          :
          <input onChange={handleAlert} required type={type} placeholder={placeholder} value={value ? value : null} className=' w-full block mt-3 py-[25px] px-8 text-[#303030]  font-montserrat text-xl font-normal leading-7.5 outline-hidden rounded-[10px] border border-[#CBCBCB]' />

        }
    </>
  )
}

export default InputBox