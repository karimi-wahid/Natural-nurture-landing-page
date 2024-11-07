import BtnWhite from "./BtnWhite";

const Hero = () => {
  return (
    <div className="flex justify-end items-center -mt-10 w-full h-screen hero pr-10">
      <div className="text-end text-white space-y-10 w-full">
        <h1 className="text-xl font-[700] w-full text-end">New Arrival</h1>
        <h1 className="text-2xl md:text-5xl font-[600] text-end w-full">
          Nourish delicate skin & <br /> hair package
        </h1>

        <p className="font-[300]  my-5 w-full text-end">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <br className="block md:hidden" />
          adipisicing elit, <br className="hidden md:block" /> sed do eiusmod
          tempor incididunt{" "}
        </p>
        <BtnWhite btnText={"Shop Now"} link="/product-category/bathBody"/>
      </div>
    </div>
  );
};

export default Hero;
