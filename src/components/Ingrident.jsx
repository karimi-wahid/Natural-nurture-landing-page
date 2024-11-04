import React from "react";
import { ingIcon } from "../constants";

const Ingrident = () => {
  return (
    <div className="flex justify-between items-center flex-wrap w-[90%] py-5 space-y-5 my-10  border-b border-neutral-300">
      <div>
        <h1 className="font-[600] text-xl">
          We use only natural ingredients for our <br /> products, which are
          good for you and the <br /> environment too.
        </h1>
      </div>
      <div>
        <ul className="flex  justify-between items-center gap-10">
          {ingIcon.map((item, index) => (
            <li className="w-[100px] text-center">
              <img
                decoding="async"
                width="82"
                height="92"
                src={item.link}
                class="attachment-full size-full wp-image-44"
                alt={item.label}
              />
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ingrident;
