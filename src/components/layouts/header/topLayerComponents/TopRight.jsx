import { useState } from 'react'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterFill } from 'react-icons/ri'
import { TiSocialFacebook } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const TopRight = () => {

    let [selected,setSelected] = useState(null)
    // let [isOpen,setIsOpen] = useState(false)
    let [selectedFlag,setSelectedFlag] = useState('https://flagcdn.com/w40/us.png')
 
  const countries = [
        { name: 'United States', code: 'US', flag: 'https://flagcdn.com/w40/us.png' },
        { name: 'Canada', code: 'CA', flag: 'https://flagcdn.com/w40/ca.png' },
        { name: 'United Kingdom', code: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
        { name: 'Australia', code: 'AU', flag: 'https://flagcdn.com/w40/au.png' },
        { name: 'Germany', code: 'DE', flag: 'https://flagcdn.com/w40/de.png' },
        { name: 'France', code: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
    ]

    // let handleSelect = (country)=>{
    //   setSelected(country)
    //   setIsOpen(false)

    // }

  return (
    <div className=' uppercase flex items-center justify-end relative gap-[50px] text-[#303030] text-sm font-normal leading-5 before:absolute before:left-[65%] before:h-8 before:w-[1px] before:bg-[#CBCBCB] after:absolute after:left-[20%] after:h-8 after:w-[1px] after:bg-[#CBCBCB]'>
      <div>
        <select name="currency" className=' outline-hidden' >
          <option value="USD">USD</option>
          <option value="BDT">BDT</option>
          <option value="EUR">EUR </option>
          <option value="JPY">JPY </option>
          <option value="INR ">INR </option>
        </select>
      </div>
      <div className=' flex w-[112px]'>

        <img src={selectedFlag} alt="Flag" className=' w-6 h-4 mt-[3px] mr-0.5' />
        <select className=' w-full outline-hidden cursor-pointer whitespace-nowrap overflow-ellipsis '
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

          {/* <div 
          className=' relative w-[130] cursor-pointer flex gap-2 h-[20px]'
          onClick={()=> setIsOpen(!isOpen)}
          >
            {selected ?
            <>
              <img src={selected.flag} alt="" className=' w-5 h-3 mt-1'/>
              <span>{selected.name}</span>
            </>
            :
            "select a country"
            }

          </div>
            {isOpen &&
            <ul className=' w-[50%] translate-x-[-15px] absolute bg-[#fff] shadow box-border mt-5 rounded-[10px]'>
              {countries.map((country ,index)=>{

                  return <li key={index}
                            className=' flex mt-3 flex-wrap gap-2 p-1 cursor-pointer'
                            onClick={()=> handleSelect(country)}
                            >
                          {country.name}
                        </li>

              })
            }
            </ul>
            } */}

      </div>
      <div className=' flex items-center justify-center gap-6'>
          <Link>
          <TiSocialFacebook className=' h-6 w-6'/>
          </Link>
          <Link>
          <RiTwitterFill className=' h-5 w-5'/>
          </Link>
          <Link>
          <IoLogoInstagram className=' h-5 w-5'/>
          </Link>
      </div>
    </div>
  )
}

export default TopRight