import React from "react";

const ChooseProduct = () => {
  return (
    <section
      className="w-full h-screen bg-center bg-cover flex justify-center items-center flex-col bg-slate-200 my-10"
      style={{
        backgroundImage: `url('https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/bg-03-free-img.png')`,
      }}>
      <div className="w-2/3 space-y-5">
        <h1 className="text-4xl font-[600]">
          You deserve a little gift <br /> that says "love"
        </h1>
        <p className="text-neutral-500 w-2/4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="px-3 py-2 text-white bg-[#7e8427] hover:bg-white hover:text-black duration-500 ">
          Choose Your Products
        </button>
      </div>
    </section>
  );
};

export default ChooseProduct;