import React from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearCart, removeFromCart, updateQuantityCart } from '../redux/sliceCart'


const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cartItem} = useSelector((item) => item.name)
    const totalPrice = useSelector(item => item.name.price)
    const quantity = useSelector(item => item.name.quantity)

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const handleUpdateQuantity = (itemId, newQuantity) => {
        dispatch(updateQuantityCart({id: itemId, quantity:newQuantity}))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    
  return (
    <div className='w-full grid place-items-center my-10 pb-5 mb-20'>
        {
            quantity >= 1 ? <button onClick={() => navigate(-1)}
            className='bg-[#7e8427] text-white px-3 py-2'>Go back</button>
            : <button onClick={() => navigate('/product-category/bathBody')}
            className='bg-[#7e8427] text-white px-3 py-2'>Go Shop</button>
        }
            
        {quantity == 1 && (
        <div className='w-[50%] flex items-center mt-10 shadow-md pb-10'>
            <ul className='w-full'>
                {cartItem.map((item, index) => (
                <li key={index} className='w-[100%] py-3 grid grid-cols-4 place-items-center '>
                    <img src={item.link} alt=""
                    className='w-[70px] h-[70px] rounded-full' />
                    <div>
                    <p className='text-[14px] font-semibold'>{item.title}</p>
                    <p className='text-[14px] text-neutral-500'>${item.newPrice}</p>
                    </div>
                    <input
                    className='border border-neutral-500 w-10 h-5 outline-none pl-3 text-[12px]' 
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    />
                    <button
                    className='w-8 h-8 text-2xl flex items-center justify-center text-[#7e8427] hover:bg-slate-200 rounded-full '
                    onClick={() =>handleRemoveFromCart(item.id)}
                    ><MdOutlineDeleteForever /></button>

                </li>
                ))}
                <div>
                <li className='w-full flex justify-around items-center my-5 py-3 border-y border-neutral-300'><span className='font-[400]'>subTotal</span> <span>${totalPrice}</span></li>
                <li className='flex justify-around items-center flex-wrap'>
                <button 
                className='px-3 py-2 bg-[#7e8427] mt-3 lg:w-[40%] text-white hover:bg-white hover:text-black hover:ring-[#7e8427] duration-200'
                onClick={() => handleClearCart()}>Remove All</button>
                
                <button
                className='px-3 py-2 bg-[#7e8427] mt-3 lg:w-[40%] text-white hover:bg-white hover:text-black hover:ring-[#7e8427] duration-200'
                >
                    <Link to='/payment/checkout'>Checkout</Link>
                    </button>
                
                </li>
                </div>
            </ul>
        </div>
        )}
    </div>
  )
}

export default Cart