import React from "react";
import { Link } from "react-router-dom";
import { categories, contactUs, usefulLinks } from "../constants";

const Footer = () => {
  return (
    <section className="w-full mt-20 pl-10 pb-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 pr-5 pb-10 mt-5">
        <div className="space-y-5">
          <h1 className="text-2xl font-[600]">Have questions?</h1>
          <button className="px-3 py-2 bg-[#7e8427] text-white hover:bg-white hover:text-black duration-200">
            Get In Touch
          </button>
        </div>
        <div className="space-y-5">
          <h1 className="text-xl font-[600]">Track Your Order</h1>
          <p className="text-neutral-600 md:w-[80%] mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </p>
          <Link to="/">
            <button className="text-[#7e8427] mt-2">Track Your Order</button>
          </Link>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-[600]">Return & Refund</h1>
          <p className="text-neutral-600 md:w-[80%] mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </p>
          <Link to="/">
            <button className="text-[#7e8427] mt-2">Read More</button>
          </Link>
        </div>
      </div>

      <div className="w-full pt-10 pb-5 border-t border-neutral-300 grid grid-cols-1 lg:grid-cols-4 mt-5">
        <div>
          <h1 className="text-xl font-[500] pb-2">UseFul Links</h1>
          <ul className="text-neutral-700 space-y-1">
            {usefulLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-[500] pb-2">UseFul Links</h1>
          <ul className="text-neutral-700 space-y-1 w-full">
            {categories.map((item, index) => (
              <li key={index} className="hover:text-[#7e8427]">
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-[500] pb-2">UseFul Links</h1>
          <ul className="text-neutral-700 space-y-1">
            {contactUs.map((item, index) => (
              <li key={index} className="hover:text-[#7e8427]">
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 text-start">
          <h1 className="text-xl font-[500] pb-2">Subscribe</h1>
          <input
            type="text"
            placeholder="Enter your email..."
            className="outline-none border border-neutral-400 py-2 px-5 block"
          />

          <button className="px-3 py-2 bg-[#7e8427] hover:bg-white hover:text-black text-white">
            Submit
          </button>
        </div>
      </div>
      <div className="border-t border-neutral-300 py-5">
        <p className="text-neutral-400">Copyright © 2024 Beauty Products Store</p>
      </div>
    </section>
  );
};

export default Footer;
