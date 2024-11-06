
import {navItems} from '../constants/index'
import { Link, NavLink} from 'react-router-dom'
import { IoMdClose, IoIosMenu, IoIosCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useState } from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const quantity = useSelector((item) => item.name.quantity)
    const mobileDrawerToggle = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
   
  return (
    <nav className='py-3 backdrop-blur-lg bg-white '>
        <div className=' container px-4 mx-auto relative text-sm'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-shrink-0'>
                <img width="145" height="60" src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-regular-free-img.png" className="custom-logo" alt="Beauty Products Store" decoding="async" srcSet="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-regular-free-img.png 1x, https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-retina-free-img.png 2x" />
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) =>{
                        return <li key={index}>
                            <NavLink
                            className={({ isActive }) => 
                                `hover:text-[#7e8427] ${isActive ? 'text-[#7e8427]' : 'text-gray-700'}`
                            }
                            to={item.link}>{item.label}</NavLink>
                        </li>
                    })
                    }
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <Link to='/login'>
                    <FaUser size={20} className='text-[#7e8427]' />
                    </Link>
                    
                    <Link to='/cart'>
                    <IoIosCart  size={25} className='text-[#7e8427] relative'/>
                    <h1 className='absolute top-1 right-0 text-[12px] bg-[#7e8427] text-white flex items-center justify-center p-2 w-5 h-5 rounded-full'>{quantity}</h1>
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
                    <div className='fixed right-0 z-50 mb-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => {
                               return <li
                               key={index} className='py-3 cursor-pointer hover:border-b border-[#7e8427]'>
                                <Link to={item.link}>
                                    {item.label}
                                </Link>    
                                </li>
                            })}
                        </ul>
                        <div className="flex space-x-10 mt-5">
                        <Link to='/login'>
                    <FaUser size={30} />
                    </Link>
                    
                    <Link to='/cart'>
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