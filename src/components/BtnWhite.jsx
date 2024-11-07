import React from 'react'
import { Link } from 'react-router-dom'

const BtnWhite = ({btnText, link}) => {
  return (
    <button className="px-3 py-2 bg-white text-black hover:bg-[#7e8427] duration-200 hover:text-white">
        <Link to={link}>
          {btnText}
        </Link>  
        </button>
  )
}

export default BtnWhite