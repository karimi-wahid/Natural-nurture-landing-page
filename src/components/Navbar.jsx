
import {navItems} from '../constants/index'
import { Link } from 'react-router-dom'
import { IoMdClose, IoIosMenu, IoIosCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useState } from 'react'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const mobileDrawerToggle = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
   
  return (
    <nav className='py-3 backdrop-blur-lg bg-white '>
        <div className=' container px-4 mx-auto relative text-sm'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-shrink-0'>
                <img width="145" height="60" src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-regular-free-img.png" class="custom-logo" alt="Beauty Products Store" decoding="async" srcset="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-regular-free-img.png 1x, https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-retina-free-img.png 2x" />
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) =>{
                        return <li key={index} className='hover:border-b border-green-700'>
                            <Link to={item.href}>{item.label}</Link>
                        </li>
                    })
                    }
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <Link to='/login'>
                    <FaUser size={30} />
                    </Link>
                    
                    <Link to='/'>
                    <IoIosCart  size={30}/>
                    </Link>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={mobileDrawerToggle} className='text-[#7e8427]'>
                        {mobileDrawerOpen ? <IoMdClose  size={40}/> : <IoIosMenu size={40}/>}
                    </button>
                </div>
            </div>
            {
                mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => {
                               return <li key={index} className='py-3 border-b border-[#7e8427]'>
                                    {item.label}
                                </li>
                            })}
                        </ul>
                        <div className="flex space-x-10">
                        <Link to='/login'>
                    <FaUser size={30} />
                    </Link>
                    
                    <Link to='/'>
                    <IoIosCart  size={30}/>
                    </Link>
                        </div>
                    </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar