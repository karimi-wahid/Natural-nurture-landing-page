import React from 'react'

const Button = ({btnText, type}) => {
  return (
    <button type={type} className="px-3 py-2 bg-[#7e8427] mt-3 w-[30%] text-white hover:bg-white hover:text-black hover:ring-[#7e8427] duration-200">{btnText}</button>
  )
}

export default Button