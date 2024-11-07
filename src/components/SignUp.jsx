import React, { useState } from "react";
import Button from "./Button";
import { userSchema } from "../auth/SignUpForm";

const SignUp = ({ setAuthType }) => {
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const isValid = await userSchema.isValid(userDetail);
    if (isValid) {
      //  all userDetail is here
      //console.log(userDetail)
    } else {
      window.alert("Please fill everything correctly");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-between items-center flex-col w-[60%] space-y-5 my-10 shadow-md py-8">
        <h1 className="text-2xl font-semibold mb-4">Sign Up Form</h1>
        <input
          type="text"
          className="w-[60%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
          placeholder="Enter your firstName..."
          name="firstName"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="w-[60%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
          placeholder="Enter your lastName..."
          name="lastName"
          required
          onChange={handleInputChange}
        />
        <input
          type="email"
          className="w-[60%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
          placeholder="Enter your email address..."
          name="email"
          required
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="w-[60%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
          placeholder="write your password here..."
          name="password"
          required
          onChange={handleInputChange}
        />
        <Button btnText={"Create Account"} type={"submit"} />
        <p>
          already have account?{" "}
          <button
            className="text-blue-500 cursor-pointer"
            onClick={() => setAuthType("logIn")}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
