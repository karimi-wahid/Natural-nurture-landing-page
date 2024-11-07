import React from "react";
import { galleryProducts } from "../constants";
import BtnWhite from "./BtnWhite";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  return (
    <section className="w-full flex justify-evenly items-center flex-wrap my-10 space-y-5">
      {galleryProducts.map((item, index) => (
        <div
          key={index}
          className="w-[400px] h-[400px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${item.bgLink})` }}>
          <div className="w-full h-full flex items-center justify-center flex-col space-y-5 bg-black bg-opacity-30">
            <h1 className="text-white font-[600] z-20">{item.label}</h1>
            <h2 className="text-4xl font-[600] text-white">{item.type}</h2>
            <BtnWhite btnText={"Shop Now"} link={item.link} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;
