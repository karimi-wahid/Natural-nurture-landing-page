import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from './Button';
import { userSchema } from '../auth/CheckOutForm';

const CashOutForm = () => {
  const {cartItem} = useSelector((item) => item.name)
    const totalPrice = useSelector(item => item.name.price)
    const quantity = useSelector(item => item.name.quantity)
    
    const [checkOutDetail, setCheckOutDetail] = useState({
        email: '',
        firstName: '',
        lastName: '',
        companyName: '',
        countryName: '',
        houseAdd: '',
        apartmentAdd: '',
        cityName: '',
        stateName: '',
        postZipCode: '',
        phone: '',
        notes: '',
        paymentMethod: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCheckOutDetail((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const isValid = await userSchema.isValid(checkOutDetail);
        if(isValid){
          //  all userDetail is here
        // console.log(checkOutDetail)

        }else{
          window.alert('Please fill everything correctly')
        }  
    };

  return (
    <section className="w-full flex justify-center items-center flex-col bg-neutral-100 pt-5">
      <div className="flex justify-center items-center flex-col  h-[30vh]">
        <div>
          <img
            width="145"
            height="60"
            src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-regular-free-img.png"
            className="custom-logo"
            alt="Beauty Products Store"
            decoding="async"
            srcSet="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-regular-free-img.png 1x, https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-retina-free-img.png 2x"
          />
        </div>
        <br />
        <h1 className="text-2xl font-semibold">You're almost there</h1>
        <p className=" text-neutral-500 text-center">
          Adipiscing bibendum id a condimentum risus nec sed malesuada ut etiam
          egestas.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 bg-white w-[97%] shadow-md px-5 my-20 py-10">
        <div className=" rounded-lg lg:col-span-2">
          <form action="" className="w-full p-5" onSubmit={handleFormSubmit}>
            <div className="w-[95%]">
            <p className="text-xl font-semibold mb-3">Costumer Information</p>
            <input
              type="email"
              placeholder="Email Address *"
              required
              name="email"
              className="w-[95%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md border border-neutral-400"
              onChange={handleInputChange}  
            />
            </div>

            <div className="mt-10 w-[95%]">
              <p className="text-xl font-semibold mb-3">Billing Details</p>
              <div className="grid grid-cols-2 gap-3 mb-5 w-[95%]">
                <input
                  type="text"
                  placeholder="FirstName *"
                  name="firstName"
                  required
                  className="py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
                  onChange={handleInputChange}  
                />
                <input
                  type="text"
                  placeholder="LastName *"
                  name="lastName"
                  required
                  className="py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                name="companyName"
                className="w-[95%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md border border-neutral-400 mb-3"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Country Name *"
                name="countryName"
                required
                className="w-[95%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md border border-neutral-400 mb-3"
                onChange={handleInputChange}
              />
              <div className="grid grid-cols-2 mb-5 w-[95%] gap-3">
                <input
                  type="text"
                  placeholder="House number and street name *"
                  name="houseAdd"
                  required
                  className="py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, unit, etc, (optional)"
                  name="apartmentAdd"
                  className="py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-3 mb-5 w-[95%] gap-3">
                <input
                  type="text"
                  placeholder="Town / City *"
                  name="cityName"
                  required
                  className="py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="State *"
                  name="stateName"
                  required
                  className="py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Postcode / ZIP *"
                  name="postZipCode"
                  required
                  className="py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
                  onChange={handleInputChange}
                />
              </div>
              <input type="text" placeholder="Phone *" name="phone" required
              onChange={handleInputChange}
              className="w-[95%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md border border-neutral-400" />

              <div className="mt-5 w-[95%]">
                <p className="text-xl font-semibold mb-3">Additional Information</p>
                <input
                  type="text"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  name="notes"
                  className="w-full py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md border-neutral-400 border"
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-5 w-[95%]">
                <p className="text-xl font-semibold mb-3">Payment</p>
                <select name="paymentMethod" id=""
                onChange={handleInputChange}
                className="outline-none border border-neutral-400 px-2 py-1 text-[14px] text-neutral-400">
                  <option value="Direct-bank-transfer">
                    Direct bank transfer
                  </option>
                  <option value="Cash-on-delivery">Cash on delivery</option>
                </select>
              </div>

            { quantity >= 1 ? 
              <Button btnText={'Submit'} type={'submit'} />
            : <Button btnText={'Add 1 Product atLeast'} />}
            </div>
          </form>
        </div>
        <div className="rounded-lg my-20 ">
            <p className="text-xl font-semibold mb-5">Your order</p>
            <div className="border-neutral-400 border w-full">
                {cartItem.map((item, index) => (
                <p
                key={index}
                className="flex justify-between items-center text-[12px] text-neutral-500 border-b border-neutral-400 py-5 px-3">
                    <img src={item.link} alt={item.title}
                    className="w-[50px] h-[50px]" />
                    <h1>{item.title}</h1>
                    <p>*{quantity}</p>
                    <p>${item.newPrice}</p>
                </p>
                ))}

                <p className="text-xl font-[500] py-5 px-2 flex justify-between items-center">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CashOutForm