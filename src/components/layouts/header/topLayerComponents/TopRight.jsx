import { useEffect, useRef, useState } from 'react'
import { IoLogoInstagram } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiTwitterFill } from 'react-icons/ri'
import { TiSocialFacebook } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import i18n from '../../../../i18n'
import FacebookIcon from '../../../icons/FacebookIcon'
import TwitterIcon from '../../../icons/TwitterIcon'
import InstagramIcon from '../../../icons/InstagramIcon'
const TopRight = () => {

    let [selected,setSelected] = useState(null)
    let [isOpen,setIsOpen] = useState(false)
    let dropdownRef = useRef(null)
    // let [selectedFlag,setSelectedFlag] = useState('https://flagcdn.com/w40/us.png')
    
    const countries = [
        { name: 'English', code: 'en', flag: 'https://flagcdn.com/w40/us.png' },
        { name: 'Bangali', code: 'bd', flag: 'https://flagcdn.com/w40/bd.png' },
        { name: 'Arabic', code: 'sa', flag: 'https://flagcdn.com/w40/sa.png' },
        { name: 'Australia', code: 'AU', flag: 'https://flagcdn.com/w40/au.png' },
        { name: 'Germany', code: 'DE', flag: 'https://flagcdn.com/w40/de.png' },
        { name: 'France', code: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
      ]

      
    let handleSelect = (country)=>{
      setSelected(country)
      i18n.changeLanguage(country.code)
      setIsOpen(false)
    }

    useEffect(()=>{

      let handleDropDown = ()=>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false)
        }}

      document.addEventListener('click', handleDropDown)

      return ()=>{
        document.removeEventListener('click',handleDropDown)
      }

    },[])



  return (
    <div className=' px-2 sm:px-0 uppercase flex items-center justify-end relative gap-x-[40px]  sm:gap-x-[50px] text-[#303030] text-sm font-normal leading-5 before:absolute before:left-[66%] sm:before:left-[65%] before:h-5 sm:before:h-8 before:w-[1px] before:bg-[#CBCBCB] after:absolute after:left-[24%]  sm:after:left-[20%] after:h-5 sm:after:h-8 after:w-[1px] after:bg-[#CBCBCB]'>
      <div>
        <select name="currency" className=' outline-hidden w-[62px]' >
          <option value="USD">USD</option>
          <option value="BDT">BDT</option>
          <option value="EUR">EUR </option>
          <option value="JPY">JPY </option>
          <option value="INR ">INR </option>
        </select>
      </div>
      <div className=' flex items-center justify-center whitespace-nowrap'>

        {/* <img src={selectedFlag} alt="Flag" className=' w-6 h-4 mt-[3px] mr-0.5' /> */}
        <select className=' hidden w-full outline-hidden cursor-pointer whitespace-nowrap overflow-ellipsis '
        name="country" 
        value={selected?.code}
        onChange={(e)=>{          
          let country = countries.find((item)=> item.code === e.target.value)
          setSelectedFlag(country.flag)
          setSelected(country)
        }}
        >
          {countries.map((item,index)=>{   
              return <option key={index} value={item.code}>{item.name}</option>
          })}
        </select>

        {/* custom dropdown */}

          <div 
          className=' relative cursor-pointer flex items-center'
          ref={dropdownRef}
          onClick={()=>  setIsOpen(!isOpen)}
          >
            {selected ?
            <>
              <img src={selected.flag} alt="" className=' scale-65'/>
              <span >{selected.name}</span>
              <MdKeyboardArrowDown className={`${isOpen ? `rotate-180` : `rotate-0`} transition-all ml-2 h-6 w-6`} />
            </>
            :
            
            <div className=' flex items-center'>
              <img src={countries[0].flag} alt="" className='scale-65'/>
              <span> {countries[0].name}</span>
              <MdKeyboardArrowDown className={`${isOpen ? `rotate-180` : `rotate-0`} transition-all ml-2 h-6 w-6`} />
            </div> 
            }

            {isOpen &&
            <ul className=' absolute border border-[#CBCBCB] rounded-[5px] overflow-hidden w-[210px] top-10 left-[-20px] bg-white shadow-xl z-50 font-montserrat text-[#303030] font-semibold text-sm'>
              {countries.map((country ,index)=>{

                  return <li key={index}
                            className=' flex items-center text-sm py-2.5 px-3 gap-1 border-b border-[#CBCBCB] cursor-pointer last:border-hidden hover:bg-[#ccc]'
                            onClick={()=> handleSelect(country)}
                            >
                          <img src={country.flag} alt="flag" className=' scale-65'/>
                          {country.name}
                        </li>

              })
            }
            </ul>
            }
            </div>

      </div>
      <div className=' flex items-center justify-center gap-6'>
          <Link>
             <FacebookIcon/>
          </Link>
          <Link>
             <TwitterIcon/>
          </Link>
          <Link>
             <InstagramIcon/>
          </Link>
      </div>
    </div>
  )
}

export default TopRight