import React, { useEffect, useRef, useState } from 'react'
import InputBox from '../components/InputBox'
import ArrowDownIcon from "../components/icons/ArrowDownIcon"
import CountriesData from '../dummyData/CountriesData'
import { Bounce, toast } from 'react-toastify'

const BillingDetails = () => {
  let [activeCountry,setActiveCountry] = useState(false)
  let [activeState,setActiveState] = useState(false)
  let [activeCity,setActiveCity] = useState(false)
  let countryRef = useRef(null)
  let stateRef = useRef(null)
  let cityRef = useRef(null)
  let [selectedCountry,setSelectedCountry] = useState(null)
  let [selectedState,setSelectedState] = useState(null)
  let [selectedCity,setSelectedCity] = useState(null)


    useEffect(()=>{
      let handleCountries = (event)=>{

        if(countryRef.current && !countryRef.current.contains(event.target)){
          setActiveCountry(false)
        }
        if(stateRef.current && !stateRef.current.contains(event.target)){
          setActiveState(false)
        }

        if(cityRef.current && !cityRef.current.contains(event.target)){
          setActiveCity(false)
        }
      }
      document.addEventListener("click",handleCountries)
      return ()=> { document.removeEventListener("click",handleCountries) }

    },[])


    let handleSelectCountry = (selected)=>{  
        setSelectedCountry(selected)
        setActiveCountry(false)
    }

    let handleSelectState = (selected)=>{
        setSelectedState(selected)
        setActiveState(false)
    }

    let handleSelectCity = (selected)=>{
        setSelectedCity(selected)
        setActiveCity(false)
    }

    let states = CountriesData.filter((item)=> item.country == selectedCountry)
    let cities = states[0]?.states.filter((item)=> item.state == selectedState)
    
    
    function alertOne(){
         if (selectedCountry == null) {
          toast.error('please select a country !', {
            position: "bottom-center",
            autoClose: 1000,
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
    <div className='w-[57%]'>
        <h2 className=' font-poppins text-[36px] font-semibold leading-[46px] text-[#303030]'>Billing Details</h2>

            <div className=' mt-10'>
              <div className=' w-full [&>div:not(:last-child)]:mb-8'>

                <div className='flex gap-x-4'>
                  <div className='w-[50%]'>
                    <InputBox isStar={true} textArea={false} type={"text"} inputType={"First Name"} placeholder={"Amelia Robert"}/>
                  </div>
                  <div className='w-[50%]'>
                    <InputBox isStar={true} textArea={false} type={"text"} inputType={"Last Name"} placeholder={"Watson"}/>
                  </div>
                </div>

                <div className='flex gap-x-4'>
                  <div className='w-[50%]'>
                    <InputBox isStar={true} textArea={false} type={"number"} inputType={"Phone Number"} placeholder={"+123 456 7890"}/>
                  </div>
                  <div className='w-[50%]'>
                    <InputBox isStar={true} textArea={false} type={"email"} inputType={"Email Address"} placeholder={"amelia.watson@eshop.com"}/>
                  </div>
                </div>

                <div className='w-[100%]'>
                  <InputBox  isStar={true}textArea={false} type={"text"} inputType={"Address"} placeholder={"Home Address, Auxiliary St. 12345, Anywhere State"}/>
                </div>  

                <div className='flex gap-x-4'>                                   {/* Country selection here  */}
                  <div ref={countryRef} className='w-[50%] relative'>
                    <InputBox value={selectedCountry} isStar={true} textArea={false} type={"text"} inputType={"Country"} placeholder={"Indonesia"}/>
                    <span onClick={()=> setActiveCountry(!activeCountry)} className={ `${activeCountry ? "rotate-180" : "rotate-0"} transition-all cursor-pointer absolute top-[73px] right-7 text-2xl`}>
                      <ArrowDownIcon width='24' height='24'/>
                    </span>

                      {activeCountry &&
                        <ul className='scroll-thumb absolute top-[110px] right-0 z-50  shadow h-[200px] overflow-auto  w-[200px] border border-[#ddd] bg-white rounded-[5px]'>
                          {CountriesData.map((item,index)=>{

                          return <li onClick={()=> handleSelectCountry(item.country)} key={index} className=' cursor-pointer px-5 font-poppins text-[#646464] py-2 text-base font-medium transition-all hover:bg-[#ddd]'> {item.country} </li>

                        })}
                        </ul>
                      }
                  </div>
                                                    {/* State selection here  */}
                  <div ref={stateRef} className='w-[50%] relative'>
                    <InputBox value={selectedState} isStar={true} textArea={false} type={"text"} inputType={"State"} placeholder={"Kalimantan Timur"}/>
                    <span onClick={()=> setActiveState(!activeState)} className={` ${activeState ? "rotate-180" : "rotate-0"} transition-all cursor-pointer absolute top-[73px] right-7 text-2xl`} >
                      <ArrowDownIcon width='24' height='24'/>
                    </span>

                      {activeState &&

                       selectedCountry !== null ? 
                        <ul className='scroll-thumb absolute top-[110px] right-0 z-50  shadow h-[200px] overflow-auto  w-[200px] border border-[#ddd] bg-white rounded-[5px]'>
                          {states[0].states.map((item,index)=>{

                          return <li onClick={()=> handleSelectState(item.state)} key={index} className=' cursor-pointer px-5 font-poppins text-[#646464] py-2 text-base font-medium transition-all hover:bg-[#ddd]'> {item.state} </li>

                        })}
                        </ul>

                        :
                        <div className={` ${activeState ? "block" : "hidden"} font-poppins text-base text-red-500 font-medium absolute bottom-[-30px] left-[35px] `}>Please select a Country</div>
                      }
                  </div>
                </div>

                <div className='flex gap-x-4'>
                                                      {/* City selection here  */}
                  <div ref={cityRef} className='w-[50%] relative'>
                    <InputBox value={selectedCity} isStar={true} textArea={false} type={"text"} inputType={"City"} placeholder={"Samarinda"}/>
                    <span onClick={()=> setActiveCity(!activeCity)} className={`${ activeCity ? "rotate-180" : "rotate-0"} transition-all cursor-pointer absolute top-[73px] right-7 text-2xl`} >
                      <ArrowDownIcon width='24' height='24'/>
                    </span>
                      {activeCity &&
                        selectedState !== null ?
                        <ul className='scroll-thumb absolute top-[110px] right-0 z-50  shadow h-[200px] overflow-auto  w-[200px] border border-[#ddd] bg-white rounded-[5px]'>
                          {cities[0].cities.map((item,index)=>{

                          return <li onClick={()=> handleSelectCity(item)} key={index} className=' cursor-pointer px-5 font-poppins text-[#646464] py-2 text-base font-medium transition-all hover:bg-[#ddd]'> {item} </li>

                        })}
                        </ul>
                        :
                        <div className={` ${activeCity ? "block" : "hidden"} font-poppins text-base text-red-500 font-medium absolute bottom-[-30px] left-[35px] `}>Please select a State</div>
                      }
                  </div>
                  <div className='w-[50%]'>
                    <InputBox isStar={false} textArea={false} type={"text"} inputType={"ZIP Code"} placeholder={"555555"}/>
                  </div>
                </div>

                <div className='w-[100%]'>
                  <InputBox isStar={false} isContact={false} textArea={true} type={"text"} inputType={"Order Notes"} placeholder={"Enter your order notes ..."}/>
                </div>
              </div>
            </div>
    </div>
  )
}

export default BillingDetails