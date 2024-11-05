import React from 'react'

const BtnWhite = ({btnText}) => {
  return (
    <button className="px-3 py-2 bg-white text-black hover:bg-[#7e8427] duration-200 hover:text-white">
          {btnText}
        </button>
  )
}

export default BtnWhite