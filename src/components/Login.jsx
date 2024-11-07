import React, { useState } from "react";
import Button from "./Button";
import { userSchema } from "../auth/LoginForm";

const Login = ({ setAuthType }) => {
  const [userDetail, setUserDetail] = useState({
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
      // all userDetail is here
      // console.log(userDetail)
    } else {
      window.alert("Please fill everything correctly");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-between items-center flex-col w-[60%] space-y-5 my-10 shadow-md py-8">
        <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
        <input
          type="email"
          className="w-[60%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
          placeholder="Enter your email..."
          name="email"
          required
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="w-[60%] py-2 px-2 outline-none focus:ring-1 focus:ring-blue-400 rounded-md  border-neutral-400 border"
          placeholder="Enter your password..."
          name="password"
          required
          onChange={handleInputChange}
        />
        <Button btnText={"Login"} type={"submit"} />
        <p>
          don't have any account?{" "}
          <button
            className="text-blue-500 cursor-pointer"
            onClick={() => setAuthType("signUp")}>
            create account
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
