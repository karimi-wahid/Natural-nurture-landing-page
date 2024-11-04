import React from 'react'
import ProductCategory from '../components/ProductCategory'
import { bathBody } from '../constants/Products'

const BathBody = () => {
  return (
    <div>
      <ProductCategory categoryName={"Bath & Body"} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.'} products={bathBody}/>
    </div>
  )
}

export default BathBody